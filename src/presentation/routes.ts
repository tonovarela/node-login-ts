import { Router } from 'express';
import { AuthRoutes } from './auth/route';
import { CategoryRoutes } from './category/router';




export class AppRoutes {


  static get routes(): Router {

    const router = Router();

    // Definir las rutas
    router.use('/api/auth', AuthRoutes.routes);
    router.use('/api/categories', CategoryRoutes.routes);



    return router;
  }


}

