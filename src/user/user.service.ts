import { Injectable } from "@nestjs/common";

@Injectable()
export class UserService {
    async createUser() {
        return 'Create User from service';
    }

}