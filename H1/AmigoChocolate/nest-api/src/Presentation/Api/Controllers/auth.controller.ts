import { Controller, Get, Post } from '@nestjs/common';
import { AuthService } from 'src/Application/Services/auth.service';

@Controller()
export class AuthController {
  constructor(
    private readonly authService : AuthService
  ) {

  }
}
