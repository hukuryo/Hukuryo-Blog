import Head from "next/head";
import { client } from "@/lib/client";

import { Header } from "../../components/Header"
import { PageTitle } from "../../components/PageTitle";
import ArticleList from "../../components/ArticleList";
import { Footer } from "../../components/Footer";
import { ScrollUp } from "@/components/ScrollUp";
import { PageTracking } from "@/components/PageTracking";
import { Layout } from "@/components/Layout";
import { SideBar } from "@/components/SideBar";
import { ArticleProps } from "../../types/article";
import { ResponsiveProfile } from "@/components/ResponsiveProfile";

export const getStaticProps = async () => {
    const data = await client.get({ endpoint: "articles" });
    
    return {
        props: {
            articles: data.contents,
        },
    };
};

export default function books({ articles }: ArticleProps) {
    const hobbyArticles = articles.filter(article => article.kinds[0] === "hobby");
    const latestArticles = articles.slice(0, 3);

    return (
        <>
            <Head>
                <title>趣味</title>
            </Head>
            <Header />
            <PageTracking pass={"hobbies"} pageTitle={"趣味"}/>
            <Layout>
                <PageTitle title={"趣味"} />
                <div className="md:flex justify-between">
                    <ArticleList articles={ hobbyArticles } pass={"hobbies"} />
                    <SideBar articles={ latestArticles } pass={"hobbies"}/>
                </div>
                <ResponsiveProfile />
            </Layout>
            <ScrollUp />
            <Footer />
        </>
    )
}
