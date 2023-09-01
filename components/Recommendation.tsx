import React from 'react';
import { BlogIdProps } from "../types/article";
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { client } from "@/lib/client";
import { ArticleProps } from "../types/article";

export const getStaticProps = async () => {
    const data = await client.get({ endpoint: "hobby" });
    
    return {
        props: {
            articles: data.contents,
        },
    };
};

export function Recommendation() {
    return (
        <ul className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => (
                <li key={article.id}>
                    <Link href={`/hobbies/${article.id}`} legacyBehavior>
                        <a className="group overflow-hidden border border-secondary-200" href="/docs/components/badge/">
                            <article 
                                className="shadow-lg bg-white rounded-lg transition-transform transform hover:scale-105 hover:opacity-80"
                            >
                                <div className="bg-secondary-100/50">
                                    <Image
                                        src={article.imageUrl.url}
                                        alt="見出し画像"
                                        width={40}
                                        height={60}
                                        className="w-full h-48 m-0  scale-100"
                                    />
                                </div>
                                <div className="p-4">
                                    <span className="text-sm rounded-full p-2 bg-gray-200 mr-2">{article.category}</span>
                                    <FontAwesomeIcon icon={faClock} className="h-3 mr-1" />
                                    <small>
                                        {new Date(article.publishedAt).toLocaleDateString("ja-JP", {
                                            year: "numeric",
                                            month: "numeric",
                                            day: "numeric",
                                        })}
                                    </small>
                                    <h4 className="font-medium pt-2 text-slate-900 transition-colors group-hover:text-primary-500">{article.title}</h4>
                                </div>
                            </article>
                        </a>
                    </Link>
                </li>
            ))}
        </ul>
    );
}


