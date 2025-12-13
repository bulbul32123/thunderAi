import { ProfileDropDown } from "@/components/ProfileDropDown";
import Link from "next/link";

export default function Navbar() {
  
  return (
    <div className="bg-background sticky py-2 top-0 z-50 flex w-full items-center border-b ">
      <div className="flex flex-col w-full">
        <div className="transition-all duration-400 items-center flex ease-out px-8 max-sm:py-4 shrink-0 relative z-1 max-sm:relative max-sm:z-[10]">
          <div className="container flex justify-between items-center">
            <Link href={'/'}
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
              <div className="flex gap-3 items-center">
                <ul className="flex gap-2 items-center max-sm:hidden">
                  <Link href={"/pricing"}>
                    <span className="py-1 px-3 bg-white text-gray-700 hover:bg-gray-100/80 cursor-pointer rounded-sm text-[13px] font-semibold border border-gray-300 ">
                      Upgrade
                    </span>
                  </Link>
                  <Link href={"/feedback"}>
                    <span className="py-1 px-3 bg-white text-gray-700 hover:bg-gray-100/80 cursor-pointer rounded-sm text-[13px] font-semibold border border-gray-300">
                      Feedback
                    </span>
                  </Link>
                </ul>
                <ProfileDropDown />
              </div>
              <button
                className="focus:outline-none hidden max-sm:block"
                id="headlessui-menu-button-:r8:"
                type="button"
                aria-haspopup="menu"
                aria-expanded="false"
                data-headlessui-state=""
              >
                <button
                  className="hidden max-sm:block"
                  aria-label="Toggle menu"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                    className="w-5 h-5 text-black"
                  >
                    <path d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z"></path>
                  </svg>
                </button>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
