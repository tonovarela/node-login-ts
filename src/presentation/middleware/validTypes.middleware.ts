import { NextFunction ,Request,Response} from "express";

export const validTypesMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const type = req.params.type;
    const validTypes = ["users", "products", "categories"];    
    if (!validTypes.includes(type)) {
        return res.status(400).json({ error: `El tipo de archivo no es valido, tipos validos ${validTypes}` });
    }
    req.body.type=type;
    next();

};