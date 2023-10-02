import React,{useEffect} from "react";
import Aos from 'aos'
import 'aos/dist/aos.css'
import { StarIcon } from "../../assets/icons";
import { cimg1, cimg2, cimg3, cimg4, cimg5, image3 } from "../../assets/images";

const Reviews = () => {

  useEffect(()=>{
    Aos.init({duration: 2000})
  },[])

  return (
    <section id="testimonial" className="grid grid-cols-2 max-md:grid-cols-1 gap-10 max-lg:gap-2">
      <div className="flex flex-col gap-5 max-lg:gap-2">
        <h1 data-aos="fade-up" className="text-red-500 font-bold text-lg">From Our Clients</h1>
        <h2 data-aos="fade-up" className="font-bold text-4xl">
          Real Travel History From Our Beloved Clients
        </h2>
        <p data-aos="fade-up" className="text-sm leading-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
          earum repudiandae nulla provident, consequatur doloremque recusandae
          ea nisi? Repellendus itaque rem dicta impedit soluta earum assumenda
        </p>
        <div data-aos="fade-up">
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <StarIcon />
        </div>
        <div data-aos="fade-up" className="flex gap-2 h-14 mt-4">
          <img src={cimg1} alt="" className="w-14 rounded-full object-cover" />
          <img src={cimg2} alt="" className="w-14 rounded-full object-cover" />
          <img src={cimg3} alt="" className="w-14 rounded-full object-cover" />
          <img src={cimg4} alt="" className="w-14 rounded-full object-cover" />
          <img src={cimg5} alt="" className="w-14 rounded-full object-cover" />
        </div>
      </div>
      <img data-aos="fade-up" src={image3} alt="" className="rounded-xl mt-5" />
    </section>
  );
};

export default Reviews;
