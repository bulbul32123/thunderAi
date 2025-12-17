import { AppSidebar } from '@/components/app-sidebar'
import {
    SidebarInset,
    SidebarProvider,
    SidebarTrigger,
} from '@/components/ui/sidebar'
import Navbar from '../Navbar'

export const iframeHeight = "800px"
export const description = "A sidebar with a header and a search form."

export default function Sidebar({ children }) {
    
    return (
        <div className="[--header-height:calc(--spacing(14))]">
            <SidebarProvider className="flex flex-col">
                <Navbar />
                <div className="flex bg-white relative">
                    <AppSidebar />
                    <SidebarTrigger className="!ml-1 mx-auto text-black mt-1 cursor-pointer" />
                    <SidebarInset>
                        {children}
                    </SidebarInset>
                </div>
            </SidebarProvider>
        </div>
    )
}