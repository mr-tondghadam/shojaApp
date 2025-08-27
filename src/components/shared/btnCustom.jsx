import { Link } from "react-router-dom";

const BtnComponent = ({
  text = "کلیک",
  onClick = () => {},
  type = "button",
  ariaLabel,
  fade = false,
  style = "bg-orange-700 hover:bg-orange-900 ",
  to = "",
}) => {
  const aosProps = fade ? { "data-aos": "fade-up" } : {};

  return (
    <>
      {to !== "" ? (
        <Link
          {...aosProps}
          type={type}
          aria-label={ariaLabel || text}
          className={`mx-10 font-vazir rounded-md my-3 lg:my-5 py-1 px-4 lg:px-10 text-white transition-all ${style}`}
          to={to}>
          {text}
        </Link>
      ) : (
        <button
          {...aosProps}
          type={type}
          aria-label={ariaLabel || text}
          className={`mx-10 font-vazir rounded-md my-3 lg:my-5 py-1 px-4 lg:px-10 text-white transition-all ${style}`}
          onClick={onClick}>
          {text}
        </button>
      )}
    </>
  );
};

export default BtnComponent;
