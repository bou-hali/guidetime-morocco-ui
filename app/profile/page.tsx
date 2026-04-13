"use client"

import Link from "next/link"
import { 
  User, Settings, HelpCircle, LogOut, ChevronRight, 
  Bell, Shield, CreditCard, Globe, Heart, Star
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { MobileNav } from "@/components/mobile-nav"

const menuItems = [
  { icon: User, label: "Personal Information", href: "#" },
  { icon: CreditCard, label: "Payment Methods", href: "#" },
  { icon: Bell, label: "Notifications", href: "#", badge: "3" },
  { icon: Heart, label: "Saved Tours", href: "#" },
  { icon: Globe, label: "Language & Currency", href: "#" },
  { icon: Shield, label: "Privacy & Security", href: "#" },
  { icon: HelpCircle, label: "Help & Support", href: "#" },
]

export default function ProfilePage() {
  return (
    <div className="min-h-screen pb-20 md:pb-0">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="mx-auto max-w-7xl px-4 py-6">
          <div className="flex items-center gap-4">
            <Avatar className="h-16 w-16">
              <AvatarFallback className="bg-primary text-lg text-primary-foreground">
                SJ
              </AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <h1 className="text-xl font-bold text-foreground">Sarah Jenkins</h1>
              <p className="text-sm text-muted-foreground">sarah.j@travelworld.com</p>
              <div className="mt-2 flex items-center gap-2">
                <Badge variant="secondary" className="gap-1">
                  <Star className="h-3 w-3 fill-secondary text-secondary" />
                  Verified Traveler
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
        <div className="mb-6 grid grid-cols-3 gap-4">
          <Card>
            <CardContent className="p-4 text-center">
              <p className="text-2xl font-bold text-primary">8</p>
              <p className="text-xs text-muted-foreground">Tours Taken</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <p className="text-2xl font-bold text-primary">4</p>
              <p className="text-xs text-muted-foreground">Reviews</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <p className="text-2xl font-bold text-primary">3</p>
              <p className="text-xs text-muted-foreground">Cities</p>
            </CardContent>
          </Card>
        </div>

        {/* Become a Guide CTA */}
        <Card className="mb-6 border-primary/20 bg-gradient-to-r from-primary/5 to-secondary/5">
          <CardContent className="flex items-center justify-between p-4">
            <div>
              <h3 className="font-semibold text-foreground">Become a Guide</h3>
              <p className="text-sm text-muted-foreground">Share your local expertise</p>
            </div>
            <Link href="/guide">
              <Button size="sm">Get Started</Button>
            </Link>
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

        {/* Logout */}
        <Button variant="ghost" className="mt-6 w-full gap-2 text-destructive hover:bg-destructive/10 hover:text-destructive">
          <LogOut className="h-5 w-5" />
          Sign Out
        </Button>
      </main>

      <MobileNav />
    </div>
  )
}
