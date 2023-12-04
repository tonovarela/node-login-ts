import { Validators } from "../../../config";

export class CreateProductDTO {


    private  constructor(
        public readonly  nombre: string,        
        public readonly disponible: boolean,
        public readonly precio: number,
        public readonly descripcion: string,
        public readonly categoria: string,
        public readonly usuario: string    
    ){}

    static create  (object: { [key: string]: any }): [string?, CreateProductDTO?] {
        const { nombre, disponible, precio, descripcion, categoria, usuario } = object;
        if (!nombre) return ["Falta el nombre"];            
        if (!categoria) return ["Falta la categoria"];
        if (!usuario) return ["Falta el usuario"];
        if (!Validators.isMongoId(categoria)) return ["La categoria debe ser un ObjectId"];
        if (!Validators.isMongoId(usuario)) return ["El usuario debe ser un ObjectId"];
        return [undefined, new CreateProductDTO(nombre, !!disponible, precio, descripcion, categoria, usuario)];
    }
}