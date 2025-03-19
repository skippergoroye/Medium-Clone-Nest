import { UserService } from './user.service';
import { CreateUserDto } from './dto/createUser.dto';
import { UserEntity } from './user.entity';
import { UserResponseInterface } from './types/userResponse.interface';
import { ExpressRequest } from 'src/types/expressRequest.interface';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    CreateUser(creatUserDto: CreateUserDto): Promise<UserResponseInterface>;
    login(loginDto: any): Promise<UserResponseInterface>;
    currentUser(request: ExpressRequest, user: UserEntity): Promise<UserResponseInterface>;
}
