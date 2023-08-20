import { Header } from "../../components/Header"
import { client } from "@/lib/client";

import { FooterForm } from "../../components/FooterForm";
import { SideBar } from "../../components/SideBar";
import { PageTitle } from "../../components/PageTitle"
import ArticleList from "../../components/ArticleList";
import { Footer } from "../../components/Footer";
import { ScrollUp } from "@/components/ScrollUp";
import { ArticleProps, ArticleContent } from "../../types/article";

export const getStaticProps = async () => {
    const data = await client.get({ endpoint: "hobby" });
    
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
            <main className="mx-10">
                <div className="flex flex-row-reverse">
                    <div className="mt-10 mr-3 ml-5 w-full rounded-md">
                        <PageTitle title={"遊び記録"} />
                        <ArticleList articles={ articles } />
                    </div>
                </div>
            </main>
            <ScrollUp />
            <Footer />
        </>
    )
}
