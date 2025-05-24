import { Controller, Get, Request, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('users')
export class UsersController {
  @UseGuards(JwtAuthGuard)
  @Get('dashboard')
  getDashboard(@Request() req) {
    // req.user is set by JwtStrategy
    return {
      message: 'Welcome to your dashboard!',
      user: req.user,
    };
  }
}
