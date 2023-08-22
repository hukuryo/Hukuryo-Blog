import { Header } from "../../components/Header"
import { client } from "@/lib/client";

import { PageTitle } from "../../components/PageTitle"
import ArticleList from "../../components/ArticleList";
import { Footer } from "../../components/Footer";
import { ScrollUp } from "@/components/ScrollUp";
import { ArticleProps } from "../../types/article";


export const getStaticProps = async () => {
    const data = await client.get({ endpoint: "book" });
    
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
            <main className="px-10 pb-48 bg-indigo-100">
                <div className="flex pt-10 flex-row-reverse">
                    <div className="p-10 mr-3 ml-5 mb-10 w-full">
                        <PageTitle title={"読んだ書籍一覧"}/>
                        <ArticleList articles={ articles } pass={"books"} />
                        <ScrollUp />
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}
