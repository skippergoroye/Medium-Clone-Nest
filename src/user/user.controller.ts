import {
  Body,
  Controller,
  Get,
  Post,
  Req,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/createUser.dto';
import { UserEntity } from './user.entity';
import { UserResponseInterface } from './types/userResponse.interface';
import { Request } from 'express';
import { ExpressRequest } from 'src/types/expressRequest.interface';

// @Controller('user')
// export class UserController {
//     @Post()
//     async CreateUser(): Promise<any> {
//         return 'Create User';
//     }

// }

@Controller('users')
@UsePipes(new ValidationPipe())
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Post()
  async CreateUser(
    @Body('user') creatUserDto: CreateUserDto,
  ): Promise<UserResponseInterface> {
    // console.log("createUser", creatUserDto);
    const user = await this.userService.createUser(creatUserDto);
    return this.userService.buildUserResponse(user);
  }

  @Post('login')
  @UsePipes(new ValidationPipe())
  async login(@Body('user') loginDto: any): Promise<UserResponseInterface> {
 
    const user = await this.userService.login(loginDto);
    return this.userService.buildUserResponse(user);
  }



  @Get('')
  async currentUser(@Req() request: ExpressRequest): Promise<UserResponseInterface> {
    console.log("request", request.user);
    return this.userService.buildUserResponse(request.user);
  }
}
