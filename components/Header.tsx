import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUser, faBookOpen, faGamepad ,faBars, faLaptopCode, faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

import Link from "next/link";
import { useState } from "react";

export function Header() {
    const [openMenu, setOpenMenu] = useState(false);
    // const [isDark, setIsDark] = useState(false);

    const handleMenuOpen = () => {
        setOpenMenu(!openMenu);
    };

    // const handleDarkChange = () => {
    //     setIsDark(!isDark);
    // }

    return (
        <header>
            <div className="h-24 text-center hidden bg-white lg:flex">
                <h3 className="font-bold text-3xl flex border-none justify-center items-center w-full">
                    <Link href="/" className="hover:opacity-70">
                        Hukuryo-no-Blog
                    </Link>
                </h3>
            </div>
            <div className="shadow-lg lg:flex bg-white lg:justify-center lg:items-center h-20 border border-gray-200 dark:border-gray-600 dark:bg-gray-700">
                <div className="items-center justify-center hidden lg:flex w-full">
                    <Link href="/articles" className="text-md px-5 ease-in-out duration-300 hover:border-black hover:border-b-2"><FontAwesomeIcon icon={faLaptopCode} size="sm" className="mr-1" />技術記事</Link>
                    <Link href="/books" className="text-md px-5 ease-in-out duration-300 hover:border-black hover:border-b-2"><FontAwesomeIcon icon={faBookOpen} size="sm" className="mr-1" />読んだ本</Link>
                    <Link href="/hobbies" className="text-md px-5 ease-in-out duration-300 hover:border-black hover:border-b-2"><FontAwesomeIcon icon={faGamepad} size="sm" className="mr-1" />趣味</Link>
                </div>
                    {/* <button 
                        className={
                            isDark ?
                            "hidden"
                            : "px-3 py-2 mr-4 rounded-lg bg-gray-800 text-white"
                        } 
                        onClick={handleDarkChange}
                    >
                        <FontAwesomeIcon icon={faMoon}></FontAwesomeIcon>
                    </button>
                    <button 
                        className={
                            isDark ?
                            "pr-3 pl-2 py-2 mr-4 bg-white text-gray-800 rounded-lg"
                            : "hidden"
                        }
                        onClick={handleDarkChange}
                    >
                        <FontAwesomeIcon icon={faSun}></FontAwesomeIcon>
                    </button> */}
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
                            ? "text-left fixed z-10 bg-slate-50 right-0 top-0 sm:w-2/5 w-3/5 h-screen flex flex-col justify-start pt-8 px-3 ease-linear duration-300"
                            : "fixed right-[-250%] ease-linear duration-300"}
                    >
                        <h5 className="mt-14 pl-3 bg-gray-500 text-white py-2.5">
                            <FontAwesomeIcon icon={faBars} className="mr-2" />
                            MENU
                        </h5>
                        <Link href="/" className="text-gray-700 pl-3 py-2 mt-7 hover:bg-gray-200 transition duration-300">
                            <FontAwesomeIcon icon={faHome} className="mr-2" />
                            トップページ
                        </Link>
                        <Link href="/articles" className="text-gray-700 pl-3 py-2 mt-7 hover:bg-gray-200 transition duration-300">
                            <FontAwesomeIcon icon={faLaptopCode} className="mr-2" />
                            技術記事
                        </Link>
                        <Link href="/books" className="text-gray-700 pl-3 py-2 mt-7 hover:bg-gray-200 transition duration-300">
                            <FontAwesomeIcon icon={faBookOpen} className="mr-2" />
                            読んだ本
                        </Link>
                        <Link href="/hobbies" className="text-gray-700 py-2 pl-3 mt-7 hover:bg-gray-200 transition duration-300">
                            <FontAwesomeIcon icon={faGamepad} className="mr-2" />
                            趣味
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