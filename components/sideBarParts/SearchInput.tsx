import React, { useState } from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export function SearchInput() {
    const [inputValue, setInputText] = useState("");
    
    const inputText = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputText(e.target.value)
    }

    return (
        <>
            <h2>記事を検索</h2>
            <form className="flex items-center mb-10">
                <input
                    type="text"
                    value={inputValue}
                    onChange={inputText}
                    className="rounded-l-md p-2 border-r-0 border-secondary-300 focus:ring focus:ring-primary-300 focus:ring-opacity-50"
                    placeholder="検索キーワード"
                />
                <Link href={`/search?s=${inputValue}`}>
                    <button
                    className="bg-blue-500 px-4 py-2 hover:opacity-80 bg-primary-500 hover:bg-primary-600 text-white rounded-md"
                    >
                    <FontAwesomeIcon icon={faMagnifyingGlass}/>
                    </button>
                </Link>
            </form>
        </>
    )
}
