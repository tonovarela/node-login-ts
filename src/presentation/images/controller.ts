import {Response,Request} from "express"
import fs from "fs";
import path from "path";

export class ImageController { 
    constructor(){

    }


    public  obtener(req:Request, res:Response){ 
        const { type='', img=''} = req.params;
        console.log(img);
        const imagePath = path.resolve(__dirname,"../../../uploads/"+type+"/"+img);
        if (!fs.existsSync(imagePath)){
            return res.status(404).json({mensaje:"No se encontró la imagen"});
        }
        return res.sendFile(imagePath);
    }

}