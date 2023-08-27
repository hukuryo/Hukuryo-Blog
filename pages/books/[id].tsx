import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboard, faClock } from "@fortawesome/free-solid-svg-icons";
import { GetStaticPaths, GetStaticProps } from "next";
import { client } from "@/lib/client";
import { FC } from "react";
import Head from "next/head";

import { BlogIdProps, ArticleContent } from "../../types/article";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { SideBar } from "../../components/SideBar";
import { PageTracking } from "@/components/PageTracking";
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
            <PageTracking pass={"books"} pageTitle={"読んだ本"} articleTitle={blog.title} articlePass={blog.id}/>
            <h1 className="text-4xl text-center mt-10 font-bold pb-6"><FontAwesomeIcon icon={faClipboard} className="mr-2" />{blog.title}</h1>
            <ArticlePageLayout>
                <SideBar />
                <div className="mb-10 ml-5 p-7 shadow-lg bg-white rounded-md w-full">
                    <div className="mb-10">
                        <span className="text-sm rounded-full p-2 bg-gray-200">{blog.category}</span>
                        <small className="text-gray-500 ml-2">
                            <FontAwesomeIcon icon={faClock} className="mr-1" />
                            {createdDate}
                        </small>
                    </div>
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
