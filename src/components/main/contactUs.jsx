import insta from "../../assets/social/insta.webp";
import whats from "../../assets/social/R.webp";
import BtnComponent from "../shared/btnCustom";
const ContactUs = () => {
  return (
    <div className='flex h-[400px] px-2 lg:h-[300px] overflow-hidden w-[100%] mx-auto flex-col lg:flex-row justify-center gap-8 items-center'>
      <div
        data-aos='fade-up'
        className='px-3 py-1 h-[45%] lg:h-full flex justify-center items-center w-full lg:w-[40%] gap-2 md:gap-10 rounded-lg bg-gradient-to-r group from-[#BD318E]  to-[#F69020] '>
        <div className='w-[100px] lg:w-[170px] '>
          <img
            className='group-hover:scale-110 w-full h-full transition-all '
            src={insta}
          />
        </div>
        <div>
          <h3 className='text-center w-[200px] lg:w-[300px] text-xl text-slate-100'>
            شجاع پارت را در اینستاگرام دنبال کنید
          </h3>
          <BtnComponent
            style='text-xs lg:text-xl w-[150px] lg:w-[200px] bg-orange-700 hover:bg-orange-900'
            text='دنبال کردن'
          />
        </div>
      </div>
      <div
        data-aos='fade-up'
        data-aos-delay='200'
        className=' px-3 py-1 h-[45%] lg:h-full flex justify-center items-center w-full lg:w-[40%] gap-2 md:gap-10 rounded-lg bg-gradient-to-r group from-[#BD318E]  to-[#F69020]'>
        <div className='w-[90px] lg:w-[180px] '>
          <img
            className='group-hover:scale-110 w-full h-full transition-all '
            src={whats}
          />
        </div>
        <div>
          <h3 className='text-center w-[200px] lg:w-[300px] text-xl text-slate-100'>
            برای سفارش سریع به واتس اپ پیام دهید
          </h3>
          <BtnComponent
            style='text-xs lg:text-xl w-[150px] lg:w-[200px] bg-orange-700 hover:bg-orange-900 '
            text='فرستادن پیام'
          />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
