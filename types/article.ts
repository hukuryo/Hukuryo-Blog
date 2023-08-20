type ImageUrl = {
    url: string;
};

export type ArticleContent = {
    id: number;
    title: string;
    publishedAt: string;
    imageUrl: ImageUrl;
    body: string;
    pass: string
};

export type ArticleProps = {
    articles: ArticleContent[];
};

export type BlogContent = {
    id: number;
    imageUrl: string;
    title: string;
    publishedAt: string;
    body: string;
};

export type BlogIdProps = {
    blog: BlogContent;
};