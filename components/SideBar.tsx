import { SearchInput } from "@/components/SearchInput";
import { Profile } from "@/components/Profile";
import { Recommendation } from "@/components/Recommendation";
import { ArticleProps } from "../types/article";

export const SideBar = () => {
    return (
        <>
            <aside id="cta-button-sidebar" className="h-full ml-10 hidden mb-5 lg:block">
                <SearchInput/>
                <Profile />
                {/* <Recommendation articles={ articles } pass={pass}/> */}
            </aside>
        </>
    );
}