import { GetStaticPaths, GetStaticProps } from "next";
import { client } from "@/lib/client";

import { Header } from "../../components/Header";
import { FooterForm } from "../../components/FooterForm";
import { SideBar } from "../../components/SideBar";

type BlogContent = {
    id: number;
    title: string;
    publishedAt: string;
    body: string;
};

type BlogIdProps = {
    blog: BlogContent;
};

const BlogId: React.FC<BlogIdProps> = ({ blog }) => {
    const createdDate = new Date(blog.publishedAt).toLocaleDateString("ja-JP", {
        year: "numeric",
        month: "numeric",
        day: "numeric",
    });

    return (
        <>
            <Header />
            <main className="md:container md:mx-auto">
                <div className="flex flex-row-reverse">
                    <SideBar />
                        <div>
                            <h1 className="text-2xl mt-5 mb-10 font-bold">{blog.title}</h1>
                            <p>{createdDate}</p>
                            <div dangerouslySetInnerHTML={{ __html: blog.body }} />
                            <div className="mt-10 mr-3 ml-5 w-full rounded-md">
                        </div>
                        <FooterForm />
                    </div>
                </div>
            </main>
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

    const paths = data.contents.map((content: BlogContent) => `/books/${content.id}`);
    return {
        paths,
        fallback: false,
    };
};

export default BlogId;
