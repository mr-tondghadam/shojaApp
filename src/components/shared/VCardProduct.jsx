import { useRef, useState } from "react";
import { textTruncate } from "../../helpers/truncate";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { SlBasket } from "react-icons/sl";
import { CiHeart } from "react-icons/ci";
import { formatNumber } from "../../helpers/formatNumber";

const VCardProduct = ({
  category = "",
  heading = "",
  data = [],
  dataAos = "zoom-in",
}) => {
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
    <div className='container mx-auto px-1 overflow-y-hidden md:px-4 gap-2 my-6 relative'>
      <h2
        data-aos='fade-up'
        className='text-2xl text-slate-800 mb-3 font-bold py-2 text-center'>
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
          className='flex items-center overflow-x-scroll h-[270px] md:h-[380px] scrollbar-hide overflow-hidden transition-all scrollbar-none'
          ref={scrollElement}>
          <button
            className='hidden md:block hover:bg-red-500 absolute left-0 text-2xl z-10 border-gray-300 border-2 shadow-lg hover:text-white p-1 duration-500 bg-white rounded-full'
            onClick={scrollLeft}>
            <FaAngleLeft />
          </button>
          <button
            className='hidden md:block hover:bg-red-400 absolute right-0 text-2xl z-10 border-gray-300 border-2 shadow-lg hover:text-white p-1 duration-500 bg-white rounded-full'
            onClick={scrollRight}>
            <FaAngleRight />
          </button>
          {data?.map((el, index) => (
            <Link
              data-aos={dataAos}
              data-aos-delay={(index + 1) * 50}
              to={`#`}
              key={el._id}
              className=' group flex relative bg-white flex-col justify-start items-center min-w-[180px] overflow-hidden m-1 md:m-3 h-full md:min-w-[280px] md:max-w-[320px] p-2  shadow-xl rounded'>
              <div className='flex flex-col text-center'>
                {/* <button
                  onClick={() => {}}
                  className='bg-white me-6 mt-5 z-50 absolute rounded-full left-0 top-0  p-2 text-2xl md:font-bold self-end   text-black shadow-lg hover:bg-red-500 hover:scale-95 hover:text-white transition-all'>
                  <CiHeart />
                </button> */}

                <div className='absolute rounded-md duration-300 ms-2 md:ms-6 right-0 top-8 bg-red-500 px-2'>
                  <span className='relative mt-0 md:mt-5 z-50 text-xs md:font-bold self-end text-white shadow-lg'>
                    {Math.floor(
                      100 - (Number(el?.sellingPrice) / Number(el?.price)) * 100
                    )}{" "}
                    درصد تخفیف
                  </span>
                  <span className='absolute top-1 bg-red-500 w-[15px] z-10 -start-1 rotate-45 h-[15px]'></span>
                </div>

                <div className='h-32 md:h-52 flex items-center justify-center'>
                  <img
                    src={el.productImage}
                    alt={el?.productName}
                    className='object-scale-down h-full mix-blend-multiply rounded-md hover:scale-110 transition-all'
                  />
                </div>
                <div className='p-0 md:p-3 grid'>
                  <h2 className='font-vazir text-black md:font-lg'>
                    {textTruncate(el?.productName, 20)}
                  </h2>
                  <p className='text-stone-500'>{el?.category}</p>
                </div>
              </div>
              <div className='flex justify-between items-center mb-2 w-full'>
                <div className='flex flex-col gap-2'>
                  <p className='md:text-xl line-through text-slate-400'>
                    {formatNumber(el?.price)}
                  </p>
                  <p className='text-sm md:text-xl text-red-700 font-bold'>
                    {formatNumber(el?.sellingPrice)}
                  </p>
                </div>
                <button
                  onClick={() => {}}
                  className='bg-green-400 me-4 rounded-full p-2 text-2xl md:font-bold self-end  text-white hover:bg-green-700 hover:scale-95 transition-all'>
                  <SlBasket />
                </button>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default VCardProduct;
