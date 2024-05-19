import { createSlice } from "@reduxjs/toolkit";

const worksSlice = createSlice({
    name: "works",
    initialState: [],
    reducers: {
        setWorks: (_, action) => action.payload,
    }
})

export const { setWorks } = worksSlice.actions
export default worksSlice.reducer