import React,{useEffect} from "react";
import Aos from 'aos'
import 'aos/dist/aos.css'
import Accordion from "./Accordion";

const Questions = () => {


  useEffect(()=>{
    Aos.init({duration: 2000})
  },[])

  return (
    <section className="flex flex-col gap-5">
      <h1 data-aos='fade-up' className="font-bold text-2xl">Frequently Asked Questions</h1>

      <div className="grid grid-cols-2 max-md:grid-cols-1 gap-10">
        <div>
          <div data-aos='fade-up' className="my-5 flex flex-col gap-5">
            <Accordion />
            <Accordion />
            <Accordion />
          </div>
        </div>
        <div>
          <h1 data-aos='fade-up' className="font-bold text-xl">
            Do you have any specific question
          </h1>
          <p data-aos='fade-up'>
            Please fill the form below and our dedicated team will get in touch
            with you as soon as possible
          </p>

          <div data-aos="fade-up" className="bg-slate-300 px-3 py-2 rounded-full my-4">
            <input
          
              type="text"
              className="outline-none bg-transparent placeholder-black w-full"
              placeholder="Enter email address"
            />
          </div>
          <div data-aos="fade-up" className="bg-slate-300 p-3 rounded-2xl my-4">
            <textarea
              name=""
              id=""
              placeholder="Enter your question"
              className="outline-none w-full bg-transparent placeholder-black"
              rows="3"
            ></textarea>
          </div>
          <button data-aos='fade-up' className="text-white w-full bg-red-500 py-3 rounded-3xl flex items-center justify-center gap-2 shadow-md shadow-gray-300 cursor-pointer">
            Submit inquiry
          </button>
        </div>
      </div>
    </section>
  );
};

export default Questions;
