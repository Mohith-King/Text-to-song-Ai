import { Menu, MenuSquare } from "lucide-react";
import { Buttons, LanButtons } from "./Buttons";

const HeaderR = ({ onMenuClick }) => {
  return (
    <header className="bg-black  border-b-2  border-white py-4 px-4 flex gap-3 items-center ">
      <div className="left flex-1  flex gap-3 items-center  ">
        <button type="button" aria-label="Toggle sidebar" onClick={onMenuClick}>
          <MenuSquare className="text-white cursor-pointer" size={20} />
        </button>
        <img
          src="/music.png"
          alt="Text to Song AI"
          className="w-8 cursor-pointer"
        />
        <h4 className="text-xl text-white font-semibold">Text to Song AI</h4>
      </div>

      <LanButtons />

      <Buttons />
    </header>
  );
};

export default HeaderR;
