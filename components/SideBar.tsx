import { SearchInput } from "@/components/SearchInput";
import { Profile } from "@/components/Profile";


export function SideBar() {
    return (
        <>
            <aside id="cta-button-sidebar" className="h-full ml-10 hidden mb-5 lg:block">
                <SearchInput/>
                <Profile />
            </aside>
        </>
    );
}