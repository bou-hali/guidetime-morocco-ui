"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Plus, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Field, FieldLabel, FieldGroup } from "@/components/ui/field"

const monumentOptions = [
  "Bahia Palace",
  "Koutoubia Mosque",
  "Jemaa el-Fnaa",
  "Saadian Tombs",
  "Ben Youssef Madrasa",
  "El Badi Palace",
  "Le Jardin Secret",
  "Majorelle Garden",
]

export default function CreateTourPage() {
  const [selectedMonuments, setSelectedMonuments] = useState<string[]>(["Bahia Palace", "Koutoubia Mosque"])
  const [title, setTitle] = useState("")
  const [city, setCity] = useState("")
  const [price, setPrice] = useState("")
  const [duration, setDuration] = useState("4")
  const [maxGuests, setMaxGuests] = useState("10")
  const [language, setLanguage] = useState("english")
  const [meetingPoint, setMeetingPoint] = useState("")
  const [description, setDescription] = useState("")

  const addMonument = (monument: string) => {
    if (!selectedMonuments.includes(monument)) {
      setSelectedMonuments([...selectedMonuments, monument])
    }
  }

  const removeMonument = (monument: string) => {
    setSelectedMonuments(selectedMonuments.filter((m) => m !== monument))
  }

  return (
    <div className="min-h-screen pb-6">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-border bg-card/95 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-4 py-4">
          <div className="flex items-center gap-3">
            <Link href="/guide/tours">
              <Button variant="ghost" size="icon" className="-ml-2">
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </Link>
            <h1 className="text-lg font-bold text-foreground">Create Tour</h1>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-6">
        {/* Tour Identity */}
        <Card className="mb-6">
          <CardHeader className="pb-3">
            <CardTitle className="text-base">Tour Identity</CardTitle>
            <p className="text-sm text-muted-foreground">Make your tour stand out with a catchy title</p>
          </CardHeader>
          <CardContent>
            <FieldGroup>
              <Field>
                <FieldLabel>Tour Title</FieldLabel>
                <Input
                  placeholder="e.g., Authentic Medina Walking Tour"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </Field>
              <Field>
                <FieldLabel>Primary City</FieldLabel>
                <Input
                  placeholder="e.g., Marrakech"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
              </Field>
            </FieldGroup>
          </CardContent>
        </Card>

        {/* Historical Landmarks */}
        <Card className="mb-6">
          <CardHeader className="pb-3">
            <CardTitle className="text-base">Historical Landmarks</CardTitle>
            <p className="text-sm text-muted-foreground">Select the monuments included in this tour</p>
          </CardHeader>
          <CardContent>
            <div className="mb-4 flex flex-wrap gap-2">
              {selectedMonuments.map((monument) => (
                <Badge key={monument} variant="secondary" className="gap-1 pr-1">
                  {monument}
                  <button
                    onClick={() => removeMonument(monument)}
                    className="ml-1 rounded-full p-0.5 hover:bg-muted"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </Badge>
              ))}
            </div>
            <Select onValueChange={addMonument}>
              <SelectTrigger>
                <SelectValue placeholder="Add Historical Sites" />
              </SelectTrigger>
              <SelectContent>
                {monumentOptions
                  .filter((m) => !selectedMonuments.includes(m))
                  .map((monument) => (
                    <SelectItem key={monument} value={monument}>
                      {monument}
                    </SelectItem>
                  ))}
              </SelectContent>
            </Select>
          </CardContent>
        </Card>

        {/* Pricing & Logistics */}
        <Card className="mb-6">
          <CardHeader className="pb-3">
            <CardTitle className="text-base">Pricing & Logistics</CardTitle>
            <p className="text-sm text-muted-foreground">Define duration, capacity, and cost</p>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <Field>
                <FieldLabel>Price per Person</FieldLabel>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">DH</span>
                  <Input
                    type="number"
                    placeholder="0.00"
                    className="pl-10"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </div>
              </Field>
              <Field>
                <FieldLabel>Duration (Hours)</FieldLabel>
                <Input
                  type="number"
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                />
              </Field>
              <Field>
                <FieldLabel>Max Guests</FieldLabel>
                <Input
                  type="number"
                  value={maxGuests}
                  onChange={(e) => setMaxGuests(e.target.value)}
                />
              </Field>
              <Field>
                <FieldLabel>Main Language</FieldLabel>
                <Select value={language} onValueChange={setLanguage}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="english">English</SelectItem>
                    <SelectItem value="french">French</SelectItem>
                    <SelectItem value="arabic">Arabic</SelectItem>
                    <SelectItem value="spanish">Spanish</SelectItem>
                  </SelectContent>
                </Select>
              </Field>
            </div>
          </CardContent>
        </Card>

        {/* Tour Details */}
        <Card className="mb-8">
          <CardHeader className="pb-3">
            <CardTitle className="text-base">Tour Details</CardTitle>
            <p className="text-sm text-muted-foreground">Give potential guests a complete picture</p>
          </CardHeader>
          <CardContent>
            <FieldGroup>
              <Field>
                <FieldLabel>Meeting Point</FieldLabel>
                <Input
                  placeholder="e.g., Cafe de France, Jemaa el-Fnaa"
                  value={meetingPoint}
                  onChange={(e) => setMeetingPoint(e.target.value)}
                />
              </Field>
              <Field>
                <FieldLabel>Full Description</FieldLabel>
                <Textarea
                  placeholder="Tell us what makes this tour special, what guests will see, and what's included..."
                  className="min-h-[120px]"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </Field>
            </FieldGroup>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <Link href="/guide/tours" className="flex-1">
            <Button variant="outline" size="lg" className="w-full">
              Cancel
            </Button>
          </Link>
          <Button size="lg" className="flex-1">
            Save Tour
          </Button>
        </div>
      </main>
    </div>
  )
}
