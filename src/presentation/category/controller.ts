import { Request, Response } from 'express';
import { CreateCategoryDTO, CustomError, UsuarioEntity } from '../../domain';






export class CategoryContoller {
    constructor() { }

    private handleError = (error: unknown, res: Response) => {
        if (error instanceof CustomError)
            return res.status(error.status).json({ error: error.mensaje });

        return res.status(500).json({ "error": "Internal server error" });
    }


    public create = async (req: Request, res: Response) => {

        const [error, createCategoryDTO] = CreateCategoryDTO.create(req.body);
        if (error) return res.status(400).json({ error: error });
        
        return res.status(200).json({ "mensaje": createCategoryDTO});
    }

    public listar = async (req: Request, res: Response) => {
        return res.status(200).json({ "mensaje": "Listado de categorias" });
    }
}