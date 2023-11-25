

import { bcryptAdapter } from "../../../config";
import { JWTAdapter } from "../../../config/jwt.adapter";
import { UsuarioModel } from "../../../data";
import { CustomError, LoginUserDTO, RegisterUserDTO, UsuarioEntity } from "../../../domain";


export class AuthService {

    constructor() { }

    login = async (loginUserDTO: LoginUserDTO) => {

        const userDB = await UsuarioModel.findOne({ email: loginUserDTO.email });
        if (!userDB) throw CustomError.unAuthorized('Credenciales incorrectas');
        const isMatch = await bcryptAdapter.compare(loginUserDTO.password, userDB.password);
        if (!isMatch) throw CustomError.unAuthorized('Credenciales incorrectas');
        const { password, ...rest } = UsuarioEntity.fromObject(userDB);
        const token = await JWTAdapter.createToken({ ...rest });
        return { user: { ...rest }, token };

    }

    registroUsuario = async (registerDTO: RegisterUserDTO) => {

        const existeUsuario = await UsuarioModel.findOne({ email: registerDTO.email });
        if (existeUsuario) throw CustomError.badRequest("Ya existe un usuario con ese email");

        const nuevoUsuario = new UsuarioModel(registerDTO);
        nuevoUsuario.password = bcryptAdapter.hash(registerDTO.password);
        await nuevoUsuario.save();
        //Cifrar la contraseña
        const { password, ...rest } = UsuarioEntity.fromObject(nuevoUsuario);
        const token = await JWTAdapter.createToken({ ...rest });
        return { user: { ...rest }, token };


        // Email de confirmacion



    }

    validarToken(token:string){
        const payload = JWTAdapter.validateToken(token);
        console.log(payload);

    }
}