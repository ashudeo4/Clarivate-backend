import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup')
  async signup(@Body() body) {
    const { name, email, password, organization } = body;
    await this.authService.signup(name, email, password, organization);
    return { message: 'Signup successful' };
  }

  @Post('signin')
  async signin(@Body() body) {
    const { email, password } = body;
    return this.authService.signin(email, password);
  }
}
