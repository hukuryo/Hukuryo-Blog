import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { PageTitle } from "../components/PageTitle";
import { ScrollUp } from "@/components/ScrollUp";

import { SideBar } from "@/components/SideBar";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Header />
      <Head>
          <title>トップページ</title>
      </Head>
      <main className="pt-10 sm:px-20 pb-48 bg-indigo-100 px-5">
                <div className="flex flex-row-reverse">
                <SideBar />
                    <div className="w-full bg-white px-10 py-5 pb-10 shadow-lg rounded-md">
                        <PageTitle title={"トップページ"}/>
                          <p className="mt-16">Hukuryo-no-Blogへようこそ！</p>
                          <p className="mt-8">このブログでは、プログラミングについての記事を中心とした記事を書いています。</p>
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