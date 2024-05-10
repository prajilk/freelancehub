import { createSlice } from "@reduxjs/toolkit";

const profileViewModeSlice = createSlice({
    name: "profileViewMode",
    initialState: false,
    reducers: {
        setToViewMode: () => {
            return true
        },
        disableViewMode: () => {
            return false
        }
    }
})

export const { setToViewMode, disableViewMode } = profileViewModeSlice.actions
export default profileViewModeSlice.reducer;