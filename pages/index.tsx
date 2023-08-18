import { client } from "@/lib/client";

import { Header } from "../components/Header";
import { FooterForm } from "../components/FooterForm";
import { Footer } from "../components/Footer";
import { SideBar } from "../components/SideBar";
import { PageTitle } from "../components/PageTitle";
import ArticleList from "../components/ArticleList";

import { ArticleProps } from "../types/article";
import { ScrollUp } from "@/components/ScrollUp";

export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "ryoheiblog" });

  return {
    props: {
      articles: data.contents,
    },
  };
};

export default function Home({ articles }: ArticleProps) {
  return (
    <>
      <Header />
      <main className="mx-10">
          <div className="flex mt-10 flex-row-reverse">
            <div className="p-10 mr-3 ml-5 mb-10 w-full">
                <PageTitle title={"最新の記事"}/>
                <ArticleList articles={articles} />
              </div>
          </div>
      </main>
      <ScrollUp />
      <Footer />
    </>
  );
}
