import Image from 'next/image'
import React from 'react'

type imageUrl = {
    imageUrl: string;
}

export function DetailImage(props: imageUrl) {
    const { imageUrl } = props;
    return (
        <div className="bg-secondary-100/50">
            <div className="w-full mb-10">
                <Image
                    src={imageUrl}
                    alt="見出し画像"
                    width={40}
                    height={60}
                    className="w-full h-auto shadow-sm border rounded-md object-cover"
                />
            </div>
        </div>
    )
}

