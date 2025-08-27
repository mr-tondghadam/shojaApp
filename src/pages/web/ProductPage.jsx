import { useMemo, useState } from "react";
import img from "../../assets/cardH/lent.webp";
import {
  FaShoppingCart,
  FaTag,
  FaCarSide,
  FaCheckCircle,
} from "react-icons/fa";

// مثال داده محصول (می‌توانید از props یا API دریافت کنید)
const product = {
  _id: "p1",
  productName: "لنت ترمز جلو پراید برند تکستار",
  productImage: img,
  category: "ترمز و لنت",
  sellingPrice: "430000",
  price: "480000",
};

export default function ProductPage() {
  const [qty, setQty] = useState(1);

  // محاسبه تخفیف و فرمت قیمت‌ها
  const { formattedPrice, formattedSellingPrice, discountPercent } =
    useMemo(() => {
      const priceNum = Number(product.price) || 0;
      const sellNum = Number(product.sellingPrice) || 0;
      const discount =
        priceNum > 0
          ? Math.max(0, Math.round(((priceNum - sellNum) / priceNum) * 100))
          : 0;

      const formatter = new Intl.NumberFormat("fa-IR");
      return {
        formattedPrice: formatter.format(priceNum),
        formattedSellingPrice: formatter.format(sellNum),
        discountPercent: discount,
      };
    }, []);

  const addToCart = () => {
    // اینجا می‌توانید به سبد خرید اضافه کنید یا به استور/کانتکست بفرستید
    console.log("Add to cart:", { productId: product._id, qty });
    alert("به سبد خرید اضافه شد ✅");
  };

  return (
    <div
      dir='rtl'
      className='min-h-screen mt-20 bg-slate-100 py-6 px-4 md:px-8'>
      {/* بردکرامب ساده */}
      <nav className='text-sm text-gray-500 mb-4'>
        <ol className='flex flex-wrap gap-1'>
          <li>
            <a href='#' className='hover:text-red-600'>
              خانه
            </a>
          </li>
          <li>/</li>
          <li>
            <a href='#' className='hover:text-red-600'>
              {product.category}
            </a>
          </li>
          <li>/</li>
          <li className='text-gray-700'>{product.productName}</li>
        </ol>
      </nav>

      <div className='mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-6'>
        {/* تصویر محصول */}
        <div className='bg-white rounded-2xl shadow-lg p-3 sm:p-4 flex items-center justify-center'>
          <img
            src={product.productImage}
            alt={product.productName}
            className='w-full h-72 sm:h-96 object-contain'
          />
        </div>

        {/* جزئیات محصول */}
        <div className='bg-white rounded-2xl shadow-lg p-5 sm:p-6'>
          {/* عنوان و دسته‌بندی */}
          <div className='mb-3'>
            <h1 className='text-xl sm:text-2xl font-extrabold text-gray-800 leading-snug'>
              {product.productName}
            </h1>
            <div className='mt-2 inline-flex items-center gap-2 text-xs sm:text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full'>
              <FaCarSide />
              <span>{product.category}</span>
            </div>
          </div>

          {/* قیمت و تخفیف */}
          <div className='mt-4 flex items-end gap-3'>
            <div>
              <div className='text-gray-500 line-through text-sm sm:text-base'>
                {formattedPrice} تومان
              </div>
              <div className='text-2xl sm:text-3xl font-bold text-gray-900'>
                {formattedSellingPrice} <span className='text-base'>تومان</span>
              </div>
            </div>
            {discountPercent > 0 && (
              <span className='inline-flex items-center gap-1 bg-red-50 text-red-600 px-2.5 py-1 rounded-full text-sm font-bold'>
                <FaTag /> %{discountPercent} تخفیف
              </span>
            )}
          </div>

          {/* مزایا کوتاه */}
          <ul className='mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2 text-gray-600 text-sm'>
            <li className='flex items-center gap-2'>
              <FaCheckCircle className='text-green-500' />
              <span>مناسب پراید / کیفیت برند تکستار</span>
            </li>
            <li className='flex items-center gap-2'>
              <FaCheckCircle className='text-green-500' />
              <span>ارسال سریع</span>
            </li>
            <li className='flex items-center gap-2'>
              <FaCheckCircle className='text-green-500' />
              <span>ضمانت اصالت کالا</span>
            </li>
            <li className='flex items-center gap-2'>
              <FaCheckCircle className='text-green-500' />
              <span>امکان مرجوع طبق قوانین</span>
            </li>
          </ul>

          {/* انتخاب تعداد و دکمه‌ها */}
          <div className='mt-6 flex flex-col sm:flex-row items-stretch gap-3'>
            <div className='flex items-center justify-between sm:justify-start bg-gray-100 rounded-xl px-3 py-2 w-full sm:w-auto'>
              <span className='text-sm text-gray-600 ml-2'>تعداد:</span>
              <div className='flex items-center gap-2'>
                <button
                  type='button'
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  className='w-9 h-9 rounded-lg bg-white shadow hover:shadow-md transition active:scale-95'
                  aria-label='کاهش تعداد'>
                  −
                </button>
                <span className='min-w-[2ch] text-center font-bold'>{qty}</span>
                <button
                  type='button'
                  onClick={() => setQty((q) => q + 1)}
                  className='w-9 h-9 rounded-lg bg-white shadow hover:shadow-md transition active:scale-95'
                  aria-label='افزایش تعداد'>
                  +
                </button>
              </div>
            </div>

            <button
              type='button'
              onClick={addToCart}
              className='flex-1 sm:flex-none inline-flex items-center justify-center gap-2 bg-orange-600 text-white px-6 py-3 rounded-xl text-base font-bold hover:bg-orange-700 active:scale-[.98] transition'>
              <FaShoppingCart /> افزودن به سبد خرید
            </button>
          </div>

          {/* توضیحات کوتاه */}
          <div className='mt-6'>
            <h2 className='text-lg font-bold text-gray-800 mb-2'>توضیحات</h2>
            <p className='text-gray-600 leading-relaxed text-sm sm:text-base'>
              لنت ترمز جلو مناسب خودروی پراید از برند معتبر تکستار. عمر مفید
              بالا، ترمزگیری نرم و کاهش صدای اضافی. برای رانندگی شهری و بین‌شهری
              ایده‌آل.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
