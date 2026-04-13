"use client"

import { use } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, MapPin, Clock, Users, Globe, Star, CheckCircle2, Calendar, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { tours } from "@/lib/data"

export default function TourDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const tour = tours.find((t) => t.id === id) || tours[0]

  return (
    <div className="min-h-screen pb-24">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-border bg-card/95 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Link href="/search">
                <Button variant="ghost" size="icon" className="-ml-2">
                  <ArrowLeft className="h-5 w-5" />
                </Button>
              </Link>
              <h1 className="text-lg font-bold text-foreground">Tour Details</h1>
            </div>
            <span className="text-xl font-bold text-primary">
              {tour.price} <span className="text-sm font-normal text-muted-foreground">{tour.currency}/person</span>
            </span>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-6">
        {/* Hero Image */}
        <div className="relative mb-6 overflow-hidden rounded-2xl">
          <div className="relative aspect-[16/9]">
            <Image
              src={tour.image}
              alt={tour.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 896px"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            <Badge variant="secondary" className="absolute bottom-4 left-4 bg-white/90 text-foreground backdrop-blur-sm">
              {tour.city}
            </Badge>
          </div>
        </div>

        {/* Title & Info */}
        <div className="mb-6">
          <Badge className="mb-2 bg-primary/10 text-primary hover:bg-primary/20">
            {tour.city}
          </Badge>
          <h2 className="mb-4 text-2xl font-bold text-foreground">{tour.title}</h2>
          
          {/* Quick Info */}
          <div className="grid grid-cols-3 gap-4">
            <div className="rounded-xl bg-muted/50 p-3 text-center">
              <Clock className="mx-auto mb-1 h-5 w-5 text-muted-foreground" />
              <p className="text-xs text-muted-foreground">Time</p>
              <p className="font-semibold text-foreground">{tour.duration}</p>
            </div>
            <div className="rounded-xl bg-muted/50 p-3 text-center">
              <Users className="mx-auto mb-1 h-5 w-5 text-muted-foreground" />
              <p className="text-xs text-muted-foreground">Group</p>
              <p className="font-semibold text-foreground">Max {tour.maxGuests}</p>
            </div>
            <div className="rounded-xl bg-muted/50 p-3 text-center">
              <Globe className="mx-auto mb-1 h-5 w-5 text-muted-foreground" />
              <p className="text-xs text-muted-foreground">Lang</p>
              <p className="font-semibold text-foreground">{tour.languages[0].slice(0, 2).toUpperCase()}, {tour.languages[1]?.slice(0, 2).toUpperCase() || "+"}</p>
            </div>
          </div>
        </div>

        {/* Monuments */}
        <Card className="mb-6">
          <CardHeader className="pb-3">
            <CardTitle className="text-base">Historical Sites Included</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {tour.monuments.map((monument, index) => (
                <Badge key={index} variant="secondary" className="gap-1.5 px-3 py-1.5">
                  <MapPin className="h-3 w-3" />
                  {monument}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Description */}
        <Card className="mb-6">
          <CardHeader className="pb-3">
            <CardTitle className="text-base">The Experience</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="leading-relaxed text-muted-foreground">
              {tour.description}
            </p>
          </CardContent>
        </Card>

        {/* Guide Info */}
        <Card className="mb-6">
          <CardHeader className="pb-3">
            <CardTitle className="text-base">Your Local Guide</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-start gap-4">
              <Avatar className="h-16 w-16">
                <AvatarFallback className="bg-primary text-lg text-primary-foreground">
                  {tour.guide.name.split(" ").map((n) => n[0]).join("")}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-foreground">{tour.guide.name}</h4>
                    <p className="text-sm text-muted-foreground">{tour.guide.title}</p>
                  </div>
                  <Button variant="outline" size="sm">View Profile</Button>
                </div>
                <div className="mt-2 flex items-center gap-3">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-secondary text-secondary" />
                    <span className="font-medium">{tour.guide.rating}</span>
                    <span className="text-sm text-muted-foreground">({tour.guide.reviews} reviews)</span>
                  </div>
                </div>
                <p className="mt-3 text-sm italic text-muted-foreground">
                  &quot;{tour.guide.bio}&quot;
                </p>
                <div className="mt-3 flex gap-2">
                  <Badge variant="outline" className="gap-1">
                    <CheckCircle2 className="h-3 w-3 text-accent" />
                    Verified
                  </Badge>
                  <Badge variant="outline" className="gap-1">
                    <Shield className="h-3 w-3 text-accent" />
                    {tour.guide.experience} exp.
                  </Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Availability */}
        <Card className="mb-6">
          <CardContent className="pt-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-muted-foreground">Available Days</p>
                <p className="font-semibold text-foreground">Daily (Tue - Sun)</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Start Time</p>
                <p className="font-semibold text-foreground">09:00 AM or 02:00 PM</p>
              </div>
            </div>
            <Separator className="my-4" />
            <div>
              <p className="text-sm text-muted-foreground">Pick-up Point</p>
              <p className="font-semibold text-foreground">Hotel or Central Square</p>
            </div>
          </CardContent>
        </Card>
      </main>

      {/* Sticky Bottom CTA */}
      <div className="fixed bottom-0 left-0 right-0 border-t border-border bg-card p-4 shadow-lg">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div>
            <p className="text-sm text-muted-foreground">Total Price</p>
            <p className="text-2xl font-bold text-primary">
              {tour.price} <span className="text-sm font-normal text-muted-foreground">{tour.currency}/person</span>
            </p>
          </div>
          <Link href={`/booking/${tour.id}`}>
            <Button size="lg" className="gap-2 px-8">
              <Calendar className="h-5 w-5" />
              Book Now
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
