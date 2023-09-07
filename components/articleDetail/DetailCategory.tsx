import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

type CategoryArea = {
    category: string;
    icon: IconDefinition;
    createdDate: string;
}

export function DetailCategory(props: CategoryArea) {
    const { category, icon, createdDate } = props;
    return (
        <div className="mb-12">
            <span className="text-sm rounded-full p-2 bg-gray-200">{category}</span>
            <small className="text-gray-500 ml-2">
                <FontAwesomeIcon icon={icon} className="mr-1" />
                {createdDate}
            </small>
        </div>
    )
}