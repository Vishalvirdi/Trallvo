import React,{useEffect} from "react";
import Aos from 'aos'
import 'aos/dist/aos.css'
import { cust, dest, pic, sec } from "../../assets/images";

const Portfolio = () => {

  useEffect(()=>{
    Aos.init({duration: 2000})
  },[])

  return (
    <section id="about" className="flex flex-col gap-2">
      <h1 data-aos="fade-up" className="font-bold text-3xl max-md:text-xl">Why Should You Choose Us</h1>
      <p data-aos="fade-up" className="text-sm">
        We have extensive knowledge and experience in the travel industry
      </p>
      <div className="grid grid-cols-2 gap-10 max-md:grid-cols-1">
        <div className="flex flex-col gap-5 my-4 justify-center">
          <div className="flex w-full gap-5">
            <img src={sec} alt="" className="h-32 w-32" />
            <div>
              <h1 data-aos="fade-up" className="font-bold text-lg">Safe and Support</h1>
              <p data-aos="fade-up" className="text-sm text-slate-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
                dolores consectetur maiores saepe quidem reprehenderit.
                Repellendus voluptate,{" "}
              </p>
            </div>
          </div>
          <div className="flex w-full gap-5">
            <img src={dest} alt="" className="h-32 w-32" />
            <div>
              <h1 data-aos="fade-up" className="font-bold text-lg">Safe and Support</h1>
              <p data-aos="fade-up" className="text-sm text-slate-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
                dolores consectetur maiores saepe quidem reprehenderit.
                Repellendus voluptate,{" "}
              </p>
            </div>
          </div>
          <div className="flex w-full gap-5">
            <img data-aos="fade-up" src={cust} alt="" className="h-32 w-32" />
            <div>
              <h1 data-aos="fade-up" className="font-bold text-lg">Safe and Support</h1>
              <p data-aos="fade-up" className="text-sm text-slate-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
                dolores consectetur maiores saepe quidem reprehenderit.
                Repellendus voluptate,{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
        <img data-aos="fade-up" src={pic} alt="" className="object-cover h-[40rem] rounded-full" />

        </div>
      </div>
    </section>
  );
};

export default Portfolio;
