import React from "react";

const Button = ({ right }) => {
  const dynamicClassName = `${right ? "rotate-180 " : ""}w-[100px]`;
  return (
    <div>
      <img className={dynamicClassName} src="/button_left.svg" />
    </div>
  );
};

export default Button;
