import React from 'react';
import Link from 'next/link';

export function Footer() {
    return (
        <footer className="py-12 bg-gray-50 shadow-lg dark:bg-gray-800">
            <div className="w-full px-32 mx-auto max-w-8xl">
                <div className="grid gap-12 sm:grid-cols-3 lg:gap-12">
                    <div>
                        <h3 className="mb-6 border-l-8 border-stone-400 pl-2 text-sm font-semibold text-gray-400 uppercase dark:text-white">サイト</h3>
                        <ul>
                        <li className='mb-3'>
                            <Link className='text-lg hover:opacity-60 hover:underline' href="https://qiita.com/hukuryo">Qiita</Link>
                        </li>
                        <li className='mb-3'>
                            <Link className='text-lg hover:opacity-60 hover:underline' href="https://zenn.dev/ryohei0509">Zenn</Link>
                        </li>
                        <li className='mb-3'>
                            <Link className='text-lg hover:opacity-60 hover:underline' href="https://github.com/hukuryo">GitHub</Link>
                        </li>
                        <li>
                            <Link className='text-lg hover:opacity-60 hover:underline' href="https://twitter.com/hukuryo_">Twitter</Link>
                        </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="mb-6 text-sm font-semibold border-l-8 border-stone-400 pl-2 text-gray-400 uppercase dark:text-white">オススメの記事</h3>
                        <ul>
                            <li className='mb-3'>
                                <Link className='text-lg hover:opacity-60 hover:underline' href="/profile">profile</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="mb-6 text-sm font-semibold text-gray-400 border-l-8 border-stone-400 pl-2 uppercase dark:text-white">カテゴリー</h3>
                        <ul>
                            <li className='mb-3'>
                                <Link className='text-lg hover:opacity-60 hover:underline' href="/hobby">hobby</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <hr className='mt-10 mb-10'/>
                <span className="block text-center text-gray-600 dark:text-gray-400">
                    © 2023 Hukuryo-no-Blog
                </span>
            </div>
        </footer>
    );
}
