import { CreateUserDto } from './dto/createUser.dto';
import { UserEntity } from './user.entity';
import { Repository } from 'typeorm';
import { UserResponseInterface } from './types/userResponse.interface';
import { LoginUserDto } from './dto/loginUser.dto';
import { UpdateUserDto } from './dto/updateUser.dto';
export declare class UserService {
    private readonly userRepository;
    constructor(userRepository: Repository<UserEntity>);
    createUser(createUserDto: CreateUserDto): Promise<UserEntity>;
    findUserById(id: number): Promise<UserEntity>;
    login(loginUserDto: LoginUserDto): Promise<UserEntity>;
    updateUser(userId: number, updateUserDto: UpdateUserDto): Promise<UserEntity>;
    generateJWT(user: UserEntity): string;
    buildUserResponse(user: UserEntity): UserResponseInterface;
}
