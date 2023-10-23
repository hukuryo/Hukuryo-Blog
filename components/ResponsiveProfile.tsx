import React from "react";
import { SearchInput } from "./SearchInput";
import { Profile } from "./Profile";

export function ResponsiveProfile() {
  return (
    <div className="lg:hidden mt-20">
      <SearchInput />
      <Profile />
    </div>
  );
}
