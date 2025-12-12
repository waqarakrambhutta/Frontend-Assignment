import React from "react";
import ChatList from "@/components/home/chat-list";
import ChatArea from "@/components/home/chat-area";
import DetailsPanel from "@/components/home/details-panel";

const page = () => {
  return (
    <main className="mt-[58px] w-full flex h-[calc(100vh-58px)] overflow-hidden gap-x-[4.91px]">
      <section className="w-[249.12px] shrink-0 border-r border-gray-200 rounded-[8.42px]">
        <ChatList />
      </section>
      <section className="flex-1 min-w-0 border-r border-gray-200 rounded-[8.42px]">
        <ChatArea />
      </section>
      <section className="w-[294.04px] shrink-0 rounded-[8.42px] mr-[4.91px]">
        <DetailsPanel />
      </section>
    </main>
  );
};

export default page;
