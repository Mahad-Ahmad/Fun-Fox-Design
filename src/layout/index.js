import Pagination from "@/common/Pagination";
import React from "react";

const MainLayout = ({ children, prevSlide, nextSlide,currentSlide }) => {
  return (
    <div className="bg-[pink] px-[80px] pt-[80px] flex justify-center items-center flex-col relative">
      <div className="absolute start-0">
        <img src="/lines_left.svg" />
      </div>
      <div className="bg-white text-center rounded-[15px]">{children}</div>
      <div className="absolute end-0">
        <img src="/lines_right.svg" />
      </div>
      <div className="py-5 flex items-center justify-between w-full">
        <div>
          <img src="/footer_person.svg" />
        </div>
        <Pagination prevSlide={prevSlide} nextSlide={nextSlide} currentSlide={currentSlide}/>
        <div>
          <img src="/footer_info.svg" />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
