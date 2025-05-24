import { Injectable, BadRequestException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signup(name: string, email: string, password: string, organization: string) {
    const existing = await this.usersService.findByEmail(email);
    if (existing) throw new BadRequestException('Email already registered');
    const hashedPassword = await bcrypt.hash(password, 10);
    return this.usersService.createUser({ name, email, password: hashedPassword, organization });
  }

  async signin(email: string, password: string) {
    const user = await this.usersService.findByEmail(email);
    if (!user || !(await bcrypt.compare(password, user.password))) {
      throw new BadRequestException('Invalid credentials');
    }
    const payload = {
      sub: user.id,
      email: user.email,
      name: user.name,
      organization: user.organization,
    };
    const access_token = this.jwtService.sign(payload);
    return { access_token };
  }
}
