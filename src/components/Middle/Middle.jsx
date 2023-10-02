import React,{useEffect} from "react";
import Aos from 'aos'
import 'aos/dist/aos.css'
const Middle = () => {

  useEffect(()=>{
    Aos.init({duration: 2000})
  },[])


  return (
    <section className="flex  justify-center" data-aos='fade-up'>
      <div className="w-full rounded-3xl bg-red-300 flex max-md:flex-col sm:justify-evenly sm:items-center justify-center items-center py-8 gap-5 shadow-gray-600 shadow-sm">
        <div className="flex gap-4 items-center">
          <p className="font-bold text-2xl">10</p>
          <div  className="flex flex-col">
            <span>World Of</span>
            <span>Experience</span>
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <p className="font-bold text-2xl">2k+</p>
          <div className="flex flex-col">
            <span>Fine</span>
            <span>Destination</span>
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <p className="font-bold text-2xl">10k+</p>
          <div className="flex flex-col">
            <span>Customer</span>
            <span>Reviews</span>
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <p className="font-bold text-2xl">4.8</p>
          <div className="flex flex-col">
            <span>Overall</span>
            <span>Rating</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Middle;
