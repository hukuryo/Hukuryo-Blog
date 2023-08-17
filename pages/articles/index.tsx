import React from "react";
import { client } from "@/lib/client";

import { Header } from "../../components/Header";
import { PageTitle } from "../../components/PageTitle";
import ArticleList from "../../components/ArticleList";
import { Footer } from "../../components/Footer";
import { ScrollUp } from "@/components/ScrollUp";
import { ArticleProps, ArticleContent } from "../../types/article";

export const getStaticProps = async () => {
    const data = await client.get({ endpoint: "ryoheiblog" });
    
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
            <main className="mx-10">
                <div className="flex mt-10 flex-row-reverse">
                    <div className="p-10 mr-3 ml-5 mb-10 w-full">
                        <PageTitle title={"技術記事"}/>
                        <div>
                        <ArticleList articles={articles} />
                        </div>
                    </div>
                </div>
            </main>
            <ScrollUp />
            <Footer />
        </>
    );
}
