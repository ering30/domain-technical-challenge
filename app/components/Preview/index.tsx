"use client";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { UserState } from "@/app/redux/user.slice";
import { Merriweather, Inter } from "next/font/google";

type StoredUserState = {
  user: UserState;
};

const merriweather = Merriweather({
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
});
const inter = Inter({ subsets: ["latin"] });

export default function Preview() {
  const state = useSelector((state: StoredUserState) => state);
  const fullName = state.user.firstName + " " + state.user.lastName;

  return (
    <div className="flex flex-col justify-center h-full">
      <h2 className="text-right text-base text-gray-500 my-2">HCARD PREVIEW</h2>
      <div className={`h-[320px] ${merriweather.className}`}>
        <div className="flex flex-col justify-end p-5 h-[30%] bg-blue-950">
          <h1 className="text-2xl text-left font-bold text-white">
            {fullName}
          </h1>
          {/* <div className="relative w-[80px] h-[80px] bg-white"></div> */}
        </div>
        <div className="bg-white h-[70%] p-5 pt-7 card-info__grid">
          <div className="flex card-info__main-fields">
            <p className={`card-info__label ${inter.className}`}>EMAIL</p>
            <p className="card-info__content--main">{state.user.email}</p>
          </div>
          <div className="flex card-info__main-fields">
            <p className={`card-info__label ${inter.className}`}>PHONE</p>
            <p className="card-info__content--main">{state.user.phone}</p>
          </div>
          <div className="flex card-info__main-fields">
            <p className={`card-info__label ${inter.className}`}>ADDRESS</p>
            <p className="card-info__content--main">{state.user.phone}</p>
          </div>
          <div className="flex card-info__main-fields">
            <div className=""></div>
            <p className="card-info__content--main">
              {state.user.suburb}, {state.user.state}
            </p>
          </div>
          <div className="grid grid-cols-2 card-info__border">
            <div className=" grid grid-cols-3">
              <p className={`card-info__label ${inter.className}`}>POSTCODE</p>
              <p className="card-info__content">{state.user.postcode}</p>
            </div>
            <div className="grid grid-cols-3">
              <p className={`card-info__label ${inter.className}`}>COUNTRY</p>
              <p className="card-info__content">{state.user.country}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
