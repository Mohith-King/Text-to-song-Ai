import React from "react";
import FeatureCard from "../components/FeatureCard";

const MainPage2 = () => {
  const features = [
    {
      id: "natural-ai-vocal-synthesis",
      title: "Natural AI Vocal Synthesis",
      description:
        "The AI song maker produces expressive singing voices across dozens of vocal styles and 10+ languages. From soft acoustic ballads to high-energy pop anthems — every voice sounds authentic and emotionally rich.",
    },
    {
      id: "lyrics-to-music-conversion",
      title: "Lyrics to Music Conversion",
      description:
        "Paste your own lyrics and the AI composes matching melodies, harmonies, and arrangements. Intelligent rhythm analysis ensures vocals flow naturally with the beat, capturing the emotion behind every word.",
    },
    {
      id: "multi-track-song-production",
      title: "Multi-Track Song Production",
      description:
        "Every generated song includes separate vocal, instrumental, bass, and percussion tracks — giving you full control for mixing, remixing, and professional post-production workflows.",
    },
    {
      id: "30-second-song-generation",
      title: "30-Second Song Generation",
      description:
        "The AI song generator produces complete tracks in under 30 seconds. No rendering queues, no waiting — fast, reliable results every time you create. Iterate rapidly and explore ideas without friction.",
    },
    {
      id: "40-plus-genre-adaptive-styles",
      title: "40+ Genre-Adaptive Styles",
      description:
        "Pop, hip-hop, jazz, rock, R&B, electronic, classical, country, K-pop, Latin, lo-fi, ambient, and more. Whether you convert text to music or turn lyrics to music, each genre model captures authentic sonic characteristics for true-to-style output.",
    },
    {
      id: "studio-quality-audio-export",
      title: "Studio-Quality Audio Export",
      description:
        "Download every track in high-fidelity, streaming-ready audio. Every song from our text to song AI is professionally mixed and mastered — ready for Spotify, YouTube, TikTok, or any platform.",
    },
  ];
  return (
    <div className="main2 w-full px-6 py-10 mt-10  ">
      <div className=" flex flex-col items-center  justify-center   mt-10 p-6">
        <h1 className="text-zinc-100 lg:text-4xl transition-all leading-tight mx-auto duration-200 max-w-4xl font-semibold md:text-5xl sm:text-4xl p-4 text-center">
          What Makes This Ai Song Generator Different
        </h1>
        <p className="text-zinc-300 font-semibold px-3 text-center max-w-3xl transition-all duration-200 leading-tight lg:text-md md:text-sm sm:text-xs ">
          Text to Song Ai combines vocal synthesis,intelligent compostition and
          professional audio production -- everything you need to turn text into
          music
        </p>
      </div>
      <div className="flex flex-wrap gap-5 p-10 justify-center items-center">
        <FeatureCard data={features} />
      </div>
    </div>
  );
};

export default MainPage2;
