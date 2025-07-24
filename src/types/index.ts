export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'team' | 'coach' | 'client';
  avatar?: string;
  phone?: string;
  joinDate: string;
}

export interface Client {
  id: string;
  name: string;
  email: string;
  phone: string;
  avatar?: string;
  joinDate: string;
  totalSessions: number;
  upcomingSessions: number;
  goals: string[];
  status: 'active' | 'inactive' | 'trial';
  lastSession?: string;
  coachId: string;
  achievements: Achievement[];
  bmi?: number;
  notes?: string;
}

export interface Coach {
  id: string;
  name: string;
  email: string;
  phone: string;
  avatar?: string;
  specialties: string[];
  rating: number;
  totalClients: number;
  totalSessions: number;
  monthlyEarnings: number;
  availability: TimeSlot[];
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  dateAchieved: string;
  icon: string;
}

export interface Session {
  id: string;
  clientId: string;
  coachId: string;
  date: string;
  duration: number;
  type: string;
  status: 'scheduled' | 'completed' | 'cancelled' | 'no-show';
  notes?: string;
  rating?: number;
}

export interface TimeSlot {
  day: string;
  startTime: string;
  endTime: string;
  available: boolean;
}

export interface Invoice {
  id: string;
  clientId: string;
  amount: number;
  status: 'pending' | 'paid' | 'overdue' | 'cancelled';
  dueDate: string;
  issueDate: string;
  description: string;
}

export interface FreePass {
  id: string;
  clientEmail: string;
  status: 'active' | 'used' | 'expired';
  expiryDate: string;
  issuedDate: string;
  usedDate?: string;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  category: 'supplement' | 'equipment' | 'apparel' | 'digital';
  image: string;
  description: string;
  inStock: boolean;
}

export interface Communication {
  id: string;
  clientId: string;
  type: 'email' | 'sms' | 'call' | 'note' | 'chatbot';
  content: string;
  timestamp: string;
  sender: string;
}