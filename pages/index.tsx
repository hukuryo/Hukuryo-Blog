import { client } from "@/lib/client";

import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { PageTitle } from "../components/PageTitle";
import ArticleList from "../components/ArticleList";

import { ArticleProps } from "../types/article";
import { ScrollUp } from "@/components/ScrollUp";
import Link from "next/link";
import { SideBar } from "@/components/SideBar";


export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-10 sm:px-20 px-5">
                <div className="flex flex-row-reverse">
                <SideBar />
                    <div className="w-full bg-gray-200 px-10 py-5 pb-10 shadow-lg rounded-md">
                        <PageTitle title={"トップページ"}/>
                          <p className="mt-16">Hukuryo-no-Blogへようこそ！</p>
                          <p className="mt-8">このブログでは技術についての記事などを中心に記事を書いています。</p>
                          <p className="mt-8">よろしくお願いします！</p>
                        <div className="mt-32">
                        </div>
                        <ScrollUp />
                        {/* <FooterForm /> */}
                    </div>
                </div>
            </main>
      <ScrollUp />
      <Footer />
    </>
  );
}