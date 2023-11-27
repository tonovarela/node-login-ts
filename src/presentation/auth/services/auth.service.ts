

import { bcryptAdapter, envs } from "../../../config";
import { JWTAdapter } from "../../../config/jwt.adapter";
import { UsuarioModel } from "../../../data";
import { CustomError, LoginUserDTO, RegisterUserDTO, UsuarioEntity } from "../../../domain";
import { EmailService } from "./email.service";


export class AuthService {

    constructor(private readonly emailService: EmailService) { }

    login = async (loginUserDTO: LoginUserDTO) => {

        const userDB = await UsuarioModel.findOne({ email: loginUserDTO.email });
        if (!userDB) throw CustomError.unAuthorized('Credenciales incorrectas');
        const isMatch = await bcryptAdapter.compare(loginUserDTO.password, userDB.password);
        if (!isMatch) throw CustomError.unAuthorized('Credenciales incorrectas');
        const { id } = UsuarioEntity.fromObject(userDB);
        const token = await JWTAdapter.createToken({ id });
        if (!token) {
            throw CustomError.internalServerError('No se pudo crear el token');
        }
        return { id, token };

    }

    registroUsuario = async (registerDTO: RegisterUserDTO) => {
        const existeUsuario = await UsuarioModel.findOne({ email: registerDTO.email });
        if (existeUsuario) throw CustomError.badRequest("Ya existe un usuario con ese email");
        const nuevoUsuario = new UsuarioModel(registerDTO);
        nuevoUsuario.password = bcryptAdapter.hash(registerDTO.password);
        await nuevoUsuario.save();        

        await this.sendEmailValidation(nuevoUsuario.email);
        const { password, ...rest } = UsuarioEntity.fromObject(nuevoUsuario);        
        return { user: { ...rest } };
    }

    validarEmail = async (token: string) => {
        const payload: any = await JWTAdapter.validateToken(token);
        if (payload == null) {
            throw CustomError.unAuthorized('Token no valido');
        }        
        const user = await UsuarioModel.findOne({email:payload.email});        
        if (!user){
            throw CustomError.notFound('Usuario no encontrado');
        }
        if (user.emailVerificado){
            throw CustomError.badRequest('El correo ya ha sido verificado');
        }
        user.emailVerificado=true;
        user.save();        
        return {mensaje:"Usuario validado" }
    }


    private sendEmailValidation = async (email: string) => {
        const token = await JWTAdapter.createToken({ email: email });
        if (!token) throw CustomError.internalServerError('No se pudo crear el token');
        const link = `${envs.WEBSERVICE_URL}/auth/validar-email/${token}`;
        const html = `
        <h1>Valida tu email</h1>
        <p>click en el siguiente link para validar tu email</p>
        <a href="${link}">Validar tu  email</a>
        `
        const seEnvio =await this.emailService.sendEmail({
            to: email,
            subject: 'Valida tu email',
            htmlBody: html
        })
        if (!seEnvio) throw CustomError.internalServerError('No se pudo enviar el correo');
        return true;

    }
}