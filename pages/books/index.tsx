import { Header } from "../../components/Header"
import { client } from "@/lib/client";

import { FooterForm } from "../../components/FooterForm";
import { SideBar } from "../../components/SideBar";
import { PageTitle } from "../../components/PageTitle"
import ArticleList from "../../components/ArticleList";
import { ArticleProps, ArticleContent } from "../../types/article";


export const getStaticProps = async () => {
    const data = await client.get({ endpoint: "ryoheiblog" });
    
    return {
        props: {
            articles: data.contents,
        },
    };
};

export default function books({ articles }: ArticleProps) {
    return (
        <>
            <Header />
            <main className="md:container md:mx-auto">
                <div className="flex flex-row-reverse">
                    <SideBar/>
                    <div className="mt-10 mr-3 ml-5 w-full rounded-md">
                        <div>
                            <PageTitle title={"読んだ書籍一覧"}/>
                        </div>
                        <ArticleList articles={ articles } />
                        <FooterForm />
                    </div>
                </div>
            </main>
        </>
    )
}
