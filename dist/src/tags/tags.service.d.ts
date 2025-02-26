import { Repository } from 'typeorm';
import { TagEntity } from './tags.entity';
export declare class TagsService {
    private readonly tagRepository;
    constructor(tagRepository: Repository<TagEntity>);
    findAll(): Promise<TagEntity[]>;
}
