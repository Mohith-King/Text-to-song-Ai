import React from "react";
import { IoIosCheckmarkCircle } from "react-icons/io";

const FeaturesWeb = ({ sections }) => {
  return (
    <div>
      {sections.map((e) => {
        const isReverse = e.id % 2 !== 0;
        return (
          <div
            key={e.id}
            className={`flex flex-col md:flex-row items-center gap-10 my-16 transtion duration-300 ${isReverse ? "md:flex-row-reverse" : ""}`}
          >
            <div className="flex-1">
              <img src={e.image} alt={e.title} className="rounded-2xl w-full" />
            </div>

            {/* Content */}
            <div className="flex-1  text-white hover:scale-105 transition duration-300">
              <h2 className="text-3xl text-center font-bold"> {e.title} </h2>
              <p className="text-gray-400 text-center"> {e.description} </p>
              <ul className="space-y-2 mt-2 flex flex-col items-center justify-center leading-tight ">
                {e.points.map((point, ind) => {
                 return <li className="text-white flex items-center gap-3 text-bold" key={ind}> <IoIosCheckmarkCircle
                 className="text-green-500 " size={20} /> {point} </li>;
                })}
              </ul>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FeaturesWeb;
