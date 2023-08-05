import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

import { articlesContent, ArticleListProps } from "../types/article";

export function ArticleList(props: ArticleListProps) {
    const { articles, pass } = props;
    
    return (
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
            {articles?.map((article) => (
                <li
                className="col-span-1 rounded-lg shadow-lg bg-white p-2 transition-transform transform hover:scale-105"
                key={article.id}
                >
                <Link href={`/${pass}/${article.id}`} legacyBehavior>
                    <a className="block space-y-2">
                    <div className="h-40 mb-2 bg-gray-100 rounded-md">
                        <img src="" alt="" className="w-full h-full object-cover rounded-md" />
                    </div>
                    <div className="mx-2">
                        <h5 className="font-bold mb-2">{article.title}</h5>
                        <div className="flex items-center">
                        <FontAwesomeIcon icon={faClock} className="h-3 mr-1" />
                        <small className="text-xs">{article.date}</small>
                        </div>
                    </div>
                    </a>
                </Link>
                </li>
            ))}
        </ul>
    );
}