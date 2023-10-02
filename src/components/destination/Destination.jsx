import React,{useEffect} from "react";
import Aos from 'aos'
import 'aos/dist/aos.css'

import {
  FmdGoodIcon,
  PaymentIcon,
  SearchIcon,
  CalendarMonthIcon,
} from "../../assets/icons";
import DestinationCard from "../cards/DestinationCard";

const Destination = () => {

  useEffect(()=>{
    Aos.init({duration: 2000})
  },[])

  return (
    <section id="destination" className="flex flex-col justify-center gap-4">
      <button className="text-red-600 font-semibold">EXPLORE NOW</button>
      <h1 data-aos='fade-up' className="font-bold text-2xl text-center">
        Find Your Dream Dream Destination
      </h1>
      <p data-aos='fade-up' className="text-sm text-center">
        Fill in the fiedls below to find the best spot for your next tour.
      </p>
      <div className="grid grid-cols-4 max-lg:grid-cols-1  gap-4 mt-4 " >
        <div className="bg-red-300 p-3 rounded-full flex gap-2" data-aos='fade-up'>
          <FmdGoodIcon />
          <input
            type="text"
            placeholder="Location"
            className="outline-none bg-transparent w-full placeholder-gray-600 text-semibold shadow-sm"
          />
        </div>
        <div className="bg-red-300 p-3 rounded-full flex gap-2" data-aos='fade-up'>
          <PaymentIcon />
          <input
            type="text"
            placeholder="Budget"
            className="outline-none bg-transparent w-full placeholder-gray-600 text-semibold shadow-sm"
          />
        </div>
        <div className="bg-red-300 p-3 rounded-full flex gap-2" data-aos='fade-up'>
          <CalendarMonthIcon />{" "}
          <input
            type="text"
            placeholder="Date"
            className="outline-none bg-transparent w-full placeholder-gray-600 text-semibold shadow-sm"
          />
        </div>
        <div data-aos='fade-up' className=" text-white bg-red-500 py-3 rounded-3xl flex items-center justify-center gap-2 shadow-md shadow-gray-300 cursor-pointer">
          <SearchIcon />
          Search
        </div>
      </div>
      <div className="grid grid-cols-4 max-lg:grid-cols-3 max-sm:grid-cols-2 max-sm:gap-2 gap-5">
      <DestinationCard />
      <DestinationCard />
      <DestinationCard />
      <DestinationCard />
      <DestinationCard />
      <DestinationCard />
      <DestinationCard />
      <DestinationCard />
      </div>
    </section>
  );
};

export default Destination;
