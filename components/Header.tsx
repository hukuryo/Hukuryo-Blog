import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faList, faUser, faBookOpen, faGamepad ,faBars } from "@fortawesome/free-solid-svg-icons";

import Link from "next/link";
import { useState } from "react";

export function Header() {
    const [openMenu, setOpenMenu] = useState(false);

    const handleMenuOpen = () => {
        setOpenMenu(!openMenu);
    };
    return (
        <header>
            <div className="h-24 text-center hidden bg-gray-200 lg:flex">
                <Link href="/" className="font-bold text-2xl flex border-none justify-center items-center h-full w-full">
                    <h3>Hukuryo-no-Blog</h3>
                </Link>
            </div>
            <div className="shadow-lg lg:flex lg:justify-center lg:items-center h-20 border border-gray-200 dark:border-gray-600 dark:bg-gray-700">
                <div className="items-center justify-center hidden lg:flex w-full">
                    <Link href="/articles" className="text-md px-5 ease-in-out duration-300 hover:border-black hover:border-b-2">技術記事</Link>
                    <Link href="/books" className="text-md px-5 ease-in-out duration-300 hover:border-black hover:border-b-2">読んだ本</Link>
                    <Link href="/hobbies" className="text-md px-5 ease-in-out duration-300 hover:border-black hover:border-b-2">趣味</Link>
                </div>
                <div className="lg:hidden">
                    <div className="flex justify-between items-center h-full mt-6 mx-4">
                    <Link href="/" className="font-bold text-2xl mt-0">
                        <h1 className="font-bold text-2xl mt-0">Hukuryo-no-Blog</h1>
                    </Link>
                        <button
                            onClick={handleMenuOpen}
                            type="button"
                            className="z-20 lg:hidden space-y-2"
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
                            : "fixed right-[-100%] ease-linear duration-300"}
                    >
                        <h5 className="mt-10 pl-3 bg-gray-500 text-white py-2.5">
                            <FontAwesomeIcon icon={faBars} className="mr-2" />
                            MENU
                        </h5>
                        <Link href="/" className="text-gray-700 pl-3 py-2 mt-7 hover:bg-gray-200 transition duration-300">
                            <FontAwesomeIcon icon={faHome} className="mr-2" />
                            トップページ
                        </Link>
                        <Link href="/articles" className="text-gray-700 pl-3 py-2 mt-7 hover:bg-gray-200 transition duration-300">
                            <FontAwesomeIcon icon={faList} className="mr-2" />
                            技術記事
                        </Link>
                        <Link href="/books" className="text-gray-700 pl-3 py-2 mt-7 hover:bg-gray-200 transition duration-300">
                            <FontAwesomeIcon icon={faBookOpen} className="mr-2" />
                            読んだ本
                        </Link>
                        <Link href="/hobbies" className="text-gray-700 py-2 pl-3 mt-7 hover:bg-gray-200 transition duration-300">
                            <FontAwesomeIcon icon={faGamepad} className="mr-2" />
                            遊び記録
                        </Link>
                        <Link href="/profile" className="text-gray-700 py-2 pl-3 mt-7 hover:bg-gray-200 transition duration-300">
                            <FontAwesomeIcon icon={faUser} className="mr-2" />
                            プロフィール
                        </Link>
                    </nav>
                </div>
            </div>
        </header>
    );
}