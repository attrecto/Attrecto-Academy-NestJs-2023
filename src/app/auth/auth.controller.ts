import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { Request } from 'express';
import { LocalGuard } from 'src/shared/guards/local.guard';
import { RegisterDto } from './dtos/register.dto';
import { AuthService } from './auth.service';
import { JwtService } from '@nestjs/jwt';
import { AuthorizationGuard } from 'src/shared/guards/authorization.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService, private readonly jwtService: JwtService) {}

  @Post('login')
  @UseGuards(LocalGuard)
  login(@Req() req: Request) {
    const token = this.jwtService.sign({
      ...req.user,
    });

    return {
      token,
    };
  }

  @Post('register')
  register(@Body() body: RegisterDto) {
    return this.authService.register(body);
  }

  @Get('me')
  @UseGuards(AuthorizationGuard)
  getMe(@Req() req: Request) {
    return req.user;
  }
}
