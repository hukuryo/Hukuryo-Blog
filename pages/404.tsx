import Link from "next/link";

export default function CustomErrorPage() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-semibold text-red-600">Oops!</h1>
        <p className="mt-2 text-lg text-gray-800">エラーが発生しました。</p>
        <p className="mt-2 mb-10 text-gray-600">
          申し訳ありませんが、リクエストされたページが見つかりませんでした。
        </p>
        <Link href="/" legacyBehavior>
          <a className="mt-10 px-6 py-3 text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition-colors duration-300 ease-in-out">
            トップページに戻る
          </a>
        </Link>
      </div>
    </div>
  );
}
