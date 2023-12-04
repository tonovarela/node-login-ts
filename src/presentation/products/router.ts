import { Router } from 'express';
import { ProductContoller } from './controller';
import { ProductService } from '../services';
import { AuthMiddleware } from '../middleware/auth.middleware';







export class ProductRoutes {


  static get routes(): Router {

    const router = Router();
  
    const controller = new ProductContoller(new ProductService());
    
    // // Definir las rutas

     router.get('/', controller.list);
     router.post('/', [AuthMiddleware.validateJWT], controller.create);

    return router;
  }

}
