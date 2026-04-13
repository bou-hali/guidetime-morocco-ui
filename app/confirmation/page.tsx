"use client"

import { Suspense } from "react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { CheckCircle2, CalendarDays, Users, MapPin, Share2, HelpCircle, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { tours } from "@/lib/data"

function ConfirmationContent() {
  const searchParams = useSearchParams()
  const tourId = searchParams.get("tourId") || "t1"
  const guests = searchParams.get("guests") || "2"
  const total = searchParams.get("total") || "925"
  
  const tour = tours.find((t) => t.id === tourId) || tours[0]

  return (
    <div className="min-h-screen pb-6">
      <main className="mx-auto max-w-7xl px-4 py-12">
        {/* Success Icon */}
        <div className="mb-8 text-center">
          <div className="mb-4 inline-flex h-20 w-20 items-center justify-center rounded-full bg-accent/10">
            <CheckCircle2 className="h-10 w-10 text-accent" />
          </div>
          <h1 className="mb-2 text-2xl font-bold text-foreground">Booking Confirmed!</h1>
          <p className="text-muted-foreground">
            Your adventure in the heart of Morocco is officially scheduled.
          </p>
        </div>

        {/* Reservation Details */}
        <Card className="mb-6">
          <CardContent className="pt-6">
            <p className="mb-4 text-sm font-medium uppercase tracking-wide text-muted-foreground">
              Reservation Details
            </p>
            
            <h3 className="mb-2 text-lg font-semibold text-foreground">{tour.title}</h3>
            <div className="mb-4 flex items-center gap-1 text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span>{tour.city}, Morocco</span>
            </div>

            <Separator className="my-4" />

            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-muted-foreground">Date & Time</p>
                <p className="font-semibold text-foreground">October 24, 2024</p>
                <p className="text-sm text-muted-foreground">04:30 PM</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Guests</p>
                <p className="font-semibold text-foreground">{guests} Adults</p>
              </div>
            </div>

            <Separator className="my-4" />

            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Total Paid</span>
              <span className="text-xl font-bold text-primary">{total} MAD</span>
            </div>
          </CardContent>
        </Card>

        {/* Guide Info */}
        <Card className="mb-6">
          <CardContent className="pt-6">
            <p className="mb-3 text-sm font-medium uppercase tracking-wide text-muted-foreground">
              Your Guide
            </p>
            <div className="flex items-center gap-3">
              <Avatar className="h-12 w-12">
                <AvatarFallback className="bg-primary text-primary-foreground">
                  {tour.guide.name.split(" ").map((n) => n[0]).join("")}
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="font-semibold text-foreground">{tour.guide.name}</p>
                <p className="text-sm text-muted-foreground">{tour.guide.title}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="mb-8 flex gap-3">
          <Link href="/bookings" className="flex-1">
            <Button variant="default" size="lg" className="w-full gap-2">
              <CalendarDays className="h-5 w-5" />
              View My Bookings
            </Button>
          </Link>
          <Button variant="outline" size="lg" className="gap-2">
            <Share2 className="h-5 w-5" />
            Share
          </Button>
          <Button variant="outline" size="lg" className="gap-2">
            <HelpCircle className="h-5 w-5" />
            Support
          </Button>
        </div>

        {/* Email Notice */}
        <Card className="border-primary/10 bg-primary/5">
          <CardContent className="flex items-start gap-3 pt-6">
            <Mail className="h-5 w-5 shrink-0 text-primary" />
            <p className="text-sm text-muted-foreground">
              A confirmation email with the meeting point details and e-tickets has been sent to your registered email address.
            </p>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}

export default function ConfirmationPage() {
  return (
    <Suspense fallback={
      <div className="flex min-h-screen items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
      </div>
    }>
      <ConfirmationContent />
    </Suspense>
  )
}
