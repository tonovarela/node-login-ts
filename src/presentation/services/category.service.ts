import { CategoryModel } from "../../data";
import { CreateCategoryDTO, CustomError, PaginationDTO, UsuarioEntity } from "../../domain";

export class CategoryService {


    async create(createCategoryDTO: CreateCategoryDTO, usuario: UsuarioEntity) {
        const catetogyExists = await CategoryModel.findOne({ nombre: createCategoryDTO.nombre });
        if (catetogyExists) throw CustomError.badRequest('Ya existe una categoria con ese nombre');

        try {
            const newCategory = new CategoryModel({ ...createCategoryDTO, usuario: usuario.id });
            await newCategory.save();
            return {
                id: newCategory.id,
                nombre: newCategory.nombre,
                disponible: newCategory.disponible,
            }

        } catch (error) {
            throw CustomError.internalServerError('No se pudo crear la categoria');

        }
    }


    async list(paginationDTO: PaginationDTO) {
        const { page, limit } = paginationDTO;
        try {
            const [total, categories] = await Promise.all([
                CategoryModel.countDocuments(),
                CategoryModel.find()
                    .skip((page - 1) * limit)
                    .limit(limit)
            ])
            return {
                total,
                page,
                limit,
                next:`/api/categories?page=${(page+1)}&limit=${limit}`,
                prev:(page-1)>0?`/api/categories?page=${(page-1)}&limit=${limit}`:null,
                categories: categories.map(c => {
                    return {
                        id: c._id,
                        nombre: c.nombre,
                        disponible: c.disponible,
                    }
                })
            }


        } catch (error) {
            throw CustomError.internalServerError('No se pudo listar las categorias');
        }

    }


}