"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { 
  LayoutDashboard, Users, UserCheck, Map, BarChart3, 
  Settings, LogOut, Zap, Bell
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"

const mainMenuItems = [
  { href: "/admin", icon: LayoutDashboard, label: "Dashboard" },
  { href: "/admin/users", icon: Users, label: "Manage Users" },
  { href: "/admin/guides", icon: UserCheck, label: "Manage Guides" },
  { href: "/admin/tours", icon: Map, label: "Manage Tours" },
  { href: "/admin/analytics", icon: BarChart3, label: "Advanced Analytics" },
]

const systemMenuItems = [
  { href: "#", icon: Bell, label: "Notifications" },
  { href: "#", icon: Settings, label: "Global Settings" },
]

export function AdminSidebar() {
  const pathname = usePathname()

  return (
    <aside className="fixed left-0 top-0 z-40 hidden h-screen w-64 flex-col border-r border-sidebar-border bg-sidebar text-sidebar-foreground md:flex">
      {/* Logo */}
      <div className="flex h-16 items-center gap-3 border-b border-sidebar-border px-6">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-sidebar-primary">
          <Zap className="h-5 w-5 text-sidebar-primary-foreground" />
        </div>
        <span className="text-lg font-bold">GuideTime Admin</span>
      </div>

      {/* Main Menu */}
      <nav className="flex-1 overflow-y-auto p-4">
        <p className="mb-2 px-2 text-xs font-medium uppercase tracking-wide text-sidebar-foreground/60">
          Main Menu
        </p>
        <ul className="space-y-1">
          {mainMenuItems.map((item) => {
            const isActive = pathname === item.href || 
              (item.href !== "/admin" && pathname.startsWith(item.href))
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                    isActive
                      ? "bg-sidebar-accent text-sidebar-accent-foreground"
                      : "text-sidebar-foreground/80 hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground"
                  )}
                >
                  <item.icon className="h-5 w-5" />
                  {item.label}
                </Link>
              </li>
            )
          })}
        </ul>

        <Separator className="my-4 bg-sidebar-border" />

        <p className="mb-2 px-2 text-xs font-medium uppercase tracking-wide text-sidebar-foreground/60">
          System
        </p>
        <ul className="space-y-1">
          {systemMenuItems.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-sidebar-foreground/80 transition-colors hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground"
              >
                <item.icon className="h-5 w-5" />
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* User */}
      <div className="border-t border-sidebar-border p-4">
        <div className="flex items-center gap-3">
          <Avatar className="h-10 w-10">
            <AvatarFallback className="bg-sidebar-primary text-sidebar-primary-foreground">
              AO
            </AvatarFallback>
          </Avatar>
          <div className="flex-1 overflow-hidden">
            <p className="truncate text-sm font-medium text-sidebar-foreground">Admin Officer</p>
            <p className="truncate text-xs text-sidebar-foreground/60">admin@guidetime.ma</p>
          </div>
          <Button variant="ghost" size="icon" className="text-sidebar-foreground/60 hover:text-sidebar-foreground">
            <LogOut className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </aside>
  )
}
