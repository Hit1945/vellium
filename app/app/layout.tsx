import { Sidebar } from "@/components/layout/sidebar";
import { Topbar } from "@/components/layout/topbar";
export default function AppLayout({children}:{children:React.ReactNode}){return <div className="flex min-h-screen"><Sidebar/><div className="flex-1 pl-64"><Topbar/><main className="p-6">{children}</main></div></div>}
