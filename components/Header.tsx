import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export function Header() {
    return (
        <header>
            <div className="h-24 text-center bg-gray-500">
                <h1 className="font-bold text-2xl text-white flex justify-center items-center h-full w-full">Hukuryo-no-Blog</h1>
            </div>
            <div className="shadow-lg flex justify-center h-20 border border-gray-200 bg-blue-400 dark:border-gray-600 dark:bg-gray-700">
                <div>
                    <div className="items-center justify-center hidden col-span-1 space-x-3 sm:flex w-full">
                        <Link href="/" className="text-sm text-white pr-2.5 ease-in-out duration-300 hover:border-white font-bold hover:border-b-4">トップページ</Link>
                        <Link href="/articles" className="text-sm px-2.5 text-white ease-in-out duration-300 hover:border-white font-bold hover:border-b-4">記事一覧</Link>
                        <Link href="/profile" className="text-sm px-2.5 text-white ease-in-out duration-300 hover:border-white font-bold hover:border-b-4">プロフィール</Link>
                        <Link href="/books" className="text-sm pl-2.5 text-white ease-in-out duration-300 hover:border-white font-bold hover:border-b-4">IT書籍紹介</Link>
                    </div>
                </div>
                <div className="flex justify-end w- col-span-2">
                    <button data-drawer-target="cta-button-sidebar" data-drawer-toggle="cta-button-sidebar" aria-controls="cta-button-sidebar" type="button" className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-700 rounded-lg sm:hidden bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:focus:ring-gray-600">
                        <span className="sr-only">Open sidebar</span>
                        <FontAwesomeIcon icon={faBars} className="h-5" />
                    </button>
                </div>
            </div>
        </header>
    );
}