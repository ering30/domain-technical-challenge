"use client";
import { useForm } from "react-hook-form";
import Submit from "../SubmitInput";
import FileInput from "../FileInput";
import FormSectionTitle from "../FormSectionTitle";
import FormInputLabel from "../FormInputLabel";
import useUserValues from "./useUserValues";
import { useEffect } from "react";

export default function Form() {
  const {
    firstName,
    lastName,
    email,
    phone,
    houseNumber,
    streetName,
    suburb,
    postcode,
    userStateAddress,
    country,
    avatar,
    handleFormChange,
  } = useUserValues();

  const {
    register,
    handleSubmit,
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
      userStateAddress,
      postcode,
      country,
      avatar,
    },
  });

  const successMessage = `Success! Thanks ${firstName}, your details have been submitted to hCard Builder.`;

  useEffect(() => {
    console.log(avatar);
  }, [avatar]);
  // TODO: check field validation
  return (
    <form
      onSubmit={handleSubmit(() => {
        alert(successMessage);
      })}
      className="flex flex-col justify-center max-w-lg w-full"
    >
      <h1 className="text-3xl my-4 font-bold text-navy">hCard Builder</h1>
      <div className="flex flex-col justify-evenly w-full ">
        <FormSectionTitle title="personal details" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 my-4">
          <div className="input-group__text">
            <FormInputLabel labelFor="firstName" title="given name" />
            <input
              type="text"
              id="firstName"
              {...register("firstName", {
                required: "This field is required.",
              })}
              onChange={(event) => handleFormChange(event)}
            />
            <p className="text-sm text-red py-1">{errors.firstName?.message}</p>
          </div>
          <div className="input-group__text">
            <FormInputLabel labelFor="lastName" title="surname" />
            <input
              type="text"
              id="lastName"
              {...register("lastName", {
                required: "This field is required.",
              })}
              onChange={(event) => handleFormChange(event)}
            />
            <p className="text-sm text-red py-1">{errors.lastName?.message}</p>
          </div>
          <div className="input-group__text">
            <FormInputLabel labelFor="email" title="email" />
            <input
              type="email"
              id="email"
              {...register("email", {
                required: "This field is required.",
              })}
              onChange={(event) => handleFormChange(event)}
            />
            <p className="text-sm text-red py-1">{errors.email?.message}</p>
          </div>
          <div className="input-group__text">
            <FormInputLabel labelFor="phone" title="phone" />
            <input
              type="number"
              id="phone"
              {...register("phone")}
              onChange={(event) => handleFormChange(event)}
            />
          </div>
        </div>
        <FormSectionTitle title="address" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 my-4">
          <div className="input-group__text">
            <FormInputLabel
              labelFor="houseNumber"
              title="house name or number"
            />
            <input
              id="houseNumber"
              {...register("houseNumber", {
                required: "This field is required.",
              })}
              onChange={(event) => handleFormChange(event)}
            />
            <p className="text-sm text-red py-1">
              {errors.houseNumber?.message}
            </p>
          </div>
          <div className="input-group__text">
            <FormInputLabel labelFor="streetName" title="street" />
            <input
              id="streetName"
              {...register("streetName", {
                required: "This field is required.",
              })}
              onChange={(event) => handleFormChange(event)}
            />
            <p className="text-sm text-red py-1">
              {errors.streetName?.message}
            </p>
          </div>
          <div className="input-group__text">
            <FormInputLabel labelFor="suburb" title="suburb" />
            <input
              id="suburb"
              {...register("suburb", {
                required: "This field is required.",
              })}
              onChange={(event) => handleFormChange(event)}
            />
            <p className="text-sm text-red py-1">{errors.suburb?.message}</p>
          </div>
          <div className="input-group__text">
            <FormInputLabel labelFor="state" title="state" />
            <input
              id="state"
              {...register("userStateAddress", {
                required: "This field is required.",
              })}
              onChange={(event) => handleFormChange(event)}
            />
            <p className="text-sm text-red py-1">
              {errors.userStateAddress?.message}
            </p>
          </div>
          <div className="input-group__text">
            <FormInputLabel labelFor="postcode" title="postcode" />
            <input
              type="number"
              id="postcode"
              {...register("postcode", {
                required: "This field is required.",
                minLength: { value: 4, message: "Please enter 4 digits" },
              })}
              onChange={(event) => handleFormChange(event)}
            />
            <p className="text-sm text-red py-1">{errors.postcode?.message}</p>
          </div>
          <div className="input-group__text">
            <FormInputLabel labelFor="country" title="country" />
            <input
              id="country"
              {...register("country", {
                required: "This field is required.",
              })}
              onChange={(event) => handleFormChange(event)}
            />
            <p className="text-sm text-red py-1">{errors.country?.message}</p>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 my-4 text-center">
          <FileInput
            id="avatar"
            name="avatar"
            title="Upload Avatar"
            handleChangeFunction={(event) => handleFormChange(event)}
          />
          {/* File Input doesn't load file data... TBC */}
          <Submit text="Create hCard" />
        </div>
      </div>
    </form>
  );
}
