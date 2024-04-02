import Image from "next/image";
import Link from "next/link";
import React from "react";
import { GitHubLogoIcon, TwitterLogoIcon } from '@radix-ui/react-icons'

export function Profile() {
  return (
    <div className="bg-white text-center lg:text-left border py-4 px-3 lg:w-60 rounded-lg shadow-md w-full">
      <div className="text-center flex justify-center mb-3">
        <Image
          src="/profile.png"
          alt="Profile Logo"
          className="dark:invert my-1 rounded-full"
          width={80}
          height={100}
        />
      </div>
      <h3 className="text-center mt-4 mb-7">Hukuryo</h3>
      <p className="mb-3 text-xs dark:text-blue-400">
        2022/11~エンジニアになりました。
        <br />
        普段はフロント中心に勉強も頑張っています。
      </p>
      <div className="mb-10 mt-10 flex items-center justify-center ">
        <Link className="text-xs" href="/profile">
          <button className="shadow-lg text-xs ease-in-out duration-300 hover:bg-gray-400 hover:scale-105 bg-gray-500 shadow-gray-500/50 text-white rounded px-2 py-2">
            プロフィール
          </button>
        </Link>
      </div>
      <div className="flex justify-center mt-10">
        <Link
          href="https://github.com/hukuryo"
          className="mr-5 ease-in-out duration-300 hover:scale-110 hover:opacity-50"
          target="blank"
        >
          <GitHubLogoIcon className="h-[1.2rem] w-[1.2rem]" />
        </Link>
        <Link
          href="https://twitter.com/hukuryo_"
          className="ease-in-out duration-300 hover:scale-110 hover:opacity-50"
          target="blank"
        >
          <TwitterLogoIcon className="h-[1.2rem] w-[1.2rem]" />
        </Link>
      </div>
    </div>
  );
}
