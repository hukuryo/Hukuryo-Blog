import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

import { animateScroll as scroll } from "react-scroll";

export function ScrollUp() {
    // スクロールアップボタンを表示、非表示させるためのState
    const [isVisible, setIsVisible] = useState(false);

    // スクロールしている高さを取得して、stateの値を更新する処理
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) { // ここで表示するスクロール位置を調整
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };
        
        window.addEventListener('scroll', toggleVisibility);

        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    const scrollToTop = () => {
        scroll.scrollToTop();
    };
    
    return (
        <div className="fixed bottom-6 right-6 z-50">
            <button className={`fixed bottom-6 right-6 z-50 bg-gray-500 text-white px-4 py-3 rounded-full cursor-pointer transition-opacity ${isVisible ? 'opacity-100' : 'opacity-0'}`} onClick={scrollToTop}>
                <FontAwesomeIcon icon={faChevronUp} />
            </button>
        </div>
    )
}