import React from "react";
import plant1 from "../../assets/dieffenbachia.png";

const PlantCard = () => {
  return (
    <div className="w-1/4 max-[1200px]:w-1/3 cardd p-2 h-48 bg-neutral-50 cursor-pointer hover:bg-green-700 rounded-[12px] hover:h-60 hover:text-neutral-50 max-[1200px]:hover:w-1/2 hover:w-1/3 transition-all ease-in-out duration-600">
      <div className="w-full h-full flex justify-between transition-all ease-in-out duration-600">
        <div className="flex items-center justify-center">
          <img
            src={plant1}
            alt=""
            className="w-28 transition-all ease-in-out duration-600"
          />
        </div>
        <div className="text-left w-2/3 flex flex-col p-2 justify-center transition-all ease-in-out duration-600">
          <h5 className="font-[Satoshi] transition-all ease-in-out duration-600 text-xl font-bold tracking-tighter">
            Dieffenbachia Plant
          </h5>
          <p className="font-[Satoshi] transition-all ease-in-out duration-600">
            Lorem ipsum dolor sit amet consectetur.
          </p>
          <h4 className="font-[Satoshi] transition-all ease-in-out duration-600 text-2xl my-2 font-bold tracking-tighter">
            $49.99
          </h4>
          <button className="bg-neutral-50 text-neutral-950 hidden w-fit h-fit px-6 py-3 rounded-xl font-[Satoshi] transition-all ease-in-out duration-600 cursor-pointer font-medium">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlantCard;
