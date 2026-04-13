"use client"

import { useState } from "react"
import Link from "next/link"
import { Search, SlidersHorizontal, ChevronRight, Compass, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { MobileNav } from "@/components/mobile-nav"
import { TourCard } from "@/components/tour-card"
import { tours, cities } from "@/lib/data"

export default function HomePage() {
  const [selectedCity, setSelectedCity] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredTours = tours.filter((tour) => {
    const matchesCity = selectedCity === "All" || tour.city === selectedCity
    const matchesSearch =
      tour.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tour.city.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCity && matchesSearch && tour.status === "active"
  })

  const featuredTours = filteredTours.filter((tour) => tour.featured)
  const recommendedTours = filteredTours.slice(0, 6)

  return (
    <div className="min-h-screen pb-20 md:pb-0">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-border bg-card/95 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-4 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary">
              <Zap className="h-5 w-5 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-foreground">GuideTime Morocco</h1>
              <p className="text-xs text-muted-foreground">Discover authentic experiences</p>
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-6">
        {/* Search Bar */}
        <div className="mb-6 flex gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search cities, tours, or guides..."
              className="h-12 pl-10 pr-4"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Button variant="outline" size="icon" className="h-12 w-12 shrink-0">
            <SlidersHorizontal className="h-5 w-5" />
          </Button>
        </div>

        {/* City Filters */}
        <div className="mb-8 flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {cities.slice(0, 5).map((city) => (
            <Badge
              key={city}
              variant={selectedCity === city ? "default" : "outline"}
              className={`cursor-pointer whitespace-nowrap px-4 py-2 text-sm transition-all ${
                selectedCity === city
                  ? "bg-primary text-primary-foreground hover:bg-primary/90"
                  : "hover:bg-muted"
              }`}
              onClick={() => setSelectedCity(city)}
            >
              {city}
            </Badge>
          ))}
        </div>

        {/* Featured Section */}
        {featuredTours.length > 0 && (
          <section className="mb-8">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold text-foreground">Recommended for You</h2>
                <p className="text-sm text-muted-foreground">Handpicked experiences</p>
              </div>
              <Link href="/search" className="flex items-center gap-1 text-sm font-medium text-primary hover:underline">
                See all
                <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
              {featuredTours.slice(0, 4).map((tour) => (
                <TourCard key={tour.id} tour={tour} featured />
              ))}
            </div>
          </section>
        )}

        {/* Explore Tours */}
        <section className="mb-8">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold text-foreground">Explore Tours</h2>
              <p className="text-sm text-muted-foreground">
                {filteredTours.length} tours available
              </p>
            </div>
            <Button variant="ghost" size="sm" className="gap-1 text-primary">
              Sort: Popular
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {recommendedTours.map((tour) => (
              <TourCard key={tour.id} tour={tour} />
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="rounded-2xl bg-gradient-to-br from-primary to-primary/80 p-6 text-primary-foreground md:p-8">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/20">
              <Compass className="h-6 w-6" />
            </div>
            <div className="flex-1">
              <h3 className="mb-1 text-lg font-bold">Authentic Experiences</h3>
              <p className="mb-4 text-sm opacity-90">
                Connect with certified local guides for a journey through Morocco&apos;s soul.
              </p>
              <Link href="/search">
                <Button variant="secondary" size="sm" className="font-semibold">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <MobileNav />
    </div>
  )
}
