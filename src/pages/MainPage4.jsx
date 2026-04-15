import React from "react";

const MainPage4 = () => {
  const steps = [
    {
      id: 1,
      title: "Enter Your Text or Lyrics",
      desc: "Type a description of the song you want (e.g., 'an upbeat pop song about chasing dreams') or paste your own lyrics. The AI song generator uses your details — mood, genre, and tempo — to shape the output.",
    },
    {
      id: 2,
      title: "Choose a Style & Generate",
      desc: "Pick from 40+ genres, customize the vocal style, and click generate. The AI transforms your text to music — composing vocals, instruments, and a full arrangement in seconds.",
    },
    {
      id: 3,
      title: "Download & Share Your Music",
      desc: "Preview your AI-generated song, make adjustments if needed, then download in high-quality audio. Your text to music creation is ready to share on Spotify, YouTube, TikTok, SoundCloud, or any platform.",
    },
  ];
  return (
    <div className="flex flex-col items-center  justify-center no-scrollbar  mt-10 p-6 md:flex-col md:flex-wrap sm:flex-col ">
      <h1 className="text-zinc-100 lg:text-5xl transition-all leading-tight mx-auto duration-200 max-w-4xl font-semibold md:text-5xl sm:text-4xl p-4 text-center">
        How to Turn Text Into a Song in 3 Steps
      </h1>
      <p className="text-zinc-300 font-semibold px-3 text-center max-w-3xl transition-all duration-200 leading-tight lg:text-xl md:text-sm sm:text-xs ">
        Our AI song generator makes it simple to go from an idea to a finished
        track — here's how it works
      </p>

      <div className="flex gap-10 max-h-75 overflow-hidden    mt-10">
        {steps.map((e) => {
          return (
            <div key={e.id} className="flex flex-col p-4 gap-3 rounded-xl w-1/3  bg-zinc-900">
              <div className="bg-white w-10 mb-4  rounded-[50%] flex justify-center items-center text-xl font-semibold "> {e.id} </div>
              <h1 className="text-white mt-2 mb-2 md:text-md  text-xl font-bold"> {e.title} </h1>
              <p className="lg:text-xl  font-semibold md:text-md text-zinc-300"> {e.desc} </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MainPage4;
