import { createSlice } from "@reduxjs/toolkit";

const portfolioSlice = createSlice({
    name: "portfolio",
    initialState: [],
    reducers: {
        setPortfolio: (_, action) => action.payload,
        updatePortfolio: (state, action) => [action.payload, ...state],
        deletePortfolio: (state, action) => state.filter(portfolio => portfolio._id !== action.payload),
    }
})

export const { setPortfolio, updatePortfolio, deletePortfolio } = portfolioSlice.actions
export default portfolioSlice.reducer