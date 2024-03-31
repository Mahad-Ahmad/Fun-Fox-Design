import React from "react";

const FirstScreen = () => {
  return (
    <div className="flex flex-col justify-center items-center p-[25px]">
      <div className="border-[3px] border-dashed border-[#FFAEBE] bg-[#fe6784]  px-5 rounded-[25px]">
        <p className="text-[32px] text-white">Elements of Story Writing</p>
      </div>
      <div className="py-1">
        <p className="text-[2vw] text-start">
          Welcome to term 2 of Writers Club. Are you excited for this amazing
          journey? Over the next week, we will be practicing the different
          elements of story writing. Our aim is to make stories more interesting
          and exciting.
        </p>
      </div>
      <div className="flex flex-row p-2 bg-[#25A3A1] border-[3px] border-dashed border-[#A4FDFB] text-white">
        <p className="text-[2vw] text-start">
          There are elements which make the foundation for story writing. An
          element is an essential part of something and every fiction story has
          the same key elements:
        </p>
        <div>
          <img src="/child_writing.svg" alt="An SVG of an eye" />
        </div>
      </div>
      <div className="flex  w-[80vw] flex-row gap-4 p-[20px]">
        <div className="cloud-content">
          <img src="/cloud_1-3.svg" alt="Cloud" />
          <span className="overlay-text">Settings</span>
        </div>
        <div className="cloud-content">
          <img src="/cloud_2-5.svg" alt="Cloud" />
          <span className="overlay-text">CHARACTERS</span>
        </div>
        <div className="cloud-content">
          <img src="/cloud_1-3.svg" alt="Cloud" />
          <span className="overlay-text">PLOT</span>
        </div>
        <div className="cloud-content">
          <img src="/cloud_4.svg" alt="Cloud" />
          <span className="overlay-text">
            PROBLEM <br /> OR Conflict
          </span>
        </div>
        <div className="cloud-content">
          <img src="/cloud_2-5.svg" alt="Cloud" />
          <span className="overlay-text">RESOLUTION</span>
        </div>
      </div>
      <div>
        <p className="text-[2vw] text-start py-[5px] px-[20px]">
          You must be familiar with some of these. If not, do not worry! we will
          cover all these elements as we go along.
        </p>
      </div>
      <div className="bg-[#FE6784] px-[10px] pt-8 pb-2 rounded-[20px] shadow-[0_8px_2px_0_rgba(0,0,0,0.25)] relative">
        <img src="./rectangle_note.svg" className="object-cover" />
        <div className="absolute top-0 text-[2vw] text-start pt-[30px] pb-[20px] px-[45px]">
          <p>
            For today’s lesson, we will try to understand and practice writing
            the setting for our stories.
          </p>
          <p>The setting is an important element of every fiction story.</p>
        </div>
      </div>
    </div>
  );
};

export default FirstScreen;
