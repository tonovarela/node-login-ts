export class PaginationDTO {

    private constructor(
        public page: number,
        public limit: number
    ) {

    }

    static create(page: number = 1, limit: number = 10): [string?, PaginationDTO?] {
        if (isNaN(page) || isNaN(limit)) return ['Las paginas y los limites deben ser numeros'];
        if (page <= 0) return ['La pagina debe ser mayor o igual a 1'];
        if (limit <= 0) return ['El limite debe ser mayor o igual a 1'];

        return [undefined, new PaginationDTO(page, limit)];
    }


}