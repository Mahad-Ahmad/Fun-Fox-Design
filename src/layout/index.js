import Pagination from "@/common/Pagination";
import React from "react";

const MainLayout = ({ children }) => {
  return (
    <div className="bg-[pink] px-[80px] pt-[80px] flex justify-center items-center flex-col">
      {children}
      <div className="py-5 flex items-center justify-between w-full">
        <div>
          <img src="/footer_person.svg" />
        </div>
        <Pagination />
        <div>
          <img src="/footer_info.svg" />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
