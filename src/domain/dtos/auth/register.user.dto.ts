import { regularExps } from "../../../config";

export class RegisterUserDTO {
    private constructor(
       public readonly nombre: string,
       public readonly email: string,       
       public readonly password: string,       
    ){}

    static create(object: { [key: string]: any }): [string?,RegisterUserDTO?] {
        const { nombre, email, password } = object;
        if (!nombre) return ["Falta el nombre"];
        if (!email) return ["Falta el email"];
        if (!password) return ["Falta la contraseña"];        
        if (!regularExps.email.test(email)) return ["El email no es válido"];
        if (password.length < 6) return ["La contraseña debe tener al menos 6 caracteres"];
        return [undefined, new RegisterUserDTO(nombre, email, password)];                
    }
}