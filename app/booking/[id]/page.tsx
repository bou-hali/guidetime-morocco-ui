"use client"

import { useState, use } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { ArrowLeft, MapPin, Calendar, Clock, Minus, Plus, Shield, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { tours } from "@/lib/data"

export default function BookingPage({ params }: { params: Promise<{ id: string }> }) {
  const router = useRouter()
  const { id } = use(params)
  const tour = tours.find((t) => t.id === id) || tours[0]
  const [guests, setGuests] = useState(2)

  const basePrice = tour.price * guests
  const serviceFee = 25
  const totalPrice = basePrice + serviceFee

  const handleConfirm = () => {
    router.push(`/confirmation?tourId=${tour.id}&guests=${guests}&total=${totalPrice}`)
  }

  return (
    <div className="min-h-screen pb-6">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-border bg-card/95 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-4 py-4">
          <div className="flex items-center gap-3">
            <Link href={`/tour/${id}`}>
              <Button variant="ghost" size="icon" className="-ml-2">
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </Link>
            <h1 className="text-lg font-bold text-foreground">Booking Details</h1>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-6">
        {/* Tour Summary */}
        <Card className="mb-6">
          <CardContent className="pt-6">
            <div className="flex gap-4">
              <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10">
                <MapPin className="h-8 w-8 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-foreground">{tour.title}</h3>
                <div className="mt-1 flex items-center gap-1 text-sm text-muted-foreground">
                  <MapPin className="h-3.5 w-3.5" />
                  {tour.city}, Morocco
                </div>
                <div className="mt-2 flex items-center gap-3 text-sm">
                  <Badge variant="outline" className="gap-1">
                    <Calendar className="h-3 w-3" />
                    Oct 24, 2024
                  </Badge>
                  <Badge variant="outline" className="gap-1">
                    <Clock className="h-3 w-3" />
                    09:00 AM
                  </Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Guests Selection */}
        <Card className="mb-6">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center justify-between text-base">
              <span>Who&apos;s coming?</span>
              <span className="text-sm font-normal text-muted-foreground">Max {tour.maxGuests} people</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <span className="text-foreground">Tour Participants</span>
              <div className="flex items-center gap-4">
                <Button
                  variant="outline"
                  size="icon"
                  className="h-10 w-10"
                  onClick={() => setGuests(Math.max(1, guests - 1))}
                  disabled={guests <= 1}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="w-8 text-center text-xl font-bold text-foreground">{guests}</span>
                <Button
                  variant="outline"
                  size="icon"
                  className="h-10 w-10"
                  onClick={() => setGuests(Math.min(tour.maxGuests, guests + 1))}
                  disabled={guests >= tour.maxGuests}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Price Summary */}
        <Card className="mb-6">
          <CardHeader className="pb-3">
            <CardTitle className="text-base">Price Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between text-foreground">
                <span>Base price ({guests} x {tour.price} {tour.currency})</span>
                <span className="font-medium">{basePrice} {tour.currency}</span>
              </div>
              <div className="flex items-center justify-between text-muted-foreground">
                <span>Service & Booking Fee</span>
                <span>{serviceFee} {tour.currency}</span>
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <span className="text-lg font-semibold text-foreground">Total Amount</span>
                <span className="text-xl font-bold text-primary">{totalPrice} {tour.currency}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Security Notice */}
        <Card className="mb-8 border-accent/20 bg-accent/5">
          <CardContent className="pt-6">
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/10">
                <Shield className="h-5 w-5 text-accent" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground">Secure Reservation</h4>
                <p className="mt-1 text-sm text-muted-foreground">
                  Your booking is protected by GuideTime&apos;s guarantee. Free cancellation up to 24h before.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Terms */}
        <p className="mb-6 text-center text-sm text-muted-foreground">
          By clicking confirm, you agree to our{" "}
          <Link href="#" className="text-primary underline">Terms of Service</Link>
        </p>

        {/* Action Buttons */}
        <div className="space-y-3">
          <Button size="lg" className="w-full gap-2" onClick={handleConfirm}>
            <CheckCircle2 className="h-5 w-5" />
            Confirm Reservation
          </Button>
          <Link href={`/tour/${id}`}>
            <Button variant="outline" size="lg" className="w-full">
              Cancel and Go Back
            </Button>
          </Link>
        </div>
      </main>
    </div>
  )
}
