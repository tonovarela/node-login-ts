export class CreateCategoryDTO {
    private constructor(
        public nombre: string,
        public disponible: boolean
    ) {}

    static create( object:{[key:string]:any}): [string?,CreateCategoryDTO?] {
        const  {nombre,disponible=false} = object;
        let availableBool = false;
        if (!nombre ) {
            return ["El campo nombre es requerido"];
        }
        if (typeof(disponible)!== "boolean") {
            availableBool = (disponible === "true");
        }
        return [undefined, new CreateCategoryDTO(nombre,availableBool)];
    }
}