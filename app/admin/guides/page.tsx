"use client"

import { useState } from "react"
import { Search, Download, UserCheck, Clock, XCircle, TrendingUp, CheckCircle2, X, FileText, ShieldCheck } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { guides } from "@/lib/data"

const pendingGuides = [
  { id: "pg1", name: "Ahmed El Mansour", email: "ahmed.mansouri@gu...", city: "Marrakech", date: "Apr 1, 2024", status: "approved" },
  { id: "pg2", name: "Fatima Zahra", email: "fatima.zahra@guide.m...", city: "Fes", date: "Apr 5, 2024", status: "pending", phone: "+212 664-567890", docs: 3, risk: "Low" },
  { id: "pg3", name: "Youssef Alami", email: "youssef.alami@guide...", city: "Chefchaouen", date: "Apr 5, 2024", status: "approved" },
  { id: "pg4", name: "Karim Bennani", email: "karim.bennani@guide.ma", city: "Tangier", date: "May 18, 2024", status: "rejected" },
  { id: "pg5", name: "Salma Idrissi", email: "salma.idrissi@guide.ma", city: "Tangier", date: "May 18, 2024", status: "pending", phone: "+212 665-678901" },
]

export default function AdminGuidesPage() {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [selectedGuide, setSelectedGuide] = useState<typeof pendingGuides[0] | null>(null)

  const handleApprove = (guide: typeof pendingGuides[0]) => {
    setSelectedGuide(guide)
    setIsDialogOpen(true)
  }

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-30 border-b border-border bg-card/95 backdrop-blur-sm">
        <div className="flex items-center justify-between px-6 py-4">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Guide Management</h1>
            <p className="text-sm text-muted-foreground">
              Review & Verification Center
            </p>
          </div>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input placeholder="Search guides, cities..." className="w-80 pl-10" />
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
                  <p className="text-sm text-muted-foreground">Active Guides</p>
                  <p className="mt-1 text-2xl font-bold text-foreground">1,248</p>
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10">
                  <UserCheck className="h-5 w-5 text-accent" />
                </div>
              </div>
              <p className="mt-2 text-xs text-accent">+12% from last month</p>
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
              <p className="mt-2 text-xs text-muted-foreground">8 expiring today</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Rejected Appls.</p>
                  <p className="mt-1 text-2xl font-bold text-foreground">156</p>
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-destructive/10">
                  <XCircle className="h-5 w-5 text-destructive" />
                </div>
              </div>
              <p className="mt-2 text-xs text-muted-foreground">Since start of year</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Avg. Approval Time</p>
                  <p className="mt-1 text-2xl font-bold text-foreground">1.4d</p>
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <TrendingUp className="h-5 w-5 text-primary" />
                </div>
              </div>
              <p className="mt-2 text-xs text-accent">Improved by 0.5d</p>
            </CardContent>
          </Card>
        </div>

        {/* Queue Table */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle className="text-base">Queue Management</CardTitle>
              <CardDescription>Verify credentials and manage applications</CardDescription>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">Filter</Button>
              <Button variant="outline" size="sm" className="gap-2">
                <Download className="h-4 w-4" />
                Export CSV
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wide text-muted-foreground">
                    Guide Name
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wide text-muted-foreground">
                    City
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wide text-muted-foreground">
                    Date
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wide text-muted-foreground">
                    Status
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wide text-muted-foreground">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {pendingGuides.map((guide) => (
                  <tr key={guide.id} className="border-b border-border">
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-3">
                        <Avatar className="h-9 w-9">
                          <AvatarFallback className="bg-primary/10 text-sm text-primary">
                            {guide.name.split(" ").map((n) => n[0]).join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium text-foreground">{guide.name}</p>
                          <p className="text-xs text-muted-foreground">{guide.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-sm text-foreground">{guide.city}</td>
                    <td className="px-4 py-3 text-sm text-muted-foreground">{guide.date}</td>
                    <td className="px-4 py-3">
                      <Badge
                        className={
                          guide.status === "approved"
                            ? "bg-accent/10 text-accent"
                            : guide.status === "pending"
                            ? "bg-secondary/20 text-secondary"
                            : "bg-destructive/10 text-destructive"
                        }
                      >
                        {guide.status.charAt(0).toUpperCase() + guide.status.slice(1)}
                      </Badge>
                    </td>
                    <td className="px-4 py-3">
                      {guide.status === "pending" && (
                        <div className="flex gap-2">
                          <Button
                            size="sm"
                            className="h-8 gap-1"
                            onClick={() => handleApprove(guide)}
                          >
                            <CheckCircle2 className="h-3.5 w-3.5" />
                            Approve
                          </Button>
                          <Button
                            size="sm"
                            variant="destructive"
                            className="h-8 gap-1"
                          >
                            <X className="h-3.5 w-3.5" />
                            Reject
                          </Button>
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="mt-4 text-center text-sm text-muted-foreground">
              Showing 5 of 42 pending applications
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Approval Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirm Approve</DialogTitle>
            <DialogDescription>
              Are you sure you want to approve the application for {selectedGuide?.name}? 
              This will update their system access immediately.
            </DialogDescription>
          </DialogHeader>
          {selectedGuide && (
            <div className="rounded-lg border border-border bg-muted/30 p-4">
              <div className="flex items-center gap-3">
                <Avatar className="h-12 w-12">
                  <AvatarFallback className="bg-primary text-primary-foreground">
                    {selectedGuide.name.split(" ").map((n) => n[0]).join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold text-foreground">{selectedGuide.name}</p>
                  <p className="text-sm text-muted-foreground">{selectedGuide.city}, Morocco</p>
                </div>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                    Verification Docs
                  </p>
                  <p className="mt-1 flex items-center gap-1 text-sm text-foreground">
                    <FileText className="h-4 w-4 text-accent" />
                    {selectedGuide.docs || 3}/3 Documents Provided
                  </p>
                </div>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                    Risk Level
                  </p>
                  <Badge className="mt-1 bg-accent/10 text-accent">
                    <ShieldCheck className="mr-1 h-3 w-3" />
                    {selectedGuide.risk || "Low"}
                  </Badge>
                </div>
              </div>
            </div>
          )}
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={() => setIsDialogOpen(false)}>
              Confirm Approval
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
