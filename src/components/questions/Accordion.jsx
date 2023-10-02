import React, { useState } from "react";
import { ArrowCircleDownIcon } from "../../assets/icons";

const Accordion = () => {
    const [active,setActive] = useState(true)
  return (
   
      <div className="w-auto">
        <div className={`${!active?'rounded-t-xl': 'rounded-xl'} flex justify-between p-2 bg-red-200  shadow-md`}>
          <span>How do I choose the right travel destination for me?</span>
          <ArrowCircleDownIcon onClick={()=>setActive(!active)} />
        </div>
        <p className={`${active ? "hidden" : null} p-2 bg-slate-300 rounded-b-xl`}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          quod, eum modi praesentium nostrum blanditiis? Quas eos ullam quam
          minima earum atque ea delectus illum harum voluptatem officia, error
          enim, voluptatibus nemo voluptas sapiente? Expedita molestias sapiente
          porro modi, magni aspernatur nobis quam ab veritatis rem. Fuga
          voluptatum ea consectetur.
        </p>
      </div>
      

  );
};

export default Accordion;
