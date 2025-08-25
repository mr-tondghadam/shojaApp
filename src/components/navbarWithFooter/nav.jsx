import { Link } from "react-router-dom";
import logo from "../../assets/logo.webp";
import { IoMdMenu } from "react-icons/io";
import { SlBasket } from "react-icons/sl";
import { IoPersonSharp } from "react-icons/io5";

const MyNavbar = ({ navigation, user, setShowSideMenu }) => {
  return (
    <div className='w-full z-30 bg-opacity-70 h-14 overflow-hidden md:h-20 fixed top-0 right-0 bg-black'>
      <div className='h-full w-full px-1 md:px-10 flex justify-between items-center'>
        <ul className='flex md:ps-20 lg:w-[50%] h-full text-xl text-white gap-10 justify-start items-center'>
          <li className='h-full'>
            <img
              className='h-full absolute object-contain w-16 md:w-32 top-0 right-0 bg-white rounded-md cursor-pointer'
              src={logo}
            />
          </li>
          <li
            data-aos='fade-left'
            data-aos-delay='300'
            className='cursor-pointer ms-10 md:ms-0 text-3xl'
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
            <SlBasket />
            <span className='absolute text-black font-vazir bg-orange-400 text-sm w-5 h-5 lg:h-7 lg:w-7 flex justify-center items-center rounded-full -top-2 lg:text-xl lg:-right-4 -right-3'>
              3
            </span>
          </li>

          <li
            data-aos='fade-right'
            data-aos-delay='200'
            className='cursor-pointer bg-white bg-opacity-20 hover:bg-opacity-70 transition-all hover:text-black p-2 md:p-3 rounded-full'>
            <IoPersonSharp />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MyNavbar;
