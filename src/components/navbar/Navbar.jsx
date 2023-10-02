import React, { useState } from "react";
import {
  AppsIcon,
  CancelRoundedIcon,
  TripOriginIcon,
} from "../../assets/icons";

const Navbar = () => {
  const [drop, setDrop] = useState(true);
  return (
    <section className="z-10  fixed sm:h-24 h-14 w-full flex items-center justify-between px-3 border-b-red-600 border-b-2 bg-white bg-opacity-60">
      <a href="/" className="flex items-center gap-1 h-min">
        <TripOriginIcon />
        <h1 className="text-lg font-bold">Travello</h1>
      </a>

      <div
        className={`${
          drop ? "-top-96" : "top-28"
        } -z-10 ease-out duration-700 flex max-sm:flex-col max-sm:items-center max-sm:absolute max-sm:w-[90%] max-sm:shadow-2xl rounded-xl max-sm:right-[50%] max-sm:bg-white max-sm:trasform max-sm:translate-x-[50%]`}
      >
        <ul className="flex max-sm:flex-col items-center gap-8 my-10">
          <li>
            <a href="#destination" className="hover:underline">Destination</a>
          </li>
          <li><a href="#about" className="hover:underline">About</a></li>
          <li><a href="#testimonial" className="hover:underline">Testimonial</a></li>
          <li><a href="#gallery" className="hover:underline">Gallery</a></li>
        </ul>
        <span className="sm:hidden">
          <CancelRoundedIcon
            onClick={() => setDrop(!drop)}
            className="absolute cursor-pointer -bottom-3 "
          />
        </span>
      </div>

      <button className=" sm:px-4 sm:py-3 p-1 rounded-xl bg-red-500 text-white sm:w-24 w-14 max-sm:text-xs">
        Sign Up
      </button>
      <span className="sm:hidden">
        <AppsIcon onClick={() => setDrop(!drop)} className="cursor-pointer" />
      </span>
    </section>
  );
};

export default Navbar;
