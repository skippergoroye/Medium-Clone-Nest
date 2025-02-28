import { CreateUserDto } from "./dto/createUser.dto";
export declare class UserService {
    createUser(createUserDto: CreateUserDto): Promise<CreateUserDto>;
}
