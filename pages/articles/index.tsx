import React from "react";
import { client } from "@/lib/client";

import { Header } from "../../components/Header";
import { PageTitle } from "../../components/PageTitle";
import ArticleList from "../../components/ArticleList";
import { Footer } from "../../components/Footer";
import { ScrollUp } from "@/components/ScrollUp";
import { Layout } from "@/components/Layout";
import { PageTracking } from "@/components/PageTracking";
import { ArticleProps } from "../../types/article";
import Head from "next/head";

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
            <Head>
                <title>技術記事一覧</title>
            </Head>
            <Header />
            <PageTracking pass={"articles"} pageTitle={"技術記事"}/>
            <Layout>
                <PageTitle title={"技術記事"}/>
                <ArticleList articles={articles} pass={"articles"} />
            </Layout>
            <ScrollUp />
            <Footer />
        </>
    );
}
