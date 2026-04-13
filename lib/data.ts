export interface Tour {
  id: string
  title: string
  city: string
  price: number
  currency: string
  duration: string
  rating: number
  reviews: number
  languages: string[]
  maxGuests: number
  description: string
  monuments: string[]
  featured: boolean
  guide: Guide
  image: string
  status: "active" | "pending" | "draft"
}

export interface Guide {
  id: string
  name: string
  title: string
  rating: number
  reviews: number
  verified: boolean
  experience: string
  avatar: string
  bio: string
}

export interface Booking {
  id: string
  tourId: string
  tourTitle: string
  location: string
  date: string
  time: string
  guests: number
  guestDetails: string
  totalPrice: number
  currency: string
  status: "upcoming" | "confirmed" | "completed" | "cancelled"
  leadTraveler: string
  guide: Guide
}

export interface User {
  id: string
  firstName: string
  lastName: string
  email: string
  phone: string
  role: "tourist" | "guide" | "admin"
  status: "active" | "pending" | "suspended"
  joinedDate: string
  avatar: string
}

export const cities = [
  "All",
  "Marrakech",
  "Fes",
  "Chefchaouen",
  "Casablanca",
  "Essaouira",
  "Merzouga",
  "Imlil",
  "Agadir",
]

export const guides: Guide[] = [
  {
    id: "g1",
    name: "Youssef El Mansouri",
    title: "Certified Historian & Guide",
    rating: 4.9,
    reviews: 128,
    verified: true,
    experience: "10+ years",
    avatar: "/avatars/guide-1.jpg",
    bio: "Born and raised in the heart of Marrakech, I've spent 15 years studying Islamic architecture and the sultanate era.",
  },
  {
    id: "g2",
    name: "Ahmed Karim",
    title: "Certified Local Guide",
    rating: 4.9,
    reviews: 95,
    verified: true,
    experience: "8 years",
    avatar: "/avatars/guide-2.jpg",
    bio: "Passionate about sharing the hidden stories of the Medina with travelers from around the world.",
  },
  {
    id: "g3",
    name: "Fatima Zahra",
    title: "History Specialist",
    rating: 4.7,
    reviews: 67,
    verified: true,
    experience: "6 years",
    avatar: "/avatars/guide-3.jpg",
    bio: "Expert in Moroccan history and traditional crafts. I love connecting travelers with local artisans.",
  },
  {
    id: "g4",
    name: "Youssef Alami",
    title: "Adventure Expert",
    rating: 5.0,
    reviews: 42,
    verified: true,
    experience: "5 years",
    avatar: "/avatars/guide-4.jpg",
    bio: "Specialized in desert and mountain adventures. Let me show you the wild side of Morocco.",
  },
]

