import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

import { animateScroll as scroll } from "react-scroll";

export function ScrollUp() {
    const scrollToTop = () => {
        scroll.scrollToTop();
    };
    
    return (
        <button className='fixed bottom-6 right-6 z-50 bg-gray-500 text-white px-4 py-3 rounded-full cursor-pointer transition-opacity' onClick={scrollToTop}>
            <FontAwesomeIcon icon={faChevronUp} />
        </button>
    )
}
