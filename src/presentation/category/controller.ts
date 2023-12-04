import { Request, Response } from 'express';
import { CreateCategoryDTO,  PaginationDTO } from '../../domain';
import { CategoryService } from '../services/category.service';
import { AbstractController } from '../abstract/controller.abstract';

export class CategoryContoller extends AbstractController {
    constructor(private readonly categoryService: CategoryService) {
        super()
    }
    public create = (req: Request, res: Response) => {
        const [error, createCategoryDTO] = CreateCategoryDTO.create(req.body);
        if (error) return res.status(400).json({ error: error });
        this.categoryService.create(createCategoryDTO!, req.body.usuario).then(newCategory => {
            return res.status(201).json(newCategory);
        }).catch(error => {
            this.handleError(error, res);
        });
    }

    public list = (req: Request, res: Response) => {

        const { page = 1, limit = 10 } = req.query;
        const [error, paginationDTO] = PaginationDTO.create(+page, +limit);
        if (error) return res.status(400).json({ error });


        this.categoryService
            .list(paginationDTO!)
            .then(categories => res.status(200).json(categories))
            .catch(error => this.handleError(error, res));

    }
}