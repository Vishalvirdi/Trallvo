import React,{useEffect} from "react";
import Aos from 'aos'
import 'aos/dist/aos.css'
import { image } from "../../assets/images";

const Subscribe = () => {

  useEffect(()=>{
    Aos.init({duration: 2000})
  },[])

  return (
    <section id="gallery" className="grid grid-cols-2 max-md:grid-cols-1 place-content-center gap-4 my-4">
      <img data-aos="fade-up" src={image} alt="" className="rounded-full"/>
      <div className="flex flex-col justify-center gap-6">
      <h1 data-aos="fade-up" className="font-bold text-4xl">Best Way to Start Your Journey</h1>
      <p data-aos="fade-up" className="text-lg">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur,
        nobis! Rerum delectus totam illo. Maiores distinctio dolore quod autem
        nulla!
      </p>
      <button data-aos="fade-up" className="px-3 py-2 bg-red-600 rounded-full w-40 text-white font-medium">Start Here</button>
      </div>
    </section>
  );
};

export default Subscribe;
