import { Router } from 'express';
import { FileUploadContoller } from './controller';
import { FileUploadService } from '../services/file-upload.service';
import { containsFile } from '../middleware/verifyFiles.middleware';










export class FileUpLoadRoutes {


  static get routes(): Router {
    const router = Router();
    const service = new FileUploadService();
    const controller = new FileUploadContoller(service);
    router.use(containsFile);
    // // // Definir las rutas
    router.post('/single/:type',controller.upload);
    router.post('/multiple/:type', controller.uploadMultiple);

    return router;
  }

}
