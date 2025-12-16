import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Ellipsis } from "lucide-react";
import Link from "next/link"

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
                    <Link href={'/profile'}>
                        <DropdownMenuItem className="cursor-pointer">
                            Profile
                            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                        </DropdownMenuItem>
                    </Link>
                    <Link href={'/settings'}>
                        <DropdownMenuItem className="cursor-pointer">
                            Settings
                            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                        </DropdownMenuItem>
                    </Link>
                    <Link href={'/pricing'}>
                        <DropdownMenuItem className="cursor-pointer">
                            Pricing
                            <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                        </DropdownMenuItem>
                    </Link>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <DropdownMenuLabel>Credit Balance</DropdownMenuLabel>
                    <DropdownMenuItem>
                        Monthly credits
                        <DropdownMenuShortcut>4.56</DropdownMenuShortcut>
                    </DropdownMenuItem>
                    <Link href="/pricing" >
                        <DropdownMenuItem className="cursor-pointer">
                            Upgrade plan
                        </DropdownMenuItem>
                    </Link>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuLabel >Connect with us</DropdownMenuLabel>
                <a href="https://github.com/bulbul32123">
                    <DropdownMenuItem className="cursor-pointer">GitHub</DropdownMenuItem>
                </a>
                <a href="https://www.linkedin.com/in/bulbulwebdev/">
                    <DropdownMenuItem className="cursor-pointer">Linkedin</DropdownMenuItem>
                </a>
                <a href="https://www.facebook.com/profile.php?id=61550563621219">
                    <DropdownMenuItem className="cursor-pointer">Facebook</DropdownMenuItem>
                </a>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="cursor-pointer">
                    Log out
                    <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
