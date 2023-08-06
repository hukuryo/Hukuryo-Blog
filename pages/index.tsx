import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { client } from "@/lib/client";

import { Header } from "../components/Header"
import { FooterForm } from "../components/FooterForm";
import { SideBar } from "../components/SideBar";
import { PageTitle } from "../components/PageTitle"
import ArticleList from "../components/ArticleList";
import { ArticleProps, ArticleContent } from "../types/article";

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
      <main className="md:container md:mx-auto">
          <div className="flex flex-row-reverse">
              <SideBar/>
              <div className="mt-10 mr-3 ml-5 w-full rounded-md">
                  <div>
                      <PageTitle title={"最新の記事"}/>
                  </div>
                  <ArticleList articles={articles} />
                  <FooterForm />
              </div>
          </div>
      </main>
    </>
  );
}
