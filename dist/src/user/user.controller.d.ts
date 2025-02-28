import { UserService } from './user.service';
import { CreateUserDto } from './dto/createUser.dto';
import { UserEntity } from './user.entity';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    CreateUser(creatUserDto: CreateUserDto): Promise<UserEntity>;
}
