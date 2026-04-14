import React from "react";

const FeatureCard = ({ data }) => {
  const infoData = data;
  return (
    <>
      {infoData.map((e) => {
        return (
          <div
            key={e.id}
            className="bg-zinc-900 flex flex-col justify-center items-center max-w-90 min-h-30 hover:scale-105 p-4 rounded-2xl hover:bg-zinc-800 transition-all duration-300 cursor-pointer"
          >
            <h2 className="text-2xl font-semibold text-white text-center mb-2">
              {e.title}
            </h2>
            <p className="text-white  text-center">{e.description}</p>
          </div>
        );
      })}
    </>
  );
};

export default FeatureCard;
