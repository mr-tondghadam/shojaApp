import React from "react";
import BtnComponent from "../shared/btnCustom";

const HiroSection = () => {
  return (
    <div className='w-full relative z-20 text-white overflow-hidden h-[70vh] md:h-[60vh] flex items-center flex-col justify-center'>
      <div className='w-full flex flex-col text-center items-center justify-center'>
        <div className='flex flex-col md:flex-row md:w-[80%] justify-center items-center md:gap-10'>
          <p data-aos='fade-left' className='text-2xl lg:text-4xl font-vazir'>
            به فروشگاه{" "}
          </p>
          <h1
            data-aos='zoom-in'
            className='text-3xl my-3 lg:text-6xl md:my-5 font-vazir'>
            شجاع <span className='text-orange-500'>پارت</span>{" "}
          </h1>
          <p data-aos='fade-right' className='text-xl lg:text-4xl font-vazir'>
            خوش آمدید
          </p>
        </div>
        <hr className='w-[80%] my-2 md:my-10 ' />
        <div className='w-full text-center flex flex-col justify-center items-center'>
          <h3
            data-aos='fade-left'
            className='font-vazir text-xl md:text-2xl mb-3 border-b border-orange-400 md:bg-black md:bg-opacity-60 p-2 rounded-md'>
            چه لوازمی نیاز دارید؟
          </h3>
          <div data-aos='zoom-out' className='w-[100%] md:w-[80%]'>
            <input
              className='font-vazir w-[100%] md:w-[60%] text-black outline-none text-xl px-5 py-4 rounded-md'
              placeholder='جستوجو در شجاع پارت'
            />
          </div>
          <BtnComponent fade={true} text='جست و جو کن' />
        </div>
        <p
          data-aos='fade-up'
          data-aos-delay='300'
          className='text-xl md:text-2xl border-b border-orange-400 md:mt-7 bg-black bg-opacity-60 p-2 rounded-md font-vazir'>
          {" "}
          قطعات با کیفیت و اصل را از ما بخواهید
        </p>
      </div>
    </div>
  );
};

export default HiroSection;
