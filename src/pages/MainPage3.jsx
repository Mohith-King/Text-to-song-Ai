import React from 'react'
import FeaturesWeb from '../components/FeaturesWeb'

const MainPage3 = () => {
    const sections = [
  {
    id: 1,
    title: "Unlimited Creative Variations",
    description:
      "Not satisfied with the first result? The AI song generator lets you create as many versions as you want...",
    points: [
      "Try different genres from the same prompt",
      "Adjust tempo, mood, and vocal style freely",
      "Keep iterating until it sounds perfect",
    ],
    image: "/Images/1.webp",
  },
  {
    id: 2,
    title: "Works Instantly in Your Browser",
    description:
      "Access the full AI song generator from any browser...",
    points: [
      "No downloads or installations required",
      "Works on desktop, tablet, and mobile",
      "Start creating songs in seconds",
    ],
    image: "/Images/2.webp",
  },
  {
    id: 3,
    title: "Commercial License Included",
    description:
      "Every track you create with the AI song generator comes with a commercial license. Use your music on YouTube, TikTok, Spotify, in podcasts, ads, films, and games — completely royalty-free with full usage rights.",
    points: [
      "Royalty-free for all platforms and media",
      "Use in ads, films, games, and live streams",
      "No hidden fees or copyright claims",
    ],
    image: "/Images/2.webp",
  },
  {
    id: 4,
    title: "Create Songs in 10+ Languages",
    description:
      "Use our AI song maker to create songs with vocals in English, Spanish, Japanese, Korean, French, Chinese, Portuguese, and more. Turn text to song in any language with native-quality pronunciation — or convert your lyrics to music across borders with zero translation barriers.",
    points: [
      "Native-quality pronunciation in each language",
      "Mix multiple languages within one song",
      "Reach global audiences effortlessly",
    ],
    image: "/Images/3.webp",
  },
  {
    id: 5,
    title: "Unlimited Creative Variations",
    description:
      "Not satisfied with the first result? The AI song generator lets you create as many versions as you want until every note feels right. Experiment with different genres, tempos, vocal styles, and moods — all from the same text or lyrics input.",
    points: [
      "Try different genres from the same prompt",
      "Adjust tempo, mood, and vocal style freely",
      "Keep iterating until it sounds perfect",
    ],
    image: "/Images/4.webp",
  },
  {
    id: 6,
    title: "Works Instantly in Your Browser",
    description:
      "Access the full AI song generator from any browser on desktop or mobile. No software downloads, no plugins, no setup — just open the page and start turning text into songs immediately.",
    points: [
      "No downloads or installations required",
      "Works on desktop, tablet, and mobile",
      "Start creating songs in seconds",
    ],
    image: "/Images/5.webp",
  },
];
  return (
    <div className=" flex flex-col items-center  justify-center   mt-10 p-6">
        <h1 className="text-zinc-100 lg:text-4xl transition-all leading-tight mx-auto duration-200 max-w-4xl font-semibold md:text-5xl sm:text-4xl p-4 text-center">
        Why Thousands of Creators Choose Text to Song AI
        </h1>
        <p className="text-zinc-300 font-semibold px-3 text-center max-w-3xl transition-all duration-200 leading-tight lg:text-md md:text-sm sm:text-xs ">
          From content creators to professional musicians — here's why our AI song generator is the fastest way to bring musical ideas to life.
        </p>
        <FeaturesWeb sections = {sections} />
      </div>
  )
}

export default MainPage3