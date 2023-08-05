import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export function Header() {
    return (
        <>
            <div className="w-full shadow-lg  p-4 pl-4 border border-gray-200 bg-sky-200 rounded-t-xl dark:border-gray-600 dark:bg-gray-700">
                <div className="grid grid-cols-3">
                    <div className="sm:col-span-1">
                        <h1 className="font-bold text-xl w-80">Hukuryo-no-Blog</h1>
                    </div>
                    <div className="items-center justify-center hidden col-span-1 space-x-3 sm:flex w-96">
                        <Link href="/" legacyBehavior><a className="text-xs hover:border-black font-bold hover:border-b-2">トップページ</a></Link>
                        <Link href="/articles" legacyBehavior><a className="text-xs hover:border-black font-bold hover:border-b-2">記事一覧</a></Link>
                        <Link href="/profile" legacyBehavior><a className="text-xs hover:border-black font-bold hover:border-b-2">プロフィール</a></Link>
                        <Link href="/books" legacyBehavior><a className="text-xs hover:border-black font-bold hover:border-b-2">IT書籍紹介</a></Link>
                    </div>
                    <div className="flex justify-end col-span-2">
                        <button data-drawer-target="cta-button-sidebar" data-drawer-toggle="cta-button-sidebar" aria-controls="cta-button-sidebar" type="button" className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-700 rounded-lg sm:hidden bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:focus:ring-gray-600">
                            <span className="sr-only">Open sidebar</span>
                            <FontAwesomeIcon icon={faBars} className="h-5" />
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}