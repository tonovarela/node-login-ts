import { ProductModel } from "../../data";
import { CreateProductDTO, CustomError } from "../../domain";

export class ProductService {
    
    async create(crearProductDTO: CreateProductDTO) {
       const productExists = await ProductModel.findOne({ nombre: crearProductDTO.nombre });
       if (productExists) throw CustomError.badRequest('Ya existe un producto con este nombre');

       try {
        const product = new ProductModel({...crearProductDTO })
        await product.save()
        return product;        

       }catch(error){
        throw CustomError.internalServerError(`${error}`);

       }
    }


    async list(paginationDTO: any) {
         const { page, limit } = paginationDTO;
        try {
            const [total, products] = await Promise.all([
                ProductModel.countDocuments(),
                ProductModel.find()
                    .skip((page - 1) * limit)
                    .limit(limit)
                    .populate('usuario')
                    .populate('categoria')
                    //Populate
            ])
            return {
                total,
                page,
                limit,
                next:`/api/products?page=${(page+1)}&limit=${limit}`,
                prev:(page-1)>0?`/api/products?page=${(page-1)}&limit=${limit}`:null,
                products,
            }

        } catch (error) {
            throw CustomError.internalServerError('No se pudo listar las categorias');
        }

    }
    
}