import Image from "next/image";

export default function Navbar() {
  return (
    <div>
      <div className="flex flex-col">
        <div className="transition-all duration-400 items-center flex min-h-[65px] ease-out px-8 max-sm:py-4 shrink-0 relative z-1 max-lg:px-0 max-sm:relative max-sm:z-[10] py-6 undefined">
          <div className="container  flex justify-between items-center">
            <a
              className="text-[12px] leading-[20px] text-emphasis-high w-[107px] max-sm:w-20 cursor-pointer"
              role="button"
            >
              <div className="relative">
                <h5 className="font-bold text-4xl">Thunder </h5>
                <p className="text-emphasis-high text-[10px] leading-[10px] absolute -top-0.5 -right-10 font-medium">
                  BETA
                </p>
              </div>
            </a>
            <div className="flex gap-3 items-center">
              <div className="min-sm:hidden">
                <div className="text-[14px] leading-[22px] text-emphasis-high hover:text-primary-500 cursor-pointer font-medium">
                  My projects
                </div>
              </div>
              <div className="flex gap-6 max-sm:gap-4 items-center">
                <ul className="flex gap-4 items-center max-sm:hidden">
                  <div className="flex gap-6">
                    <a className="text-[14px] leading-[22px] text-emphasis-high hover:text-primary-500 font-medium cursor-pointer">
                      Built with Rocket
                    </a>
                    <div className="text-[14px] leading-[22px] text-emphasis-high hover:text-primary-500 cursor-pointer font-medium">
                      Templates
                    </div>
                  </div>
                  <button
                    className="focus:outline-none max-sm:hidden"
                    aria-expanded="false"
                    aria-haspopup="true"
                    id="my-projects"
                  >
                    <div className="text-[14px] leading-[22px] text-emphasis-high hover:text-primary-500 cursor-pointer font-medium">
                      My projects
                    </div>
                  </button>
                </ul>
                <button
                  className="focus:outline-none"
                  id="headlessui-menu-button-:r2:"
                  type="button"
                  aria-haspopup="menu"
                  aria-expanded="false"
                  data-headlessui-state=""
                >
                  <div className="w-[28px] h-[28px] cursor-pointer rounded-[6px] bg-userProfile flex justify-center items-center text-emphasis-high">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      fill="var(--color-base)"
                      viewBox="0 0 256 256"
                    >
                      <path d="M230.92,212c-15.23-26.33-38.7-45.21-66.09-54.16a72,72,0,1,0-73.66,0C63.78,166.78,40.31,185.66,25.08,212a8,8,0,1,0,13.85,8c18.84-32.56,52.14-52,89.07-52s70.23,19.44,89.07,52a8,8,0,1,0,13.85-8ZM72,96a56,56,0,1,1,56,56A56.06,56.06,0,0,1,72,96Z"></path>
                    </svg>
                  </div>
                </button>
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
                    className="w-5 h-5 text-emphasis-high"
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
