import p1 from "../../assets/cardH/lent.webp";
import p2 from "../../assets/cardH/206filter.webp";
import p3 from "../../assets/cardH/bahranoil.webp";
import { useContext, useEffect, useState } from "react";
// import axios from "axios";
import { MdDelete } from "react-icons/md";
// import { toast } from "react-toastify";

// import { AllAPIs } from "../common";
// import loading1 from "../assest/Loading.gif";
import { textTruncate } from "../../helpers/truncate";
import { formatNumber } from "../../helpers/formatNumber";
// import { textTruncate } from "../helpers/truncate";
// import Context from "../context";

const Cart = () => {
  const [data, setData] = useState([
    {
      productId: {
        productName: "لنت ترمز جلو پراید",
        brandName: "ایمن ترمز",
        category: "سیستم ترمز",
        productImage: [p1, "https://example.com/images/pride-brakepad2.jpg"],
        description:
          "لنت ترمز با کیفیت مناسب برای خودروی پراید، ساخت ایران با طول عمر بالا.",
        price: 250000,
        sellingPrice: 220000,
      },
      quantity: 2,
      userId: "user_001",
    },
    {
      productId: {
        productName: "فیلتر روغن پژو ۴۰۵",
        brandName: "پارس فیلتر",
        category: "موتور",
        productImage: [p2],
        description:
          "فیلتر روغن با دوام مناسب برای خودروهای پژو، جلوگیری از ورود آلودگی به موتور.",
        price: 80000,
        sellingPrice: 70000,
      },
      quantity: 1,
      userId: "user_002",
    },
    {
      productId: {
        productName: "فیلتر هوای سمند EF7",
        brandName: "صنایع فیلتر ایران",
        category: "ورودی هوا",
        productImage: [p3],
        description:
          "فیلتر هوای با قابلیت شستشو، مناسب موتور EF7، افزایش کارایی و کاهش مصرف سوخت.",
        price: 120000,
        sellingPrice: 100000,
      },
      quantity: 3,
      userId: "user_003",
    },
  ]);
  const [loading, setLoading] = useState(false);
  // const { userAddToCart } = useContext(Context);
  // const userCart = async () => {
  //   try {
  //     setLoading(true);
  //     const dataResponse = await axios.get(AllAPIs.addToCartProductToView.url, {
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       withCredentials: true,
  //     });
  //     if (dataResponse.data.success) {
  //       console.log("******************", dataResponse.data.data);
  //       setData(dataResponse.data.data);
  //       setLoading(false);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // useEffect(() => {
  //   userCart();
  // }, []);

  // const increaseQty = async (id, qty) => {
  //   try {
  //     setLoading(true);
  //     const dataResponse = await axios.post(
  //       AllAPIs.updateCartProduct.url,
  //       JSON.stringify({
  //         _id: id,
  //         quantity: qty + 1,
  //       }),
  //       {
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         withCredentials: true,
  //       }
  //     );
  //     if (dataResponse.data.success) {
  //       userCart();
  //       setLoading(false);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };
  // const decreaseQty = async (id, qty) => {
  //   if (qty <= 1) {
  //     return toast.error("product quantity can't less than 1");
  //   }
  //   if (qty >= 2) {
  //     try {
  //       setLoading(true);
  //       const dataResponse = await axios.post(
  //         AllAPIs.updateCartProduct.url,
  //         JSON.stringify({
  //           _id: id,
  //           quantity: qty - 1,
  //         }),
  //         {
  //           headers: {
  //             "Content-Type": "application/json",
  //           },
  //           withCredentials: true,
  //         }
  //       );
  //       if (dataResponse.data.success) {
  //         userCart();
  //         setLoading(false);
  //       }
  //     } catch (error) {
  //       console.log(error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   }
  // };
  // const deleteProductFromCart = async (id, qty) => {
  //   try {
  //     setLoading(true);
  //     const dataResponse = await axios.post(
  //       AllAPIs.deleteProductFromCart.url,
  //       JSON.stringify({
  //         _id: id,
  //       }),
  //       {
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         withCredentials: true,
  //       }
  //     );
  //     if (dataResponse.data.success) {
  //       userCart();
  //       userAddToCart();
  //       setLoading(false);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  const totalQty = data.reduce((prev, current) => prev + current.quantity, 0);
  const totalPrice = data.reduce(
    (prev, current) =>
      prev + current.quantity * current?.productId?.sellingPrice,
    0
  );

  return (
    <div className='mx-auto container mt-10 lg:mt-20 min-h-screen font-vazir p-3'>
      <div className='text-center text-lg'>
        {data.length === 0 && !loading && (
          <p className='bg-white py-5'>No Data..!</p>
        )}
      </div>

      <div className='flex flex-col lg:flex-row gap-10 justify-center items-center lg:justify-between'>
        <div className='w-full'>
          {loading ? (
            <div>
              {/* <div className='flex justify-center'>
                <img
                  src={loading1}
                  alt='login icon'
                  className='rounded-full w-12 md:w-24 mix-blend-multiply'
                />
              </div> */}
            </div>
          ) : (
            data.map((product, index) => (
              <div
                key={product?._id}
                className='w-full bg-white h-40 my-3 text-black lg:px-5 rounded-md border border-slate-300 grid grid-cols-[128px,1fr] items-center'>
                <div className='w-32 h-32 pl-2'>
                  <img
                    src={product?.productId?.productImage[0]}
                    className='w-full h-full object-scale-down'
                  />
                </div>
                <div className='p-4 relative'>
                  <button
                    className='absolute left-0 text-red-600 m-1 p-2 text-xl lg:text-2xl rounded-full hover:bg-red-600 hover:text-white'
                    onClick={() => {
                      // deleteProductFromCart(product?._id);
                    }}>
                    <MdDelete />
                  </button>

                  <h2 className='text-lg lg:text-xl text-ellipsis line-clamp-1'>
                    {textTruncate(product?.productId?.productName, 20)}
                  </h2>
                  <p className='text-slate-500'>
                    {product?.productId?.category}
                  </p>
                  <div className='flex w-full justify-between'>
                    <p className='text-red-600 font-medium text-lg'>
                      بهای واحد :{" "}
                      {formatNumber(product?.productId?.sellingPrice)}
                    </p>
                    <p className='text-slate-600 font-medium text-lg'>
                      جمع تعداد :{" "}
                      {formatNumber(
                        product?.productId?.sellingPrice * product?.quantity
                      )}
                    </p>
                  </div>

                  <div className='flex gap-2'>
                    <button
                      className='border border-red-500 w-6 h-6 flex justify-center items-center  hover:bg-red-500 hover:text-white rounded-md'
                      onClick={() => {
                        // increaseQty(product?._id, product?.quantity);
                      }}>
                      +
                    </button>
                    <span className=''>{product?.quantity}</span>
                    <button
                      className='border border-red-500 w-6 h-6 flex justify-center items-center  hover:bg-red-500 hover:text-white rounded-md'
                      onClick={() => {
                        // decreaseQty(product?._id, product?.quantity);
                      }}>
                      -
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
        {/* Total */}
        <div className=' lg:mt-0 w-full max-w-sm'>
          {loading ? (
            <div>
              {/* <div className='flex justify-center'>
                <img
                  src={loading1}
                  alt='login icon'
                  className='rounded-full w-12 md:w-24 mix-blend-multiply'
                />
              </div> */}
            </div>
          ) : (
            <div className='bg-white rounded-md overflow-hidden'>
              <h2 className='text-white bg-orange-900 px-4 py-1'>مجموع</h2>
              <div className='p-1 px-5 flex items-center justify-between text-slate-600 text-lg'>
                <p>شمار :</p>
                <p>{totalQty}</p>
              </div>
              <div className='p-1 px-5 flex items-center justify-between text-slate-600 text-lg'>
                <p>جمع کل :</p>
                <p>{formatNumber(totalPrice)}</p>
              </div>
              <button className='bg-orange-600 text-white w-full p-2'>
                پرداخت
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
