"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Search, SlidersHorizontal, MapPin, Clock, Star, Globe, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { MobileNav } from "@/components/mobile-nav"
import { tours, cities } from "@/lib/data"
import type { Tour } from "@/lib/data"

function SearchResultCard({ tour }: { tour: Tour }) {
  return (
    <Link href={`/tour/${tour.id}`}>
      <Card className="overflow-hidden transition-all hover:shadow-md">
        <CardContent className="p-0">
          <div className="flex gap-4 p-4">
            <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10">
              <MapPin className="h-8 w-8 text-primary" />
            </div>
            <div className="flex flex-1 flex-col justify-between">
              <div>
                <div className="mb-1 flex items-center gap-2">
                  <Badge variant="outline" className="text-xs">
                    {tour.city}
                  </Badge>
                  {tour.featured && (
                    <Badge className="bg-secondary text-secondary-foreground text-xs">
                      Top Rated
                    </Badge>
                  )}
                </div>
                <h3 className="line-clamp-1 font-semibold text-foreground">
                  {tour.title}
                </h3>
              </div>
              <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  {tour.duration} duration
                </span>
                <span className="flex items-center gap-1">
                  <Globe className="h-3 w-3" />
                  {tour.languages.slice(0, 2).join(", ")}
                </span>
              </div>
            </div>
            <div className="flex flex-col items-end justify-between">
              <span className="text-lg font-bold text-primary">
                {tour.price} <span className="text-xs font-normal text-muted-foreground">{tour.currency}</span>
              </span>
              <div className="flex items-center gap-1 text-sm">
                <Star className="h-4 w-4 fill-secondary text-secondary" />
                <span className="font-medium">{tour.rating}</span>
              </div>
            </div>
          </div>
          {/* Guide Info */}
          <div className="flex items-center justify-between border-t border-border bg-muted/30 px-4 py-3">
            <div className="flex items-center gap-2">
              <Avatar className="h-8 w-8">
                <AvatarFallback className="bg-primary/10 text-xs text-primary">
                  {tour.guide.name.split(" ").map((n) => n[0]).join("")}
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-medium text-foreground">{tour.guide.name}</p>
                <p className="text-xs text-muted-foreground">{tour.guide.title}</p>
              </div>
            </div>
            <Button variant="ghost" size="sm" className="text-primary">
              Details
              <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCity, setSelectedCity] = useState("Marrakech")

  const filteredTours = tours.filter((tour) => {
    const matchesCity = selectedCity === "All" || tour.city === selectedCity
    const matchesSearch =
      tour.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tour.city.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCity && matchesSearch && tour.status === "active"
  })

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
            <h1 className="text-lg font-bold text-foreground">Search Results</h1>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-6">
        {/* Search Bar */}
        <div className="mb-4 flex gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search tours..."
              className="h-11 pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Button variant="outline" size="icon" className="h-11 w-11 shrink-0">
            <SlidersHorizontal className="h-5 w-5" />
          </Button>
        </div>

        {/* City Badge */}
        <div className="mb-6">
          <div className="mb-2 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-foreground">{selectedCity}</h2>
            <span className="text-sm text-muted-foreground">
              {filteredTours.length} Authentic Tours
            </span>
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2">
            {cities.map((city) => (
              <Badge
                key={city}
                variant={selectedCity === city ? "default" : "outline"}
                className={`cursor-pointer whitespace-nowrap px-3 py-1.5 text-sm transition-all ${
                  selectedCity === city
                    ? "bg-primary text-primary-foreground"
                    : "hover:bg-muted"
                }`}
                onClick={() => setSelectedCity(city)}
              >
                {city}
              </Badge>
            ))}
          </div>
        </div>

        {/* Filter Pills */}
        <div className="mb-6 flex gap-2">
          <Badge variant="outline" className="cursor-pointer px-3 py-1.5 hover:bg-muted">
            Group: 1-6
          </Badge>
          <Badge variant="secondary" className="cursor-pointer px-3 py-1.5">
            Verified Only
          </Badge>
        </div>

        {/* Results */}
        <div className="space-y-4">
          {filteredTours.map((tour) => (
            <SearchResultCard key={tour.id} tour={tour} />
          ))}
        </div>

        {filteredTours.length === 0 && (
          <div className="py-12 text-center">
            <MapPin className="mx-auto mb-4 h-12 w-12 text-muted-foreground/50" />
            <h3 className="mb-2 text-lg font-semibold text-foreground">No tours found</h3>
            <p className="text-muted-foreground">Try adjusting your search or filters</p>
          </div>
        )}
      </main>

      <MobileNav />
    </div>
  )
}
