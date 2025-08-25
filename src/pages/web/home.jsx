import HiroSection from "../../components/hiro/hiroSection";
import BanerH from "../../components/main/banerH";
import WhyUs from "../../components/main/whyUs";
import iko from "../../assets/banner/iko.webp";
import dena from "../../assets/banner/dena.webp";
import shahin from "../../assets/banner/shahin.webp";
import saipa from "../../assets/banner/Saipa.webp";
import p1 from "../../assets/cardH/lent.webp";
import p2 from "../../assets/cardH/206filter.webp";
import p3 from "../../assets/cardH/bahranoil.webp";
import p4 from "../../assets/cardH/barfPakKon.webp";
import p5 from "../../assets/cardH/sababatri.webp";
import p6 from "../../assets/cardH/l90moder.webp";

import HCardProduct from "../../components/shared/HCardProduct";
import VCardProduct from "../../components/shared/VCardProduct";
import ContactUs from "../../components/main/contactUs";
import Articles from "../../components/main/Articles";

const bannerData = {
  imgBrand: iko,
  img: dena,
  background: "bg-blue-900",
  header: "قطعات ایرانخودرو،مطمعن و قابل اعتماد",
  desc: "از سمند تا دنا،تجربه ای بی دردسر در خرید لوازم یدکی",
};
const bannerData2 = {
  imgBrand: saipa,
  img: shahin,
  background: "bg-orange-800",
  header: "قطعات سایپا ،با ضمانت و کیفیت",
  desc: "از پراید تا شاهین،هر چیزی که نیاز دارید اینجاست",
};

const vCardData = [
  {
    _id: "p1",
    productName: "لنت ترمز جلو پراید برند تکستار",
    productImage: p1,
    category: "ترمز و لنت",
    sellingPrice: "430000",
    price: "480000",
  },
  {
    _id: "p2",
    productName: "فیلتر هوا پژو 206 برند سرکان",
    productImage: p2,
    category: "فیلترها",
    sellingPrice: "95000",
    price: "120000",
  },
  {
    _id: "p3",
    productName: "روغن موتور بهران سوپرپیشتاز 10W-40 چهار لیتری",
    productImage: p3,
    category: "روغن و روانکار",
    sellingPrice: "580000",
    price: "620000",
  },
  {
    _id: "p4",
    productName: "تیغه برف پاک‌کن تیبا برند امکو",
    productImage: p4,
    category: "برف پاک‌کن",
    sellingPrice: "130000",
    price: "160000",
  },
  {
    _id: "p5",
    productName: "باطری اتمی صبا باتری 60 آمپر",
    productImage: p5,
    category: "باطری",
    sellingPrice: "1550000",
    price: "1680000",
  },
  {
    _id: "p6",
    productName: "چراغ جلو ال 90 چپ برند مدرن",
    productImage: p6,
    category: "چراغ و نورپردازی",
    sellingPrice: "720000",
    price: "800000",
  },
];

const Home = () => {
  return (
    <div className='w-full font-vazir h-full'>
      <HiroSection />
      <WhyUs />
      <BanerH data={bannerData} />
      <HCardProduct data={vCardData} heading={"پرفروش ترین ها"} />
      <HCardProduct data={[...vCardData].reverse()} heading={"تخفیف دار"} />
      <BanerH data={bannerData2} />
      <VCardProduct data={vCardData} heading={"کیت کلاج"} />
      <VCardProduct data={[...vCardData].reverse()} heading={"روغن موتور"} />
      <ContactUs />
      <HCardProduct data={vCardData} heading={"پرفروش ترین ها"} />
      <HCardProduct data={[...vCardData].reverse()} heading={"تخفیف دار"} />
      <HCardProduct data={vCardData} heading={"پرفروش ترین ها"} />
      <Articles />
    </div>
  );
};

export default Home;
