import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";

import Link from "next/link";

type Article = {
    id: number;
    title: string;
    publishedAt: string;
    imageUrl: string;
};

type ArticleListProps = {
    articles: Article[];
};

const ArticleList: React.FC<ArticleListProps> = ({ articles }) => {
    return (
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {articles.map((article) => (
                <li key={article.id}>
                <Link href={`/books/${article.id}`} legacyBehavior>
                    <a>
                        <article className="flex-start mx-auto flex rounded-md border-2 border-stone-200 bg-stone-50 p-4 shadow-md duration-200 transition-transform transform hover:scale-105 hover:opacity-60 md:p-4">
                            <img
                                src={article.imageUrl}
                                alt=""
                                className="my-auto ml-0 mr-2 max-w-md rounded-md border-stone-300 bg-stone-200 p-3 shadow-md dark:bg-stone-100 dark:opacity-80 md:h-20 md:w-20" height="60px" width="60px"
                            />
                            <div>
                                <h3 className="text-sm text-stone-800 line-clamp-3 dark:text-stone-200 md:text-base">{article.title}</h3>
                                <div className="flex items-center">
                                <FontAwesomeIcon icon={faClock} className="h-3 mr-1" />
                                <small>
                                    {new Date(article.publishedAt).toLocaleDateString("ja-JP", {
                                    year: "numeric",
                                    month: "numeric",
                                    day: "numeric",
                                    })}
                                </small>
                                </div>
                            </div>
                        </article>
                    </a>
                </Link>
                </li>
            ))}
        </ul>
    );
};

export default ArticleList;
