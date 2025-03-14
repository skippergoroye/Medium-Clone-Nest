import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/createUser.dto';
import { UserEntity } from './user.entity';
import { UserResponseInterface } from './types/userResponse.interface';


// @Controller('user')
// export class UserController {
//     @Post()
//     async CreateUser(): Promise<any> {
//         return 'Create User';
//     }

// }





@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService) { }
    @Post()
    async CreateUser(@Body('user') creatUserDto: CreateUserDto): Promise<UserResponseInterface> {
        // console.log("createUser", creatUserDto);
        const user = await this.userService.createUser(creatUserDto);
        return this.userService.buildUserResponse(user)
    }

}