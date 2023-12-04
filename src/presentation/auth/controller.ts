import { Request, Response } from 'express';
import {  LoginUserDTO, RegisterUserDTO } from '../../domain';
import { AuthService } from '../services/auth.service';
import { AbstractController } from '../abstract/controller.abstract';



export class AuthContoller  extends AbstractController {
  constructor(private readonly authService: AuthService) { 
    super();
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
    this.authService.login(registroUsuarioDTO!).then(user => res.json(user))
      .catch(error => this.handleError(error, res));
  }

  validateEmail = (req: Request, res: Response) => {        
    const token =req.params.token
    if (!token) return res.status(400).json({ mensaje: "El token no existe" });
    this.authService.validarEmail(token)
      .then(payload => res.json(payload))
      .catch(e => this.handleError(e, res));




  }



}