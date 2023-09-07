import Head from "next/head";
import { client } from "@/lib/client";
import { GetStaticPaths, GetStaticProps } from "next";
import { FC } from "react";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { SideBar } from "../../components/SideBar";
import { PageTracking } from "@/components/PageTracking";
import { BlogIdProps, ArticleContent } from "../../types/article";
import { ArticlePageLayout } from "@/components/ArticlePageLayout";
import { DetailBody } from "../../components/articleDetail/DetailBody";
import { ScrollUp } from "@/components/ScrollUp";

const BlogId: FC<BlogIdProps> = ({ blog }) => {

    return (
        <>
            <Head>
                <title>{blog.title}</title>
            </Head>
            <Header />
            <PageTracking pass={"articles"} pageTitle={"技術記事"} articleTitle={blog.title} articlePass={blog.id}/>
            <ArticlePageLayout>
                <SideBar />
                <DetailBody blog={blog}/>
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

    const paths = data.contents.map((content: ArticleContent) => `/articles/${content.id}`);
    return {
        paths,
        fallback: false,
    };
};

export default BlogId;
