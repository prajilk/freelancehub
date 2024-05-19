import { createSlice } from "@reduxjs/toolkit";

const searchQuerySlice = createSlice({
    name: "searchQuery",
    initialState: "",
    reducers: {
        updateSearchQuery: (_, action) => action.payload
    }
})

export const { updateSearchQuery } = searchQuerySlice.actions
export default searchQuerySlice.reducer