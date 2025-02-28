import { Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';


// @Controller('user')
// export class UserController {
//     @Post()
//     async CreateUser(): Promise<any> {
//         return 'Create User';
//     }

// }





@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) { }
    @Post()
    async CreateUser(): Promise<any> {
        return this.userService.createUser();
    }

}