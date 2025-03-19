import { NestMiddleware, Injectable } from '@nestjs/common';
import { NextFunction, Response, Request } from 'express';
import { JWT_SECRET } from 'src/config';
import { ExpressRequest } from 'src/types/expressRequest.interface';
import jwt from 'jsonwebtoken';
import { UserService } from '../user.service';




@Injectable()
export class AuthMiddleware implements NestMiddleware {
  constructor(private readonly userService: UserService) {}
  async use(req: ExpressRequest, _: Response, next: NextFunction) {
    // console.log('authMiddleware', req.headers);

    const authHeader = req.headers['authorization'] as string | undefined;
    if (!authHeader) {
      req.user = null;
      next();
      return;
    }

    const token = authHeader.split(' ')[1];

    try {
      const decode = jwt.verify(token, JWT_SECRET);
      if (typeof decode !== 'string' && 'id' in decode) {
        const user = await this.userService.findUserById(decode.id);
        req.user = user;
      } else {
        req.user = null;
      }
      next();
    } catch (error) {
      req.user = null;
      next();
    }
  }
}
