import { PlayIcon } from "lucide-react";

const MainVideos = () => {
  const videoData = [
    {
      id: "1",
      name: "Sunset Bliss",
      width: 222,
      height: 222,
      url: "/Video/1.jpeg",
    },
    {
      id: "2",
      name: "Ocean Breeze",
      width: 222,
      height: 222,
      url: "/Video/2.jpeg",
    },
    {
      id: "3",
      name: "Mountain Peak",
      width: 222,
      height: 222,
      url: "/Video/3.jpeg",
    },
    {
      id: "4",
      name: "Forest Walk",
      width: 222,
      height: 222,
      url: "/Video/6.jpeg",
    },
    {
      id: "5",
      name: "Golden Desert",
      width: 222,
      height: 222,
      url: "/Video/7.jpeg",
    },
    {
      id: "6",
      name: "Rainy Mood",
      width: 222,
      height: 222,
      url: "/Video/8.jpeg",
    },
    {
      id: "7",
      name: "Snowy Hills",
      width: 222,
      height: 222,
      url: "/Video/9.jpeg",
    },
    {
      id: "8",
      name: "Green Valley",
      width: 222,
      height: 222,
      url: "/Video/10.jpeg",
    },
    {
      id: "9",
      name: "Blue Lagoon",
      width: 222,
      height: 222,
      url: "/Video/11.jpeg",
    },
    {
      id: "10",
      name: "River Flow",
      width: 222,
      height: 222,
      url: "/Video/12.jpeg",
    },
    {
      id: "11",
      name: "Misty Morning",
      width: 222,
      height: 222,
      url: "/Video/4.jpeg",
    },
    {
      id: "12",
      name: "Autumn Leaves",
      width: 222,
      height: 222,
      url: "/Video/5.jpeg",
    },
  ];
  return (
    <div className="mainPage grid grid-cols-4 px-17.5 mt-3 grid-rows-3 gap-1 rounded-3xl ">
      {videoData.map((e) => {
        return (
          <div
            key={e.id}
            className="max-h-xl flex flex-col p-10 max-w-xl hover:scale-[1.09] transition-all duration-300 hover:-translate-y-2 relative group cursor-pointer"
          >
            <img
              src={e.url}
              alt={e.name}
              className="aspect-square w-full object-cover"
            />
            <p className="text-white text-center text-xl"> {e.name} </p>

            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-200 flex items-center justify-center group-hover:scale-105 rounded">
              <PlayIcon className="text-white" size={40} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MainVideos;
