"use client";

import * as React from "react";
import {
  Clock,
  LifeBuoy,
  Star,
  Send,
  Search,
  LayoutTemplate,
  Settings2,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavProjects } from "@/components/nav-projects";
import { NavSecondary } from "@/components/nav-secondary";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { SearchBox } from "./SearchBox";

const data = {
  navMain: [
    {
      title: "Search",
      // url: '',
      icon: Search,
      isActive: true,
    },
    {
      title: "Recent Chats",
      url: "/recent-chats",
      icon: Clock,
      isActive: true,
    },
    {
      title: "Favorite  Chats",
      url: "/favorite-chats",
      icon: Star,
      isActive: true,
    },
    {
      title: "Templates",
      url: "/templates",
      icon: LayoutTemplate,
      isActive: true,
    },
    {
      title: "Your Chats",
      isChat: true,
      items: [
        {
          title: "Build Proposal",
          url: "#",
        },
        {
          title: "Build Ai Resume Builder",
          url: "#",
        },
        {
          title: "Portfolio Builder",
          url: "#",
        },
      ],
    },
  ],
  navSecondary: [
    {
      title: "Settings",
      url: "/settings",
      icon: Settings2,
    },
    {
      title: "Support",
      url: "/support",
      icon: LifeBuoy,
    },
    {
      title: "Feedback",
      url: "/feedback",
      icon: Send,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <>
      <Sidebar
        className="top-(--header-height) h-[calc(100svh-var(--header-height))]!"
        {...props}
      >
        <SidebarHeader>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <div className="!py-3 px-3 bg-white text-gray-700 text-center hover:bg-gray-100/80 cursor-pointer rounded-sm text-[13px] font-semibold border border-gray-300 flex justify-center item-center">
                  <span>New Chat</span>
                </div>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>
        <SidebarContent>
          <NavMain
            items={data.navMain}
          />
          <NavSecondary items={data.navSecondary} className="mt-auto" />
        </SidebarContent>
      </Sidebar>
    </>
  );
}
