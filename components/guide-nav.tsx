"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { LayoutDashboard, Map, CalendarDays, User } from "lucide-react"
import { cn } from "@/lib/utils"

const navItems = [
  { href: "/guide", icon: LayoutDashboard, label: "Dashboard" },
  { href: "/guide/tours", icon: Map, label: "Tours" },
  { href: "/guide/reservations", icon: CalendarDays, label: "Reservations" },
  { href: "/guide/profile", icon: User, label: "Profile" },
]

export function GuideNav() {
  const pathname = usePathname()

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-card shadow-lg md:hidden">
      <div className="flex items-center justify-around py-2">
        {navItems.map((item) => {
          const isActive = pathname === item.href || 
            (item.href !== "/guide" && pathname.startsWith(item.href))
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex flex-col items-center gap-1 px-4 py-2 text-xs transition-colors",
                isActive
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              <item.icon className={cn("h-5 w-5", isActive && "text-primary")} />
              <span className="font-medium">{item.label}</span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
