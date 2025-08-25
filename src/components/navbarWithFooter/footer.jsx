import img3 from "../../assets/logo3.webp";
import { FaInstagram, FaYoutube, FaTelegram, FaVideo } from "react-icons/fa6";

import ImgFlout from "../hiro/imgFlout";
import { Link } from "react-router-dom";
const fastAccess = [
  {
    title: "محصولات",
    link: "/",
  },
  {
    title: "بلاگ",
    link: "/",
  },
  {
    title: "تماس با ما",
    link: "/",
  },
  {
    title: "درباره ما",
    link: "/",
  },
  {
    title: "قوانین مرجوعی",
    link: "/",
  },
];

const contacts = [
  {
    title:
      "آدرس: تهران، بازار چراغ برق، خیابان ملت، کوچه میرشریفی، پاساژ آرمان خودرو، طبقه منفی 2، پلاک 47",
    link: "/",
  },
  {
    title: "لینک لوکیشن شجاع پارت",
    link: "/",
  },
  {
    title: "تلفن تماس: 02136900840",
    link: "/",
  },
  {
    title: "پیگیری سفارشات : 09016440165",
    link: "/",
  },
  {
    title: "فروش عمده ویژه همکاران یدکی",
    link: "/",
  },
  {
    title: "سفارش عمده : 09331004576",
    link: "/",
  },
  {
    title: "سفارش عمده : 09336440182 (آقای موکل)",
    link: "/",
  },
];

// https://t.me/shojaonline
// https://www.aparat.com/shojapart
// https://instagram.com/shojapart
// https://youtube.com/channel/UCre3OnirAQAt6xxuJ21OcBg

const sicial = [
  {
    title: <FaTelegram />,
    link: "https://t.me/shojaonline",
  },
  {
    title: <FaVideo />,
    link: "https://www.aparat.com/shojapart",
  },
  {
    title: <FaInstagram />,
    link: "https://instagram.com/shojapart",
  },
  {
    title: <FaYoutube />,
    link: "https://youtube.com/channel/UCre3OnirAQAt6xxuJ21OcBg",
  },
];

const Footer = () => {
  return (
    <div className='w-full font-vazir relative z-20 lg:pt-1 text-slate-300 overflow-hidden h-[70vh] gap-2 flex bg-red-500 md:h-[40vh] flex-col px-10'>
      <ImgFlout style='bottom-0 h-[100%] md:h-[100%]' bgStyle='bg-opacity-90' />
      <div className='flex flex-col lg:flex-row text-sm lg:text-xl w-full h-full justify-center items-center'>
        <div className='w-full lg:max-w-[40%] flex z-20 lg:h-[100%] text-center gap-10 items-center justify-start'>
          <ul className='flex flex-col list-disc list-inside text-right'>
            {contacts?.map((a, i) => (
              <li>
                <Link className=' hover:text-yellow-500'> {a?.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className='z-20 flex flex-col gap-5'>
          <div className='w-full mt-3 flex z-20 h-[100%] text-center gap-10 items-center justify-start'>
            <p>ارتباط با ما :</p>
            <ul className='flex gap-5 text-xl lg:text-4xl list-inside text-right'>
              {sicial?.map((a, i) => (
                <li className='cursor-pointer  hover:text-yellow-500'>
                  <a href={a?.link} className='w-full h-full'>
                    {a?.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className='w-full flex z-20 h-[100%] text-center gap-10 items-center justify-start'>
            <ul className='flex flex-col list-disc list-inside text-right'>
              {fastAccess?.map((a, i) => (
                <li className=' hover:text-yellow-500'>
                  <Link>{a?.title}</Link>
                </li>
              ))}
            </ul>
            <a
              href='https://trustseal.enamad.ir/?id=199054&Code=RPW8Gjh24lGC4dFqUqbi'
              className='bg-white w-[100px] lg:w-[150px] h-[100px] lg:h-[150px] overflow-hidden rounded-md'>
              <img className='w-full h-full object-contain' src={img3} />
            </a>
          </div>
        </div>
      </div>
      <hr className='w-[90%] relative z-40 bg-white mx-auto' />
      <div className='flex items-center text-sm lg:text-xl gap-5 text-white z-40 py-3 justify-center'>
        <p>ساخته شده توسط : </p>
        <a
          className='text-yellow-500 underline'
          href='https://www.mtcoder.com/'>
          mtcoder.com
        </a>
      </div>
    </div>
  );
};

export default Footer;
