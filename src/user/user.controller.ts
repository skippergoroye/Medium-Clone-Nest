import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/createUser.dto';


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
    async CreateUser(@Body('user') creatUserDto: CreateUserDto): Promise<any> {
        console.log("createUser", creatUserDto);
        return this.userService.createUser(creatUserDto);
    }

}