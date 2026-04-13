"use client"

import { useState } from "react"
import { Search, Plus, Map, Clock, AlertTriangle, Star, CheckCircle2, X, MapPin } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { tours } from "@/lib/data"

const tourListData = [
  { id: "T-101", title: "Marrakech Medina Secret Gardens Tour", guide: "Youssef Alami", city: "Marrakech", price: "$45", status: "Active", date: "2023-12" },
  { id: "T-102", title: "Chefchaouen Blue Pearl Walk", guide: "Fatima Zahra", city: "Chefchaouen", price: "$35", status: "Active", date: "2023-14" },
  { id: "T-103", title: "Fes El-Bali Artisan Workshop", guide: "Ahmed Mansour", city: "Fes", price: "$60", status: "Pending", date: "2023-15" },
  { id: "T-104", title: "Casablanca Atlantic Coastal Drive", guide: "Karim Idris", city: "Casablanca", price: "$55", status: "Flagged", date: "2023-10" },
  { id: "T-105", title: "Sahara Sunset Camel Trek", guide: "Said Berber", city: "Merzouga", price: "$120", status: "Active", date: "2023-05" },
]

export default function AdminToursPage() {
  const [selectedTour, setSelectedTour] = useState(tours[0])

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-30 border-b border-border bg-card/95 backdrop-blur-sm">
        <div className="flex items-center justify-between px-6 py-4">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Manage Tours</h1>
            <p className="text-sm text-muted-foreground">
              Review, edit, and moderate tourist offerings across Morocco.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm">Advanced Filter</Button>
            <Button size="sm" className="gap-2">
              <Plus className="h-4 w-4" />
              Create New Tour
            </Button>
          </div>
        </div>
      </header>

      <div className="p-6">
        {/* Stats */}
        <div className="mb-6 grid grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Total Tours</p>
                  <p className="mt-1 text-2xl font-bold text-foreground">1,248</p>
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <Map className="h-5 w-5 text-primary" />
                </div>
              </div>
              <p className="mt-2 text-xs text-accent">+12.5% from last month</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Pending Review</p>
                  <p className="mt-1 text-2xl font-bold text-foreground">42</p>
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary/20">
                  <Clock className="h-5 w-5 text-secondary" />
                </div>
              </div>
              <p className="mt-2 text-xs text-muted-foreground">Action required for 15 items</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Flagged Content</p>
                  <p className="mt-1 text-2xl font-bold text-foreground">14</p>
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-destructive/10">
                  <AlertTriangle className="h-5 w-5 text-destructive" />
                </div>
              </div>
              <p className="mt-2 text-xs text-destructive">Urgent review needed</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Avg. Tour Rating</p>
                  <p className="mt-1 text-2xl font-bold text-foreground">4.85</p>
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10">
                  <Star className="h-5 w-5 text-accent" />
                </div>
              </div>
              <p className="mt-2 text-xs text-accent">Maintaining high standards</p>
            </CardContent>
          </Card>
        </div>

        <div className="flex gap-6">
          {/* Tours Table */}
          <div className="flex-1">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-base">Tour Inventory</CardTitle>
                    <CardDescription>A comprehensive list of all tours submitted by guides.</CardDescription>
                  </div>
                  <div className="relative w-80">
                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input placeholder="Search by tour title, guide or city..." className="pl-10" />
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wide text-muted-foreground">
                        ID
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wide text-muted-foreground">
                        Tour Title
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wide text-muted-foreground">
                        Guide
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wide text-muted-foreground">
                        City
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wide text-muted-foreground">
                        Price
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wide text-muted-foreground">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {tourListData.map((tour, index) => (
                      <tr
                        key={tour.id}
                        className={`cursor-pointer border-b border-border transition-colors hover:bg-muted/30 ${
                          index === 0 ? "bg-primary/5" : ""
                        }`}
                        onClick={() => setSelectedTour(tours[index] || tours[0])}
                      >
                        <td className="px-4 py-3 text-sm text-muted-foreground">{tour.id}</td>
                        <td className="px-4 py-3">
                          <p className="font-medium text-foreground line-clamp-1">{tour.title}</p>
                        </td>
                        <td className="px-4 py-3 text-sm text-foreground">{tour.guide}</td>
                        <td className="px-4 py-3 text-sm text-foreground">{tour.city}</td>
                        <td className="px-4 py-3 text-sm font-medium text-foreground">{tour.price}</td>
                        <td className="px-4 py-3">
                          <Badge
                            className={
                              tour.status === "Active"
                                ? "bg-accent/10 text-accent"
                                : tour.status === "Pending"
                                ? "bg-secondary/20 text-secondary"
                                : "bg-destructive/10 text-destructive"
                            }
                          >
                            {tour.status}
                          </Badge>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <p className="mt-4 text-center text-sm text-muted-foreground">
                  Showing 5 of 1,248 results
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Tour Details */}
          <div className="w-96">
            <Card>
              <CardContent className="pt-6">
                <div className="mb-4 flex aspect-video items-center justify-center rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10">
                  <MapPin className="h-12 w-12 text-primary" />
                </div>

                <Badge className="mb-2 bg-primary/10 text-primary">{selectedTour.city}</Badge>
                <h3 className="text-lg font-semibold text-foreground">{selectedTour.title}</h3>

                <div className="mt-3 flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Badge variant="outline">${Math.round(selectedTour.price / 10)}</Badge>
                  </span>
                  <span>Price</span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {selectedTour.duration}
                  </span>
                  <span>Duration</span>
                  <span className="text-xs">ID: T-101</span>
                </div>

                <Separator className="my-4" />

                <div className="mb-4">
                  <p className="mb-2 text-xs font-medium uppercase tracking-wide text-muted-foreground">
                    Lead Guide
                  </p>
                  <div className="flex items-center gap-3">
                    <Avatar className="h-10 w-10">
                      <AvatarFallback className="bg-primary text-primary-foreground">
                        {selectedTour.guide.name.split(" ").map((n) => n[0]).join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium text-foreground">{selectedTour.guide.name}</p>
                      <div className="flex items-center gap-1 text-sm">
                        <Star className="h-3 w-3 fill-secondary text-secondary" />
                        <span>{selectedTour.guide.rating}</span>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm" className="ml-auto text-primary">
                      View Profile
                    </Button>
                  </div>
                </div>

                <div className="mb-4">
                  <p className="mb-2 text-xs font-medium uppercase tracking-wide text-muted-foreground">
                    Description
                  </p>
                  <p className="text-sm text-muted-foreground line-clamp-3">
                    {selectedTour.description}
                  </p>
                </div>

                <div className="mb-4">
                  <p className="mb-2 text-xs font-medium uppercase tracking-wide text-muted-foreground">
                    Monuments & Sites
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {selectedTour.monuments.slice(0, 3).map((monument) => (
                      <Badge key={monument} variant="secondary" className="text-xs">
                        {monument}
                      </Badge>
                    ))}
                  </div>
                </div>

                <Separator className="my-4" />

                <div className="flex gap-2">
                  <Button className="flex-1 gap-1">
                    <CheckCircle2 className="h-4 w-4" />
                    Approve Tour
                  </Button>
                  <Button variant="destructive" className="flex-1 gap-1">
                    <X className="h-4 w-4" />
                    Reject/Delete
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
