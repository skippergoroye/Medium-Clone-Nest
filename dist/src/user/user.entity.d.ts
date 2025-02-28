export declare class UserEntity {
    id: number;
    email: string;
    bio: string;
    image: string;
    password: string;
    profileImg: string;
    profileImgTwo: string;
    profileImgTwoThre: string;
    profileImgTwoFour: string;
    profileImgTwoFive: string;
    hashPassword(): Promise<void>;
}
