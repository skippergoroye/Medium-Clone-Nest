export declare class ArticleEntity {
    id: number;
    slug: string;
    title: string;
    description: string;
    body: string;
    createdAt: Date;
    updatedAt: Date;
    tagList: string[];
    favoriteCount: number;
    updateTimeStamp(): void;
}
