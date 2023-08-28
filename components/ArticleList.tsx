import React from "react";
import Link from "next/link";
import Image from 'next/image';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";

import { ArticleProps } from "../types/article";

const ArticleList: React.FC<ArticleProps> = ({ articles, pass }) => {
    return (
        <ul className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
            {articles.map((article) => (
                // <li key={article.id}>
                // <Link href={`/${ pass }/${article.id}`} legacyBehavior>
                //     <a>
                //         <article 
                //             className="flex-start mx-auto flex rounded-md border-stone-200 bg-stone-50 p-4 shadow-md duration-200 transition-transform transform hover:scale-105 hover:opacity-80 md:p-4"
                //         >
                //             <div>
                //                 <span className="text-sm rounded-full p-2 bg-gray-200">{article.category}</span>
                //                 <h3 className="text-sm text-stone-800 line-clamp-3 dark:text-stone-200 md:text-base">{article.title}</h3>
                //                 <div className="flex items-center">
                //                     <FontAwesomeIcon icon={faClock} className="h-3 mr-1" />
                //                     <small>
                //                         {new Date(article.publishedAt).toLocaleDateString("ja-JP", {
                //                             year: "numeric",
                //                             month: "numeric",
                //                             day: "numeric",
                //                         })}
                //                     </small>
                //                 </div>
                //             </div>
                //         </article>
                //     </a>
                // </Link>
                // </li>
                <a className="group overflow-hidden rounded-lg border border-secondary-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-sm" href="/docs/components/badge/">
                    <div className="bg-secondary-100/50">
                    <Image
                            src={article.imageUrl.url}
                            alt="見出し画像"
                            width={80}
                            height={60}
                            className="w-full m-0 object-cover"
                        />
                    </div>
                        <div className="p-4"><h4 className="font-medium text-slate-900 transition-colors group-hover:text-primary-500">Badge</h4>
                        <p className="text-sm">5 components</p>
                    </div>
                </a>
            ))}
        </ul>
    );
};

export default ArticleList;
