import React from "react";
import { client } from "@/lib/client";

import { Header } from "../../components/Header";
import { FooterForm } from "../../components/FooterForm";
import { SideBar } from "../../components/SideBar";
import { PageTitle } from "../../components/PageTitle";
import ArticleList from "../../components/ArticleList";

export const getStaticProps = async () => {
    const data = await client.get({ endpoint: "ryoheiblog" });
    
    return {
        props: {
            blog: data.contents,
        },
    };
};

type BlogContent = {
    id: number;
    title: string;
};

type HomeProps = {
    blog: BlogContent[];
};

export default function Article({ blog }: HomeProps) {
    return (
        <>
            <Header />
            <main className="md:container md:mx-auto">
                <div className="flex flex-row-reverse">
                <SideBar />
                <div className="mt-10 mr-3 ml-5 w-full rounded-md">
                    <div>
                    <PageTitle title={"技術記事一覧"} />
                    </div>
                    <ArticleList articles={blog} />
                    <FooterForm />
                </div>
                </div>
            </main>
        </>
    );
}
