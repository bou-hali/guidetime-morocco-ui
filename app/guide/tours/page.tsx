"use client"

import Link from "next/link"
import { Plus, MapPin, Clock, Globe, Edit, Trash2, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { GuideNav } from "@/components/guide-nav"
import { tours } from "@/lib/data"

export default function GuideToursPage() {
  const myTours = tours.slice(0, 4)
  const activeTours = myTours.filter((t) => t.status === "active").length
  const draftTours = myTours.filter((t) => t.status === "draft").length

  return (
    <div className="min-h-screen pb-20 md:pb-0">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="mx-auto max-w-7xl px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold text-foreground">My Tours</h1>
            <Link href="/guide/tours/create">
              <Button size="sm" className="gap-1">
                <Plus className="h-4 w-4" />
                New Tour
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-6">
        {/* Stats */}
        <Card className="mb-6">
          <CardContent className="flex items-center justify-between p-4">
            <div>
              <p className="text-sm text-muted-foreground">Total Tours</p>
              <p className="text-3xl font-bold text-foreground">{String(myTours.length).padStart(2, "0")}</p>
            </div>
            <div className="flex gap-4 text-sm">
              <div className="text-center">
                <p className="font-semibold text-accent">{activeTours}</p>
                <p className="text-muted-foreground">Active</p>
              </div>
              <div className="text-center">
                <p className="font-semibold text-secondary">{draftTours}</p>
                <p className="text-muted-foreground">Draft</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Search */}
        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input placeholder="Search tours..." className="pl-10" />
        </div>

        <h2 className="mb-4 text-sm font-medium uppercase tracking-wide text-muted-foreground">
          Manage Your Experiences
        </h2>

        {/* Tours List */}
        <div className="space-y-4">
          {myTours.map((tour) => (
            <Card key={tour.id} className="overflow-hidden">
              <CardContent className="p-0">
                <div className="flex gap-4 p-4">
                  <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10">
                    <MapPin className="h-8 w-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="mb-1 flex items-center justify-between">
                      <Badge
                        className={
                          tour.status === "active"
                            ? "bg-accent/10 text-accent hover:bg-accent/20"
                            : tour.status === "draft"
                            ? "bg-secondary/10 text-secondary hover:bg-secondary/20"
                            : "bg-muted"
                        }
                      >
                        {tour.status.charAt(0).toUpperCase() + tour.status.slice(1)}
                      </Badge>
                      <span className="text-lg font-bold text-primary">
                        ${Math.round(tour.price / 10)}
                      </span>
                    </div>
                    <h3 className="font-semibold text-foreground line-clamp-1">{tour.title}</h3>
                    <div className="mt-1 flex items-center gap-1 text-sm text-muted-foreground">
                      <MapPin className="h-3 w-3" />
                      {tour.city}, Morocco
                    </div>
                    <div className="mt-2 flex items-center gap-3 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {tour.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <Globe className="h-3 w-3" />
                        {tour.languages.join(", ")}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex border-t border-border">
                  <Button
                    variant="ghost"
                    className="flex-1 gap-2 rounded-none text-primary hover:bg-primary/5"
                  >
                    <Edit className="h-4 w-4" />
                    Edit
                  </Button>
                  <div className="w-px bg-border" />
                  <Button
                    variant="ghost"
                    className="flex-1 gap-2 rounded-none text-destructive hover:bg-destructive/5"
                  >
                    <Trash2 className="h-4 w-4" />
                    Delete
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <p className="mt-6 text-center text-sm italic text-muted-foreground">
          &quot;Providing authentic experiences since 2023&quot;
        </p>
      </main>

      {/* FAB */}
      <Link
        href="/guide/tours/create"
        className="fixed bottom-24 right-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-transform hover:scale-105 md:bottom-8"
      >
        <Plus className="h-6 w-6" />
      </Link>

      <GuideNav />
    </div>
  )
}
