import React from "react";

const Heading = ({
  text = "Heading",
  desc = "",
  Hsize = "text-3xl",
  Psize = "text-sm",
  styles = "mt-1 mb-5",
}) => {
  return (
    <div
      data-aos='zoom-in'
      className={`w-full flex ${styles} font-vazir text-slate-800 flex-col overflow-hidden items-center justify-center dark:text-white`}>
      <h1 className={`font-bold text-2xl md:${Hsize}`}>{text}</h1>
      {desc !== "" ? (
        <p className={`font-semibold ${Psize} mt-1`}>{desc}</p>
      ) : null}
    </div>
  );
};

export default Heading;
