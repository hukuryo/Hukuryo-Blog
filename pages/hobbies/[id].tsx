import { FC } from "react";
import Head from "next/head";
import { GetStaticPaths, GetStaticProps } from "next";
import { client } from "@/lib/client";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { SideBar } from "../../components/SideBar";
import { DetailBody } from "../../components/articleDetail/DetailBody";

import { BlogIdProps, ArticleContent } from "../../types/article";
import { ArticlePageLayout } from "@/components/ArticlePageLayout";
import { ScrollUp } from "@/components/ScrollUp";
import { PageTracking } from "@/components/PageTracking";

const BlogId: FC<BlogIdProps> = ({ blog }) => {
  const createdDate = new Date(blog.publishedAt).toLocaleDateString("ja-JP", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  });
  return (
    <>
      <Head>
        <title>{blog.title}</title>
      </Head>
      <Header />
      <PageTracking
        pass={"hobbies"}
        pageTitle={"趣味"}
        articleTitle={blog.title}
        articlePass={blog.id}
      />
      <ArticlePageLayout>
        <SideBar />
        <DetailBody blog={blog} />
      </ArticlePageLayout>
      <ScrollUp />
      <Footer />
    </>
  );
};

export const getStaticProps: GetStaticProps<BlogIdProps> = async (context) => {
  const id = context.params?.id as string;
  const data = await client.get({ endpoint: "articles", contentId: id });

  return {
    props: {
      blog: data,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await client.get({ endpoint: "articles" });

  const paths = data.contents.map(
    (content: ArticleContent) => `/hobbies/${content.id}`
  );
  return {
    paths,
    fallback: false,
  };
};

export default BlogId;
