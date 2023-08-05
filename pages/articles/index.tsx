import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { client } from "@/lib/client";
import Link from "next/link";

import { Header } from "../../components/Header"
import { FooterForm } from "../../components/FooterForm";
import { SideBar } from "../../components/SideBar";
import { PageTitle } from "../../components/PageTitle"

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
            <main className="md:container md:mx-auto">
                <div className="flex flex-row-reverse">
                    <SideBar/>
                    <div className="mt-10 mr-3 ml-5 w-full rounded-md">
                        <div>
                            <PageTitle title={"技術記事一覧"}/>
                        </div>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
                            {blog.map((blog) => (
                                <li
                                className="col-span-1 rounded-lg shadow-lg bg-white p-2 transition-transform transform hover:scale-105"
                                key={blog.id}
                                >
                                <Link href={`/articles/${blog.id}`} legacyBehavior>
                                    <a className="block space-y-2">
                                    <div className="h-40 mb-2 bg-gray-100 rounded-md">
                                        <img src="" alt="" className="w-full h-full object-cover rounded-md" />
                                    </div>
                                    <div className="mx-2">
                                        <h5 className="font-bold mb-2">{blog.title}</h5>
                                        <div className="flex items-center">
                                        <FontAwesomeIcon icon={faClock} className="h-3 mr-1" />
                                        </div>
                                    </div>
                                    </a>
                                </Link>
                                </li>
                            ))}
                        </ul>
                        <FooterForm />
                    </div>
                </div>
            </main>
        </div>
    );
}
