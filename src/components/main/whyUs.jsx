import React from "react";
import Heading from "../shared/heading";
import Services from "./services";

const WhyUs = () => {
  return (
    <div className='md:mt-20 -z-50 overflow-hidden'>
      <Heading styles='mt-2 text-xl md:text-4xl' text='چرا ما؟' />
      <Services />
    </div>
  );
};

export default WhyUs;
