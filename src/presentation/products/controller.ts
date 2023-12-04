import { CreateProductDTO, PaginationDTO } from "../../domain";
import { AbstractController } from "../abstract/controller.abstract";
import { ProductService } from "../services";

import { Request,Response } from 'express';
export class ProductContoller extends AbstractController {    
    constructor(private productService: ProductService) {
        super();
     }

    public create = (req: Request, res: Response) => {                
        const [error, crearProductDTO] = CreateProductDTO.create({...req.body,usuario:req.body.usuario.id});
        if (error) return res.status(400).json({ error: error });
        console.log(crearProductDTO);
        this.productService.create(crearProductDTO!).then(newProduct => {
            return res.status(201).json(newProduct);
        }).catch(error => {
            this.handleError(error, res);
        });    
    }

    public list = (req: Request, res: Response) => {
        const {page=1,limit=10} =req.query;
        const [error,paginationDTO] = PaginationDTO.create(+page, +limit);
        if (error) return res.status(400).json({ error });        
        this.productService.list(paginationDTO!)
             .then(produtcs => res.status(200).json(produtcs))
             .catch(error => this.handleError(error, res));

    }


}