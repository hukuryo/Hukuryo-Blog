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
        <ul className="grid grid-cols-1 md:grid-cols-2 max-w-3xl gap-4">
            {articles.map((article) => (
                <li
                className="col-span-1 rounded-lg shadow-lg bg-white p-2 transition-transform transform hover:scale-105 hover:opacity-60"
                key={article.id}
                >
                <Link href={`/books/${article.id}`} legacyBehavior>
                    <a className="space-y-2">
                        <div className="h-40 mb-2 bg-gray-100 rounded-md">
                            <img
                            src={article.imageUrl}
                            alt=""
                            className="w-full h-full object-cover rounded-md"
                            />
                        </div>
                        <div className="mx-2">
                            <h5 className="font-bold mb-2">{article.title}</h5>
                            <div className="flex items-center">
                                <FontAwesomeIcon icon={faClock} className="h-3 mr-1" />
                                <small>{new Date(article.publishedAt).toLocaleDateString("ja-JP", {
                                    year: "numeric",
                                    month: "numeric",
                                    day: "numeric",
                                })}</small>
                            </div>
                        </div>
                    </a>
                </Link>
                </li>
            ))}
        </ul>
    );
};

export default ArticleList;
