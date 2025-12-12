import { SiteHeader } from "@/components/site-header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

export const iframeHeight = "800px";

export const description = "A sidebar with a header and a search form.";

export default function Chat({ children }) {
  return (
    <div className="[--header-height:calc(--spacing(14))]">
      <SidebarProvider className="flex flex-col">
        <SiteHeader />
        {children}
      </SidebarProvider>
    </div>
  );
}
