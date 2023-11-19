import { createSlice } from "@reduxjs/toolkit";

export type UserState = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  houseNumber: string;
  streetName: string;
  suburb: string;
  state: string;
  postcode: string;
  country: string;
  avatar: string;
};

const initialState: UserState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  houseNumber: "",
  streetName: "",
  suburb: "",
  state: "",
  postcode: "",
  country: "",
  avatar: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateUserFirstName: (state, action) => {state.firstName = action.payload},
    updateUserLastName: (state, action) => {state.lastName = action.payload},
    updateUserEmail: (state, action) => {state.email = action.payload},
    updateUserPhone: (state, action) => {state.phone = action.payload},
    updateUserHouseNumber: (state, action) => {state.houseNumber = action.payload},
    updateUserStreetName: (state, action) => {state.streetName = action.payload},
    updateUserSuburb: (state, action) => {state.suburb = action.payload},
    updateUserState: (state, action) => {state.state = action.payload},
    updateUserPostcode: (state, action) => {state.postcode = action.payload},
    updateUserCountry: (state, action) => {state.country = action.payload},

    // TODO: add reducer to reset values 
    // TODO: combine reducers to update state in one
  },
});

export const userReducer = userSlice.reducer;

export const {
  updateUserFirstName,
  updateUserLastName,
  updateUserEmail,
  updateUserPhone,
  updateUserHouseNumber,
  updateUserStreetName, 
  updateUserSuburb,
  updateUserState,
  updateUserPostcode,
  updateUserCountry,
} = userSlice.actions;
