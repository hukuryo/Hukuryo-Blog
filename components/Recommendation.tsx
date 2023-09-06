import React from 'react';

export function Recommendation() {
  // おすすめの記事データ（仮定）
    const recommendedArticles = [
        {
        id: 1,
        title: '10のコツでプロのWebデザイナーになる方法',
        imageUrl: 'image1.jpg',
        },
        {
        id: 2,
        title: '効果的なプログラミング学習戦略',
        imageUrl: 'image2.jpg',
        },
        {
        id: 3,
        title: '美味しい料理の作り方',
        imageUrl: 'image3.jpg',
        },
    ];

    return (
        <div>
        <h2 className="text-xl text-center font-semibold mb-4">おすすめの記事</h2>
        <div className="w-60 gap-4">
            {recommendedArticles.map((article) => (
            <div key={article.id} className="bg-white rounded-md shadow-md hover:shadow-lg">
                <img
                src={article.imageUrl}
                alt={article.title}
                className="w-full h-40 object-cover rounded-t-md"
                />
                <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{article.title}</h3>
                <a
                    href={`/article/${article.id}`}
                    className="text-blue-500 hover:underline"
                >
                    続きを読む
                </a>
                </div>
            </div>
            ))}
        </div>
        </div>
    );
}
