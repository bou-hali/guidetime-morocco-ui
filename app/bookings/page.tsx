"use client"

import Link from "next/link"
import { ArrowLeft, MapPin, Calendar, Clock, Users, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MobileNav } from "@/components/mobile-nav"
import { bookings } from "@/lib/data"

export default function BookingsPage() {
  const upcomingBookings = bookings.filter(b => b.status === "upcoming" || b.status === "confirmed")
  const pastBookings = bookings.filter(b => b.status === "completed" || b.status === "cancelled")

  return (
    <div className="min-h-screen pb-20 md:pb-0">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-border bg-card/95 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-4 py-4">
          <div className="flex items-center gap-3">
            <Link href="/">
              <Button variant="ghost" size="icon" className="-ml-2">
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </Link>
            <h1 className="text-lg font-bold text-foreground">My Bookings</h1>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-6">
        <Tabs defaultValue="upcoming" className="w-full">
          <TabsList className="mb-6 grid w-full grid-cols-2">
            <TabsTrigger value="upcoming">
              Upcoming ({upcomingBookings.length})
            </TabsTrigger>
            <TabsTrigger value="past">
              Past ({pastBookings.length})
            </TabsTrigger>
          </TabsList>

          <TabsContent value="upcoming" className="space-y-4">
            {upcomingBookings.map((booking) => (
              <Card key={booking.id} className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="p-4">
                    <div className="mb-3 flex items-start justify-between">
                      <div>
                        <h3 className="font-semibold text-foreground">{booking.tourTitle}</h3>
                        <div className="mt-1 flex items-center gap-1 text-sm text-muted-foreground">
                          <MapPin className="h-3.5 w-3.5" />
                          {booking.location}
                        </div>
                      </div>
                      <Badge className="bg-accent/10 text-accent hover:bg-accent/20">
                        Upcoming
                      </Badge>
                    </div>

                    <div className="grid grid-cols-3 gap-3 rounded-lg bg-muted/50 p-3">
                      <div>
                        <p className="text-xs text-muted-foreground">Date</p>
                        <p className="font-medium text-foreground">{booking.date}</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Time</p>
                        <p className="font-medium text-foreground">{booking.time}</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Guests</p>
                        <p className="font-medium text-foreground">{booking.guestDetails}</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between border-t border-border bg-muted/30 px-4 py-3">
                    <div className="flex items-center gap-2">
                      <Avatar className="h-8 w-8">
                        <AvatarFallback className="bg-primary/10 text-xs text-primary">
                          {booking.guide.name.split(" ").map((n) => n[0]).join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm font-medium text-foreground">{booking.leadTraveler}</p>
                        <p className="text-xs text-muted-foreground">Lead Traveler</p>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm" className="text-primary">
                      Details
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="past" className="space-y-4">
            {pastBookings.map((booking) => (
              <Card key={booking.id} className="overflow-hidden opacity-80">
                <CardContent className="p-0">
                  <div className="p-4">
                    <div className="mb-3 flex items-start justify-between">
                      <div>
                        <h3 className="font-semibold text-foreground">{booking.tourTitle}</h3>
                        <div className="mt-1 flex items-center gap-1 text-sm text-muted-foreground">
                          <MapPin className="h-3.5 w-3.5" />
                          {booking.location}
                        </div>
                      </div>
                      <Badge variant="secondary">
                        {booking.status === "completed" ? "Completed" : "Cancelled"}
                      </Badge>
                    </div>

                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3.5 w-3.5" />
                        {booking.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3.5 w-3.5" />
                        {booking.time}
                      </span>
                      <span className="flex items-center gap-1">
                        <Users className="h-3.5 w-3.5" />
                        {booking.guestDetails}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      </main>

      <MobileNav />
    </div>
  )
}
