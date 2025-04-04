import { ArticleService } from './article.service';
import { CreateArticleDto } from './dto/createArticle.dto';
import { UserEntity } from 'src/user/user.entity';
export declare class ArticleController {
    private readonly articleService;
    constructor(articleService: ArticleService);
    create(currentUser: UserEntity, createArticleDto: CreateArticleDto): Promise<any>;
}
