import React,{useEffect} from "react";
import video from "../../assets/video/video.mp4";
import { image3, image4, image5, image6 } from "../../assets/images";
import Aos from 'aos'
import 'aos/dist/aos.css'

const Home = () => {

  useEffect(()=>{
    Aos.init({duration: 1000})
  },[])

  return (
    <section className="relative xl:h-[80vh] h-auto">
      <div className=" h-full w-full ">
        <video
          src={video}
          autoPlay
          loop
          muted
          className="h-full w-[100%] object-cover object-center "
        />
      </div>
      <div className=" absolute top-[50%] bottom-[40%] transform translate-y-[50%]  text-white w-full flex flex-col  justify-center items-center max-lg:gap-2 max-sm:gap-2 gap-5">
        <h1 data-aos='fade-up' className="font-bold sm:text-5xl ">
          Unlock Your Travel Dreams with Us!
        </h1>
        <p data-aos='fade-up' className="sm:font-bold max-sm:text-xs text-center px-4">
          Discover the world's most adventure nature, life is so short for a
          trip.
        </p>
        <button data-aos='fade-up' className="sm:px-3 sm:py-2  p-2 bg-red-600 rounded-full font-semibold max-sm:text-xs">
          GET STARTED
        </button>
        <div className="max-sm:hidden w-[1024px]  flex  items-center justify-center">
          <p data-aos='fade-up' className="sm:font-bold font-medium  sm:text-2xl w-56">
            Popular Places
          </p>
          <hr data-aos='fade-up' className="w-full"/>
        </div>
        <div data-aos='fade-up' className="max-lg:h-32 max-sm:hidden h-56 flex max-lg:gap-3 max-sm:gap-1 gap-5">
          <img className="max-lg:w-32 max-sm:w-20 w-56 rounded-xl" src={image3} alt="" />
          <img className="max-lg:w-32 max-sm:w-20 w-56 rounded-xl" src={image4} alt="" />
          <img className="max-lg:w-32 max-sm:w-20 w-56 rounded-xl" src={image5} alt="" />
          <img className="max-lg:w-32 max-sm:w-20 w-56 rounded-xl" src={image6} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Home;
