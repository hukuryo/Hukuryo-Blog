import React, { ReactNode } from "react";

type LayoutProps = {
    children: ReactNode;
};

export function ArticlePageLayout({ children }: LayoutProps) {
    return (
        <>
            <main className="lg:p-10 lg:pb-20 pt-8 pb-10">
                <div className="flex flex-row-reverse justify-center">
                    {children}
                </div>
            </main>
        </>
    )
}
