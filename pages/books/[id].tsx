import { GetStaticPaths, GetStaticProps } from "next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { client } from "@/lib/client";

import { Header } from "../../components/Header";
import { FooterForm } from "../../components/FooterForm";
import { SideBar } from "../../components/SideBar";
// import { BlogIdProps } from "../../types/article";
import { ArticleProps, BlogIdProps, ArticleContent } from "../../types/article";

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
                    <div className="mt-5 mb-10 ml-5 w-full">
                        <h1 className="text-2xl font-bold">{blog.title}</h1>
                        <p className="mb-2">
                            <FontAwesomeIcon icon={faClock} className="h-3 mr-1" />
                            {createdDate}
                        </p>
                        <div dangerouslySetInnerHTML={{ __html: blog.body }} />
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

    const paths = data.contents.map((content: BlogIdProps) => `/books/${content.id}`);
    return {
        paths,
        fallback: false,
    };
};

export default BlogId;
