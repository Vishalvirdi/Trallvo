import React,{useEffect} from "react";
import Aos from 'aos'
import 'aos/dist/aos.css'
import {
  FacebookOutlinedIcon,
  InstagramIcon,
  TripOriginIcon,
  TwitterIcon,
} from "../../assets/icons";

const Footer = () => {

  useEffect(()=>{
    Aos.init({duration: 2000})
  },[])

  return (
    <footer data-aos='fade-up' className="bg-red-200 p-10">
      <div className="flex max-md:flex-col justify-evenly max-md:gap-4 w-full">
        <div className="flex flex-col items-center">
          <div className=" flex items-center gap-1">
            <TripOriginIcon />
            <h1 className="text-lg font-bold">Travello</h1>
          </div>
          <div className="flex gap-4 p-4 text-white">
            <div className="h-10 w-10 bg-red-600 rounded-full flex items-center justify-center cursor-pointer">
              <FacebookOutlinedIcon />
            </div>
            <div className="h-10 w-10 bg-red-600 rounded-full flex items-center justify-center cursor-pointer">
              <TwitterIcon />
            </div>
            <div className="h-10 w-10 bg-red-600 rounded-full flex items-center justify-center cursor-pointer">
              <InstagramIcon />
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <h1 className="font-bold text-lg">Information</h1>
          <a href="/" className="hover:underline">
            Home
          </a>
          <a href="/" className="hover:underline">
            Explore
          </a>
          <a href="/" className="hover:underline">
            Travel
          </a>
          <a href="/" className="hover:underline">
            Blog
          </a>
        </div>
        <div className="flex flex-col items-center">
          <h1 className="font-bold text-lg">Helpful Links</h1>
          <a href="/" className="hover:underline">
            Destination
          </a>
          <a href="/" className="hover:underline">
            Support
          </a>
          <a href="/" className="hover:underline">
            Travel & Condition
          </a>
          <a href="/" className="hover:underline">
            Privacy
          </a>
        </div>
        <div className="flex flex-col items-center">
          <h1 className="font-bold text-lg">Contact Links</h1>
          <a href="/">+91 844 558 9271</a>
          <p>kapil012002@gmail.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
