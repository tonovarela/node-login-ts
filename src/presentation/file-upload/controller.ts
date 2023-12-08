import { AbstractController } from "../abstract/controller.abstract";
import { Request, Response } from 'express';
import { FileUploadService } from "../services/file-upload.service";
import { UploadedFile } from "express-fileupload";


export class FileUploadContoller extends AbstractController {
    constructor(private readonly fileUploadService: FileUploadService) {
        super();
    }

    public upload = (req: Request, res: Response) => {             
        const [file] = req.body.files as UploadedFile[];        
        this.fileUploadService
            .uploadSingle(file,`uploads/${req.body.type}`)
            .then(fileName => res.json(fileName))
            .catch(error => this.handleError(error, res));

    }

    public uploadMultiple = (req: Request, res: Response) => {                
        const files= req.body.files as UploadedFile[];    
        console.log(files);    
        this.fileUploadService
            .uploadMultiple(files,`uploads/${req.body.type}`)
            .then(fileName => res.json(fileName))
            .catch(error => this.handleError(error, res));
    }





}