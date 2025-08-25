const BtnComponent = ({
  text = "کلیک",
  onClick = () => {},
  type = "button",
  ariaLabel,
  fade = false,
  style = "bg-orange-700 hover:bg-orange-900 ",
}) => {
  const aosProps = fade ? { "data-aos": "fade-up" } : {};
  return (
    <button
      {...aosProps}
      type={type} // ✅ مشخص‌کردن نوع دکمه (submit, reset, button)
      aria-label={ariaLabel || text} // ✅ کمک به screen readerها
      className={`mx-10 font-vazir  rounded-md my-5 py-2 px-10 text-white transition-all ${style}`} // ✅ اضافه شدن transition برای تجربه کاربری بهتر
      onClick={onClick}>
      {text}
    </button>
  );
};

export default BtnComponent;
