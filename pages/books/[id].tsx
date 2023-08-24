import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { GetStaticPaths, GetStaticProps } from "next";
import { client } from "@/lib/client";
import { FC } from "react";
import Head from "next/head";

import { BlogIdProps, ArticleContent } from "../../types/article";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { SideBar } from "../../components/SideBar";
import { ArticlePageLayout } from "@/components/ArticlePageLayout";
import { ScrollUp } from "@/components/ScrollUp";


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
            <ArticlePageLayout>
                <SideBar />
                <div className="mb-10 ml-5 p-7 shadow-lg bg-white rounded-md w-full">
                    <div className="mb-4">
                        <small className="text-gray-500">
                            <FontAwesomeIcon icon={faClock} className="mr-1" />
                            {createdDate}
                        </small>
                    </div>
                    <h1 className="text-4xl border-b-2 font-bold pb-6">{blog.title}</h1>
                    
                    <div
                        className="prose max-w-none mb-10"
                        dangerouslySetInnerHTML={{ __html: blog.body }}
                    />
                </div>
            </ArticlePageLayout>
            <ScrollUp />
            <Footer />
        </>
    );
};

export const getStaticProps: GetStaticProps<BlogIdProps> = async (context) => {
    const id = context.params?.id as string;
    const data = await client.get({ endpoint: "book", contentId: id });

    return {
        props: {
        blog: data,
        },
    };
};

export const getStaticPaths: GetStaticPaths = async () => {
    const data = await client.get({ endpoint: "book" });

    const paths = data.contents.map((content: ArticleContent) => `/books/${content.id}`);
    return {
        paths,
        fallback: false,
    };
};

export default BlogId;
