import {
  X,
  Home,
  Music2,
  AudioLines,
  MicVocal,
  ListMusic,
  DollarSign,
  Coins,
  Gift,
  User,
  CreditCard,
} from "lucide-react";

const SideBar = ({ sidebar = true, setSidebar = () => {} }) => {
  const menuItems = [
    { icon: Home, label: "Home" },
    {
      icon: Music2,
      label: "Create Song",
      badge: "Hot",
      badgeColor: "bg-yellow-600",
    },
    { icon: AudioLines, label: "AI Music Extender" },
    { icon: MicVocal, label: "AI Song Cover Generator" },
    { icon: ListMusic, label: "My Songs" },
    {
      icon: DollarSign,
      label: "Pricing",
      badge: "50% off",
      badgeColor: "bg-red-600",
    },
  ];

  const creditItems = [
    { icon: Coins, label: "Credits" },
    {
      icon: Gift,
      label: "Rewards",
      badge: "Free Credits",
      badgeColor: "bg-green-700",
    },
  ];

  const accountItems = [
    { icon: User, label: "Profile" },
    { icon: CreditCard, label: "Billing" },
  ];

  return (
    <aside
      className={`${
        sidebar ? "w-64" : "w-16"
      }block bg-black py-6 px-3 border-r border-white h-screen transition-all duration-300`}
    >
      <div className="flex items-center justify-between">
        {sidebar && (
          <h2 className="text-sm font-semibold uppercase text-stone-400">
            Create
          </h2>
        )}
        <X
          className="text-white ml-1.5 hover:text-gray-400 cursor-pointer"
          onClick={() => setSidebar((current) => !current)}
        />
      </div>

      {menuItems.map((item, index) => (
        <MenuItem key={index} {...item} sidebar={sidebar} />
      ))}

      <div className="mt-6 text-white">
        {sidebar && <h2 className="text-sm">Credits</h2>}
        {creditItems.map((item, index) => (
          <MenuItem key={index} {...item} sidebar={sidebar} />
        ))}
      </div>

      <div className="mt-6 text-white">
        {sidebar && <h2 className="text-sm">Account</h2>}
        {accountItems.map((item, index) => (
          <MenuItem key={index} {...item} sidebar={sidebar} />
        ))}
      </div>
    </aside>
  );
};

/* Reusable Component */
const MenuItem = ({ icon:Icon, label, sidebar, badge, badgeColor }) => {
  return (
    <div className="hover:bg-zinc-900 mt-1  flex justify-between items-center px-2 py-3 rounded-xl text-white cursor-pointer">
      <div className="flex items-center gap-3">
        <Icon size={20} />
        {sidebar && <h2>{label}</h2>}
      </div>

      {sidebar && badge && (
        <span className={`${badgeColor} px-2 text-sm rounded`}>{badge}</span>
      )}
    </div>
  );
};

export default SideBar;
