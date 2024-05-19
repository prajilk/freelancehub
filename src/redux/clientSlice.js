import { createSlice } from "@reduxjs/toolkit";

const clientSlice = createSlice({
    name: "client",
    initialState: {
        _id: "",
        firstName: "",
        lastName: "",
        email: "",
        country: "",
        image: "",
        profile: {
            userId: "",
            topFourSocials: [],
            skills: [],
            about: "",
            experience: "",
            hourly: 0,
            language: {},
            lookingForWork: false,
            role: ""
        },
        socials: {
            dribbble: "",
            github: "",
            linkedIn: "",
            stackOverflow: "",
            website: "",
            x: ""
        }
    },
    reducers: {
        setClient(_, action) {
            return { ...action.payload };
        }
    }
})

export const {
    setClient
} = clientSlice.actions
export default clientSlice.reducer;