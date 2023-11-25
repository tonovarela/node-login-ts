import * as jwt from 'jsonwebtoken';
import { envs } from './envs';

export class JWTAdapter {


     static async createToken(payload: any, duration = "2h") {
        return new Promise((resolve, reject) => {
            jwt.sign(payload, envs.JWT_SECRET, { expiresIn: duration }, (err, token) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(token);
                }
            });
        });                 
    }

    static validateToken(token: string) {
         return new Promise((resolve, reject) => {
            const payload =jwt.verify(token, envs.JWT_SECRET);
            if (payload) {
                return resolve(payload);
            }else{
                return reject("Token invalido");
            }
         
        });
    }

    

}