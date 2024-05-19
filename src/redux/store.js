import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import clientSlice from "./clientSlice"
import profileViewModeSlice from "./profileViewModeSlice";
import filterSlice from "./filterSlice";
import searchQuerySlice from "./searchQuerySlice";
import portfolioSlice from "./portfolioSlice";

export const store = configureStore({
    reducer: {
        user: userSlice,
        client: clientSlice,
        profileViewMode: profileViewModeSlice,
        searchQuery: searchQuerySlice,
        filter: filterSlice,
        portfolio: portfolioSlice,
    }
})