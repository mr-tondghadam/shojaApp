import { useState } from "react";
import { IoMdCloseCircle } from "react-icons/io";
import { Link } from "react-router-dom";

const menuItems = [
  {
    title: "کیت های شجاع پارت",
    subMenu: [
      { subTitle: "کیت کلاچ", url: "" },
      { subTitle: "کیت کامل جلوبندی", url: "" },
      { subTitle: "کیت افزایش شتاب و قدرت", url: "" },
      { subTitle: "کیت تسمه تایم", url: "" },
      { subTitle: "کیت تسمه دینام", url: "" },
      { subTitle: "کیت تعمیر موتور", url: "" },
      { subTitle: "کیت تعویض روغن و فیلتر", url: "" },
    ],
  },
  {
    title: "برق خودرو",
    subMenu: [
      { subTitle: "وایر شمع", url: "" },
      { subTitle: "شمع موتور", url: "" },
      { subTitle: "کوئل", url: "" },
      { subTitle: "سنسور ها", url: "" },
      { subTitle: "لامپ", url: "" },
      { subTitle: "استارت", url: "" },
      { subTitle: "استپر", url: "" },
      { subTitle: "دینام", url: "" },
      { subTitle: "پمپ بنزین", url: "" },
      { subTitle: "پمپ ها", url: "" },
      { subTitle: "رله فن", url: "" },
      { subTitle: "چراغ", url: "" },
      { subTitle: "سوزن انژکتور", url: "" },
      { subTitle: "موتور برف پاکن", url: "" },
      { subTitle: "موتور فن ببر", url: "" },
    ],
  },
  {
    title: "کیت های شجاع پارت",
    subMenu: [
      { subTitle: "سپر", url: "" },
      { subTitle: "فلاپ آینه", url: "" },
      { subTitle: "زه دور درب", url: "" },
      { subTitle: "چراغ", url: "" },
      { subTitle: "جلو پنجره", url: "" },
      { subTitle: "برف پاکن", url: "" },
      { subTitle: "آینه بغل", url: "" },
      { subTitle: "نمد کاپوت", url: "" },
    ],
  },
  {
    title: "کیت های شجاع پارت",
    subMenu: [
      { subTitle: "بلبرینگ پلوس", url: "" },
      { subTitle: "بلبرینگ تسمه تایم", url: "" },
      { subTitle: "بلبرینگ چرخ", url: "" },
      { subTitle: "بلبرینگ ژامبون", url: "" },
      { subTitle: "بلبرینگ کلاچ", url: "" },
      { subTitle: "توپی چرخ", url: "" },
      { subTitle: "هرزگرد تسمه دینام", url: "" },
    ],
  },
  {
    title: "کیت های شجاع پارت",
    subMenu: [
      { subTitle: "آچار چرخ", url: "" },
      { subTitle: "لنت", url: "" },
      { subTitle: "کاسه چرخ", url: "" },
      { subTitle: "دیسک ترمز", url: "" },
    ],
  },
  {
    title: "کیت های شجاع پارت",
    subMenu: [
      { subTitle: "پلوس کامل", url: "" },
      { subTitle: "سرپلوس", url: "" },
      { subTitle: "فنر لول", url: "" },
      { subTitle: "کمک فنر", url: "" },
      { subTitle: "قطعات جلوبندی", url: "" },
      { subTitle: "گردگیر ها", url: "" },
    ],
  },
  {
    title: "قطعات داخلی خودرو",
    subMenu: [
      { subTitle: "آفتابگیر", url: "" },
      { subTitle: "ایربگ", url: "" },
      { subTitle: "سر دسته دنده", url: "" },
      { subTitle: "فرمان", url: "" },
      { subTitle: "قاب ها", url: "" },
      { subTitle: "کلید ها", url: "" },
      { subTitle: "کمربند", url: "" },
      { subTitle: "نوار درب ها", url: "" },
    ],
  },
];

const SideMenu = ({ show, setShow }) => {
  const [index, setIndex] = useState(null);
  return (
    <div
      className={`fixed font-vazir z-50 top-0 transition-all overflow-y-auto duration-300 shadow-md bg-slate-100 ${
        show ? "right-0" : "-right-[110%]"
      }  h-full w-[80%] md:w-[400px]`}>
      <div className='top-0 right-0 w-full text-xl md:text-3xl p-5'>
        <IoMdCloseCircle
          onClick={() => {
            setShow(false);
          }}
          className='cursor-pointer text-red-500 transition-all hover:text-red-800'
        />
        <h3 className='mt-3 text-slate-700'>لیست محصولات</h3>
      </div>
      <div></div>
      <hr className='w-[80%] h-1 bg-opacity-20 bg-black my-1 mx-auto' />
      <div className='text-slate-800 flex flex-col items-center justify-center gap-2 w-full'>
        {menuItems.map((item, i) => (
          <div className='shadow-sm p-1 cursor-pointer w-full' key={i}>
            <button
              onClick={() => {
                if (!item.subMenu || item.subMenu.length === 0) return;
                setIndex(index === i ? null : i);
              }}
              className='w-[90%] text-xs lg:text-xl mx-auto py-2 hover:text-white hover:bg-orange-500 rounded-md h-full text-right px-3'>
              {item?.title}
            </button>

            <div
              className={`flex flex-col px-10 transition-all duration-500 overflow-hidden ${
                index === i ? "max-h-[500px]" : "max-h-0"
              }`}>
              {item.subMenu.map((subItem, subI) => (
                <Link
                  to='/'
                  key={subI}
                  className='pl-5 p-2 transition-all w-full h-full rounded-md hover:text-white hover:bg-orange-400 text-sm text-gray-600 hover:underline'>
                  {subItem.subTitle}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideMenu;
