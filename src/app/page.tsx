"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <div className="flex flex-col h-full justify-center items-center max-sm:items-start max-sm:h-auto grow max-sm:mt-0 max-sm:py-8 pt-24 pb-8">
        <div className="flex flex-col gap-[54px] justify-center items-center w-full">
          <div className="flex flex-col gap-8 w-full">
            <div className="flex flex-col grow gap-2 text-center max-sm:px-4 ">
              <h4 className="text-5xl leading-[46px] max-sm:text-[32px] max-sm:leading-[42px] text-emphasis-high font-bold">
                What we are going to build today?
              </h4>
              <p className="text-lg font-semibold text-gray-300">
                Create stunning apps and websites by chatting with thunder AI
              </p>
            </div>
            <form className="w-full h-full">
              <div className="flex flex-col gap-4 max-w-[724px] w-full mx-auto">
                <div className="flex flex-col gap-2 w-full flex-shrink-0 max-sm:px-4 relative">
                  <div
                    className="w-full flex flex-col mx-auto overflow-hidden relative rounded-xl
                gradient-border 
                 bg-chatCard border border-outline2 shadow-[0px_4px_10px_0px_rgba(0,_0,_0,_0.10)] "
                  >
                    <div className="gradient-outer"></div>
                    <div className="relative grow h-full max-sm:overflow-auto m-0.5">
                      <textarea
                        name="prompt"
                        className="block text-emphasis-high relative z-1 rounded-t-xl resize-none overflow-auto p-5 pb-0 px-[28px] w-full max-h-[250px] min-h-[80px] bg-chatCard placeholder:text-emphasis-low text-[16px] placeholder:text-[16px] focus:outline-none leading-[24px]"
                        placeholder="What can Rocket build for you today?"
                        // style={{ height: "236px" }}
                      ></textarea>

                      <div className="px-5 pl-4 pb-3 pt-3 flex w-full relative z-1 bg-chatCard mb-[0.2] rounded-b-xl">
                        <div className="flex grow">
                          <div className="relative w-max ">
                            <div className="flex">
                              <div>
                                <input
                                  id="fileInput"
                                  className="hidden"
                                  accept="image/png, image/jpeg, image/jpg, image/webp"
                                  type="file"
                                  name="files"
                                />
                                <button
                                  type="button"
                                  className="flex w-full items-center px-2 py-1 gap-0.5 hover:bg-active rounded cursor-pointer"
                                >
                                  <div className="w-4 h-4 text-emphasis-high">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="1em"
                                      height="1em"
                                      fill="currentColor"
                                      viewBox="0 0 256 256"
                                    >
                                      <path d="M209.66,122.34a8,8,0,0,1,0,11.32l-82.05,82a56,56,0,0,1-79.2-79.21L147.67,35.73a40,40,0,1,1,56.61,56.55L105,193A24,24,0,1,1,71,159L154.3,74.38A8,8,0,1,1,165.7,85.6L82.39,170.31a8,8,0,1,0,11.27,11.36L192.93,81A24,24,0,1,0,159,47L59.76,147.68a40,40,0,1,0,56.53,56.62l82.06-82A8,8,0,0,1,209.66,122.34Z"></path>
                                    </svg>
                                  </div>
                                  <p className="text-[12px] leading-[20px] text-emphasis-high">
                                    Attach
                                  </p>
                                </button>
                              </div>
                              <div className="max-sm:hidden">
                                <button
                                  type="button"
                                  className="flex w-full items-center px-2 py-1 gap-0.5 hover:bg-active rounded focus:outline-none cursor-pointer"
                                >
                                  <div className="w-4 h-4 text-emphasis-high">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      id="Layer_1"
                                      viewBox="0 0 200 300"
                                      width="14px"
                                      height="14px"
                                    >
                                      <title>Figma</title>
                                      <desc>Created using Figma</desc>
                                      <path
                                        id="path0_fill"
                                        className="st0"
                                        fill="#0acf83"
                                        d="M50 300c27.6 0 50-22.4 50-50v-50H50c-27.6 0-50 22.4-50 50s22.4 50 50 50z"
                                      ></path>
                                      <path
                                        id="path1_fill"
                                        className="st1"
                                        fill="#a259ff"
                                        d="M0 150c0-27.6 22.4-50 50-50h50v100H50c-27.6 0-50-22.4-50-50z"
                                      ></path>
                                      <path
                                        id="path1_fill_1_"
                                        className="st2"
                                        fill="#f24e1e"
                                        d="M0 50C0 22.4 22.4 0 50 0h50v100H50C22.4 100 0 77.6 0 50z"
                                      ></path>
                                      <path
                                        id="path2_fill"
                                        className="st3"
                                        fill="#ff7262"
                                        d="M100 0h50c27.6 0 50 22.4 50 50s-22.4 50-50 50h-50V0z"
                                      ></path>
                                      <path
                                        id="path3_fill"
                                        className="st4"
                                        fill="#1abcfe"
                                        d="M200 150c0 27.6-22.4 50-50 50s-50-22.4-50-50 22.4-50 50-50 50 22.4 50 50z"
                                      ></path>
                                    </svg>
                                  </div>
                                  <p className="text-[12px] leading-[20px] text-emphasis-high">
                                    Import Figma
                                  </p>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex gap-2 items-center">
                          <div>
                            <div className="relative" data-headlessui-state="">
                              <button
                                className="relative w-full cursor-pointer flex items-center focus:outline-none "
                                id="headlessui-listbox-button-:re:"
                                type="button"
                                aria-haspopup="listbox"
                                aria-expanded="false"
                                data-headlessui-state=""
                              >
                                <div className="flex gap-1 items-center px-1 py-1 hover:bg-active rounded">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="14"
                                    height="14"
                                    fill="var(--color-emphasis-high)"
                                    viewBox="0 0 256 256"
                                  >
                                    <path d="M128,24h0A104,104,0,1,0,232,128,104.12,104.12,0,0,0,128,24Zm88,104a87.61,87.61,0,0,1-3.33,24H174.16a157.44,157.44,0,0,0,0-48h38.51A87.61,87.61,0,0,1,216,128ZM102,168H154a115.11,115.11,0,0,1-26,45A115.27,115.27,0,0,1,102,168Zm-3.9-16a140.84,140.84,0,0,1,0-48h59.88a140.84,140.84,0,0,1,0,48ZM40,128a87.61,87.61,0,0,1,3.33-24H81.84a157.44,157.44,0,0,0,0,48H43.33A87.61,87.61,0,0,1,40,128ZM154,88H102a115.11,115.11,0,0,1,26-45A115.27,115.27,0,0,1,154,88Zm52.33,0H170.71a135.28,135.28,0,0,0-22.3-45.6A88.29,88.29,0,0,1,206.37,88ZM107.59,42.4A135.28,135.28,0,0,0,85.29,88H49.63A88.29,88.29,0,0,1,107.59,42.4ZM49.63,168H85.29a135.28,135.28,0,0,0,22.3,45.6A88.29,88.29,0,0,1,49.63,168Zm98.78,45.6a135.28,135.28,0,0,0,22.3-45.6h35.66A88.29,88.29,0,0,1,148.41,213.6Z"></path>
                                  </svg>
                                  <p className="text-[12px] leading-[20px] text-emphasis-high truncate">
                                    Public
                                  </p>
                                </div>
                              </button>
                            </div>
                          </div>
                          <button
                            className="relative flex items-center justify-center border-solid cursor-pointer bg-primary-500 text-[#fff] hover:bg-primary-600 w-[28px] h-[28px] rounded-[6px] disabled:opacity-50 disabled:text-empthi-low disabled:cursor-not-allowed rightAnimation"
                            aria-disabled="false"
                            aria-busy="false"
                            type="submit"
                          >
                            <div className="w-full flex items-center justify-center">
                              <div className="flex items-center justify-center gap-1">
                                <div className="w-[16px] h-[16px] flex justify-center items-center">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="1em"
                                    height="1em"
                                    fill="currentColor"
                                    viewBox="0 0 256 256"
                                  >
                                    <path d="M205.66,117.66a8,8,0,0,1-11.32,0L136,59.31V216a8,8,0,0,1-16,0V59.31L61.66,117.66a8,8,0,0,1-11.32-11.32l72-72a8,8,0,0,1,11.32,0l72,72A8,8,0,0,1,205.66,117.66Z"></path>
                                  </svg>
                                </div>
                              </div>
                            </div>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2 max-sm:gap-0 items-center justify-center display-webkit max-sm:overflow-auto max-sm:p-[1px] max-sm:px-4">
                  <div className="outline outline-outline2 rounded-full px-5 py-[5px] bg-full cursor-pointer hover:bg-secondaryButtonHover transition-colors max-sm:mr-2">
                    <p className="text-[12px] leading-[20px] text-emphasis-high">
                      Web App
                    </p>
                  </div>
                  <div className="outline outline-outline2 rounded-full px-5 py-[5px] bg-full cursor-pointer hover:bg-secondaryButtonHover transition-colors max-sm:mr-2">
                    <p className="text-[12px] leading-[20px] text-emphasis-high">
                      Mobile App
                    </p>
                  </div>
                  <div className="outline outline-outline2 rounded-full px-5 py-[5px] bg-full cursor-pointer hover:bg-secondaryButtonHover transition-colors max-sm:mr-2">
                    <p className="text-[12px] leading-[20px] text-emphasis-high">
                      Internal Tool
                    </p>
                  </div>
                  <div className="outline outline-outline2 rounded-full px-5 py-[5px] bg-full cursor-pointer hover:bg-secondaryButtonHover transition-colors max-sm:mr-2">
                    <p className="text-[12px] leading-[20px] text-emphasis-high">
                      Website
                    </p>
                  </div>
                  <div className="outline outline-outline2 rounded-full px-5 py-[5px] bg-full cursor-pointer hover:bg-secondaryButtonHover transition-colors max-sm:mr-2">
                    <p className="text-[12px] leading-[20px] text-emphasis-high">
                      Dashboard
                    </p>
                  </div>
                  <div className="outline outline-outline2 rounded-full px-5 py-[5px] bg-full cursor-pointer hover:bg-secondaryButtonHover transition-colors max-sm:mr-2">
                    <p className="text-[12px] leading-[20px] text-emphasis-high">
                      Landing page
                    </p>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
