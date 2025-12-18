"use client";
import { PromptInputArea } from "@/components/PromptInputArea";
import Sidebar from "@/components/sidebar/Sidebar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <Sidebar >
    <div className="">
      <div className="flex flex-col h-full justify-center items-center max-sm:items-start max-sm:h-auto grow pt-32 pb-8">
        <div className="flex flex-col gap-[54px] justify-center items-center w-full">
          <div className="flex flex-col gap-8 w-full">
            <div className="flex flex-col grow gap-2 text-center max-sm:px-4 ">
              <h4 className="text-5xl leading-[46px] max-sm:text-[32px] max-sm:leading-[42px] text-black font-bold">
                What do you want to create?
              </h4>
              <p className="text-lg font-semibold text-gray-700">
                Create stunning apps and websites by chatting with thunder AI
              </p>
            </div>
            <PromptInputArea />
            
          </div>
        </div>
      </div>
    </div>
    <Footer />
 </Sidebar>
  );
}
