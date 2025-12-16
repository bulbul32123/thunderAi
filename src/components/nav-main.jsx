"use client";

import { ChevronRight } from "lucide-react";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";

export function NavMain({ items }) {
  return (
    <>
      <SidebarGroup>
        <SidebarMenu>
          {items.map((item) => (
            <Collapsible
              key={item.title}
              asChild
              defaultOpen={item.isActive}
              className={`${item.isChat && "!py-4"}`}
            >
              <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip={item.title}>
                  {item.isChat ? (
                    <CollapsibleTrigger>
                      <div className="flex gap-2">
                        {item?.icon && <item.icon />}
                        <span className={`${item.isChat && "font-semibold"}`}>
                          {item.title}
                        </span>
                      </div>
                    </CollapsibleTrigger>
                  ) : (
                    <a href={item.url}>
                      {!item?.url ? (
                        <div
                          className="flex gap-2 text-[15px] justify-start items-center cursor-pointer"
                        >
                          <item.icon className="text-sm" size={"18px"} />
                          <span>{item.title}</span>
                        </div>
                      ) : (
                        <>
                          <item.icon />
                          <span>{item.title}</span>
                        </>
                      )}
                    </a>
                  )}
                </SidebarMenuButton>
                {item.items?.length ? (
                  <>
                    <CollapsibleTrigger
                      asChild
                      className={`${item.isChat && "!mt-4"}`}
                    >
                      <SidebarMenuAction className="data-[state=open]:rotate-90">
                        <ChevronRight />
                        <span className="sr-only">Toggle</span>
                      </SidebarMenuAction>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <SidebarMenuSub>
                        {item.items?.map((subItem) => (
                          <SidebarMenuSubItem key={subItem.title}>
                            <SidebarMenuSubButton asChild>
                              <a href={subItem.url}>
                                <span>{subItem.title}</span>
                              </a>
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        ))}
                      </SidebarMenuSub>
                    </CollapsibleContent>
                  </>
                ) : null}
              </SidebarMenuItem>
            </Collapsible>
          ))}
        </SidebarMenu>
      </SidebarGroup>
    </>
  );
}
