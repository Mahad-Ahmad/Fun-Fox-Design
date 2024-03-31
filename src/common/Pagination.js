import React from "react";
import Button from "./Button";

const Pagination = ({ prevSlide, nextSlide, currentSlide }) => {
  return (
    <div className="flex gap-2 items-start">
      <Button right prevSlide={prevSlide} nextSlide={nextSlide} />
      <div className="relative flex items-center justify-center rounded-[8px] border-[2px_solid_#F8EBFD] bg-[#AA1070] mt-1 p-[1px_1px_2px_1px] w-[75px] h-[fit-content] box-sizing-border">
        <div className="rounded-[8px] bg-[#CD3F97] flex items-center justify-between p-[0px_8px_4px_0] w-[73px] h-[fit-content] box-sizing-border">
          <span className="ml-5 text-[20px] text-[#FFFFFF]">
            {currentSlide + 1}
          </span>
        </div>
        <div className="absolute right-[26px] bottom-[1px] w-[1px] h-[35px] bg-[#ED75C0] rounded-[2px]"></div>
        <div className="absolute right-[25px] bottom-[1px] ml-10 text-white h-[35px] flex items-center justify-center rounded-[2px] bg-[#AA1070] w-[1px]">
          <span className="text-[20px] rotate-180 mb-2 ml-5 cursor-pointer">
            ^
          </span>
        </div>
      </div>
      <Button prevSlide={prevSlide} nextSlide={nextSlide} />
    </div>
  );
};

export default Pagination;
