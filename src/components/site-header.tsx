"use client";
import { PublishPopup } from "@/components/popups/PublishPopup.jsx";
import { SharePopup } from "@/components/popups/SharePopup.jsx";
import { ProjectSettings } from "@/components/popups/ProjectSettings.jsx";
import { ProfileDropDown } from "./ProfileDropDown";
import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="bg-background sticky py-3 top-0 z-50 flex w-full items-center border-b">
      <div className="flex justify-between w-full items-center gap-2 px-4">
        <Link
          href={"/"}
          className="text-[12px] leading-[20px] text-black w-[107px] max-sm:w-20 cursor-pointer flex gap-2 items-center"
          role="button"
        >
          <div className="relative">
            <h5 className="font-bold text-4xl">Thunder </h5>
            <p className="text-black text-[10px] leading-[10px] absolute -top-0.5 -right-10 font-medium">
              BETA
            </p>
          </div>
        </Link>
        <div className="flex gap-3 items-center">
          <ul className="flex gap-2 items-center max-sm:hidden">
            <ProjectSettings />
            <SharePopup />
            <PublishPopup />
          </ul>
          <ProfileDropDown />
        </div>
      </div>
    </header>
  );
}
