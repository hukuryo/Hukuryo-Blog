import Head from "next/head";
import { Header } from "../../components/Header"
import { client } from "@/lib/client";

import { PageTitle } from "../../components/PageTitle"
import ArticleList from "../../components/ArticleList";
import { Footer } from "../../components/Footer";
import { ScrollUp } from "@/components/ScrollUp";
import { Layout } from "@/components/Layout";
import { ArticleProps } from "../../types/article";

export const getStaticProps = async () => {
    const data = await client.get({ endpoint: "hobby" });
    
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
                    <title>遊び記録一覧</title>
                </Head>
                <PageTitle title={"遊び記録"} />
                <ArticleList articles={ articles } pass={"hobbies"} />
                <ScrollUp />
            </Layout>
            <Footer />
        </>
    )
}
