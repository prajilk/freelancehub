import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import profileViewModeSlice from "./profileViewModeSlice";

export const store = configureStore({
    reducer: {
        user: userSlice,
        profileViewMode: profileViewModeSlice
    }
})