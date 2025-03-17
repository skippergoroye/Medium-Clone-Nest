import { UserService } from './user.service';
import { CreateUserDto } from './dto/createUser.dto';
import { UserResponseInterface } from './types/userResponse.interface';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    CreateUser(creatUserDto: CreateUserDto): Promise<UserResponseInterface>;
    login(loginDto: any): Promise<UserResponseInterface>;
}
