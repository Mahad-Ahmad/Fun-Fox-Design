import React from "react";

const SecondScreen = () => {
  return (
    <div className="text-left p-[25px]">
      <p className="text-[32px] pb-3 font-normal">
        Can you figure out the definition of setting from the following
        examples?
      </p>
      <p className="text-[24px] pb-3">(take a minute to think about this)</p>

      <div className="flex justify-around mb-5">
        <div className="w-[250px] text-center">
          <div className="border-[3px] border-dashed rounded-lg border-[#CCCCCC] text-center flex justify-end px-8 py-3">
            <img className="" src="/beach.svg" />
          </div>
          <p className="text-[20px] pt-1">Sunny day at a beach</p>
        </div>
        <div className="w-[250px] text-center">
          <div className="border-[3px] border-dashed rounded-lg border-[#CCCCCC] px-8 py-3">
            <img className="w-[200px]" src="/moon_house.svg" />
          </div>
          <p className="text-[20px] w-[300px] ml-[-20px] mt-1">
            A cold rainy night in a haunted house in October
          </p>
        </div>
      </div>
      <p className="text-[24px] pb-6">
        So, what do you think the definition of setting is?
      </p>
      <div className="flex gap-4 justify-between text-[24px] mb-5">
        <p>Any guesses?</p>
        <span className="rounded-lg left-[248px] px-5 pb-2 bottom-[10px] break-words font-['Short_Stack'] font-normal text-[24px] leading-[1.208] text-[#B6B6B6] border-[3px] border-dashed border-[#CCCCCC]">
          _________________________________________________
        </span>
        <div className="flex items-center gap-4">
          <p>Hint:</p>
          <img className="inline w-14 px-1" src="/clock.svg" />
          <img className="inline w-14 px-1" src="/house.svg" />
        </div>
      </div>
      <p className="text-[24px] flex items-center bg-[#25A3A1] border-[3px] border-dashed border-[#A4FDFB] mb-5">
        <span style={{ whiteSpace: "nowrap" }}>Setting is the time</span>
        <img className="inline w-8 px-1" src="/clock.svg" />
        <span style={{ whiteSpace: "nowrap" }}> and place</span>
        <img className="inline w-5 px-1" src="/house.svg" />
        <span>
          of a story. It often answers the questions: when? and where?
        </span>
      </p>

      <p className="text-[24px] pb-2">
        The time of the story could be in the past, future, day, night, summer
        or winter. A story may take place in a school, a mall, a desert, an
        airplane or in a variety of other places.
      </p>
    </div>
  );
};

export default SecondScreen;
