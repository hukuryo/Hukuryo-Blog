import { GetStaticPaths, GetStaticProps } from "next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { client } from "@/lib/client";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { SideBar } from "../../components/SideBar";
import { BlogIdProps, ArticleContent } from "../../types/article";
import { ScrollUp } from "@/components/ScrollUp";
import { FC } from "react";


const BlogId: FC<BlogIdProps> = ({ blog }) => {
    const createdDate = new Date(blog.publishedAt).toLocaleDateString("ja-JP", {
        year: "numeric",
        month: "numeric",
        day: "numeric",
    });

    return (
        <>
            <Header />
            <main className="p-10">
                <div className="flex flex-row-reverse">
                    <SideBar />
                    <div className="mb-10 ml-5 p-5 bg-gray-100 rounded-md w-full">
                        <div className="mb-4">
                            <small className="text-gray-500">
                                <FontAwesomeIcon icon={faClock} className="mr-1" />
                                {createdDate}
                            </small>
                        </div>
                        <h1 className="text-4xl font-bold mb-6">{blog.title}</h1>
                        <div
                            className="prose max-w-none"
                            dangerouslySetInnerHTML={{ __html: blog.body }}
                        />
                    </div>
                </div>
            </main>
            <ScrollUp />
            <Footer />
        </>
    );
};

export const getStaticProps: GetStaticProps<BlogIdProps> = async (context) => {
    const id = context.params?.id as string;
    const data = await client.get({ endpoint: "ryoheiblog", contentId: id });

    return {
        props: {
        blog: data,
        },
    };
};

export const getStaticPaths: GetStaticPaths = async () => {
    const data = await client.get({ endpoint: "ryoheiblog" });

    const paths = data.contents.map((content: ArticleContent) => `/books/${content.id}`);
    return {
        paths,
        fallback: false,
    };
};

export default BlogId;
