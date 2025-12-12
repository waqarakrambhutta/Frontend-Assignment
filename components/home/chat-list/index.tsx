import React from "react";
import {
  PanelLeft,
  SquarePen,
  SlidersHorizontal,
  ChevronDown,
} from "lucide-react";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Filter, Search } from "@/components/svgs";

interface ChatData {
  id: string;
  name: string;
  initial: string;
  message: string;
  time: string;
  bgColorClass: string;
  textColorClass: string;
}

const chatListItems: ChatData[] = [
  {
    id: "1",
    name: "Olivia Mckinsey",
    initial: "O",
    message: "Oh my god 😍 I'll try it ASAP, thank...",
    time: "23:23",
    bgColorClass: "bg-purple-100",
    textColorClass: "text-purple-600",
  },
  {
    id: "2",
    name: "Sara Williams",
    initial: "E",
    message: "Good Evening, Emily! Hope you are...",
    time: "23:16",
    bgColorClass: "bg-yellow-100",
    textColorClass: "text-yellow-700",
  },
  {
    id: "3",
    name: "Frank Thompson",
    initial: "F",
    message: "Thank you for signing up Frank! If t...",
    time: "22:28",
    bgColorClass: "bg-blue-100",
    textColorClass: "text-blue-600",
  },
  {
    id: "4",
    name: "Grace Lee",
    initial: "G",
    message: "I am sending you the report right a...",
    time: "20:43",
    bgColorClass: "bg-orange-100",
    textColorClass: "text-orange-600",
  },
  {
    id: "5",
    name: "Henry Adams",
    initial: "H",
    message: "Thank you for filling out our survey!",
    time: "17:37",
    bgColorClass: "bg-yellow-200",
    textColorClass: "text-yellow-800",
  },
  {
    id: "6",
    name: "Isabella Martinez",
    initial: "I",
    message: "I will update you soon Isabella!",
    time: "16:01",
    bgColorClass: "bg-red-100",
    textColorClass: "text-red-600",
  },
  {
    id: "7",
    name: "James Brown",
    initial: "J",
    message: "Hello James! Let's collaborate on...",
    time: "13:44",
    bgColorClass: "bg-indigo-100",
    textColorClass: "text-indigo-600",
  },
  {
    id: "8",
    name: "Katherine White",
    initial: "K",
    message: "Hi Katherine, looking forward to our...",
    time: "09:02",
    bgColorClass: "bg-yellow-100",
    textColorClass: "text-yellow-700",
  },
  {
    id: "9",
    name: "Lucas Green",
    initial: "L",
    message: "Hey Lucas! Ready for the holiday...",
    time: "Yesterday",
    bgColorClass: "bg-blue-200",
    textColorClass: "text-blue-700",
  },
];

const ChatSidebar = () => {
  return (
    <div className="w-full max-w-[375px] mx-auto bg-white h-screen rounded-r-[8.42px] flex flex-col border-r border-gray-200 font-sans pb-[58px]">
      <div className="flex justify-between items-center px-[15.44px] py-[9.82px] border-b border-gray-100 rounded-t-[8.42px]">
        <button className="text-gray-800 hover:text-gray-600">
          <SidebarTrigger />
        </button>
        <h1 className="text-[12.63px] font-[656] leading-none">
          Michael Johnson
        </h1>
        <button className="text-gray-800 hover:text-gray-600">
          <SquarePen size={18} strokeWidth={2.3} color="black" />
        </button>
      </div>

      <div className="px-[9.83px] py-[14.04px]">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
            <Search />
          </div>
          <input
            type="text"
            placeholder="Search Chat"
            className=" border-none text-[9.82px] rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 placeholder-gray-400"
          />
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer text-gray-400 hover:text-gray-600">
            <Filter />
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center px-5 pb-2 mb-1">
        <button className="flex items-center mt-[0.5px] text-[9.82px] font-[656] space-x-1">
          <span>Open</span>
          <ChevronDown size={10} strokeWidth={2.5} className="text-black" />
        </button>
        <button className="flex items-center mt-[0.5px] text-[9.82px] font-[656] space-x-1">
          <span>Newest</span>
          <ChevronDown size={10} strokeWidth={2.5} color="black" />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto no-scrollbar">
        <ul className="divide-y divide-gray-50">
          {chatListItems.map((chat) => (
            <li
              key={chat.id}
              className="flex items-center px-5 py-3 hover:bg-gray-50 cursor-pointer transition-colors duration-150"
            >
              <div
                className={`shrink-0 h-5 w-5 rounded-full flex items-center justify-center ${chat.bgColorClass}`}
              >
                <span
                  className={`${chat.textColorClass} font-[556] text-[9.82px]`}
                >
                  {chat.initial}
                </span>
              </div>

              <div className="ml-3 flex-1 min-w-0 pt-1 ">
                <div className="flex justify-between items-baseline mb-0.5">
                  <h2 className=" text-[9.82px] font-[556] truncate pr-2">
                    {chat.name}
                  </h2>
                  <span className="text-[7.72px] font-[556] shrink-0">
                    {chat.time}
                  </span>
                </div>
                <p className="text-[9.82px] font-[457] text-gray-500 truncate leading-snug">
                  {chat.message}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ChatSidebar;