export const tours: Tour[] = [
  {
    id: "t1",
    title: "Secret Souks & Spices",
    city: "Marrakech",
    price: 450,
    currency: "MAD",
    duration: "4h",
    rating: 4.9,
    reviews: 128,
    languages: ["English", "French"],
    maxGuests: 8,
    description:
      "Experience the magic of the Red City's imperial history. We'll navigate the hidden alleyways of the Medina, uncovering architectural wonders that have stood for centuries.",
    monuments: ["Koutoubia", "Jemaa el-Fnaa", "Souks", "Bahia Palace"],
    featured: true,
    guide: guides[0],
    image: "/tours/marrakech-souks.jpg",
    status: "active",
  },
  {
    id: "t2",
    title: "Chefchaouen Blue Walk",
    city: "Chefchaouen",
    price: 350,
    currency: "MAD",
    duration: "3h",
    rating: 4.8,
    reviews: 89,
    languages: ["Spanish", "English"],
    maxGuests: 10,
    description:
      "Discover the blue pearl of Morocco. Walk through the iconic blue-washed streets and learn about the history behind this magical mountain town.",
    monuments: ["Kasbah", "Grand Mosque", "Ras el-Maa", "Plaza Uta el-Hammam"],
    featured: true,
    guide: guides[1],
    image: "/tours/chefchaouen.jpg",
    status: "active",
  },
  {
    id: "t3",
    title: "Hidden Gems of the Medina",
    city: "Marrakech",
    price: 350,
    currency: "MAD",
    duration: "4h",
    rating: 4.9,
    reviews: 156,
    languages: ["English", "French"],
    maxGuests: 6,
    description:
      "Explore the secret corners of Marrakech's ancient medina. From hidden riads to artisan workshops, discover what most tourists miss.",
    monuments: ["Koutoubia", "Jemaa el-Fnaa", "Souks"],
    featured: false,
    guide: guides[1],
    image: "/tours/medina-gems.jpg",
    status: "active",
  },
  {
    id: "t4",
    title: "Fez Tannery History",
    city: "Fes",
    price: 300,
    currency: "MAD",
    duration: "5h",
    rating: 4.7,
    reviews: 73,
    languages: ["English", "Arabic"],
    maxGuests: 8,
    description:
      "Visit the world-famous leather tanneries of Fes. Learn about traditional leather-making techniques passed down through generations.",
    monuments: ["Chouara Tannery", "Al-Qarawiyyin", "Bou Inania Madrasa"],
    featured: false,
    guide: guides[2],
    image: "/tours/fes-tannery.jpg",
    status: "active",
  },
  {
    id: "t5",
    title: "Agafay Desert Dinner",
    city: "Marrakech",
    price: 550,
    currency: "MAD",
    duration: "6h",
    rating: 4.9,
    reviews: 94,
    languages: ["French", "English"],
    maxGuests: 12,
    description:
      "Experience a magical evening in the Agafay desert. Enjoy a traditional Moroccan dinner under the stars with live music.",
    monuments: ["Agafay Desert Camp", "Atlas Views"],
    featured: true,
    guide: guides[3],
    image: "/tours/agafay-desert.jpg",
    status: "active",
  },
  {
    id: "t6",
    title: "Coastal Essaouira",
    city: "Essaouira",
    price: 650,
    currency: "MAD",
    duration: "7h",
    rating: 5.0,
    reviews: 52,
    languages: ["English", "French"],
    maxGuests: 8,
    description:
      "Discover the charming coastal town of Essaouira. Explore the historic medina, visit local artists, and enjoy fresh seafood by the ocean.",
    monuments: ["Skala de la Ville", "Medina", "Port"],
    featured: false,
    guide: guides[0],
    image: "/tours/essaouira.jpg",
    status: "active",
  },
  {
    id: "t7",
    title: "High Atlas Trekking Day",
    city: "Imlil",
    price: 400,
    currency: "MAD",
    duration: "8h",
    rating: 4.8,
    reviews: 67,
    languages: ["Berber", "English"],
    maxGuests: 6,
    description:
      "Trek through the stunning High Atlas mountains. Visit traditional Berber villages and enjoy breathtaking views of North Africa's highest peaks.",
    monuments: ["Berber Villages", "Toubkal Views", "Waterfalls"],
    featured: false,
    guide: guides[3],
    image: "/tours/atlas-trek.jpg",
    status: "draft",
  },
  {
    id: "t8",
    title: "Imperial Secrets of Marrakech",
    city: "Marrakech",
    price: 450,
    currency: "MAD",
    duration: "4h",
    rating: 4.9,
    reviews: 128,
    languages: ["English", "French"],
    maxGuests: 8,
    description:
      "Experience the magic of the Red City's imperial history. From the intricate zellige tilework of the Ben Youssef Madrasa to the peaceful gardens of the Bahia Palace.",
    monuments: ["Bahia Palace", "Koutoubia", "Saadian Tombs", "El Badi Palace", "Jemaa el-Fnaa"],
    featured: true,
    guide: guides[0],
    image: "/tours/imperial-marrakech.jpg",
    status: "active",
  },
]

