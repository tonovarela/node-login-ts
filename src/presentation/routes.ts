import { Router } from 'express';
import { AuthRoutes } from './auth/route';
import { CategoryRoutes } from './category/router';
import { ProductRoutes } from './products/router';

import { FileUpLoadRoutes } from './file-upload/router';




export class AppRoutes {


  static get routes(): Router {

    const router = Router();

    // Definir las rutas
    router.use('/api/auth', AuthRoutes.routes);
    router.use('/api/categories', CategoryRoutes.routes);
    router.use('/api/products', ProductRoutes.routes);
    router.use('/api/upload',FileUpLoadRoutes.routes);


    return router;
  }


}

