"use client"

import { useState } from "react"
import { Search, Download, Plus, Mail, Phone, ChevronLeft, ChevronRight, X } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { users } from "@/lib/data"

export default function AdminUsersPage() {
  const [selectedUser, setSelectedUser] = useState(users[0])
  const [activeTab, setActiveTab] = useState("all")

  const filteredUsers = users.filter((user) => {
    if (activeTab === "all") return true
    if (activeTab === "guides") return user.role === "guide"
    if (activeTab === "tourists") return user.role === "tourist"
    return true
  })

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-30 border-b border-border bg-card/95 backdrop-blur-sm">
        <div className="flex items-center justify-between px-6 py-4">
          <div>
            <h1 className="text-2xl font-bold text-foreground">User Management</h1>
            <p className="text-sm text-muted-foreground">
              Monitor, verify, and manage all tourist and guide accounts.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search across all users by name, email, or ID..."
                className="w-96 pl-10"
              />
            </div>
          </div>
        </div>
      </header>

      <div className="flex h-[calc(100vh-73px)]">
        {/* Users List */}
        <div className="flex-1 border-r border-border p-6">
          <div className="mb-4 flex items-center justify-between">
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList>
                <TabsTrigger value="all">All Users (2,451)</TabsTrigger>
                <TabsTrigger value="guides">Guides (412)</TabsTrigger>
                <TabsTrigger value="tourists">Tourists (2,039)</TabsTrigger>
              </TabsList>
            </Tabs>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="gap-2">
                <Download className="h-4 w-4" />
                Export CSV
              </Button>
              <Button size="sm" className="gap-2">
                <Plus className="h-4 w-4" />
                Add New User
              </Button>
            </div>
          </div>

          <Card>
            <CardContent className="p-0">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border bg-muted/50">
                    <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wide text-muted-foreground">
                      User
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wide text-muted-foreground">
                      Contact
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wide text-muted-foreground">
                      Role
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wide text-muted-foreground">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {filteredUsers.map((user) => (
                    <tr
                      key={user.id}
                      className={`cursor-pointer border-b border-border transition-colors hover:bg-muted/30 ${
                        selectedUser.id === user.id ? "bg-primary/5" : ""
                      }`}
                      onClick={() => setSelectedUser(user)}
                    >
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-3">
                          <Avatar className="h-9 w-9">
                            <AvatarFallback className="bg-primary/10 text-sm text-primary">
                              {user.firstName[0]}
                              {user.lastName[0]}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-medium text-foreground">
                              {user.firstName} {user.lastName}
                            </p>
                            <p className="text-xs text-muted-foreground">ID: {user.id}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-3">
                        <p className="text-sm text-foreground">{user.email}</p>
                        <p className="text-xs text-muted-foreground">{user.phone}</p>
                      </td>
                      <td className="px-4 py-3">
                        <Badge
                          variant={
                            user.role === "admin"
                              ? "default"
                              : user.role === "guide"
                              ? "secondary"
                              : "outline"
                          }
                        >
                          {user.role.charAt(0).toUpperCase() + user.role.slice(1)}
                        </Badge>
                      </td>
                      <td className="px-4 py-3">
                        <Badge
                          className={
                            user.status === "active"
                              ? "bg-accent/10 text-accent hover:bg-accent/20"
                              : user.status === "pending"
                              ? "bg-secondary/20 text-secondary hover:bg-secondary/30"
                              : "bg-destructive/10 text-destructive hover:bg-destructive/20"
                          }
                        >
                          {user.status.charAt(0).toUpperCase() + user.status.slice(1)}
                        </Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <div className="flex items-center justify-between border-t border-border px-4 py-3">
                <p className="text-sm text-muted-foreground">
                  Showing {filteredUsers.length} of 2,451 users
                </p>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm" disabled>
                    <ChevronLeft className="h-4 w-4" />
                    Previous
                  </Button>
                  <Button variant="outline" size="sm" className="bg-primary text-primary-foreground">
                    1
                  </Button>
                  <Button variant="outline" size="sm">2</Button>
                  <Button variant="outline" size="sm">3</Button>
                  <Button variant="outline" size="sm">
                    Next
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* User Details Panel */}
        <div className="w-96 p-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-base">User Details</CardTitle>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <X className="h-4 w-4" />
              </Button>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col items-center text-center">
                <Avatar className="h-20 w-20">
                  <AvatarFallback className="bg-primary text-xl text-primary-foreground">
                    {selectedUser.firstName[0]}
                    {selectedUser.lastName[0]}
                  </AvatarFallback>
                </Avatar>
                <h3 className="mt-3 text-lg font-semibold text-foreground">
                  {selectedUser.firstName} {selectedUser.lastName}
                </h3>
                <p className="text-sm text-muted-foreground">User ID: {selectedUser.id}</p>
                <div className="mt-2 flex gap-2">
                  <Badge
                    variant={
                      selectedUser.role === "admin"
                        ? "default"
                        : selectedUser.role === "guide"
                        ? "secondary"
                        : "outline"
                    }
                  >
                    {selectedUser.role.charAt(0).toUpperCase() + selectedUser.role.slice(1)}
                  </Badge>
                  <Badge
                    className={
                      selectedUser.status === "active"
                        ? "bg-accent/10 text-accent"
                        : selectedUser.status === "pending"
                        ? "bg-secondary/20 text-secondary"
                        : "bg-destructive/10 text-destructive"
                    }
                  >
                    {selectedUser.status.charAt(0).toUpperCase() + selectedUser.status.slice(1)}
                  </Badge>
                </div>
              </div>

              <Separator className="my-4" />

              <div className="space-y-4">
                <div>
                  <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                    Contact Details
                  </p>
                  <div className="mt-2 space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <Mail className="h-4 w-4 text-muted-foreground" />
                      <span className="text-foreground">{selectedUser.email}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Phone className="h-4 w-4 text-muted-foreground" />
                      <span className="text-foreground">{selectedUser.phone}</span>
                    </div>
                  </div>
                </div>

                <div>
                  <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                    Account Information
                  </p>
                  <div className="mt-2 space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Joined On</span>
                      <span className="font-medium text-foreground">{selectedUser.joinedDate}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Tours Completed</span>
                      <span className="font-medium text-foreground">12 Bookings</span>
                    </div>
                  </div>
                </div>
              </div>

              <Separator className="my-4" />

              <div className="flex gap-2">
                <Button variant="outline" className="flex-1">
                  Edit User Profile
                </Button>
                <Button variant="destructive" className="flex-1">
                  Suspend Account
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
