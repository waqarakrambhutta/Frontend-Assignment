"use client";

import * as React from "react";
import {
  ChevronDown,
  Globe,
  Instagram,
  LifeBuoy,
  MessageCircle,
  User,
  UserCircle,
  Users,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Flow } from "../svgs";

const inboxItems = [
  {
    title: "My Inbox",
    url: "#",
    icon: User,
    count: null,
  },
  {
    title: "All",
    url: "#",
    icon: Users,
    count: 28,
  },
  {
    title: "Unassigned",
    url: "#",
    icon: UserCircle,
    count: 5,
  },
  {
    title: "API Demo",
    url: "/api-demo",
    icon: Flow,
    count: null,
  },
];

const teamsItems = [
  {
    title: "Sales",
    url: "#",
    icon: Globe,
    count: 7,
  },
  {
    title: "Customer Support",
    url: "#",
    icon: LifeBuoy,
    count: 16,
  },
];

const usersItems = [
  { title: "Sarah Williams", url: "#", count: 2 },
  { title: "Michael Johnson", url: "#", count: 11, isActive: true },
  { title: "Emily Davis", url: "#", count: null },
  { title: "Christopher Miller", url: "#", count: 4 },
  { title: "Amanda Garcia", url: "#", count: 5 },
  { title: "Joshua Martinez", url: "#", count: null },
  { title: "Ashley Taylor", url: "#", count: 1 },
  { title: "Daniel Anderson", url: "#", count: null },
  { title: "Jessica Thomas", url: "#", count: 2 },
];

const channelsItems = [
  {
    title: "Fit4Life",
    url: "#",
    icon: MessageCircle,
    color: "text-green-500",
  },
  {
    title: "Fit4Life",
    url: "#",
    icon: Instagram,
    color: "text-pink-500",
  },
];

function CollapsibleSection({
  title,
  items,
  type = "default",
}: {
  title: string;
  items: any[];
  type?: "default" | "users" | "channels";
}) {
  const [isOpen, setIsOpen] = React.useState(true);

  return (
    <SidebarGroup>
      <SidebarGroupLabel
        asChild
        className="px-0 group/label w-full justify-between hover:bg-sidebar-accent hover:text-sidebar-accent-foreground cursor-pointer pr-0 text-[9.82px] font-medium"
      >
        <button onClick={() => setIsOpen(!isOpen)}>
          <span className="text-[9.82px] font-medium ">{title}</span>
          <ChevronDown
            className={`ml-auto transition-transform ${
              isOpen ? "rotate-0" : "-rotate-90"
            }`}
          />
        </button>
      </SidebarGroupLabel>
      {isOpen && (
        <SidebarGroupContent className="pt-1">
          <SidebarMenu>
            {items.map((item, index) => (
              <SidebarMenuItem key={index}>
                <SidebarMenuButton
                  asChild
                  isActive={item.isActive}
                  className={cn(
                    item.isActive &&
                      "data-[active=true]:bg-white data-[active=true]:shadow-sm data-[active=true]:text-black data-[active=true]:font-medium border border-transparent data-[active=true]:border-gray-100 text-[10.73px] font-[457] px-0"
                  )}
                >
                  <Link href={item.url}>
                    {type === "users" ? (
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center text-[10.73px] font-[457] rounded-full bg-gray-200 text-gray-500">
                        <User className="h-4 w-4" />
                      </div>
                    ) : (
                      item.icon && <item.icon className={item.color || ""} />
                    )}
                    <span className="font-[457] text-[10.73px]">
                      {item.title}
                    </span>
                  </Link>
                </SidebarMenuButton>
                {item.count && (
                  <SidebarMenuBadge>{item.count}</SidebarMenuBadge>
                )}
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroupContent>
      )}
    </SidebarGroup>
  );
}

export function AppSidebar() {
  return (
    <Sidebar className="border-r mt-[58px] ml-[7.72px] pb-[58px]">
      <SidebarContent className="px-[11.23px] py-[9.82px] bg-white rounded-l-[11.23px]">
        <div className=" py-2">
          <h2 className="mb-4 text-[12.63px] font-[790]">Inbox</h2>
          <SidebarMenu>
            {inboxItems.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild>
                  <a href={item.url}>
                    <item.icon />
                    <span className="font-[457] text-[10.73px]">
                      {item.title}
                    </span>
                  </a>
                </SidebarMenuButton>
                {item.count && (
                  <SidebarMenuBadge className="text-[10.73px] font-[457]">
                    {item.count}
                  </SidebarMenuBadge>
                )}
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </div>

        <CollapsibleSection title="Teams" items={teamsItems} />

        <CollapsibleSection title="Users" items={usersItems} type="users" />

        <CollapsibleSection
          title="Channels"
          items={channelsItems}
          type="channels"
        />
      </SidebarContent>
    </Sidebar>
  );
}
