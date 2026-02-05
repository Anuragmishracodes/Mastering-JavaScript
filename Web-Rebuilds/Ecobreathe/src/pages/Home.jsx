import React from "react";
import Navbar from "../components/Navbar";
import plant1 from "../assets/dieffenbachia.png";
import PlantCard from "../components/home/PlantCard";

const Home = () => {
  return (
    <>
      <div className="w-full h-screen flex flex-col justify-between bg-[#f1f0ea]">
        <Navbar />
        <div className="w-full px-[72px] justify-end pb-6 max-[500px]:px-[24px] max-[900px]:px-[48px] gap-2 max-[500px]:flex-col h-[240px] flex flex-col">
          <div className="w-full flex gap-2 justify-end items-end space-y-0">
            <PlantCard />
            <PlantCard />
            <PlantCard />
            <PlantCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
