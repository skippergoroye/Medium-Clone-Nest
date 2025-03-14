import { CreateUserDto } from "./dto/createUser.dto";
import { UserEntity } from "./user.entity";
import { Repository } from "typeorm";
import { UserResponseInterface } from "./types/userResponse.interface";
export declare class UserService {
    private readonly userRepository;
    constructor(userRepository: Repository<UserEntity>);
    createUser(createUserDto: CreateUserDto): Promise<UserEntity>;
    generateJWT(user: UserEntity): string;
    buildUserResponse(user: UserEntity): UserResponseInterface;
}
