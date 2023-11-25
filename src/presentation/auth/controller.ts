import { Request, Response } from 'express';
import { CustomError, LoginUserDTO, RegisterUserDTO } from '../../domain';
import { AuthService } from './services/auth.service';



export class AuthContoller {
  constructor(private readonly authService: AuthService) { }

  private handleError = (error: unknown, res: Response) => {

    if (error instanceof CustomError)
      return res.status(error.status).json({ error: error.mensaje });

    return res.status(500).json({ "error": "Internal server error" });
  }


  register = (req: Request, res: Response) => {
    const [error, registroUsuarioDTO] = RegisterUserDTO.create(req.body);
    if (error) return res.status(400).json({ mensaje: error });
    this.authService.registroUsuario(registroUsuarioDTO!)
      .then(user => res.json(user))
      .catch(error => this.handleError(error, res));

  }

  loginUser = (req: Request, res: Response) => {
    const [error, registroUsuarioDTO] = LoginUserDTO.create(req.body);
    if (error) return res.status(400).json({ mensaje: error });
    this.authService.login(registroUsuarioDTO!).then(user=> res.json(user))
    .catch(error => this.handleError(error, res));
    
  }

  validateEmail = (req: Request, res: Response) => {
    const {token} = req.params;
    if (!token) return res.status(400).json({ mensaje: "El token no existe" });
    try {
     const payload =this.authService.validarToken(token);
     return res.status(200).json(payload);
    }catch(error){
    this.handleError(error,res);
    }


  }



}