import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { PageTitle } from "../components/PageTitle";
import { ScrollUp } from "@/components/ScrollUp";

import { SideBar } from "@/components/SideBar";
import Head from "next/head";
import { ResponsiveProfile } from "@/components/ResponsiveProfile";

export default function Home() {
  return (
    <>
      <Head>
        <title>トップページ</title>
      </Head>
      <Header />
      <main className="pt-10 sm:px-20 pb-48 bg-indigo-100 px-5">
        <div className="flex flex-row-reverse">
          <SideBar />
          <div className="w-full bg-white px-10 py-5 pb-10 shadow-lg rounded-md">
            <PageTitle title={"トップページ"} />
            <p className="mt-16">Hukuryo-no-Blogへようこそ！</p>
            <p className="mt-8">
              このブログでは、プログラミングについての記事を中心とした記事を書いています。
            </p>
            <p className="mt-8">よろしくお願いします！</p>
            <p className="mt-8">
              このブログは以下の技術スタックで作られています。
            </p>
            <div className="mt-10">
              <div className="border max-w-md border-slate-300 rounded-md shadow-md sm:w-4/5 px-5 pt-8 pb-6 mb-10 bg-white dark:bg-gray-800 text-gray-800 dark:text-white">
                <p className="text-2xl font-semibold mb-7">技術スタック</p>
                <ul className="list-disc pl-5">
                  <li className="mb-3">Next.js</li>
                  <li className="mb-3">TypeScript</li>
                  <li className="mb-3">Tailwind CSS</li>
                  <li className="mb-3">MicroCMS</li>
                </ul>
              </div>
            </div>
            <ScrollUp />
            {/* <FooterForm /> */}
          </div>
        </div>
        <ResponsiveProfile />
      </main>
      <ScrollUp />
      <Footer />
    </>
  );
}