export const bookings: Booking[] = [
  {
    id: "b1",
    tourId: "t1",
    tourTitle: "Marrakech Medina Secret Garden Walk",
    location: "Jemaa el-Fnaa Main Square",
    date: "Oct 24, 2024",
    time: "09:00 AM",
    guests: 4,
    guestDetails: "4 People",
    totalPrice: 1800,
    currency: "MAD",
    status: "upcoming",
    leadTraveler: "Sarah Jenkins",
    guide: guides[0],
  },
  {
    id: "b2",
    tourId: "t5",
    tourTitle: "Atlas Mountains Day Trip & Tea",
    location: "Hotel Pickup",
    date: "Oct 25, 2024",
    time: "08:30 AM",
    guests: 2,
    guestDetails: "2 People",
    totalPrice: 800,
    currency: "MAD",
    status: "upcoming",
    leadTraveler: "Michael Chen",
    guide: guides[3],
  },
  {
    id: "b3",
    tourId: "t2",
    tourTitle: "Sunset Camel Trek & Sahara Dinner",
    location: "Merzouga Dunes, Morocco",
    date: "October 24, 2024",
    time: "04:30 PM",
    guests: 3,
    guestDetails: "2 Adults, 1 Child",
    totalPrice: 1250,
    currency: "MAD",
    status: "confirmed",
    leadTraveler: "Emma Wilson",
    guide: guides[3],
  },
  {
    id: "b4",
    tourId: "t4",
    tourTitle: "Fes Leather Tanneries Visit",
    location: "Fes Medina Gate",
    date: "Oct 20, 2024",
    time: "10:00 AM",
    guests: 2,
    guestDetails: "2 Adults",
    totalPrice: 600,
    currency: "MAD",
    status: "completed",
    leadTraveler: "James Miller",
    guide: guides[2],
  },
]

export const users: User[] = [
  {
    id: "u1",
    firstName: "Ahmed",
    lastName: "Mansouri",
    email: "ahmed.m@example.ma",
    phone: "+212 661-123456",
    role: "guide",
    status: "active",
    joinedDate: "Oct 12, 2023",
    avatar: "/avatars/user-1.jpg",
  },
  {
    id: "u2",
    firstName: "Sarah",
    lastName: "Jenkins",
    email: "sarah.j@travelworld.com",
    phone: "+1 555-0199",
    role: "tourist",
    status: "active",
    joinedDate: "Mar 5, 2024",
    avatar: "/avatars/user-2.jpg",
  },
  {
    id: "u3",
    firstName: "Fatima",
    lastName: "Zahra",
    email: "fatima.z@atlasguides.ma",
    phone: "+212 662-987654",
    role: "guide",
    status: "pending",
    joinedDate: "Apr 15, 2024",
    avatar: "/avatars/user-3.jpg",
  },
  {
    id: "u4",
    firstName: "Karim",
    lastName: "Bennani",
    email: "k.bennani@admin.guidetime.com",
    phone: "+212 660-555444",
    role: "admin",
    status: "active",
    joinedDate: "Jan 1, 2023",
    avatar: "/avatars/user-4.jpg",
  },
]

export const dashboardStats = {
  totalUsers: 12482,
  totalGuides: 856,
  totalTours: 2103,
  totalReservations: 45290,
  totalRevenue: 842500,
  usersGrowth: 12,
  guidesGrowth: 5.4,
  toursGrowth: 8.1,
  reservationsGrowth: -2.3,
  revenueGrowth: 18.7,
  pendingApprovals: 28,
  avgRating: 4.8,
}

export const revenueData = [
  { month: "Jan", revenue: 45000, bookings: 890 },
  { month: "Feb", revenue: 52000, bookings: 1020 },
  { month: "Mar", revenue: 61000, bookings: 1150 },
  { month: "Apr", revenue: 75000, bookings: 1280 },
  { month: "May", revenue: 89000, bookings: 1410 },
  { month: "Jun", revenue: 95000, bookings: 1380 },
]

export const popularCities = [
  { city: "Marrakech", bookings: 4520 },
  { city: "Fes", bookings: 2810 },
  { city: "Chefchaouen", bookings: 2150 },
  { city: "Casablanca", bookings: 1680 },
  { city: "Agadir", bookings: 1240 },
]

export const tourApprovalData = [
  { name: "Approved", value: 75, fill: "var(--color-chart-3)" },
  { name: "Pending", value: 15, fill: "var(--color-chart-2)" },
  { name: "Rejected", value: 10, fill: "var(--color-chart-5)" },
]
