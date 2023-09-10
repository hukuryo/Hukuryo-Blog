import { SearchInput } from "./SideBarParts/SearchInput";
import { SideBarProfile } from "./SideBarParts/SideBarProfile";


export function SideBar() {
    return (
        <>
            <aside id="cta-button-sidebar" className="h-full hidden mb-5 ml-5 lg:block">
                <SearchInput/>
                <SideBarProfile />
            </aside>
        </>
    );
}