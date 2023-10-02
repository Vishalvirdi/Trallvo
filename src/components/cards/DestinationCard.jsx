import React,{useEffect} from "react";
import Aos from 'aos'
import 'aos/dist/aos.css'
import { image1 } from "../../assets/images";
import { FmdGoodIcon } from "../../assets/icons";
const DestinationCard = () => {

  useEffect(()=>{
    Aos.init({duration: 2000})
  },[])
  return (
    <div data-aos='fade-up' className="h-64 max-md:h-56 relative shadow-sm">
      <img
        src={image1}
        alt="destination"
        className="rounded-lg absolute h-full w-full object-cover"
      />
      <div className="absolute flex justify-between w-full bottom-0 p-4 items-center">
        <div className="text-white">
          <p>Baro Baro Island</p>
          <FmdGoodIcon />
          Netherlands
        </div>
        <div className="px-4 py-2 h-min rounded-xl bg-gray-400">
          <h1>4.6</h1>
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;
