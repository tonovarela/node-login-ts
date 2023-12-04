import { CustomError } from "../../domain";
import  {  Response } from 'express';

export abstract  class AbstractController  { 

    protected handleError = (error: unknown, res: Response) => {
        if (error instanceof CustomError)
            return res.status(error.status).json({ error: error.mensaje });

        return res.status(500).json({ "error": "Internal server error" });
    }    

}