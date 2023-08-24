import React from "react";
import Link from "next/link";
import Image from 'next/image';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";

import { ArticleProps } from "../types/article";

const ArticleList: React.FC<ArticleProps> = ({ articles, pass }) => {
    
    return (
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4">
            {articles.map((article) => (
                <li key={article.id}>
                <Link href={`/${ pass }/${article.id}`} legacyBehavior>
                    <a>
                        <article 
                            className="flex-start mx-auto flex rounded-md border-stone-200 bg-stone-50 p-4 shadow-md duration-200 transition-transform transform hover:scale-105 hover:opacity-80 md:p-4"
                        >
                        <Image
                            src={article.imageUrl.url}
                            alt="見出し画像"
                            width={80}
                            height={60}
                            className="my-auto ml-0 mr-4 max-w-full rounded-md border-stone-300 bg-stone-200 shadow-md dark:bg-stone-100 dark:opacity-80 md:h-20 md:w-20"
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
