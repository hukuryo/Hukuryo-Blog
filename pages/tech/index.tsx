import Head from "next/head";
import { client } from "@/lib/client";

import { Header } from "../../components/Header";
import { PageTitle } from "../../components/PageTitle";
import ArticleList from "../../components/ArticleList";
import { Footer } from "../../components/Footer";
import { ScrollUp } from "@/components/ScrollUp";
import { SideBar } from "@/components/SideBar";
import { Layout } from "@/components/Layout";
import { PageTracking } from "@/components/PageTracking";

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

export default function Article({ articles }: ArticleProps) {
  const techArticles = articles.filter(
    (article) => article.kinds[0] === "tech"
  );

  return (
    <>
      <Head>
        <title>技術記事一覧</title>
      </Head>
      <Header />
      <PageTracking pass={"tech"} pageTitle={"技術記事"} />
      <Layout>
        <PageTitle title={"技術記事"} />
        <div className="md:flex justify-between">
          <ArticleList articles={techArticles} pass={"tech"} />
          <SideBar />
        </div>
        <ResponsiveProfile />
      </Layout>
      <ScrollUp />
      <Footer />
    </>
  );
}
