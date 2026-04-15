import { IoCheckmarkDone } from "react-icons/io5";
import { Sun } from "lucide-react";
import MainVideos from "../components/MainVideos";
import { CButtons } from "../components/Buttons";
import MainPage2 from "./MainPage2";
import MainPage3 from "./MainPage3";
import MainPage4 from "./MainPage4";
import MainPage5 from "./MainPage5";

const MainContent = () => {
  const musicData = [
    {
      dec: "Epic Rock Ballad",
    },
    {
      dec: "Heavy metal power ballad",
    },
    {
      dec: "Enchanting fantasy pop song",
    },
  ];

  return (
    <div className="flex flex-col overflow-y-auto flex-1 bg-black h-screen no-scrollbar  ">
      <div className=" flex flex-col items-center  justify-center   mt-10 p-6">
        <h1 className="text-white lg:text-6xl transition-all leading-tight mx-auto duration-200 max-w-4xl font-semibold md:text-5xl sm:text-4xl p-4 text-center">
          Text to Song AI - Turn Any Idea Into a Song
        </h1>
        <p className="text-zinc-300 font-light px-3 text-center max-w-xl transition-all duration-200 leading-tight lg:text-2xl md:text-xl sm:text-xl ">
          Describe any idea and AI create a complete song with vocals -- in
          seconds
        </p>
      </div>

      <div className="flex items-center justify-center flex-col">
        <div className="mt-6 w-full max-w-xl rounded-2xl border border-neutral-800 bg-black overflow-hidden shadow-lg">
          {/* Textarea */}
          <textarea
            className="w-full bg-transparent text-white placeholder:text-neutral-500 outline-none resize-none p-5 h-20"
            placeholder="Describe the Song you want to make"
          ></textarea>

          {/* Bottom Bar */}
          <div className="flex justify-between items-center px-5 py-1 border-t border-neutral-800 bg-neutral-900">
            {/* Get Inspired */}
            <div className="flex items-center gap-2 text-sm text-neutral-400 cursor-pointer hover:text-white transition">
              <Sun size={16} />
              <span>Get Inspired</span>
            </div>

            {/* Button */}
            <CButtons />
          </div>
        </div>
      </div>

      <div className="flex mt-2 w-full items-center justify-center flex-col ">
        <div className="flex p-2 gap-3">
          {musicData.map((ele, ind) => {
            return (
              <div
                key={ind}
                className="bg-black  border flex  rounded-2xl border-neutral-700 hover:bg-[#e5e7eb] hover:text-amber-50 transition-all duration-300 hover:-translate-y-0.5 justify-center text-center items-center px-3 py-2  "
              >
                <p className="text-neutral-500 font-semibold text-xs ">
                  {ele.dec}
                </p>
              </div>
            );
          })}
        </div>
        <div className="flex gap-2 mt-4 items-center justify-center">
          <p className="flex gap-2 items-center text-white text-xs ">
            <IoCheckmarkDone className="text-green-600" size={20} /> No Credit
            Card Required
          </p>
          <p className="flex gap-2 items-center text-white text-xs ">
            <IoCheckmarkDone className="text-green-600" size={20} /> Free to try
          </p>
        </div>
      </div>
      <MainVideos />
      <MainPage2 />
      <MainPage3/>
      <MainPage4/>
      <MainPage5/>
    </div>
  );
};

export default MainContent;
