import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import clientSlice from "./clientSlice"
import profileViewModeSlice from "./profileViewModeSlice";
import filterSlice from "./filterSlice";
import searchQuerySlice from "./searchQuerySlice";
import portfolioSlice from "./portfolioSlice";
import worksSlice from "./worksSlice";
import jobsSlice from "./jobsSlice";

export const store = configureStore({
    reducer: {
        user: userSlice,
        client: clientSlice,
        profileViewMode: profileViewModeSlice,
        works: worksSlice,
        jobs: jobsSlice,
        searchQuery: searchQuerySlice,
        filter: filterSlice,
        portfolio: portfolioSlice,
    }
})