import { useState } from "react";
import {
  FaPhoneAlt,
  FaLock,
  FaUser,
  FaEye,
  FaEyeSlash,
  FaEyeDropper,
} from "react-icons/fa";
import { Link } from "react-router-dom";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Name:", name, "Phone:", phone, "Password:", password);
    // اینجا می‌تونی لاجیک ثبت‌نام رو اضافه کنی (مثلاً API برای فروشگاه)
  };

  return (
    <div className='flex font-vazir items-center justify-center min-h-screen bg-gray-100 p-4'>
      <div className='w-full max-w-lg bg-white p-6 rounded-2xl shadow-lg'>
        {/* لوگوی فروشگاه */}
        <div className='text-center mb-6'>
          <h1 className='text-2xl lg:text-4xl text-red-600 mb-3'>شجاع پارت</h1>
          <p className='text-gray-500 text-sm lg:text-xl'>
            فروشگاه لوازم یدکی خودرو
          </p>
        </div>

        <form onSubmit={handleSubmit} className='space-y-4 text-sm lg:text-xl'>
          <div className='flex items-center border rounded-xl px-3 py-2'>
            <FaUser className='text-gray-400 ml-2' />
            <input
              type='text'
              placeholder='نام نام خانوادگی'
              value={name}
              onChange={(e) => setName(e.target.value)}
              className='w-full focus:outline-none'
              required
            />
          </div>

          <div className='flex items-center border rounded-xl px-3 py-2'>
            <FaPhoneAlt className='text-gray-400 ml-2' />
            <input
              type='tel'
              placeholder='شماره تماس'
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className='w-full focus:outline-none text-right'
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
            ثبت نام
          </button>
        </form>

        <div className='text-center text-xl text-gray-500 mt-4'>
          <Link to='/login' className='hover:text-orange-600'>
            قبلاً ثبت‌نام کرده‌اید؟ ورود
          </Link>
        </div>
      </div>
    </div>
  );
}
