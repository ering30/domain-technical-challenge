"use client";
import { useForm } from "react-hook-form";
import Submit from "../SubmitInput";
import FileInput from "../FileInput";
import { useDispatch, useSelector } from "react-redux";
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
} from "../../redux/user.slice";
import handleFileInputChange from "@/app/Hooks/useFileInput";
import useFileInput from "@/app/Hooks/useFileInput";

export default function Form() {
  const dispatch = useDispatch();
  const { handleFileInputChange } = useFileInput();
  const firstName = useSelector((state: UserState) => state.firstName);
  const lastName = useSelector((state: UserState) => state.lastName);
  const email = useSelector((state: UserState) => state.email);
  const phone = useSelector((state: UserState) => state.phone);
  const houseNumber = useSelector((state: UserState) => state.houseNumber);
  const streetName = useSelector((state: UserState) => state.streetName);
  const suburb = useSelector((state: UserState) => state.suburb);
  const state = useSelector((state: UserState) => state.state);
  const postcode = useSelector((state: UserState) => state.postcode);
  const country = useSelector((state: UserState) => state.country);
  const avatar = useSelector((state: UserState) => state.avatar);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName,
      lastName,
      email,
      phone,
      houseNumber,
      streetName,
      suburb,
      state,
      postcode,
      country,
      avatar
    },
  });

  const results = watch();

  const successMessage = `Success! Thanks ${results.firstName}, your details have been submitted to hCard Builder. ${results.avatar}`;
  // const handleFileInput = (event:HTMLInputElement) => useHandleFileInputChange(event);

  // TODO: check field validation
  return (
    <form
      onSubmit={handleSubmit(() => {
        alert(successMessage);
        console.log(avatar)
      })}
    >
      <div className="flex-col justify-evenly w-[500px]">
        <p>PERSONAL DETAILS</p>
        <hr />
        <div className="grid grid-cols-2 gap-3 my-4">
          <div className="input-group__text">
            <label htmlFor="firstName">GIVEN NAME</label>
            <input
              type="text"
              id="firstName"
              {...register("firstName", {
                required: "This field is required.",
                onChange: (event) =>
                  dispatch(updateUserFirstName(event.target.value)),
              })}
            />
            <p className="text-sm text-red-600 py-1">
              {errors.firstName?.message}
            </p>
          </div>
          <div className="input-group__text">
            <label htmlFor="lastName">SURNAME</label>
            <input
              type="text"
              id="lastName"
              {...register("lastName", {
                required: "This field is required.",
                onChange: (event) =>
                  dispatch(updateUserLastName(event.target.value)),
              })}
            />
            <p className="text-sm text-red-600 py-1">
              {errors.lastName?.message}
            </p>
          </div>
          <div className="input-group__text">
            <label htmlFor="email">EMAIL</label>
            <input
              type="email"
              id="email"
              {...register("email", {
                required: "This field is required.",
                onChange: (event) =>
                  dispatch(updateUserEmail(event.target.value)),
              })}
            />
            <p className="text-sm text-red-600 py-1">{errors.email?.message}</p>
          </div>
          <div className="input-group__text">
            <label htmlFor="phone">PHONE NUMBER</label>
            <input
              type="phone"
              id="phone"
              {...register("phone", {
                onChange: (event) =>
                  dispatch(updateUserPhone(event.target.value)),
              })}
            />
          </div>
        </div>
        <p>ADDRESS</p>
        <hr />
        <div className="grid grid-cols-2 gap-3 my-4">
          <div className="input-group__text">
            <label htmlFor="houseNumber">HOUSE NAME OR NUMBER</label>
            <input
              id="houseNumber"
              {...register("houseNumber", {
                required: "This field is required.",
                onChange: (event) =>
                  dispatch(updateUserHouseNumber(event.target.value)),
              })}
            />
            <p className="text-sm text-red-600 py-1">
              {errors.houseNumber?.message}
            </p>
          </div>
          <div className="input-group__text">
            <label htmlFor="streetName">STREET</label>
            <input
              id="streetName"
              {...register("streetName", {
                required: "This field is required.",
                onChange: (event) =>
                  dispatch(updateUserStreetName(event.target.value)),
              })}
            />
            <p className="text-sm text-red-600 py-1">
              {errors.streetName?.message}
            </p>
          </div>
          <div className="input-group__text">
            <label htmlFor="suburb">SUBURB</label>
            <input
              id="suburb"
              {...register("suburb", {
                required: "This field is required.",
                onChange: (event) =>
                  dispatch(updateUserSuburb(event.target.value)),
              })}
            />
            <p className="text-sm text-red-600 py-1">
              {errors.suburb?.message}
            </p>
          </div>
          <div className="input-group__text">
            <label htmlFor="state">STATE</label>
            <input
              id="state"
              {...register("state", {
                required: "This field is required.",
                onChange: (event) =>
                  dispatch(updateUserState(event.target.value)),
              })}
            />
            <p className="text-sm text-red-600 py-1">{errors.state?.message}</p>
          </div>
          <div className="input-group__text">
            <label htmlFor="postcode">POSTCODE</label>
            <input
              id="postcode"
              {...register("postcode", {
                required: "This field is required.",
                minLength: { value: 4, message: "Please enter 4 digits" },
                onChange: (event) =>
                  dispatch(updateUserPostcode(event.target.value)),
              })}
            />
            <p className="text-sm text-red-600 py-1">
              {errors.postcode?.message}
            </p>
          </div>
          <div className="input-group__text">
            <label htmlFor="country">COUNTRY</label>
            <input
              id="country"
              {...register("country", {
                required: "This field is required.",
                onChange: (event) =>
                  dispatch(updateUserCountry(event.target.value)),
              })}
            />
            <p className="text-sm text-red-600 py-1">
              {errors.country?.message}
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3 my-4 text-center">
          <FileInput id="avatar" handleChange={handleFileInputChange}/>
          <p className="text-sm text-red-600 py-1">{errors.avatar?.message}</p>
          <Submit text="Create hCard" />
        </div>
      </div>
    </form>
  );
}
