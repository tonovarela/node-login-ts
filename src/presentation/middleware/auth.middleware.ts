import { NextFunction,Request,Response } from "express";
import { JWTAdapter,  } from "../../config";
import { UsuarioModel } from "../../data";
import { UsuarioEntity } from "../../domain";

export class AuthMiddleware {
    static async validateJWT(req: Request, res: Response, next: NextFunction) {
        try {
            const autorization = req.header("Authorization");
            if (!autorization) return res.status(401).json({ error: 'No token provided' });
            if (!autorization.startsWith("Bearer ")) return res.status(401).json({ error:"No token provided" });            
            const token = autorization.split(" ").at(1) || "";
            const payload =await  JWTAdapter.validateToken<{id:string}>(token);
            if (!payload) return res.status(401).json({ error: 'Invalid token' });
            const user = await UsuarioModel.findOne({ _id: payload.id });
            if (!user) return res.status(401).json({ error: 'Invalid token'});
            if (!user.emailVerificado) return res.status(401).json({ error: 'Usuario inactivo' });
            req.body.usuario=UsuarioEntity.fromObject(user);            
            next();
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Internal server error' });
        }
        
    }
}