import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
    name: "filter",
    initialState: {
        location: "",
        hourly: false,
        fixed: false,
        paymentMin: '',
        paymentMax: '',
        experience: {
            entry: false,
            intermediate: false,
            expert: false,
        },
        jobType: {
            remote: false,
            onSite: false,
            hybrid: false,
        },
        numberOfApplicants: {
            "<5": false,
            "5-10": false,
            "10-15": false,
            "15-20": false,
            ">20": false
        }
    },
    reducers: {
        updateLocation: (state, action) => ({ ...state, location: action.payload }),
        updateHourly: (state) => ({ ...state, hourly: !state.hourly }),
        updateHourlyMin: (state, action) => ({ ...state, paymentMin: action.payload }),
        updateHourlyMax: (state, action) => ({ ...state, paymentMax: action.payload }),
        updateFixed: (state) => ({ ...state, fixed: !state.fixed }),
        updateExperience: (state, action) => ({ ...state, experience: { ...state.experience, ...action.payload } }),
        updateJobType: (state, action) => ({ ...state, jobType: { ...state.jobType, ...action.payload } }),
        updateNumberOfApplicants: (state, action) => ({ ...state, numberOfApplicants: { ...state.numberOfApplicants, ...action.payload } }),
        clearFilter: () => ({
            location: "",
            hourly: false,
            fixed: false,
            paymentMin: '',
            paymentMax: '',
            experience: {
                entry: false,
                intermediate: false,
                expert: false,
            },
            jobType: {
                remote: false,
                onSite: false,
                hybrid: false,
            },
            numberOfApplicants: {
                "<5": false,
                "5-10": false,
                "10-15": false,
                "15-20": false,
                ">20": false
            }
        }),
    }
})

export const {
    updateLocation,
    updateHourly,
    updateHourlyMax,
    updateHourlyMin,
    clearFilter,
    updateFixed,
    updateExperience,
    updateJobType,
    updateNumberOfApplicants
} = filterSlice.actions
export default filterSlice.reducer;