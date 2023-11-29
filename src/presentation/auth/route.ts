import { Router } from 'express';
import { AuthContoller } from './controller';
import { AuthService, EmailService } from '../services';
import { envs } from '../../config';





export class AuthRoutes {


  static get routes(): Router {

    const router = Router();
    const emailService = new EmailService({
      mailerService: envs.MAILER_SERVICE,
      mailerEmail: envs.MAILER_EMAIL,
      senderEmailPassword: envs.MAILER_SECRET_KEY
    });
    const authService = new AuthService(emailService);
    const controller   = new AuthContoller(authService);
    
    // Definir las rutas
     router.post('/login', controller.loginUser);
     router.post('/register', controller.register );
     router.get('/validar-email/:token', controller.validateEmail );
    return router;
  }


}

