import Pagination from "@/common/Pagination";
import React from "react";

const MainLayout = ({ children, prevSlide, nextSlide, currentSlide }) => {
  return (
    <div className="bg-[pink] px-[80px] pt-[80px] flex justify-center items-center flex-col relative">
      <div className="absolute top-0 start-0">
        <img src="/fun_fox_logo.svg" />
      </div>
      <div className="absolute top-2 start-[150px]">
        <img src={currentSlide === 0 && "/week_1.svg"} />
      </div>
      <div className="absolute top-[200px] start-[10px]">
        <img className="w-[5vw] lg:w-[4vw]" src="/pencil.svg" />
      </div>
      <div className="absolute  start-[10px]">
        <img className="w-[5vw] lg:w-[4vw]" src="/bag.svg" />
      </div>
      <div className="absolute bottom-[100px] start-[10px]">
        <img className="w-[5vw] lg:w-[4vw]" src="/book.svg" />
      </div>
      <div className="absolute top-[200px] end-[10px]">
        <img className="w-[5vw] lg:w-[4vw]" src="/scale.svg" />
      </div>
      <div className="absolute  end-[10px]">
        <img
          className="w-[5vw] lg:w-[4vw]"
          src={currentSlide === 0 ? "/book_2.svg" : "/question_box.svg"}
        />
      </div>
      <div className="absolute w-[5vw] lg:w-[4vw] bottom-[100px] end-[10px]">
        <img src="/hat.svg" />
      </div>
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
        <Pagination
          prevSlide={prevSlide}
          nextSlide={nextSlide}
          currentSlide={currentSlide}
        />
        <div>
          <img src="/footer_info.svg" />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
