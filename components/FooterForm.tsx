export function FooterForm() {
    return (
        <footer className='mt-64 w-full'>
            <p className='font-bold mb-7 border-b-8'>お問い合わせはこちらから</p>
            <div className="max-w-[100%] mx-auto">
                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-5">
                    <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        お名前
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="name"
                        type="text"
                        placeholder="お名前を入力"
                    />
                    </div>
                    <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        メールアドレス
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="email"
                        type="email"
                        placeholder="メールアドレスを入力"
                    />
                    </div>
                    <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        お問合せ内容
                    </label>
                    <textarea
                        className="shadow appearance-none border rounded h-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="message"
                        placeholder="お問合せ内容を入力"
                    ></textarea>
                    </div>
                    <div className="flex items-center justify-center">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 hover:scale-105 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                    >送信
                    </button>
                    </div>
                </form>
            </div>
        </footer>
    );
}