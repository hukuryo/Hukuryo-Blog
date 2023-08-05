import { client } from "@/lib/client";
import { DEV_CLIENT_PAGES_MANIFEST } from "next/dist/shared/lib/constants";
import Link from "next/link";

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
      <ul>
        {blog.map((blog) => (
          <li key={blog.id}>
            <Link href={`blog/${blog.id}`} legacyBehavior>
              <a href="">{blog.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
