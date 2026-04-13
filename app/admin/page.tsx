"use client"

import { 
  Users, UserCheck, Map, CalendarDays, DollarSign, 
  TrendingUp, TrendingDown, Search, Download, RefreshCw,
  CheckCircle2, Clock, AlertTriangle, FileText
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import {
  Line,
  LineChart,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Bar,
  BarChart,
  Cell,
  Pie,
  PieChart,
  Legend,
} from "recharts"
import { dashboardStats, revenueData, popularCities, tourApprovalData } from "@/lib/data"

const activityFeed = [
  { id: 1, text: "Amine B. registered as a new Guide", time: "2 mins ago", type: "guide" },
  { id: 2, text: "Sarah L. booked \"Desert Sunset Camel Trek\"", time: "5 mins ago", type: "booking" },
  { id: 3, text: "Youssef M. submitted a new tour for approval", time: "1 hour ago", type: "tour" },
  { id: 4, text: "System Monthly revenue report generated", time: "3 hours ago", type: "system" },
]

const quickActions = [
  { label: "Verify Pending Guides", count: 12, icon: UserCheck },
  { label: "Review Tour Updates", count: 5, icon: Map },
  { label: "Add New Destination", count: null, icon: Map },
  { label: "Incident Reports", count: 1, icon: AlertTriangle },
]

// Define colors outside component to avoid recalculation
const CHART_COLORS = {
  primary: "hsl(250, 65%, 55%)",
  secondary: "hsl(55, 70%, 55%)",
  accent: "hsl(175, 55%, 45%)",
  warning: "hsl(30, 80%, 55%)",
  cityColors: ["#5a7dff", "#f4a261", "#2a9d8f", "#7c3aed", "#ec4899"]
}

// Consistent number formatting to avoid hydration mismatch
function formatNumber(num: number): string {
  return new Intl.NumberFormat("en-US").format(num)
}

export default function AdminDashboardPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-30 border-b border-border bg-card/95 backdrop-blur-sm">
        <div className="flex items-center justify-between px-6 py-4">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Dashboard Overview</h1>
            <p className="text-sm text-muted-foreground">Real-time performance metrics and platform health.</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input 
                placeholder="Search across analytics, guides, tours..." 
                className="w-80 pl-10"
              />
            </div>
            <Badge variant="outline" className="gap-1.5 bg-accent/10 px-3 py-1.5 text-accent">
              <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
              System Active
            </Badge>
            <span className="text-xs text-muted-foreground">Last sync: 1 min ago</span>
          </div>
        </div>
      </header>

      <div className="p-6">
        {/* Stats Grid */}
        <div className="mb-6 grid grid-cols-5 gap-4">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Total Users</p>
                  <p className="mt-1 text-2xl font-bold text-foreground">
                    {formatNumber(dashboardStats.totalUsers)}
                  </p>
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <Users className="h-5 w-5 text-primary" />
                </div>
              </div>
              <div className="mt-2 flex items-center gap-1 text-xs text-accent">
                <TrendingUp className="h-3 w-3" />
                +{dashboardStats.usersGrowth}% vs last month
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Total Guides</p>
                  <p className="mt-1 text-2xl font-bold text-foreground">
                    {formatNumber(dashboardStats.totalGuides)}
                  </p>
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary/20">
                  <UserCheck className="h-5 w-5 text-secondary" />
                </div>
              </div>
              <div className="mt-2 flex items-center gap-1 text-xs text-accent">
                <TrendingUp className="h-3 w-3" />
                +{dashboardStats.guidesGrowth}% vs last month
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Total Tours</p>
                  <p className="mt-1 text-2xl font-bold text-foreground">
                    {formatNumber(dashboardStats.totalTours)}
                  </p>
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10">
                  <Map className="h-5 w-5 text-accent" />
                </div>
              </div>
              <div className="mt-2 flex items-center gap-1 text-xs text-accent">
                <TrendingUp className="h-3 w-3" />
                +{dashboardStats.toursGrowth}% vs last month
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Reservations</p>
                  <p className="mt-1 text-2xl font-bold text-foreground">
                    {formatNumber(dashboardStats.totalReservations)}
                  </p>
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted">
                  <CalendarDays className="h-5 w-5 text-muted-foreground" />
                </div>
              </div>
              <div className="mt-2 flex items-center gap-1 text-xs text-destructive">
                <TrendingDown className="h-3 w-3" />
                {dashboardStats.reservationsGrowth}% vs last month
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Total Revenue</p>
                  <p className="mt-1 text-2xl font-bold text-foreground">
                    ${(dashboardStats.totalRevenue / 1000).toFixed(0)}K
                  </p>
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10">
                  <DollarSign className="h-5 w-5 text-accent" />
                </div>
              </div>
              <div className="mt-2 flex items-center gap-1 text-xs text-accent">
                <TrendingUp className="h-3 w-3" />
                +{dashboardStats.revenueGrowth}% vs last month
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Charts Row */}
        <div className="mb-6 grid grid-cols-2 gap-6">
          {/* Revenue Chart */}
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Revenue & Booking Performance</CardTitle>
              <CardDescription>Visualizing financial growth over the last 6 months</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer
                config={{
                  revenue: { label: "Revenue", color: CHART_COLORS.primary },
                  bookings: { label: "Bookings", color: CHART_COLORS.accent },
                }}
                className="h-[250px]"
              >
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={revenueData} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                    <XAxis dataKey="month" className="text-xs" />
                    <YAxis className="text-xs" />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Legend />
                    <Line 
                      type="monotone" 
                      dataKey="revenue" 
                      stroke={CHART_COLORS.primary}
                      strokeWidth={2}
                      dot={{ fill: CHART_COLORS.primary }}
                      name="Revenue"
                    />
                    <Line 
                      type="monotone" 
                      dataKey="bookings" 
                      stroke={CHART_COLORS.accent}
                      strokeWidth={2}
                      dot={{ fill: CHART_COLORS.accent }}
                      name="Bookings"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>

          {/* Popular Cities */}
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Popular Destinations</CardTitle>
              <CardDescription>Total bookings across major Moroccan cities</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer
                config={{
                  bookings: { label: "Bookings", color: CHART_COLORS.primary },
                }}
                className="h-[250px]"
              >
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={popularCities} layout="vertical" margin={{ top: 5, right: 20, left: 80, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" className="stroke-muted" horizontal={false} />
                    <XAxis type="number" className="text-xs" />
                    <YAxis dataKey="city" type="category" className="text-xs" />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Bar dataKey="bookings" radius={[0, 4, 4, 0]}>
                      {popularCities.map((_, index) => (
                        <Cell key={`cell-${index}`} fill={CHART_COLORS.cityColors[index % CHART_COLORS.cityColors.length]} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>
        </div>

        {/* Second Row */}
        <div className="mb-6 grid grid-cols-3 gap-6">
          {/* Tour Approval */}
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Quality Assurance</CardTitle>
              <CardDescription>Current state of pending tour submissions</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer
                config={{
                  approved: { label: "Approved", color: CHART_COLORS.accent },
                  pending: { label: "Pending", color: CHART_COLORS.secondary },
                  rejected: { label: "Rejected", color: CHART_COLORS.warning },
                }}
                className="h-[180px]"
              >
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={tourApprovalData}
                      cx="50%"
                      cy="50%"
                      innerRadius={50}
                      outerRadius={70}
                      paddingAngle={2}
                      dataKey="value"
                    >
                      <Cell fill={CHART_COLORS.accent} />
                      <Cell fill={CHART_COLORS.secondary} />
                      <Cell fill={CHART_COLORS.warning} />
                    </Pie>
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>

          {/* Activity Feed */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <div>
                <CardTitle className="text-base">Platform Activity Feed</CardTitle>
              </div>
              <Button variant="ghost" size="sm" className="text-xs text-primary">
                View Detailed Logs
              </Button>
            </CardHeader>
            <CardContent className="space-y-3">
              {activityFeed.map((activity) => (
                <div key={activity.id} className="flex items-start gap-3">
                  <div className={`mt-0.5 h-2 w-2 rounded-full ${
                    activity.type === "guide" ? "bg-primary" :
                    activity.type === "booking" ? "bg-accent" :
                    activity.type === "tour" ? "bg-secondary" :
                    "bg-muted-foreground"
                  }`} />
                  <div className="flex-1">
                    <p className="text-sm text-foreground">{activity.text}</p>
                    <p className="text-xs text-muted-foreground">{activity.time}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Quick Management</CardTitle>
              <CardDescription>Frequent administrative tasks</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              {quickActions.map((action) => (
                <Button
                  key={action.label}
                  variant="outline"
                  className="w-full justify-between"
                >
                  <span className="flex items-center gap-2">
                    <action.icon className="h-4 w-4" />
                    {action.label}
                  </span>
                  {action.count !== null && (
                    <Badge variant="secondary">{action.count}</Badge>
                  )}
                </Button>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Weekly Digest */}
        <Card className="border-primary/20 bg-primary/5">
          <CardContent className="flex items-center justify-between p-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <FileText className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-foreground">Weekly Digest Ready</p>
                <p className="text-sm text-muted-foreground">
                  Your platform performance summary for June 01 - June 07 is available.
                </p>
              </div>
            </div>
            <Button className="gap-2">
              <Download className="h-4 w-4" />
              Download PDF
            </Button>
          </CardContent>
        </Card>

        {/* Footer */}
        <footer className="mt-8 flex items-center justify-between text-xs text-muted-foreground">
          <p>2026 GuideTime Morocco Admin Platform. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-foreground">Privacy Policy</a>
            <a href="#" className="hover:text-foreground">Terms of Service</a>
            <a href="#" className="hover:text-foreground">System Status</a>
          </div>
        </footer>
      </div>
    </div>
  )
}
