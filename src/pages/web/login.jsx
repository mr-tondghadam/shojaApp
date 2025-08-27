import { useState } from "react";
import { FaPhoneAlt, FaLock, FaEyeSlash, FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function LoginPage() {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Phone:", phone, "Password:", password);
    // اینجا می‌تونی لاجیک لاگین رو اضافه کنی (مثلاً API برای فروشگاه)
  };

  return (
    <div className='flex items-center font-vazir justify-center min-h-screen p-4'>
      <div className='w-full max-w-[600px] z-20 relative bg-white p-5 lg:p-10 rounded-2xl shadow-lg'>
        {/* لوگوی فروشگاه */}
        <div className='text-center mb-6'>
          <h1 className='text-2xl lg:text-4xl text-red-600 mb-3'>شجاع پارت</h1>
          <p className='text-gray-500 text-sm lg:text-xl'>
            فروشگاه لوازم یدکی خودرو
          </p>
        </div>

        <form onSubmit={handleSubmit} className='space-y-5 text-sm lg:text-xl'>
          <div className='flex items-center border rounded-xl px-3 py-2'>
            <FaPhoneAlt className='text-gray-400 mr-2' />
            <input
              type='tel'
              placeholder='شماره تماس'
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className='w-full focus:outline-none py-1 text-right px-3'
              required
            />
          </div>

          <div className='flex items-center border rounded-xl px-3 py-2'>
            <FaLock className='text-gray-400 ml-2' />
            <input
              type={showPass ? "text" : "password"}
              placeholder='گذرواژه'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className='w-full focus:outline-none'
              required
            />
            <button
              className='text-xl text-slate-400 hover:text-slate-600'
              onClick={() => {
                setShowPass(!showPass);
              }}>
              {showPass ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          <button
            type='submit'
            className='w-full bg-orange-600 text-white py-2 rounded-xl hover:bg-orange-700 transition'>
            ورود به حساب
          </button>
        </form>

        <div className='flex justify-evenly text-sm lg:text-xl text-gray-500 mt-4'>
          <Link to='/register' className='hover:text-red-600'>
            نام نویسی
          </Link>
          <Link to='/forget-pass' className='hover:text-yellow-600'>
            فراموشی گذزواژه؟
          </Link>
        </div>
      </div>
    </div>
  );
}
