import { client } from "@/lib/client";
import Link from "next/link";

import { Header } from "../components/Header"


type BlogContent = {
  id: number;
  title: string;
};

// SSG
export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "ryoheiblog" });

  return {
    props: {
      blog: data.contents,
    },
  };
};

interface HomeProps {
  blog: BlogContent[];
}

export default function Home({ blog }: HomeProps) {
  return (
    <div>
      <Header />
      <ul>
        {blog.map((blog) => (
          <li key={blog.id}>
            <Link href={`books/${blog.id}`} legacyBehavior>
              <a href="">{blog.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
