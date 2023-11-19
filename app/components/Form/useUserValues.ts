import { useSelector } from "react-redux/es/hooks/useSelector";
import {
  UserState,
  updateUserCountry,
  updateUserEmail,
  updateUserFirstName,
  updateUserHouseNumber,
  updateUserLastName,
  updateUserPhone,
  updateUserPostcode,
  updateUserState,
  updateUserStreetName,
  updateUserSuburb,
  updateUserAvatar,
} from "../../redux/user.slice";
import { ChangeEvent } from "react";
import { useDispatch } from "react-redux";

export type StoredUserState = {
  user: UserState;
};

//store and use form values
export default function useUserValues() {
    const dispatch = useDispatch();
    const state = useSelector((state: StoredUserState) => state);

    const firstName = state.user.firstName;
    const lastName = state.user.lastName;
    const email = state.user.email;
    const phone = state.user.phone;
    const houseNumber = state.user.houseNumber;
    const streetName = state.user.streetName;
    const suburb = state.user.suburb;
    const userStateAddress = state.user.state;
    const postcode = state.user.postcode;
    const country = state.user.country;
    const avatar = state.user.avatar;

    const handleFormChange = (event: ChangeEvent<HTMLInputElement>) => {
        const inputName = event.target.name;
        const value = event.target.value;
        if (inputName === "firstName") {
            dispatch(updateUserFirstName(value));
        }
        if (inputName === "lastName") {
            dispatch(updateUserLastName(value));
        }
        if (inputName === "email") {
            dispatch(updateUserEmail(value));
        }
        if (inputName === "phone") {
            dispatch(updateUserPhone(value));
        }
        if (inputName === "houseNumber") {
            dispatch(updateUserHouseNumber(value));
        }
        if (inputName === "streetName") {
            dispatch(updateUserStreetName(value));
        }
        if (inputName === "suburb") {
            dispatch(updateUserSuburb(value));
        }
        if (inputName === "userStateAddress") {
            dispatch(updateUserState(value));
        }
        if (inputName === "postcode") {
            dispatch(updateUserPostcode(value));
        }
        if (inputName === "country") {
            dispatch(updateUserCountry(value));
        }
        if (inputName === "avatar") {
            if (!event.currentTarget.files) return;
            else {
                const imgURL = URL.createObjectURL(event.currentTarget.files[0])
                dispatch(updateUserAvatar(imgURL));
            }
        }
        else return;
    }

  return {
    firstName,
    lastName,
    email,
    phone,
    houseNumber,
    streetName,
    suburb,
    userStateAddress,
    postcode,
    country,
    avatar,
    handleFormChange,
  };
}
