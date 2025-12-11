import React from "react";
import { Button } from "../ui/button";
import clsx from "clsx";

interface TabButtonProps {
  Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  name: string;
  isActive: boolean;
}

const TabButton: React.FC<TabButtonProps> = ({ Icon, name, isActive }) => {
  const baseClasses =
    "has-[>svg]:px-[8.77px] py-[6.67px] h-auto cursor-pointer  rounded-[5.61px] text-[9.82px] leading-none font-[556] group transition-colors shadow-none text-black duration-300 gap-[5.61px]";

  const activeClasses =
    "bg-[#EFF2F2] border-[#D8DEE4] border-[1px] hover:bg-[#EFF2F2]";

  const inactiveClasses = "bg-white border-none shadow-none hover:bg-[#EFF2F2]";

  return (
    <Button
      className={`${baseClasses} ${isActive ? activeClasses : inactiveClasses}`}
    >
      <Icon
        className={clsx(
          isActive ? "text-black" : "text-black group-hover:text-black"
        )}
      />
      {name}
    </Button>
  );
};

export default TabButton;
