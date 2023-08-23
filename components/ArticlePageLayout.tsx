import React, { ReactNode } from "react";

type LayoutProps = {
    children: ReactNode;
};

export function ArticlePageLayout({ children }: LayoutProps) {
    return (
        <>
            <main className="p-10 bg-indigo-100">
                <div className="flex flex-row-reverse">
                    {children}
                </div>
            </main>
        </>
    )
}
