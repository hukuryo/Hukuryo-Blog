import React from "react";
import { client } from "@/lib/client";

import { Header } from "../../components/Header";
import { PageTitle } from "../../components/PageTitle";
import ArticleList from "../../components/ArticleList";
import { Footer } from "../../components/Footer";
import { ScrollUp } from "@/components/ScrollUp";
import { ArticleProps, ArticleContent } from "../../types/article";

export const getStaticProps = async () => {
    const data = await client.get({ endpoint: "tech" });
    
    return {
        props: {
            articles: data.contents,
        },
    };
};

export default function Article({ articles }: ArticleProps) {
    return (
        <>
            <Header />
            <main className="px-10 pb-48 bg-indigo-100">
                <div className="flex t-10 flex-row-reverse">
                    <div className="p-10 mr-3 ml-5 mb-10 w-full">
                        <PageTitle title={"技術記事"}/>
                        <ArticleList articles={articles} pass={"articles"} />
                    </div>
                </div>
            </main>
            <ScrollUp />
            <Footer />
        </>
    );
}
