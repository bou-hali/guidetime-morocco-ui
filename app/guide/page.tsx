"use client"

import Link from "next/link"
import { 
  DollarSign, Calendar, TrendingUp, Star, ChevronRight, 
  Clock, Users, MapPin, Phone, MessageSquare, X, Bell
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { GuideNav } from "@/components/guide-nav"

const activities = [
  {
    id: 1,
    type: "booking",
    title: "New Booking: Chefchaouen Day Trip",
    description: "Liam Smith booked for 2 adults on Oct 28th.",
    time: "2m ago",
  },
  {
    id: 2,
    type: "review",
    title: "New 5-Star Review",
    description: "'Youssef was the best guide we could have asked for in Fes! Highly recommend'",
    time: "4h ago",
  },
  {
    id: 3,
    type: "message",
    title: "Message from Amelie",
    description: "'Hi Youssef, can we start the tour 30 minutes later tomorrow?'",
    time: "1d ago",
  },
  {
    id: 4,
    type: "cancelled",
    title: "Reservation Canceled",
    description: "The tour 'Sahara Sunset Camel Trek' for Oct 25th was canceled by user.",
    time: "1d ago",
  },
]

export default function GuideDashboardPage() {
  return (
    <div className="min-h-screen pb-20 md:pb-0">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="mx-auto max-w-7xl px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl font-bold text-foreground">Dashboard</h1>
              <p className="text-sm text-muted-foreground">Welcome, Youssef!</p>
            </div>
            <Button variant="outline" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] text-primary-foreground">
                4
              </span>
            </Button>
          </div>
          <p className="mt-2 text-sm text-muted-foreground">
            You have 4 bookings scheduled for today.
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-6">
        {/* Stats Grid */}
        <div className="mb-6 grid grid-cols-2 gap-4">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                    Earnings
                  </p>
                  <p className="mt-1 text-2xl font-bold text-foreground">4,250</p>
                  <p className="text-xs text-muted-foreground">MAD</p>
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10">
                  <DollarSign className="h-5 w-5 text-accent" />
                </div>
              </div>
              <div className="mt-2 flex items-center gap-1 text-xs text-accent">
                <TrendingUp className="h-3 w-3" />
                +12% this month
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                    Bookings
                  </p>
                  <p className="mt-1 text-2xl font-bold text-foreground">28</p>
                  <p className="text-xs text-muted-foreground">This month</p>
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <Calendar className="h-5 w-5 text-primary" />
                </div>
              </div>
              <div className="mt-2 flex items-center gap-1 text-xs text-primary">
                <TrendingUp className="h-3 w-3" />
                +5 new
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Priority Task */}
        <Card className="mb-6 border-secondary/30 bg-secondary/5">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-base">Priority Task</CardTitle>
              <Badge className="bg-secondary text-secondary-foreground">Upcoming Next</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div className="flex-1">
                <Badge variant="outline" className="mb-1">Confirmed</Badge>
                <h3 className="font-semibold text-foreground">Marrakech Medina Night Walk</h3>
                <div className="mt-2 flex items-center gap-3 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Users className="h-3.5 w-3.5" />
                    Sarah Johnson - 4 Adults
                  </span>
                </div>
                <div className="mt-2 flex items-center gap-3 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3.5 w-3.5" />
                    Oct 24, 2023
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" />
                    19:00-21:00
                  </span>
                </div>
              </div>
            </div>
            <div className="mt-4 flex gap-2">
              <Button size="sm" variant="outline" className="flex-1 gap-1">
                <Phone className="h-4 w-4" />
                Contact
              </Button>
              <Button size="sm" className="flex-1">
                Details
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* View All Bookings */}
        <Link href="/guide/reservations">
          <Button variant="outline" className="mb-6 w-full justify-between">
            View All Bookings
            <ChevronRight className="h-4 w-4" />
          </Button>
        </Link>

        {/* Recent Activity */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-base">Recent Activity</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {activities.map((activity) => (
              <div key={activity.id} className="flex items-start gap-3">
                <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${
                  activity.type === "booking" ? "bg-accent/10" :
                  activity.type === "review" ? "bg-secondary/20" :
                  activity.type === "message" ? "bg-primary/10" :
                  "bg-destructive/10"
                }`}>
                  {activity.type === "booking" && <Calendar className="h-4 w-4 text-accent" />}
                  {activity.type === "review" && <Star className="h-4 w-4 text-secondary" />}
                  {activity.type === "message" && <MessageSquare className="h-4 w-4 text-primary" />}
                  {activity.type === "cancelled" && <X className="h-4 w-4 text-destructive" />}
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <p className="text-sm font-medium text-foreground">{activity.title}</p>
                    <span className="text-xs text-muted-foreground">{activity.time}</span>
                  </div>
                  <p className="text-sm text-muted-foreground line-clamp-1">{activity.description}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </main>

      <GuideNav />
    </div>
  )
}
