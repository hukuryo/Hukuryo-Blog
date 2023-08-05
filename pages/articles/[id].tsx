import { GetStaticPaths, GetStaticProps } from "next";
import { client } from "@/lib/client";

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
return (
    <main>
        <h1>{blog.title}</h1>
        <p>{blog.publishedAt}</p>
        <div dangerouslySetInnerHTML={{ __html: blog.body }} />
    </main>
    );
};

export const getStaticProps: GetStaticProps<BlogIdProps> = async (context) => {
    const id = context.params?.id;
    const data = await client.get({ endpoint: "ryoheiblog", contentId: id });

    return {
        props: {
        blog: data,
        },
    };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await client.get({ endpoint: "ryoheiblog" });

  const paths = data.contents.map((content: BlogContent) => `/blog/${content.id}`);
  return {
    paths,
    fallback: false,
  };
};

export default BlogId;
