export type ArticleContent = {
    id: number;
    title: string;
    publishedAt: string;
    imageUrl: string;
};

export type ArticleProps = {
    articles: ArticleContent[];
};