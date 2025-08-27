import {
  FaRegPaperPlane,
  FaLock,
  FaRedoAlt,
  FaHeadset,
  FaCheckCircle,
} from "react-icons/fa";

const services = [
  {
    icon: <FaRegPaperPlane className='text-4xl md:text-5xl text-white' />,
    title: "فرستادن پیشتاز",
    desc: "تهران با پیک زیر 2 ساعت",
  },
  {
    icon: <FaLock className='text-4xl md:text-5xl text-white' />,
    title: "پرداخت امن",
    desc: "با خیال راحت خرید کن!",
  },
  {
    icon: <FaCheckCircle className='text-4xl md:text-5xl text-white' />,
    title: "کالای اوریجینال",
    desc: "ضمانت کالای ارسالی",
  },
  {
    icon: <FaHeadset className='text-4xl md:text-5xl text-white' />,
    title: "پشتیبان پاسخگو",
    desc: " 02136900840",
  },
];

const Services = () => {
  return (
    <section className='grid overflow-hidden font-vazir grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-6 px-2 lg:px-28 md:px-20 md:py-5'>
      {services.map((service, idx) => (
        <div
          data-aos='fade-up'
          data-aos-delay={(idx + 1) * 100}
          key={idx}
          className='flex flex-col md:flex-row items-center group text-center md:text-right gap-2 md:gap-4 bg-gradient-to-r from-orange-500 to-orange-800 p-2 max-h-[100px] md:p-6 rounded-2xl text-white shadow-md hover:shadow-xl transition-all duration-300'>
          <div className='animate-pulse-slow group-hover:scale-110 duration-500'>
            {service.icon}
          </div>
          <div className='space-y-1'>
            <h3 className='text-sm  md:text-2xl font-bold'>{service.title}</h3>
            <p className='text-xs  md:text-xl font-light'>{service.desc}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Services;
