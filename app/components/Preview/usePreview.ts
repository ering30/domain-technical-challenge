import { useSelector } from "react-redux/es/hooks/useSelector";
import { UserState } from "@/app/redux/user.slice";

export type StoredUserState = {
  user: UserState;
};

const capitaliseFirstLetters = (str: string) => {
    return str.toLowerCase().split(" ").map((word)=> word.charAt(0).toUpperCase() + word.slice(1)).join(" ")
}

export default function usePreviewForm() {
  const state = useSelector((state: StoredUserState) => state);
  
  const fullName = capitaliseFirstLetters(state.user.firstName) + " " + capitaliseFirstLetters(state.user.lastName);
  const formatEmail = state.user.email.toLowerCase();
  
  const streetNameCapitalised = capitaliseFirstLetters(state.user.streetName);
  const houseNameCapitalised = capitaliseFirstLetters(state.user.houseNumber);
  const addressLine1 = houseNameCapitalised + " " + streetNameCapitalised;

  const suburbCapitalised = capitaliseFirstLetters(state.user.suburb);
  const checkForComma =
  state.user.suburb !== "" && state.user.state !== "" ? ", " : " ";
  const addressLine2 = suburbCapitalised + checkForComma + state.user.state.toUpperCase();

  const countryCapitalised = capitaliseFirstLetters(state.user.country);

  return {fullName, addressLine1, addressLine2, countryCapitalised, formatEmail}; 
}

