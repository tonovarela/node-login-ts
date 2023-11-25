import { CustomError } from "../errors/error-custom";

export class UsuarioEntity {

    constructor(
        public id: string,
        public nombre: string,
        public email: string,
        public emailVerificado: boolean,
        public password: string,
        public rol: string[],
        public img?: string,
    ) {

    }

    static fromObject(obj: { [key: string]: any }): UsuarioEntity {
        const { id, _id, nombre, email, emailVerificado, password, rol, img } = obj;
        if (!id && !_id) throw CustomError.badRequest('El id es requerido');        
        if (!nombre) throw CustomError.badRequest('El nombre es requerido');    
        if (!email) throw CustomError.badRequest('El email es requerido');        
        if (emailVerificado === undefined) throw CustomError.badRequest('El emailVerificado es requerido');        
        if (!password) throw CustomError.badRequest('La contraseña es requerida');        
        if (!rol) throw CustomError.badRequest('El rol es requerido');
        
        return new UsuarioEntity(id,nombre, email, emailVerificado, password, rol, img);
    }

}