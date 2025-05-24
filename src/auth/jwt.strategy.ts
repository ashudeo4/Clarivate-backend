import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: 'your_jwt_secret', // CHANGE THIS for production!
    });
  }

  async validate(payload: any) {
    // payload contains decoded JWT info
    return {
      userId: payload.sub,
      email: payload.email,
      name: payload.name,
      organization: payload.organization,
    };
  }
}
