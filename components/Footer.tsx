import React from 'react';

export function Footer() {
    return (
        <footer className="py-12 mt-48 bg-gray-50 dark:bg-gray-800">
            <div className="w-full px-32 mx-auto max-w-8xl">
                <div className="grid gap-12 md:grid-cols-3 sm:gap-24">
                    <div>
                        <h3 className="mb-6 text-sm font-semibold text-gray-400 uppercase dark:text-white">発信媒体</h3>
                        <ul>
                            <li className="mb-4">
                                <a href="https://github.com/themesberg/flowbite/discussions" rel="noreferrer nofollow" className="font-medium text-gray-600 dark:text-gray-400 dark:hover:text-white hover:underline">Github</a>
                            </li>
                            <li className="mb-4">
                                <a href="https://github.com/themesberg/flowbite/discussions" rel="noreferrer nofollow" className="font-medium text-gray-600 dark:text-gray-400 dark:hover:text-white hover:underline">Twitter</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="mb-6 text-sm font-semibold text-gray-400 uppercase dark:text-white">オススメの記事</h3>
                        <ul>
                            <li className="mb-4">
                                <a href="https://discord.gg/4eeurUVvTy" rel="noreferrer nofollow" className="font-medium text-gray-600 dark:text-gray-400 dark:hover:text-white hover:underline">Discord</a>
                            </li>
                            <li className="mb-4">
                                <a href="https://github.com/themesberg/flowbite" className="font-medium text-gray-600 dark:text-gray-400 dark:hover:text-white hover:underline">Github</a>
                            </li>
                            <li className="mb-4">
                                <a href="https://twitter.com/zoltanszogyenyi" rel="noreferrer nofollow" className="font-medium text-gray-600 dark:text-gray-400 dark:hover:text-white hover:underline">Twitter</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="mb-6 text-sm font-semibold text-gray-400 uppercase dark:text-white">カテゴリー</h3>
                        <ul>
                            <li className="mb-4">
                                <a href="https://flowbite.com/license/" className="font-medium text-gray-600 dark:text-gray-400 dark:hover:text-white hover:underline">License (EULA)</a>
                            </li>
                            <li className="mb-4">
                                <a href="https://flowbite.com/privacy-policy/" className="font-medium text-gray-600 dark:text-gray-400 dark:hover:text-white hover:underline">Privacy Policy</a>
                            </li>
                            <li className="mb-4">
                                <a href="https://flowbite.com/terms-and-conditions/" className="font-medium text-gray-600 dark:text-gray-400 dark:hover:text-white hover:underline">Terms &amp; Conditions</a>
                            </li>
                            <li className="mb-4">
                                <a href="https://flowbite.com/brand/" className="font-medium text-gray-600 dark:text-gray-400 dark:hover:text-white hover:underline">Brand guideline</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <hr className='mt-10 mb-10'/>
                <span className="block text-center text-gray-600 dark:text-gray-400 font-">© 2023 Hukuryo-no-Blog
                </span>
            </div>
        </footer>
    );
}
