import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Ellipsis } from "lucide-react";

export function ProjectSettings() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild
                className="focus:outline-none"
                id="headlessui-menu-button-:r2:"
                type="button"
                aria-haspopup="menu"
                aria-expanded="false"
                data-headlessui-state=""
            >
                <div className="w-[28px] border border-gray-300 hover:bg-gray-100/80 h-[28px] cursor-pointer rounded-[6px] bg-userProfile flex justify-center items-center text-black">
                    <span><Ellipsis size={18} /></span>
                </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end">
                <DropdownMenuLabel>Project Setting</DropdownMenuLabel>
                <DropdownMenuGroup>
                    <DropdownMenuItem className="cursor-pointer">
                        Rename
                    </DropdownMenuItem>
                    <DropdownMenuItem className="cursor-pointer">
                        Favorite
                    </DropdownMenuItem>
                    <DropdownMenuItem className="cursor-pointer">
                        <button>
                        Delete
                        </button>
                    </DropdownMenuItem>
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
