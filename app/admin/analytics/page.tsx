"use client"

import { Download, TrendingUp, TrendingDown, DollarSign, UserCheck, Clock, Star, FileText } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
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
  Area,
  AreaChart,
} from "recharts"
import { revenueData, popularCities, tourApprovalData } from "@/lib/data"

const bookingsOverTime = [
  { month: "Jan", bookings: 890 },
  { month: "Feb", bookings: 1020 },
  { month: "Mar", bookings: 1150 },
  { month: "Apr", bookings: 1280 },
  { month: "May", bookings: 1410 },
  { month: "Jun", bookings: 1380 },
  { month: "Jul", bookings: 1500 },
]

const guidesGrowth = [
  { week: "W1", guides: 128 },
  { week: "W2", guides: 132 },
  { week: "W3", guides: 135 },
  { week: "W4", guides: 138 },
  { week: "W5", guides: 142 },
]

const CHART_COLORS = {
  primary: "hsl(250, 65%, 55%)",
  secondary: "hsl(55, 70%, 55%)",
  accent: "hsl(175, 55%, 45%)",
  warning: "hsl(30, 80%, 55%)",
  cityColors: ["#5a7dff", "#f4a261", "#2a9d8f", "#7c3aed", "#ec4899"],
}

export default function AdminAnalyticsPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-30 border-b border-border bg-card/95 backdrop-blur-sm">
        <div className="flex items-center justify-between px-6 py-4">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Platform Analytics</h1>
            <p className="text-sm text-muted-foreground">
              Comprehensive insights into platform performance
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Tabs defaultValue="30d">
              <TabsList>
                <TabsTrigger value="7d">7D</TabsTrigger>
                <TabsTrigger value="30d">30D</TabsTrigger>
                <TabsTrigger value="90d">90D</TabsTrigger>
                <TabsTrigger value="custom">Custom</TabsTrigger>
              </TabsList>
            </Tabs>
            <Button variant="outline" className="gap-2">
              <Download className="h-4 w-4" />
              Export
            </Button>
          </div>
        </div>
      </header>

      <div className="p-6">
        {/* KPI Cards */}
        <div className="mb-6 grid grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Total Revenue</p>
                  <p className="mt-1 text-2xl font-bold text-foreground">$175,420</p>
                </div>
                <Badge className="bg-accent/10 text-accent">
                  <TrendingUp className="mr-1 h-3 w-3" />
                  +12.5%
                </Badge>
              </div>
              <p className="mt-2 text-xs text-muted-foreground">from last month&apos;s $156k</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Active Guides</p>
                  <p className="mt-1 text-2xl font-bold text-foreground">142</p>
                </div>
                <Badge className="bg-accent/10 text-accent">
                  <TrendingUp className="mr-1 h-3 w-3" />
                  +4.2%
                </Badge>
              </div>
              <p className="mt-2 text-xs text-muted-foreground">6 new guides approved this week</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Pending Approvals</p>
                  <p className="mt-1 text-2xl font-bold text-foreground">28</p>
                </div>
                <Badge className="bg-destructive/10 text-destructive">
                  <TrendingDown className="mr-1 h-3 w-3" />
                  -15.0%
                </Badge>
              </div>
              <p className="mt-2 text-xs text-muted-foreground">decreased backlog from 33</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Avg. Tour Rating</p>
                  <p className="mt-1 text-2xl font-bold text-foreground">4.8/5</p>
                </div>
                <Badge className="bg-accent/10 text-accent">
                  <TrendingUp className="mr-1 h-3 w-3" />
                  +0.1
                </Badge>
              </div>
              <p className="mt-2 text-xs text-muted-foreground">based on 1,200+ reviews</p>
            </CardContent>
          </Card>
        </div>

        {/* Charts Row 1 */}
        <div className="mb-6 grid grid-cols-2 gap-6">
          {/* Bookings Over Time */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-base">Bookings Over Time</CardTitle>
                  <CardDescription>Monthly volume of tour reservations</CardDescription>
                </div>
                <Badge variant="outline">Total: 6,440</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <ChartContainer
                config={{
                  bookings: { label: "Bookings", color: CHART_COLORS.primary },
                }}
                className="h-[250px]"
              >
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={bookingsOverTime} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
                    <defs>
                      <linearGradient id="bookingsGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor={CHART_COLORS.primary} stopOpacity={0.3} />
                        <stop offset="95%" stopColor={CHART_COLORS.primary} stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                    <XAxis dataKey="month" className="text-xs" />
                    <YAxis className="text-xs" />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Area
                      type="monotone"
                      dataKey="bookings"
                      stroke={CHART_COLORS.primary}
                      fillOpacity={1}
                      fill="url(#bookingsGradient)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>

          {/* Revenue Trends */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-base">Revenue Trends</CardTitle>
                  <CardDescription>Visualizing gross platform earnings</CardDescription>
                </div>
                <Badge className="bg-accent/10 text-accent">Target Met: 104%</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <ChartContainer
                config={{
                  revenue: { label: "Revenue", color: CHART_COLORS.accent },
                }}
                className="h-[250px]"
              >
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={revenueData} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" className="stroke-muted" vertical={false} />
                    <XAxis dataKey="month" className="text-xs" />
                    <YAxis className="text-xs" />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Bar dataKey="revenue" fill={CHART_COLORS.accent} radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>
        </div>

        {/* Charts Row 2 */}
        <div className="mb-6 grid grid-cols-3 gap-6">
          {/* Popular Cities */}
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Popular Cities</CardTitle>
              <CardDescription>Top destinations by booking volume</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer
                config={{
                  bookings: { label: "Bookings", color: CHART_COLORS.primary },
                }}
                className="h-[200px]"
              >
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={popularCities} layout="vertical" margin={{ top: 5, right: 20, left: 60, bottom: 5 }}>
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

          {/* Active Guides Growth */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-base">Active Guides Growth</CardTitle>
                  <CardDescription>Weekly activity engagement tracking</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="mb-2 flex items-baseline justify-between">
                <span className="text-3xl font-bold text-foreground">142</span>
                <span className="text-xs text-muted-foreground">Guides active this week</span>
              </div>
              <p className="mb-4 text-xs text-accent">Highest Peak: 142 (Today)</p>
              <ChartContainer
                config={{
                  guides: { label: "Guides", color: CHART_COLORS.primary },
                }}
                className="h-[120px]"
              >
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={guidesGrowth} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
                    <XAxis dataKey="week" className="text-xs" />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Line
                      type="monotone"
                      dataKey="guides"
                      stroke={CHART_COLORS.primary}
                      strokeWidth={2}
                      dot={{ fill: CHART_COLORS.primary }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>

          {/* Tour Approval Rate */}
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Tour Approval Rate</CardTitle>
              <CardDescription>Funnel health for newly submitted tours</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer
                config={{
                  approved: { label: "Approved", color: CHART_COLORS.accent },
                  pending: { label: "Pending", color: CHART_COLORS.secondary },
                  rejected: { label: "Rejected", color: CHART_COLORS.warning },
                }}
                className="h-[200px]"
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
                      label={({ name, value }) => `${name}: ${value}%`}
                      labelLine={false}
                    >
                      <Cell fill={CHART_COLORS.accent} />
                      <Cell fill={CHART_COLORS.secondary} />
                      <Cell fill={CHART_COLORS.warning} />
                    </Pie>
                    <ChartTooltip content={<ChartTooltipContent />} />
                  </PieChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>
        </div>

        {/* Platform Actions */}
        <Card className="border-primary/20 bg-primary/5">
          <CardContent className="flex items-center justify-between p-4">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <FileText className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-foreground">Platform Overview Actions</p>
                <p className="text-sm text-muted-foreground">
                  Need a custom deep-dive? Access the full data warehouse or run a specialized audit.
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <Button variant="outline">Download Raw Data (.CSV)</Button>
              <Button>Run Quarterly Audit</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
