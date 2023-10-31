import React from "react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="py-7 bg-white shadow-lg dark:bg-gray-800">
      <div className="w-full px-10 sm:px-32 mx-auto max-w-8xl">
        <div className="grid gap-12 grid-cols-3 lg:gap-12">
          <div>
            <h3 className="mb-6 border-l-8 border-stone-400 pl-2 text-sm font-semibold text-gray-400 uppercase dark:text-white">
              サイト
            </h3>
            <ul>
              <li className="mb-3">
                <Link
                  className="text-md hover:opacity-60 hover:underline"
                  href="https://qiita.com/hukuryo"
                  target="blank"
                >
                  Qiita
                </Link>
              </li>
              <li className="mb-3">
                <Link
                  className="text-md hover:opacity-60 hover:underline"
                  href="https://zenn.dev/ryohei0509"
                  target="blank"
                >
                  Zenn
                </Link>
              </li>
              <li className="mb-3">
                <Link
                  className="text-md hover:opacity-60 hover:underline"
                  href="https://github.com/hukuryo"
                  target="blank"
                >
                  GitHub
                </Link>
              </li>
              <li className="mb-3">
                <Link
                  className="text-md hover:opacity-60 hover:underline"
                  href="https://twitter.com/hukuryo_"
                  target="blank"
                >
                  Twitter(X)
                </Link>
              </li>
              <li>
                <Link
                  className="text-md hover:opacity-60 hover:underline"
                  href="https://www.wantedly.com/id/ryohei0509"
                  target="blank"
                >
                  Wantedly
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-6 text-sm font-semibold border-l-8 border-stone-400 pl-2 text-gray-400 uppercase dark:text-white">
              プロフィール
            </h3>
            <ul>
              <li className="mb-3">
                <Link
                  className="text-md hover:opacity-60 hover:underline"
                  href="/profile"
                >
                  プロフィール
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-6 text-sm font-semibold text-gray-400 border-l-8 border-stone-400 pl-2 uppercase dark:text-white">
              カテゴリー
            </h3>
            <ul>
              <li className="mb-3">
                <Link
                  className="text-md hover:opacity-60 hover:underline"
                  href="/tech"
                >
                  技術記事
                </Link>
              </li>
              <li className="mb-3">
                <Link
                  className="text-md hover:opacity-60 hover:underline"
                  href="/books"
                >
                  読んだ本
                </Link>
              </li>
              <li className="mb-3">
                <Link
                  className="text-md hover:opacity-60 hover:underline"
                  href="/hobbies"
                >
                  趣味
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <hr className="mt-10 mb-10" />
        <span className="block text-center text-gray-600 dark:text-gray-400">
          © 2023 Hukuryo-no-Blog
        </span>
      </div>
    </footer>
  );
}
