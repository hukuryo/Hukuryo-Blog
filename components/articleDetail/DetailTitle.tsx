import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

type DetailTitle = {
    title: string;
    icon: IconDefinition
}

export function DetailTitle(props: DetailTitle) {
    const { title, icon } = props;
    return (
        <h1 className="text-3xl font-bold pb-6">
            <FontAwesomeIcon icon={icon} className="mr-2" />
            {title}
        </h1>
    )
}

