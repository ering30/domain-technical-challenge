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
    <div className="flex flex-col justify-center h-[400px] lg:h-full">
      <div className={`self-center h-[300px] max-w-[500px] ${merriweather.className}`}>
      <h2 className={`text-right text-base text-darkGrey mb-2 -mt-[30px] ${inter.className}`}>HCARD PREVIEW</h2>
        <div className="vcard h-full w-full relative">
          <div className="flex flex-col justify-end p-5 h-[33%] bg-navy">
            <h1 className="fn text-2xl text-left font-bold text-white max-w-[370px]">
              {fullName}
            </h1>
            <div className="absolute w-[80px] h-[100px] bg-white top-3 right-3 p-2 border-2 border-lightGrey object-cover flex justify-center items-center">
              <Image src={state.user.avatar===""? `/images/placeholder-avatar.jpeg`: state.user.avatar} alt="User Avatar" width={60} height={80} className="photo"/>
            </div>
          </div>
          <div className="bg-white h-[67%] p-6 card-info__grid">
            <div className="flex card-info__main-fields">
              <p className={`card-info__label ${inter.className}`}>EMAIL</p>
              <p className="email card-info__content--main">{formatEmail}</p>
            </div>
            <div className="flex card-info__main-fields">
              <p className={`card-info__label ${inter.className}`}>PHONE</p>
              <p className="card-info__content--main">{state.user.phone}</p>
            </div>
            <div className="flex card-info__main-fields">
              <p className={`card-info__label ${inter.className}`}>ADDRESS</p>
              <p className="street-address card-info__content--main">{addressLine1}</p>
            </div>
            <div className="flex card-info__main-fields">
              <div className=""></div>
              <p className="locality region card-info__content--main">
                {addressLine2}
              </p>
            </div>
            <div className="grid grid-cols-2 card-info__border">
              <div className=" grid grid-cols-3 gap-1">
                <p className={`card-info__label ${inter.className}`}>
                  POSTCODE
                </p>
                <p className="card-info__content">{state.user.postcode}</p>
              </div>
              <div className="grid grid-cols-3 gap-1">
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
