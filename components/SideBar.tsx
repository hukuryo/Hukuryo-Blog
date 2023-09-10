import { SearchInput } from "@/components/SearchInput";
import { SideBarProfile } from "@/components/SideBarProfile";


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