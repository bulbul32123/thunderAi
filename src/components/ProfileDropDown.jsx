import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from "next/link"

export function ProfileDropDown() {
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
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
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
