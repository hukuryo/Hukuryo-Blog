import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useState } from "react";

export function Header() {
    const [openMenu, setOpenMenu] = useState(false);

    const handleMenuOpen = () => {
        setOpenMenu(!openMenu);
    };
    return (
        <header>
            <div className="h-24 text-center bg-gray-500">
                <h1 className="font-bold text-2xl text-white flex justify-center items-center h-full w-full">Hukuryo-no-Blog</h1>
            </div>
            <div className="shadow-lg sm:flex sm:justify-center sm:items-center h-20 border border-gray-200 bg-blue-400 dark:border-gray-600 dark:bg-gray-700">
                <div className="items-center justify-center hidden col-span-1 space-x-3 sm:flex w-full">
                    <Link href="/" className="text-sm text-white pr-2.5 ease-in-out duration-300 hover:border-white font-bold hover:border-b-4">トップページ</Link>
                    <Link href="/articles" className="text-sm px-2.5 text-white ease-in-out duration-300 hover:border-white font-bold hover:border-b-4">記事一覧</Link>
                    <Link href="/profile" className="text-sm px-2.5 text-white ease-in-out duration-300 hover:border-white font-bold hover:border-b-4">プロフィール</Link>
                    <Link href="/books" className="text-sm pl-2.5 text-white ease-in-out duration-300 hover:border-white font-bold hover:border-b-4">IT書籍紹介</Link>
                </div>
                <div className="flex justify-end h-full mr-10 col-span-2">
                    <button
                        onClick={handleMenuOpen}
                        type="button"
                        className="z-20 sm:hidden space-y-2"
                    >
                        <div
                        className={
                            openMenu
                            ? "w-8 h-0.5 bg-gray-600 translate-y-2.5 rotate-45 transition duration-500 ease-in-out"
                            : "w-8 h-0.5 bg-gray-600 transition duration-500 ease-in-out"
                        }
                        />
                        <div className={
                            openMenu
                            ? "opacity-0 transition duration-500 ease-in-out"
                            : "w-8 h-0.5 bg-gray-600 transition duration-500 ease-in-out"
                        }
                        />
                        <div className={
                            openMenu
                            ? "w-8 h-0.5 bg-gray-600 -rotate-45 transition duration-500 ease-in-out"
                            : "w-8 h-0.5 bg-gray-600 transition duration-500 ease-in-out"
                        }
                        />
                    </button>
                </div>
                <nav
                    className={
                    openMenu
                        ? "text-left fixed z-10 bg-slate-50 right-0 top-0 w-8/12 h-screen flex flex-col justify-start pt-8 px-3 ease-linear duration-300"
                        : "fixed right-[-100%] ease-linear duration-300"
                    }
                ></nav>
            </div>
        </header>
    );
}