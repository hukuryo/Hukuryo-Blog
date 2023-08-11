"use client"

import { Header } from "../../components/Header";
import { FooterForm } from "../../components/FooterForm";
import { SideBar } from "../../components/SideBar";
import { PageTitle } from "../../components/PageTitle";
import { Footer } from "../../components/Footer";
import { ScrollUp } from "@/components/ScrollUp";

export default function profile() {
    return (
        <>
            <Header/>
            <main className="container mx-auto">
                <div className="flex flex-row-reverse">
                    <SideBar/>
                    <div className="mt-16 ml-16 w-full rounded-md">
                        <PageTitle title={"プロフィール紹介"}/>
                        <p className="mt-16">Hukuryo-no-Blogへようこそ！</p>
                        <p className="mt-8">このブログでは技術についての記事などを中心に記事を書いています。</p>
                        <p className="mt-8">このページでは自分の経歴を紹介していきます。</p>
                        <div className="mt-32">
                            <div className="border border-slate-300 h-80 w-5/6 px-8 pt-8 mb-10 drop-shadow-md">
                                <h5 className="text-center mb-7 font-bold">経歴紹介</h5>
                                <p className="mb-7 border-b-8">2021年3月 大学卒業</p>
                                <p className="mb-7 border-b-8">2021年4月 鉄道会社に就職</p>
                                <p className="mb-7 border-b-8">2022年11月~ エンジニアに転職</p>
                                <p className="border-b-8">官公庁向けのシステム開発に携わる。</p>
                            </div>
                            <p className="mb-10">千葉県民です。今も千葉県在住です。</p>
                            <p className="mb-10">大学まで野球をやっていました。</p>
                            <p>趣味はスポーツ観戦、映画鑑賞、漫画を読むこと</p>
                        </div>
                        <ScrollUp />
                        {/* <FooterForm /> */}
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}
