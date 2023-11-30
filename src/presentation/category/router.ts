import { Router } from 'express';
import { CategoryContoller } from './controller';
import { AuthMiddleware } from '../middleware/auth.middleware';
import { CategoryService } from '../services/category.service';






export class CategoryRoutes {


  static get routes(): Router {

    const router = Router();
    const categoryService = new CategoryService();
    const controller = new CategoryContoller(categoryService);
    // Definir las rutas

    router.get('/', controller.list);
    router.post('/', [AuthMiddleware.validateJWT], controller.create);

    return router;
  }

}
