import BeygirImage from "../../assets/1.webp";

const ImgFlout = ({
  style = "top-0 h-[75%] md:h-[70%]",
  bgStyle = "bg-opacity-60",
}) => {
  return (
    <div className={`w-full z-0 absolute  ${style} right-0`}>
      <img
        className='w-full blur-[1px] h-full object-cover'
        src={BeygirImage}
        alt='beygir'
      />

      {/* لایه تیره روی عکس */}
      <div className={`absolute inset-0 bg-black ${bgStyle}`}></div>
    </div>
  );
};

export default ImgFlout;
