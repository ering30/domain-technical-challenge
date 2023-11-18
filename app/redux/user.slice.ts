import { createSlice } from "@reduxjs/toolkit";

type UserState = {
    firstName: string,
    lastName: string,
    email: string,
    phone: string,
    address: {
        houseNumber: string,
        streetName: string,
        suburb: string,
        state: string,
        postcode: string,
        country: string
    },
    imgURL: string
  }

const initialState: UserState = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: {
        houseNumber: "",
        streetName: "",
        suburb: "",
        state: "",
        postcode: "",
        country: "",
    },
    imgURL: ""
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    }
})

export const userReducer = userSlice.reducer;

export const {
} = userSlice.actions;