"use client"

import Link from "next/link"
import Image from "next/image"
import { MapPin, Clock, Star, Users } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import type { Tour } from "@/lib/data"

interface TourCardProps {
  tour: Tour
  featured?: boolean
}

export function TourCard({ tour, featured = false }: TourCardProps) {
  return (
    <Link href={`/tour/${tour.id}`}>
      <Card className={`group overflow-hidden transition-all hover:shadow-lg ${featured ? 'border-primary/20' : ''}`}>
        <div className="relative aspect-[4/3] overflow-hidden bg-muted">
          <Image
            src={tour.image}
            alt={tour.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 50vw, 33vw"
          />
          {featured && (
            <Badge className="absolute left-3 top-3 z-10 bg-secondary text-secondary-foreground">
              Featured
            </Badge>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute bottom-3 left-3 right-3">
            <Badge variant="secondary" className="bg-white/90 text-foreground backdrop-blur-sm">
              {tour.city}
            </Badge>
          </div>
        </div>
        <CardContent className="p-4">
          <h3 className="line-clamp-1 text-base font-semibold text-foreground group-hover:text-primary">
            {tour.title}
          </h3>
          <div className="mt-2 flex items-center gap-3 text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" />
              {tour.duration}
            </span>
            <span className="flex items-center gap-1">
              <Star className="h-3.5 w-3.5 fill-secondary text-secondary" />
              {tour.rating}
            </span>
            <span className="flex items-center gap-1">
              <Users className="h-3.5 w-3.5" />
              {tour.maxGuests}
            </span>
          </div>
          <div className="mt-3 flex items-center justify-between">
            <span className="text-lg font-bold text-primary">
              {tour.price} <span className="text-sm font-normal text-muted-foreground">{tour.currency}</span>
            </span>
            <span className="text-xs text-muted-foreground">
              {tour.languages.slice(0, 2).join(", ")}
            </span>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
