import img from "../../assets/arc/carTech.webp";
export default function ArticlePage() {
  return (
    <div className='mt-20 lg:px-10 min-h-screen font-vazir p-4 flex justify-center'>
      <div className='w-full rounded-2xl overflow-hidden'>
        {/* تصویر مقاله */}

        <div className='relative h-[300px] w-[400px] mx-auto overflow-hidden rounded-md'>
          <img
            className='w-full h-full mx-auto object-cover'
            src={img}
            alt='  تکنولوژی‌های روز در خودروهای جدید'
            loading='lazy'
          />
        </div>

        {/* محتوا */}
        <div className='p-6'>
          <h1 className='text-2xl md:text-3xl font-bold text-gray-700 mb-4'>
            تکنولوژی‌های روز در خودروهای جدید
          </h1>
          {/* <hr className='w-[80%] bg-white my-2 md:my-10 ' /> */}
          <p className='text-gray-500 text-sm md:text-xl leading-tight'>
            در سال‌های اخیر، تکنولوژی‌های نوین نقش پررنگی در طراحی خودروها
            داشته‌اند. سیستم‌های کمک‌راننده مانند ترمز اضطراری خودکار، هشدار
            خروج از خط، و کروز کنترل هوشمند تنها بخشی از امکانات خودروهای مدرن
            هستند. برخی خودروها حتی دارای سیستم پارک خودکار و رانندگی
            نیمه‌خودران می‌باشند. این فناوری‌ها نه تنها امنیت را افزایش می‌دهند
            بلکه تجربه رانندگی را نیز راحت‌تر و لذت‌بخش‌تر می‌کنند.
            صفحه‌نمایش‌های دیجیتال، اتصال به اینترنت و نرم‌افزارهای هوشمند نیز
            بخشی از امکانات داخلی جدید هستند. خودروها دیگر فقط وسیله‌ای برای حمل
            و نقل نیستند، بلکه تبدیل به یک پلتفرم تکنولوژیک شده‌اند.
          </p>
        </div>
      </div>
    </div>
  );
}
