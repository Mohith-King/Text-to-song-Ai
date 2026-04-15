import React from "react";

const MainPage5 = () => {
  const creators = [
    {
      id: 1,
      name: "Omar Díaz",
      role: "YouTube Creator · 500K Subscribers",
      message:
        "I used to spend hours searching for the right background music. This AI music generator changed everything — I type a description, and in seconds I get a custom track that perfectly matches my video's mood. Total game changer.",
      image: "/images/user1.png",
    },
    {
      id: 2,
      name: "Macit Doğan",
      role: "Independent Songwriter",
      message:
        "As a lyricist, turning my lyrics to music was always the hardest part. This AI brings my words to life with melodies I couldn't have imagined. It's like having a producer available 24/7.",
      image: "/images/user2.png",
    },
    {
      id: 3,
      name: "Keerthi Nand",
      role: "Podcast Producer",
      message:
        "I needed a unique intro track for my podcast. Used the text to song feature, typed a description, picked a style, and had a professional-sounding track in under a minute. The quality genuinely surprised me.",
      image: "/images/user3.png",
    },
    {
      id: 4,
      name: "Sabrina Akulenko",
      role: "Music Educator",
      message:
        "I use this AI song maker in my classroom to teach composition. Students turn their lyrics to music, hear them as real songs, and suddenly music theory clicks. The engagement is unlike anything I've seen.",
      image: "/images/user4.png",
    },
    {
      id: 5,
      name: "Dania Vu",
      role: "TikTok Creator · 2M Followers",
      message:
        "All my viral sounds come from this text to music tool. I create trending audio in any style within minutes — it's my secret weapon for staying ahead of the algorithm.",
      image: "/images/user5.png",
    },
    {
      id: 6,
      name: "Elling Låstad",
      role: "Marketing Director at AdVibe",
      message:
        "We replaced our $5,000/month licensing budget with this AI song generator. Custom jingles for every campaign, instant turnaround, full commercial rights. Our ROI improved overnight.",
      image: "/images/user6.png",
    },
  ];

  return (
    <div className="flex flex-col items-center  justify-center no-scrollbar  mt-10 p-6 ">
      <h1 className="text-zinc-100 lg:text-4xl transition-all leading-tight mx-auto duration-200 max-w-4xl font-semibold md:text-5xl sm:text-4xl p-4 text-center">
        Loved by Creators Worldwide
      </h1>
      <p className="text-zinc-300 font-semibold px-3 text-center max-w-3xl transition-all duration-200 leading-tight lg:text-md md:text-sm sm:text-xs ">
        Join thousands of musicians, content creators, and businesses who use
        our AI song generator to turn ideas into professional music every day.
      </p>
      <div className="flex  p-5 flex-wrap items-center  gap-5 mt-5">
        {creators.map((e) => {
          return (
            <div
              key={e.id}
              className="flex flex-col  text-white  w-[400px]  rounded-x p-10  bg-gray-400"
            >
              <div className="flex gap-2">
                <div className="images h-10 w-10 rounded-[50%] bg-white">
                  <img src={e.image} alt={e.name} />
                </div>
                <div className="flex flex-col">
                  <h2> {e.name} </h2>
                  <h5> {e.role} </h5>
                </div>
              </div>
              <p className=""> {e.message} </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MainPage5;
