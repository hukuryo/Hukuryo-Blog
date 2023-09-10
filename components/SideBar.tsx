import { ReactNode } from "react";
import { Recommendation } from "../components/Recommendation";
import { SearchInput } from "../components/sideBarParts/SearchInput";
import { SideBarProfile } from './sideBarParts/sideBarProfile'; 


export function SideBar() {
    return (
        <>
            <aside id="cta-button-sidebar" className="h-full hidden mb-5 ml-5 lg:block">
                <SearchInput/>
                <SideBarProfile />
                {/* <Recommendation/> */}
            </aside>
        </>
    );
}