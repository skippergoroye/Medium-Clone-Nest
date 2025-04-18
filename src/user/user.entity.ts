import { Column, Entity, PrimaryGeneratedColumn, BeforeInsert, OneToMany } from 'typeorm';
import bcrypt from "bcrypt";
import { ArticleEntity } from 'src/article/article.entity';


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

  @Column({ select: false})
  password: string;


  @Column({ default: '' })
  profileImg: string;


  @BeforeInsert()
  async hashPassword() {
    this.password = await bcrypt.hash(this.password, 10);
  }




  @OneToMany(() => ArticleEntity, (article) => article.author)
  articles: ArticleEntity[];
}
