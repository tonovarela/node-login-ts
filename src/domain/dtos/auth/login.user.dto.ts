import { regularExps } from "../../../config";

export class LoginUserDTO {

    private constructor(
        readonly email: string,
        readonly password: string
    ) {
    }
    static create(object: { [key: string]: any }): [string?, LoginUserDTO?] {
        const { email, password } = object;
        if (!email) return ["Falta el email"];
        if (!password) return ["Falta la contraseña"];
        if (!regularExps.email.test(email)) return ["El email no es válido"];
        if (password.length < 6) return ["La contraseña debe tener al menos 6 caracteres"];
        return [undefined, new LoginUserDTO(email, password)];
    }

}