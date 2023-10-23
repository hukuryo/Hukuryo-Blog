import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArticleProps } from "../types/article";

export const Recommendation: React.FC<ArticleProps> = ({ articles, pass }) => {
  return (
    <div>
      <h2 className="text-md text-center font-semibold mb-4 mt-10">
        <FontAwesomeIcon icon={faCalendar} className="mr-1" />
        新着の記事
      </h2>
      <div className="w-60 gap-4">
        {articles.map((article) => (
          <ul
            key={article.id}
            className="bg-white rounded-md shadow-md hover:shadow-lg"
          >
            <li className="px-4 pb-2">
              <Link href={`/${pass}/${article.id}`} legacyBehavior>
                <a>
                  <Image
                    src={article.imageUrl.url}
                    alt="見出し画像"
                    width={40}
                    height={60}
                    className="w-full h-40 object-cover rounded-t-md"
                  />
                  <h3 className="text-sm font-semibold mb-2">
                    {article.title}
                  </h3>
                  <small className="text-blue-500">続きを読む</small>
                </a>
              </Link>
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
};
