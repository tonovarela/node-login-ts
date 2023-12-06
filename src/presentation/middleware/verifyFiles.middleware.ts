
import { NextFunction, Request, Response } from "express";


export const containsFile = (req: Request, res: Response, next: NextFunction) => {
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).json({ error: "No hay ningun archivo seleccionado" });
    }
  

    if (!Array.isArray(req.files.file)) {
        req.body.files = [req.files.file];
    } else {
        req.body.files = req.files.file;
    }
    
    next();
}