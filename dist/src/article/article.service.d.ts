import { CreateArticleDto } from './dto/createArticle.dto';
import { ArticleEntity } from './article.entity';
import { UserEntity } from 'src/user/user.entity';
export declare class ArticleService {
    private readonly articleRepository;
    constructor(articleRepository: any);
    createArticle(currentUser: UserEntity, createArticleDto: CreateArticleDto): Promise<ArticleEntity>;
}
