import {
  User,
  Client,
  Coach,
  Session,
  Invoice,
  FreePass,
  Product,
  Communication,
  Achievement,
} from "../types";

export const users: User[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    email: "sarah@fitcoach.com",
    role: "admin",
    avatar:
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    phone: "+1 (555) 123-4567",
    joinDate: "2023-01-15",
  },
  {
    id: "2",
    name: "Mike Chen",
    email: "mike@fitcoach.com",
    role: "coach",
    avatar:
      "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    phone: "+1 (555) 234-5678",
    joinDate: "2023-02-01",
  },
  {
    id: "3",
    name: "Emma Wilson",
    email: "emma@email.com",
    role: "client",
    avatar:
      "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    phone: "+1 (555) 345-6789",
    joinDate: "2024-01-10",
  },
];

export const clients: Client[] = [
  {
    id: "3",
    name: "Emma Wilson",
    email: "emma@email.com",
    phone: "+1 (555) 345-6789",
    avatar:
      "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    joinDate: "2024-01-10",
    totalSessions: 24,
    upcomingSessions: 3,
    goals: ["Weight Loss", "Strength Training", "Cardio Endurance"],
    status: "active",
    lastSession: "2024-01-15",
    coachId: "2",
    bmi: 24.5,
    notes: "Very motivated client, shows consistent progress",
    achievements: [
      {
        id: "1",
        title: "10 Sessions Complete",
        description: "Completed first 10 training sessions",
        dateAchieved: "2024-01-05",
        icon: "🎯",
      },
      {
        id: "2",
        title: "Weight Loss Goal",
        description: "Lost 10 pounds in first month",
        dateAchieved: "2024-01-12",
        icon: "⚖️",
      },
    ],
  },
  {
    id: "4",
    name: "James Rodriguez",
    email: "james@email.com",
    phone: "+1 (555) 456-7890",
    avatar:
      "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    joinDate: "2023-11-20",
    totalSessions: 45,
    upcomingSessions: 2,
    goals: ["Muscle Building", "Nutrition Guidance"],
    status: "active",
    lastSession: "2024-01-14",
    coachId: "2",
    bmi: 26.2,
    achievements: [
      {
        id: "3",
        title: "3 Month Milestone",
        description: "Consistent training for 3 months",
        dateAchieved: "2024-01-01",
        icon: "📅",
      },
    ],
  },
  {
    id: "5",
    name: "Lisa Thompson",
    email: "lisa@email.com",
    phone: "+1 (555) 567-8901",
    avatar:
      "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    joinDate: "2024-01-01",
    totalSessions: 8,
    upcomingSessions: 1,
    goals: ["Flexibility", "Core Strength"],
    status: "trial",
    lastSession: "2024-01-13",
    coachId: "2",
    bmi: 22.8,
    achievements: [],
  },
];

export const coaches: Coach[] = [
  {
    id: "2",
    name: "Mike Chen",
    email: "mike@fitcoach.com",
    phone: "+1 (555) 234-5678",
    avatar:
      "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    specialties: ["Weight Training", "HIIT", "Nutrition"],
    rating: 4.9,
    totalClients: 15,
    totalSessions: 156,
    monthlyEarnings: 4800,
    availability: [
      { day: "Monday", startTime: "09:00", endTime: "17:00", available: true },
      { day: "Tuesday", startTime: "09:00", endTime: "17:00", available: true },
      {
        day: "Wednesday",
        startTime: "09:00",
        endTime: "17:00",
        available: true,
      },
      {
        day: "Thursday",
        startTime: "09:00",
        endTime: "17:00",
        available: true,
      },
      { day: "Friday", startTime: "09:00", endTime: "15:00", available: true },
    ],
  },
];

export const sessions: Session[] = [
  {
    id: "1",
    clientId: "3",
    coachId: "2",
    date: "2024-01-16T10:00:00",
    duration: 60,
    type: "Personal Training",
    status: "scheduled",
    notes: "Focus on upper body strength",
  },
  {
    id: "2",
    clientId: "4",
    coachId: "2",
    date: "2024-01-16T14:00:00",
    duration: 45,
    type: "HIIT Training",
    status: "scheduled",
  },
  {
    id: "3",
    clientId: "3",
    coachId: "2",
    date: "2024-01-15T10:00:00",
    duration: 60,
    type: "Personal Training",
    status: "completed",
    notes: "Great session, client showed improvement",
    rating: 5,
  },
];

export const invoices: Invoice[] = [
  {
    id: "INV-001",
    clientId: "3",
    amount: 120,
    status: "paid",
    dueDate: "2024-01-15",
    issueDate: "2024-01-01",
    description: "Personal Training Package (4 sessions)",
  },
  {
    id: "INV-002",
    clientId: "4",
    amount: 200,
    status: "pending",
    dueDate: "2024-01-20",
    issueDate: "2024-01-05",
    description: "Monthly Training Package",
  },
  {
    id: "INV-003",
    clientId: "5",
    amount: 80,
    status: "overdue",
    dueDate: "2024-01-10",
    issueDate: "2023-12-25",
    description: "Trial Package",
  },
];

export const freePasses: FreePass[] = [
  {
    id: "FP-001",
    clientEmail: "newclient1@email.com",
    status: "active",
    expiryDate: "2024-01-25",
    issuedDate: "2024-01-10",
  },
  {
    id: "FP-002",
    clientEmail: "newclient2@email.com",
    status: "used",
    expiryDate: "2024-01-20",
    issuedDate: "2024-01-05",
    usedDate: "2024-01-12",
  },
  {
    id: "FP-003",
    clientEmail: "newclient3@email.com",
    status: "expired",
    expiryDate: "2024-01-08",
    issuedDate: "2023-12-25",
  },
];

export const products: Product[] = [
  {
    id: "2",
    name: "Resistance Bands Set",
    price: 29.99,
    category: "equipment",
    image:
      "https://images.pexels.com/photos/4162481/pexels-photo-4162481.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
    description: "Complete set of resistance bands for home workouts",
    inStock: true,
  },
  {
    id: "3",
    name: "Fitness Training Plan",
    price: 19.99,
    category: "digital",
    image:
      "https://images.pexels.com/photos/4327024/pexels-photo-4327024.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
    description: "12-week comprehensive training program",
    inStock: true,
  },
];

export const communications: Communication[] = [
  {
    id: "1",
    clientId: "3",
    type: "email",
    content:
      "Reminder: Your training session is scheduled for tomorrow at 10 AM",
    timestamp: "2024-01-15T15:30:00",
    sender: "System",
  },
  {
    id: "2",
    clientId: "3",
    type: "note",
    content: "Client asked about nutrition plan during session",
    timestamp: "2024-01-15T10:30:00",
    sender: "Mike Chen",
  },
  {
    id: "3",
    clientId: "4",
    type: "chatbot",
    content: "Asked about available supplement options",
    timestamp: "2024-01-14T20:15:00",
    sender: "AI Assistant",
  },
];

export const testimonials = [
  {
    id: "1",
    name: "Sarah Mitchell",
    content:
      "Amazing results in just 3 months! The coaches are incredibly knowledgeable and supportive.",
    rating: 5,
    image:
      "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
  },
  {
    id: "2",
    name: "David Park",
    content:
      "The personalized training approach helped me achieve goals I never thought possible.",
    rating: 5,
    image:
      "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
  },
];
