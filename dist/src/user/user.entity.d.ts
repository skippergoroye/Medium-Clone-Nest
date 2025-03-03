export declare class UserEntity {
    id: number;
    email: string;
    username: string;
    bio: string;
    image: string;
    password: string;
    profileImg: string;
    hashPassword(): Promise<void>;
}
