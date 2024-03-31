import React from "react";

const Button = ({ right, prevSlide, nextSlide }) => {
  const dynamicClassName = `${right ? "rotate-180 " : ""} w-10 cursor-pointer`;
  return (
    <div onClick={right ? prevSlide : nextSlide}>
      <img className={dynamicClassName} src="/button_left.svg" />
    </div>
  );
};

export default Button;
