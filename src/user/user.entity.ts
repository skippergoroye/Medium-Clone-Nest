import { Column, Entity, PrimaryGeneratedColumn, BeforeInsert } from 'typeorm';
import bcrypt from "bcrypt";


@Entity({ name: 'users' })
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  username: string;

  @Column({ default: '' })
  bio: string;

  @Column({ default: '' })
  image: string;

  @Column()
  password: string;


  @Column({ default: '' })
  profileImg: string;


  @BeforeInsert()
  async hashPassword() {
    this.password = await bcrypt.hash(this.password, 10);
  }
}
