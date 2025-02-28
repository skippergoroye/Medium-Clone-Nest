import { Column, Entity, PrimaryGeneratedColumn, BeforeInsert } from 'typeorm';
import bcrypt from "bcrypt";


@Entity({ name: 'users' })
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column({ default: '' })
  bio: string;

  @Column({ default: '' })
  image: string;

  @Column()
  password: string;


  @Column({ default: '' })
  profileImg: string;



  @Column({ default: '' })
  profileImgTwo: string;



  @Column({ default: '' })
  profileImgTwoThre: string;



  @Column({ default: '' })
  profileImgTwoFour: string;




  @Column({ default: '' })
  profileImgTwoFive: string;

  @Column({ default: '' })
  profileImgTwoSix: string;



  @BeforeInsert()
  async hashPassword() {
    this.password = await bcrypt.hash(this.password, 10);
  }
}
