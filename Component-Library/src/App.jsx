import React from "react";
import SwapNav from "./components/SwapNav";
import BubbleNav from "./components/BubbleNav";

const App = () => {
  return (
    <>
      <div className="w-full h-24 bg-neutral-950 text-neutral-100 font-[Satoshi] flex items-center justify-center text-7xl font-bold">
        Components Library
      </div>
      <div className="w-full h-96 bg-neutral-950 flex items-center justify-center">
        <div className="GoodiesWrapper w-3/4 h-3/4 flex flex-col items-center justify-between">
          <div className="w-full px-12 py-3 z-30 relative flex justify-between border border-[#ffffff0f] text-neutral-100">
            <span>G001 - SwapNav</span>
          </div>
          <div className="w-full h-fit border border-[#ffffff0f]">
            <SwapNav />
          </div>
          <div className="w-full h-fit px-12 py-3 border border-[#ffffff0f] text-right text-neutral-100">
            A glassmorphic navbar featuring a vertical slide-reveal interaction
            on hover
          </div>
        </div>
      </div>
      <div className="w-full h-96 bg-neutral-950 flex items-center justify-center">
        <div className="GoodiesWrapper w-3/4 h-3/4 flex flex-col items-center justify-between">
          <div className="w-full px-12 py-3 z-30 relative flex justify-between border border-[#ffffff0f] text-neutral-100">
            <span>G001 - SwapNav</span>
          </div>
          <div className="w-full h-fit border border-[#ffffff0f]">
            <BubbleNav />
          </div>
          <div className="w-full h-fit px-12 py-3 border border-[#ffffff0f] text-right text-neutral-100">
            A glassmorphic navbar featuring a vertical slide-reveal interaction
            on hover
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
