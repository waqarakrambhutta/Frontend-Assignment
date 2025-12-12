import React from "react";
import {
  PanelRight,
  ChevronDown,
  User,
  Users,
  Plus,
  MonitorPlay,
  Copy,
  PlusCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SidebarClose } from "@/components/svgs";

const Section = ({
  title,
  children,
  className = "",
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
}) => (
  <div className={className}>
    <button className="flex justify-between items-center w-full text-left mb-4">
      <span className="text-[9.86px] font-[556]">{title}</span>
      <ChevronDown size={12} color="black" />
    </button>
    {children}
  </div>
);

const DetailsPanel = () => {
  return (
    <div className="bg-white border-l border-gray-200 h-screen overflow-y-auto font-sans pb-[58px] rounded-[8.42px]">
      <div className="flex justify-between items-center px-[11.23px] py-[13.53px] border-b border-gray-100 rounded-t-[8.42px]">
        <h2 className="text-[12.63px] font-[656]">Details</h2>
        <button className="text-gray-800 hover:text-gray-600">
          <SidebarClose />
        </button>
      </div>

      <div className="p-[11.23px] space-y-6">
        {/* Chat Data */}
        <Section title="Chat Data">
          <div className="space-y-[7.72px] p-[11.23px]">
            <div className="flex justify-between items-center">
              <span className="text-[9.86px] text-gray-400 font-medium">
                Assignee
              </span>
              <div className="grid grid-cols-3 items-center space-x-2">
                <User size={12} color="black" className="col-span-1" />
                <div className="col-span-2 text-[9.86px] text-gray-900 font-medium">
                  James West
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-[9.86px] text-gray-400 font-medium">
                Team
              </span>
              <div className="flex items-center space-x-2">
                <Users size={12} color="black" />
                <span className="text-[9.86px] text-gray-900 font-medium">
                  Sales Team
                </span>
              </div>
            </div>
          </div>
        </Section>

        <div className="h-px bg-gray-100 w-full" />

        {/* Contact Data */}
        <Section title="Contact Data">
          <div className="space-y-4 text-[9.86px]">
            <div className="flex justify-between">
              <span className="text-[9.86px] text-gray-400 font-medium">
                First Name
              </span>
              <span className="text-[9.86px] font-bold">Olivia</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[9.86px] text-gray-400 font-medium">
                Last Name
              </span>
              <span className="text-[9.86px]  font-bold">Mckinsey</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[9.86px] text-gray-400 font-medium">
                Phone number
              </span>
              <span className="text-[9.86px] font-bold">+1 (312) 555-0134</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400 font-medium">Email</span>
              <span className="text-gray-900 font-bold">
                olivia.mckinsey@gmail.com
              </span>
            </div>
            <div className="pt-2">
              <button className="text-xs font-bold text-gray-900 hover:underline">
                See all
              </button>
            </div>
          </div>
        </Section>

        <div className="h-px bg-gray-100 w-full" />

        {/* Contact Labels */}
        <Section title="Contact Labels">
          <div className="flex flex-wrap gap-2">
            <span className="inline-flex items-center px-3 py-1 rounded-full border border-blue-500 text-blue-500 text-xs font-medium">
              <MonitorPlay size={12} className="mr-1" />
              Closed Won
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full border border-blue-500 text-blue-500 text-xs font-medium">
              <MonitorPlay size={12} className="mr-1" />
              Chicago
            </span>
            <button className="text-blue-500 hover:text-blue-600">
              <PlusCircle size={22} />
            </button>
          </div>
        </Section>

        <div className="h-px bg-gray-100 w-full" />

        <Section title="Notes">
          <div className="space-y-2">
            <div className="bg-yellow-100 p-3 rounded-lg text-[9.82px] text-yellow-800 placeholder-yellow-800/60">
              Add a note
            </div>
            <div className="bg-yellow-100 p-3 rounded-lg text-[9.82px] text-yellow-950 font-medium">
              Strong potential for future upgrades
            </div>
          </div>
        </Section>

        <div className="h-px bg-gray-100 w-full" />

        <Section title="Other Chats">
          <div className="flex items-center justify-between py-2">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-full bg-pink-500 flex items-center justify-center text-white">
                {/* Icon placeholder for Instagram-like logo */}
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </div>
              <div>
                <p className="text-sm font-bold text-gray-900">Fit4Life</p>
                <p className="text-xs text-gray-500">On my way!</p>
              </div>
            </div>
            <span className="text-[10px] text-gray-400">08/08/25</span>
          </div>
        </Section>
      </div>
    </div>
  );
};

export default DetailsPanel;
