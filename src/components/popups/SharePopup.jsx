import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

export function SharePopup() {
    return (
        <Popover>
            <PopoverTrigger asChild >
                <button className="py-1 px-3 bg-white text-black hover:bg-gray-200/80 cursor-pointer rounded-sm text-[13px] font-semibold border border-gray-300">
                    Share
                </button>
            </PopoverTrigger>
            <PopoverContent className="w-[25rem]" align="end">
                <div className="grid gap-4">
                    <div className="border-b border-gray-200 pb-3">
                        {/* <h4 className="leading-none font-medium">Share</h4> */}
                    </div>
                </div>
            </PopoverContent>
        </Popover>
    )
}
