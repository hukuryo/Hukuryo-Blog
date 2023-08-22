import { Header } from "../../components/Header"
import { client } from "@/lib/client";

import { PageTitle } from "../../components/PageTitle"
import ArticleList from "../../components/ArticleList";
import { Footer } from "../../components/Footer";
import { ScrollUp } from "@/components/ScrollUp";
import { Layout } from "@/components/Layout";
import { ArticleProps } from "../../types/article";
import Head from "next/head";


export const getStaticProps = async () => {
    const data = await client.get({ endpoint: "book" });
    
    return {
        props: {
            articles: data.contents,
        },
    };
};

export default function books({ articles }: ArticleProps) {
    return (
        <>
            <Header />
            <Layout>
                <Head>
                    <title>読んだ書籍一覧</title>
                </Head>
                <PageTitle title={"読んだ書籍一覧"}/>
                <ArticleList articles={ articles } pass={"books"} />
                <ScrollUp />
            </Layout>
            <Footer />
        </>
    )
}
