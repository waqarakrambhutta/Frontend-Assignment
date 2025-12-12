import React from "react";
import {
  MoreVertical,
  RotateCcw,
  Paperclip,
  Image,
  Smile,
  Mic,
  Send,
  Check,
  CheckCheck,
  Zap,
  CornerUpRight,
} from "lucide-react";
import { Archive, Snooze } from "@/components/svgs";

const messages = [
  {
    id: 1,
    type: "system",
    date: "28 August 2025",
  },
  {
    id: 2,
    type: "received",
    text: "Hi, I recently joined Fit4Life and I'm trying to access my workout plan, but I can't login. Can you help?",
    time: "23:08",
  },
  {
    id: 3,
    type: "sent",
    text: "Hello Olivia 👋 I'm Michael, your AI customer support assistant. Let's fix this quickly. Could you confirm the email address?",
    time: "23:05",
    isRead: true,
  },
  {
    id: 4,
    type: "received",
    text: "Yes, it's olivia.mckinsey@gmail.com",
    time: "23:10",
  },
  {
    id: 5,
    type: "sent",
    text: "Thanks! Looks like your reset wasn't completed. I've sent a new link - please check your inbox.",
    time: "23:16",
    isRead: true,
  },
  {
    id: 6,
    type: "received",
    text: "I see it. resetting now...",
    time: "23:17",
  },
  {
    id: 7,
    type: "received",
    text: "Done! I'm logged in. Thanks!",
    time: "23:20",
  },
  {
    id: 8,
    type: "sent",
    text: 'Perfect 🎉 Your plan is ready under "My Programs". Since you\'re starting out, I suggest our Premium Guide - it boosts results and is 20% off here 👉 www.Fit4Life.com/Premium',
    time: "23:20",
    isRead: true,
    isPromo: true,
  },
  {
    id: 9,
    type: "received",
    text: "Oh my god 😍 I'll try it ASAP, thank you so much!!",
    time: "23:23",
  },
];

const ChatArea = () => {
  return (
    <div className="flex flex-col h-screen bg-white rounded-[8.42px]">
      <div className="flex justify-between rounded-t-[8.42px] items-center p-[11.23px] border-b border-gray-100 bg-white">
        <div>
          <h2 className="text-[12.63px] font-[790]">Olivia Mckinsey</h2>
        </div>
        <div className="flex items-center space-x-[5.61px]">
          <button className="p-[5.61px] hover:bg-[#EBEBEB]/80 cursor-pointer rounded-[5.61px] bg-[#EBEBEB]">
            <MoreVertical size={11} />
          </button>
          <button className="p-[5.61px] hover:bg-[#EBEBEB]/80 cursor-pointer rounded-[5.61px] bg-[#EBEBEB]">
            <Snooze />
          </button>
          <button className="p-[5.96px] hover:bg-black/80 rounded-[5.61px] bg-black cursor-pointer">
            <Archive />
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-[11.23px] space-y-[9.6px] bg-white mb-[58px]">
        {messages.map((msg) => {
          if (msg.type === "system") {
            return (
              <div key={msg.id} className="flex justify-center my-4">
                <span className="bg-gray-100 text-[8.42px] font-[656] px-[11.23px] py-[8.42px] rounded-[5.61px]">
                  {msg.date}
                </span>
              </div>
            );
          }

          if (msg.type === "sent") {
            return (
              <div key={msg.id} className="flex justify-end mb-4">
                <div className="flex items-end max-w-[70%]">
                  <span className="text-[7.02px] text-gray-400 mr-2 mb-1 flex items-center flex-col">
                    <div className="ml-1 mb-1 text-blue-400">
                      {msg.isRead ? (
                        <CheckCheck size={10} />
                      ) : (
                        <Check size={10} />
                      )}
                    </div>
                    {msg.time}
                  </span>
                  <div className="relative group">
                    <div
                      className={`p-[5.61px] rounded-[8.42px] rounded-tr-sm leading-relaxed  ${
                        msg.isPromo
                          ? "bg-purple-100 text-[9.43px] font-[457]"
                          : "bg-purple-100 text-[9.43px] font-[457]"
                      }`}
                    >
                      {msg.text}
                    </div>
                  </div>
                </div>
              </div>
            );
          }

          return (
            <div key={msg.id} className="flex justify-start mb-4">
              <div className="flex items-end max-w-[70%]">
                <div className="p-[5.61px] rounded-[8.42px] rounded-tl-sm bg-gray-100 text-gray-800 text-[9.42px] font-[457] leading-relaxed">
                  {msg.text}
                </div>
                <span className="text-[7.02px] text-gray-400 ml-2 mb-1">
                  {msg.time}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="p-[11.23px] pt-2 bg-white -translate-y-16">
        <div className="relative border border-gray-200 rounded-[5.61px] bg-white shadow-sm p-[5.61px] flex flex-col">
          <input
            type="text"
            placeholder="Type something...."
            className="w-full p-[5.61px] text-gray-700 placeholder-gray-400 text-[9.82px] focus:outline-none bg-transparent"
          />
          <div className="flex justify-between items-center mt-2 px-2 pb-1">
            <div className="flex items-center space-x-4 text-gray-700">
              <button className="hover:text-gray-900">
                <Image size={14} color="black" />
              </button>
              <button className="hover:text-gray-900">
                <Paperclip size={14} color="black" />
              </button>
              <button className="hover:text-gray-900">
                <Archive />
              </button>{" "}
              <button className="hover:text-gray-900">
                <Smile size={14} color="black" />
              </button>
              <button className="hover:text-gray-900">
                <CornerUpRight size={14} color="black" />
              </button>
            </div>
            <div className="flex items-center space-x-3 text-gray-700">
              <button className="hover:text-gray-900">
                <Zap size={14} color="black" />
              </button>
              <button className="hover:text-gray-900">
                <Mic size={14} color="black" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatArea;
