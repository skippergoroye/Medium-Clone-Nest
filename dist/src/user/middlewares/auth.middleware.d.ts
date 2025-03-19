import { NestMiddleware } from '@nestjs/common';
import { NextFunction, Response } from 'express';
import { ExpressRequest } from 'src/types/expressRequest.interface';
import { UserService } from '../user.service';
export declare class AuthMiddleware implements NestMiddleware {
    private readonly userService;
    constructor(userService: UserService);
    use(req: ExpressRequest, _: Response, next: NextFunction): Promise<void>;
}
