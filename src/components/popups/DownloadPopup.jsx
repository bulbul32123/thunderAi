import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { MoreVertical } from "lucide-react"
import { Button } from "@/components/ui/button"

export function DownloadPopup({ id }) {
    return (
        <Popover>
            <PopoverTrigger asChild >
                <Button variant="ghost" size="icon" className="h-8 w-8 cursor-pointer">
                    <MoreVertical className="h-4 w-4" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[15rem]" align="end">
                <div className="grid gap-4">
                    <div className="border-b border-gray-200 pb-3">
                        <button>Full Screen</button>
                    </div>
                    <div className="py-2 ">
                        <a href={`/dowload/${id}`} className="leading-none font-medium">Download</a>
                    </div>
                </div>
            </PopoverContent>
        </Popover>
    )
}