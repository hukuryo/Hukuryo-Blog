import React, { ReactNode } from "react";

type LayoutProps = {
    children: ReactNode;
};

export function Layout({ children }: LayoutProps) {
    return (
        <>
        <main className="sm:px-10 pb-48">
            <div className="flex pt-10 flex-row-reverse">
                <div className="p-10 md:mr-3 md:ml-5 mb-10  w-full">
                    {children}
                </div>
            </div>
        </main>
        </>
    )
}
