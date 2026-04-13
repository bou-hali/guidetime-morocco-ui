"use client"

import Link from "next/link"
import { 
  User, Settings, HelpCircle, LogOut, ChevronRight, 
  Bell, Shield, Wallet, Languages, Star, CheckCircle2
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { GuideNav } from "@/components/guide-nav"

const menuItems = [
  { icon: User, label: "Profile Settings", href: "#" },
  { icon: Wallet, label: "Payment & Earnings", href: "#", badge: "New" },
  { icon: Bell, label: "Notifications", href: "#", badge: "5" },
  { icon: Languages, label: "Languages", href: "#" },
  { icon: Shield, label: "Verification & Docs", href: "#" },
  { icon: HelpCircle, label: "Help Center", href: "#" },
]

export default function GuideProfilePage() {
  return (
    <div className="min-h-screen pb-20 md:pb-0">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="mx-auto max-w-7xl px-4 py-6">
          <div className="flex items-center gap-4">
            <Avatar className="h-20 w-20">
              <AvatarFallback className="bg-primary text-xl text-primary-foreground">
                YE
              </AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <h1 className="text-xl font-bold text-foreground">Youssef El Mansouri</h1>
              <p className="text-sm text-muted-foreground">Certified Historian & Guide</p>
              <div className="mt-2 flex flex-wrap gap-2">
                <Badge variant="secondary" className="gap-1">
                  <CheckCircle2 className="h-3 w-3 text-accent" />
                  Verified
                </Badge>
                <Badge variant="outline" className="gap-1">
                  <Star className="h-3 w-3 fill-secondary text-secondary" />
                  4.9 (128)
                </Badge>
              </div>
            </div>
            <Button variant="outline" size="icon">
              <Settings className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-6">
        {/* Stats */}
        <div className="mb-6 grid grid-cols-4 gap-3">
          <Card>
            <CardContent className="p-3 text-center">
              <p className="text-xl font-bold text-primary">12</p>
              <p className="text-[10px] text-muted-foreground">Tours</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-3 text-center">
              <p className="text-xl font-bold text-primary">248</p>
              <p className="text-[10px] text-muted-foreground">Bookings</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-3 text-center">
              <p className="text-xl font-bold text-primary">4.9</p>
              <p className="text-[10px] text-muted-foreground">Rating</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-3 text-center">
              <p className="text-xl font-bold text-primary">10+</p>
              <p className="text-[10px] text-muted-foreground">Years</p>
            </CardContent>
          </Card>
        </div>

        {/* Bio */}
        <Card className="mb-6">
          <CardContent className="p-4">
            <p className="text-sm italic text-muted-foreground">
              &quot;Born and raised in the heart of Marrakech, I&apos;ve spent 15 years studying 
              Islamic architecture and the sultanate era. I love sharing the hidden stories 
              of our beautiful city with travelers from around the world.&quot;
            </p>
          </CardContent>
        </Card>

        {/* Menu Items */}
        <Card>
          <CardContent className="p-0">
            {menuItems.map((item, index) => (
              <div key={item.label}>
                <Link href={item.href}>
                  <div className="flex items-center justify-between px-4 py-3 transition-colors hover:bg-muted/50">
                    <div className="flex items-center gap-3">
                      <item.icon className="h-5 w-5 text-muted-foreground" />
                      <span className="font-medium text-foreground">{item.label}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      {item.badge && (
                        <Badge className="bg-primary text-primary-foreground">{item.badge}</Badge>
                      )}
                      <ChevronRight className="h-4 w-4 text-muted-foreground" />
                    </div>
                  </div>
                </Link>
                {index < menuItems.length - 1 && <Separator />}
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Switch to Tourist */}
        <Card className="mt-6 border-primary/20 bg-primary/5">
          <CardContent className="flex items-center justify-between p-4">
            <div>
              <h3 className="font-semibold text-foreground">Switch to Tourist Mode</h3>
              <p className="text-sm text-muted-foreground">Browse and book tours</p>
            </div>
            <Link href="/">
              <Button variant="outline" size="sm">Switch</Button>
            </Link>
          </CardContent>
        </Card>

        {/* Logout */}
        <Button 
          variant="ghost" 
          className="mt-6 w-full gap-2 text-destructive hover:bg-destructive/10 hover:text-destructive"
        >
          <LogOut className="h-5 w-5" />
          Sign Out
        </Button>
      </main>

      <GuideNav />
    </div>
  )
}
