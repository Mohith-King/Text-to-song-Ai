import { ArrowRight, Globe } from "lucide-react";

export const Buttons = () => {
  return (
    <div className="bg-white text-black rounded px-3 py-1 mr-2 cursor-pointer flex items-center active:scale-95">
      <h2 className="text-md font-medium">Sign In</h2>
    </div>
  );
};

export const CButtons = () => {
  return (
    <div className="bg-neutral-700 hover:bg-neutral-600 text-white px-4 py-2 rounded-lg text-sm flex items-center gap-2 transition">
      <ArrowRight />
      <h5 className="text-md font-medium ">Create Song</h5>
    </div>
  );
};

export const LanButtons = () => {
  return (
    <div className="flex bg-neutral-900 cursor-pointer rounded items-center px-3 py-1 mr-1 border border-neutral-600 hover:bg-neutral-800">
      <Globe className="text-white cursor-pointer" size={15} />
      <h5 className="text-md text-white font-medium ">English</h5>
    </div>
  );
};
