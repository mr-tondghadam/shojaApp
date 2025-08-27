import BtnComponent from "../shared/btnCustom";
const BanerH = ({ data = {} }) => {
  return (
    <div
      className={`text-white md:p-5 overflow-hidden h-[550px] md:max-h-[400px] py-3 lg:py-10 mx-auto w-[100%] md:w-[90%] `}>
      <div
        className={`flex flex-col md:flex-row w-[100%] ${data?.background} h-full md:h-[300px] rounded-lg items-center justify-center lg:gap-52`}>
        <div className='relative'>
          <img
            data-aos='fade-up'
            className='absolute left-5 md:right-15 lg:-right-32 top-7 md:-top-6 lg:top-16 w-[150px] md:w-[200px] lg:w-[250px]'
            src={data?.imgBrand}
          />
          <img
            data-aos='fade-left'
            className='z-20 object-contain mt-10 w-[80%]  lg:h-full relative'
            src={data?.img}
          />
        </div>
        <div className='texts'>
          <h2 data-aos='fade-right' className='text-xl md:text-3xl mb-5'>
            {data.header}
          </h2>
          <p data-aos='fade-right' className='text-xs md:text-xl mb-5'>
            {data.desc}
          </p>
          <BtnComponent
            style='bg-orange-500 hover:bg-orange-900'
            fade={true}
            text='خرید'
          />
        </div>
      </div>
    </div>
  );
};

export default BanerH;
