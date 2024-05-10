import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
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
        setUser(_, action) {
            return { ...action.payload };
        },
        updateProfile: (state, action) => {
            return {
                ...state,
                firstName: action.payload.firstName,
                lastName: action.payload.lastName,
                country: action.payload.country,
                profile: {
                    ...state.profile,
                    role: action.payload.role,
                    hourly: action.payload.hourly,
                    experience: action.payload.experience
                }
            }
        },
        updateTopSocials: (state, action) => {
            return { ...state, profile: { ...state.profile, topFourSocials: action.payload.slice(0, 4) } }
        },
        updateAbout: (state, action) => {
            return { ...state, profile: { ...state.profile, about: action.payload } }
        },
        updateSkills: (state, action) => {
            return { ...state, profile: { ...state.profile, skills: action.payload } }
        },
        updateSocials: (state, action) => {
            return { ...state, socials: { ...state.socials, ...action.payload } }
        },
        updateImage: (state, action) => {
            return { ...state, image: action.payload }
        },
        updateLookingForWork: (state, action) => {
            return { ...state, profile: { ...state.profile, lookingForWork: action.payload } }
        },
    }
})

export const {
    setUser,
    updateProfile,
    updateTopSocials,
    updateAbout,
    updateSkills,
    updateSocials,
    updateLookingForWork,
    updateImage
} = userSlice.actions
export default userSlice.reducer;