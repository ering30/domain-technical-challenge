"use client";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { Merriweather, Inter } from "next/font/google";
import Image from "next/image";
import usePreviewForm, { StoredUserState } from "./usePreview";

const merriweather = Merriweather({
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
});
const inter = Inter({ subsets: ["latin"] });

export default function Preview() {
  const state = useSelector((state: StoredUserState) => state);
  const { fullName, addressLine1, addressLine2, countryCapitalised, formatEmail } = usePreviewForm();

  return (
    <div className="flex flex-col justify-center h-full">
      <h2 className="text-right text-base text-gray-500 my-2">HCARD PREVIEW</h2>
      <div className={`h-[300px] ${merriweather.className}`}>
        <div className="h-full w-full relative">
          <div className="flex flex-col justify-end p-5 h-[33%] bg-blue-950">
            <h1 className="text-2xl text-left font-bold text-white max-w-[370px]">
              {fullName}
            </h1>
            <div className="absolute w-[80px] h-[100px] bg-white top-3 right-3 p-2 border-2 border-gray-300">
              <Image src={state.user.avatar===""? `/images/placeholder-avatar.jpeg`: state.user.avatar} alt="User Avatar" width={60} height={80} />
            </div>
          </div>
          <div className="bg-white h-[67%] p-6 card-info__grid">
            <div className="flex card-info__main-fields">
              <p className={`card-info__label ${inter.className}`}>EMAIL</p>
              <p className="card-info__content--main">{formatEmail}</p>
            </div>
            <div className="flex card-info__main-fields">
              <p className={`card-info__label ${inter.className}`}>PHONE</p>
              <p className="card-info__content--main">{state.user.phone}</p>
            </div>
            <div className="flex card-info__main-fields">
              <p className={`card-info__label ${inter.className}`}>ADDRESS</p>
              <p className="card-info__content--main">{addressLine1}</p>
            </div>
            <div className="flex card-info__main-fields">
              <div className=""></div>
              <p className="card-info__content--main">
                {addressLine2}
              </p>
            </div>
            <div className="grid grid-cols-2 card-info__border">
              <div className=" grid grid-cols-3">
                <p className={`card-info__label ${inter.className}`}>
                  POSTCODE
                </p>
                <p className="card-info__content">{state.user.postcode}</p>
              </div>
              <div className="grid grid-cols-3">
                <p className={`card-info__label ${inter.className}`}>COUNTRY</p>
                <p className="card-info__content">{countryCapitalised}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
