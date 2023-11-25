import { Router } from 'express';
import { AuthContoller } from './controller';
import { AuthService } from './services/auth.service';




export class AuthRoutes {


  static get routes(): Router {

    const router = Router();
    const authService = new AuthService();
    const controller   = new AuthContoller(authService);
    
    // Definir las rutas
     router.post('/login', controller.loginUser);
     router.post('/register', controller.register );
     router.get('/validate-email/:token', controller.validateEmail );
    return router;
  }


}

