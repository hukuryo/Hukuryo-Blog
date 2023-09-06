import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboard, faClock } from "@fortawesome/free-solid-svg-icons";
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
import { ScrollUp } from "@/components/ScrollUp";
import Image from "next/image";

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
            <PageTracking pass={"articles"} pageTitle={"技術記事"} articleTitle={blog.title} articlePass={blog.id}/>
            <ArticlePageLayout>
                <SideBar />
                <div className="mb-10 p-7 mx-auto w-10/12 lg:w-9/12 shadow-lg bg-white rounded-md">
                    <h1 className="text-3xl font-bold pb-6"><FontAwesomeIcon icon={faClipboard} className="mr-2" />{blog.title}</h1>
                    <div className="mb-12">
                        <span className="text-sm rounded-full p-2 bg-gray-200">{blog.category}</span>
                        <small className="text-gray-500 ml-2">
                            <FontAwesomeIcon icon={faClock} className="mr-1" />
                            {createdDate}
                        </small>
                    </div>
                    <div className="bg-secondary-100/50">
                        <div className="w-full h-screen shadow-lg rounded-md">
                            <Image
                                src={blog.imageUrl.url}
                                alt="見出し画像"
                                width={40}
                                height={60}
                                className="w-full h-full object-cover"
                            />
                        </div>
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
