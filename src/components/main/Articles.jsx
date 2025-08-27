import tier from "../../assets/arc/tier.webp";
import moto from "../../assets/arc/motor.webp";
import elCar from "../../assets/arc/elecCar.webp";
import carTech from "../../assets/arc/carTech.webp";
const carArticles = [
  {
    title: "نوآوری در خودروهای برقی",
    desc: "خودروهای برقی به سرعت در حال تحول هستند و هر ساله مدل‌های جدید با برد بالاتر، باتری‌های پیشرفته‌تر و سیستم‌های شارژ سریع‌تر معرفی می‌شوند. این خودروها نه تنها دوستدار محیط زیست هستند، بلکه هزینه نگهداری کمتری نیز نسبت به خودروهای بنزینی دارند. برندهایی مانند تسلا، بی‌ام‌و و هیوندای در این مسیر پیشگام هستند. زیرساخت‌های شارژ نیز در حال گسترش است. همچنین فناوری‌های نوینی مثل سیستم بازیابی انرژی ترمز و رانندگی خودران در این خودروها به کار گرفته می‌شود. آینده حمل و نقل بدون شک به سمت برقی شدن پیش می‌رود و این تحولی مثبت برای صنعت خودرو و محیط زیست است.",
    img: elCar,
  },
  {
    title: "نگهداری صحیح از موتور خودرو",
    desc: "موتور قلب تپنده خودروست و نگهداری درست از آن نقش مهمی در عملکرد و عمر مفید خودرو دارد. تعویض منظم روغن موتور و فیلترها یکی از مهم‌ترین کارهایی است که باید انجام داد. استفاده از روغن‌های با کیفیت و مطابق با مشخصات سازنده نیز تأثیر زیادی دارد. گرم کردن موتور قبل از رانندگی در هوای سرد، بررسی مداوم سطح مایعات و پرهیز از رانندگی پرشتاب از دیگر عوامل مؤثرند. هر صدای غیرمعمول یا افت قدرت موتور را باید جدی گرفت. رسیدگی به موتور در زمان مناسب می‌تواند از هزینه‌های سنگین تعمیرات در آینده جلوگیری کند.",
    img: moto,
  },
  {
    title: "مزایای استفاده از لاستیک مناسب",
    desc: "لاستیک خودرو یکی از اجزای کلیدی در ایمنی، کنترل و عملکرد کلی خودرو است. انتخاب لاستیک مناسب با توجه به شرایط آب‌وهوایی، نوع جاده و سبک رانندگی می‌تواند تأثیر چشمگیری در کاهش مصرف سوخت و بهبود پایداری خودرو داشته باشد. لاستیک‌های زمستانی برای جاده‌های برفی یا یخبندان طراحی شده‌اند، در حالی که لاستیک‌های تابستانی در شرایط گرم بهترین عملکرد را دارند. همچنین باید به تاریخ تولید و عمق آج لاستیک توجه داشت. تنظیم باد به‌صورت منظم نیز از سایش زودرس و افزایش مصرف سوخت جلوگیری می‌کند. تعویض به‌موقع لاستیک‌ها، یک سرمایه‌گذاری هوشمندانه برای ایمنی شماست.",
    img: tier,
  },
  {
    title: "تکنولوژی‌های روز در خودروهای جدید",
    desc: "در سال‌های اخیر، تکنولوژی‌های نوین نقش پررنگی در طراحی خودروها داشته‌اند. سیستم‌های کمک‌راننده مانند ترمز اضطراری خودکار، هشدار خروج از خط، و کروز کنترل هوشمند تنها بخشی از امکانات خودروهای مدرن هستند. برخی خودروها حتی دارای سیستم پارک خودکار و رانندگی نیمه‌خودران می‌باشند. این فناوری‌ها نه تنها امنیت را افزایش می‌دهند بلکه تجربه رانندگی را نیز راحت‌تر و لذت‌بخش‌تر می‌کنند. صفحه‌نمایش‌های دیجیتال، اتصال به اینترنت و نرم‌افزارهای هوشمند نیز بخشی از امکانات داخلی جدید هستند. خودروها دیگر فقط وسیله‌ای برای حمل و نقل نیستند، بلکه تبدیل به یک پلتفرم تکنولوژیک شده‌اند.",
    img: carTech,
  },
];

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";

// import APIs from "../common";

import BtnComponent from "../shared/btnCustom";
import Heading from "../shared/heading";
import { textTruncate } from "../../helpers/truncate";

const Articles = () => {
  return (
    <section
      aria-label='نوشته‌ها و مقالات'
      className='flex flex-col border-b pb-10  border-neutral-700'>
      <Heading text='نوشته ها' />

      <div className='select-none w-[90%] mx-auto'>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={10}
          loop={true}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
            reverseDirection: true,
          }}
          speed={1300}
          direction='horizontal'
          breakpoints={{
            200: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          role='list'>
          {carArticles.map((p) => (
            <SwiperSlide
              key={p?._id}
              role='listitem'
              aria-label={`مقاله ${p?.title}`}>
              <article
                className='flex bg-white shadow-md flex-col items-center hover:bg-slate-100 mx-auto group max-w-[430px] h-[470px] rounded-md justify-center border-neutral-300 dark:border-neutral-700 hover:border-2 p-4'
                tabIndex={0}>
                <div className='text-center w-full'>
                  <div className='relative overflow-hidden rounded-md'>
                    <img
                      className=' rounded-md group-hover:scale-90 w-full mx-auto h-[300px]  object-cover duration-700'
                      src={p?.img}
                      alt={`تصویر اصلی مقاله ${p?.title}`}
                      loading='lazy'
                    />
                  </div>
                  <h3
                    className='text-xl my-5 text-slate-800 dark:text-slate-400 mb-3'
                    tabIndex={-1}>
                    {textTruncate(p?.title, 25)}
                  </h3>
                  <BtnComponent
                    text='بیشتر...'
                    // to={`/single-publication/${p?.tag}`}
                    to='/article'
                    aria-label={`بیشتر درباره مقاله ${p.title}`}
                  />
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Articles;
