import { useRef, useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { SlBasket } from "react-icons/sl";
import { CiHeart } from "react-icons/ci";
import { formatNumber } from "../../helpers/formatNumber";
import { textTruncate } from "../../helpers/truncate";

const HCardProduct = ({ category = "", heading = "", data = [] }) => {
  const [loading, setLoading] = useState(false);
  const scrollElement = useRef();

  const scrollRight = () => {
    scrollElement.current.scrollTo({
      left: scrollElement.current.scrollLeft + 220,
      behavior: "smooth",
    });
  };

  const scrollLeft = () => {
    scrollElement.current.scrollTo({
      left: scrollElement.current.scrollLeft - 220,
      behavior: "smooth",
    });
  };

  return (
    <div className='container overflow-y-hidden mx-auto px-2 lg:px-5 md:px-4 gap-2 my-6 relative'>
      <h2
        data-aos='fade-up'
        className='text-2xl font-bold py-2 text-slate-800 text-center'>
        {heading}
      </h2>

      {loading ? (
        <div className='flex justify-center'>
          {/* <img
            src={loading1}
            alt='login icon'
            className='rounded-full w-12 md:w-24 mix-blend-multiply'
          /> */}
        </div>
      ) : (
        <div
          className='flex items-center scrollbar-hide overflow-x-scroll transition-all px-2'
          ref={scrollElement}>
          <button
            className='hidden md:block hover:bg-orange-500 absolute left-0 text-2xl z-10 border-gray-300 border-2 shadow-lg text-gray-400 hover:text-white p-1 duration-500 bg-white rounded-full'
            onClick={scrollLeft}>
            <FaAngleLeft />
          </button>
          <button
            className='hidden md:block hover:bg-orange-500 absolute right-0 text-2xl z-10 border-gray-300 border-2 shadow-lg text-gray-400 hover:text-white p-1 duration-500 bg-white rounded-full'
            onClick={scrollRight}>
            <FaAngleRight />
          </button>
          {data?.map((el, index) => (
            <Link
              data-aos='fade-down'
              data-aos-delay={(index + 1) * 100}
              to='/product-page'
              key={el._id}
              className='group hover:bg-slate-300 bg-white relative overflow-hidden flex items-center min-w-[200px] m-1 md:m-3 md:min-w-[350px] max-w-[300px] h-40 md:max-w-[250px] rounded-md p-2  shadow-lg'>
              {/* <div className='absolute z-40 md:text-sm ms-6 right-0 top-2 md:top-6 over bg-red-900 px-1 md:px-2 '>
                <span className='relative z-50 text-xs md:text-sm md:font-bold self-end bg-red-500 text-white shadow-lg'>
                  {Math.floor(
                    100 - (Number(el?.sellingPrice) / Number(el?.price)) * 100
                  )}{" "}
                  درصد تخفیف
                </span>
                <span className='absolute top-1 hidden md:block bg-red-500 w-[12px] z-40 -start-1 rotate-45 md:h-[12px]'></span>
              </div> */}
              <div className='absolute rounded-md duration-300 ms-2 z-50 md:ms-6 right-0 top-8 bg-red-500 group-hover:scale-125 px-2'>
                <span className='relative mt-0 md:mt-5 z-50 text-xs md:font-bold self-end bg-red-500 text-white shadow-lg'>
                  {Math.floor(
                    100 - (Number(el?.sellingPrice) / Number(el?.price)) * 100
                  )}{" "}
                  درصد تخفیف
                </span>
                <span className='absolute top-1 bg-red-500 w-[15px] z-10 -start-1 rotate-45 h-[15px]'></span>
              </div>
              <div className='h-30 md:h-40 flex items-center relative justify-center max-w-[80px] md:max-w-[170px]'>
                <img
                  src={el.productImage}
                  alt={el?.productName}
                  className='object-scale-down h-full mix-blend-multiply rounded-md group-hover:scale-110 transition-all'
                />
              </div>
              <div className='p-4 grid'>
                <h2 className='font-vazir text-black md:font-lg'>
                  {textTruncate(el?.productName, 15)}
                </h2>
                <p className='text-stone-500 text-xs'>{el?.category}</p>
                <div className='flex flex-col gap-1'>
                  <p className='md:text-xl line-through text-slate-400'>
                    {formatNumber(el?.price)}
                  </p>
                  <p className='text-sm md:text-xl text-red-700 font-bold'>
                    {formatNumber(el?.sellingPrice)}
                  </p>
                </div>
              </div>

              {/* <button
                onClick={() => {}}
                className='bg-white shadow-xl m-5 absolute top-0 rounded-full end-0 p-2 text-2xl md:font-bold  text-black hover:bg-red-500 hover:text-white transition-all'>
                <CiHeart />
              </button> */}
              <button
                onClick={() => {}}
                className='bg-green-400 absolute bottom-1 md:end-1 rounded-full p-2 text-2xl md:font-bold  text-white hover:bg-green-700 hover:scale-95 transition-all'>
                <SlBasket />
              </button>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default HCardProduct;
