import { Inbox, Flow, Contacts, AI, Target, Gear } from "../svgs";
import TabButton from "./nav-tabs";
const navItems = [
  {
    name: "Inbox",
    icon: Inbox,
    isActive: true,
  },
  {
    name: "Contacts",
    icon: Contacts,
    isActive: false,
  },
  {
    name: "AI Employees",
    icon: AI,
    isActive: false,
  },
  {
    name: "Workflows",
    icon: Flow,
    isActive: false,
  },
  {
    name: "Campaigns",
    icon: Target,
    isActive: false,
  },
];

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="flex items-center justify-between m-[5.61px] bg-white rounded-[8.42px] px-[8.42px] py-[7.72px]">
        <div className="flex items-center gap-[5.61px]">
          <h1 className="text-xl font-extrabold text-[#007AEC] leading-none">
            BOXpad
          </h1>
          <div className="flex gap-[5.61px] px-[22.46px]">
            {navItems.map((item) => (
              <TabButton
                key={item.name}
                Icon={item.icon}
                name={item.name}
                isActive={item.isActive}
              />
            ))}
          </div>
        </div>
        <div className="flex flex-row items-center gap-[5.61px]">
          <Gear />
          <div className="flex flex-row px-[8.42px] items-center gap-[5.61px] cursor-pointer">
            <div className="rounded-full bg-[#FE3265] text-white text-[9.82px] font-semibold p-1.5 leading-none">
              M
            </div>
            <p className="text-[9.82px] font-semibold">Michael Johnson</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
