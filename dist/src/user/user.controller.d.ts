import { UserService } from './user.service';
import { CreateUserDto } from './dto/createUser.dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    CreateUser(creatUserDto: CreateUserDto): Promise<any>;
}
