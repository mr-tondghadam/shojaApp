import { Link } from "react-router-dom";
import logo from "../../assets/logo.webp";
import { IoMdMenu } from "react-icons/io";
import { SlBasket } from "react-icons/sl";
import { IoPersonSharp } from "react-icons/io5";
import { useState } from "react";

const MyNavbar = ({ navigation, user, setShowSideMenu }) => {
  const [showPerson, setShowPerson] = useState(false);
  return (
    <div className='w-full z-30 bg-opacity-70 h-14 md:h-20 fixed top-0 right-0 bg-black'>
      <div className='h-full w-full px-1 md:px-10 flex justify-between items-center'>
        <ul className='flex md:ps-20 lg:w-[50%] h-full text-xl text-white gap-10 justify-start items-center'>
          <li className='h-full'>
            <Link to='/'>
              <img
                className='h-full absolute object-contain w-16 md:w-32 top-0 right-0 bg-white rounded-md cursor-pointer'
                src={logo}
              />
            </Link>
          </li>
          <li
            data-aos='fade-left'
            data-aos-delay='300'
            className='cursor-pointer  ms-10 md:ms-0 text-3xl'
            onClick={() => {
              setShowSideMenu(true);
              console.log("setShowSideMenu");
            }}>
            <IoMdMenu />
          </li>
          <li
            data-aos='fade-left'
            data-aos-delay='200'
            className=' hidden md:block rounded-md px-3 transition-all justify-center items-center border-b border-transparent hover:border-white p-3 cursor-pointer'>
            <Link className=''>پیگیری سفارش</Link>
          </li>
          <li
            data-aos='fade-left'
            className=' hidden md:block rounded-md px-3 transition-all  justify-center items-center border-b border-transparent hover:border-white p-3 cursor-pointer'>
            <Link className=''>تماس با ما</Link>
          </li>
        </ul>
        <ul className='flex relative text-sm md:text-2xl text-white gap-2 md:gap-10 justify-end items-center'>
          <li
            data-aos='fade-right'
            className='cursor-pointer bg-white bg-opacity-20 hover:bg-opacity-70 transition-all hover:text-black p-2 md:p-3 rounded-full'>
            <Link to='/cart'>
              <SlBasket />
              <span className='absolute text-black font-vazir bg-orange-400 text-sm w-5 h-5 lg:h-7 lg:w-7 flex justify-center items-center rounded-full -top-2 lg:text-xl lg:-right-4 -right-3'>
                3
              </span>
            </Link>
          </li>
          <li
            data-aos='fade-right'
            data-aos-delay='200'
            onClick={() => {
              setShowPerson(!showPerson);
            }}
            className='cursor-pointer relative bg-white bg-opacity-20 hover:bg-opacity-70 transition-all hover:text-black p-2 md:p-3 rounded-full'>
            <IoPersonSharp />
            {showPerson && (
              <div className='absolute text-center rounded-md bg-white shadow-lg top-[150%] left-[10%] text-sm lg:text-xl gap-1 lg:gap-2 p-1 text-black flex flex-col'>
                <Link
                  to={"/login"}
                  className='py-1 px-2 z-40 relative hover:bg-orange-500 hover:text-white transition-all rounded-md'>
                  ورود
                </Link>
                <p className='py-1 px-2 z-40 relative hover:bg-orange-500 hover:text-white transition-all rounded-md'>
                  {" "}
                  کاربری
                </p>
                <p className='py-1 px-2 z-40 relative hover:bg-orange-500 hover:text-white transition-all rounded-md'>
                  مدیریت
                </p>
                <span className='w-3 lg:w-6  h-3 lg:h-6  bg-white rotate-45 absolute -top-1 lg:-top-2 left-1'></span>
              </div>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MyNavbar;
