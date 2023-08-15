import React from "react";
import { client } from "@/lib/client";

import { Header } from "../../components/Header";
// import { FooterForm } from "../../components/FooterForm";
import { SideBar } from "../../components/SideBar";
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
            <main className="md:container md:mx-auto">
                <div className="flex flex-row-reverse">
                    <div className="mt-10 mr-3 ml-5 w-full rounded-md">
                        <div>
                        <PageTitle title={"技術記事一覧"} />
                        </div>
                        <ArticleList articles={ articles } />
                        <ScrollUp />
                        {/* <FooterForm /> */}
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
