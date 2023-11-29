import { Router } from 'express';
import { CategoryContoller } from './controller';
import { AuthMiddleware } from '../middleware/auth.middleware';






export class CategoryRoutes {


  static get routes(): Router {

    const router = Router();
    const controller = new CategoryContoller();
    // Definir las rutas

    router.get('/', controller.listar);
    router.post('/', [AuthMiddleware.validateJWT], controller.create);

    return router;
  }

}
