import React from "react";
import {
  Users,
  Calendar,
  DollarSign,
  TrendingUp,
  Star,
  MessageSquare,
  Award,
  UserPlus,
  BarChart3,
  CreditCard,
} from "lucide-react";
import StatCard from "../UI/StatCard";
import RecentActivity from "../UI/RecentActivity";
import QuickActions from "../UI/QuickActions";
import PerformanceChart from "../UI/PerformanceChart";

const AdminDashboard: React.FC = () => {
  const stats = [
    {
      title: "Total Clients",
      value: "1,247",
      change: "+12%",
      icon: Users,
      trend: "up" as const,
    },
    {
      title: "Active Coaches",
      value: "23",
      change: "+2",
      icon: UserPlus,
      trend: "up" as const,
    },
    {
      title: "Monthly Revenue",
      value: "$48,290",
      change: "+18%",
      icon: DollarSign,
      trend: "up" as const,
    },
    {
      title: "Sessions This Week",
      value: "156",
      change: "+8%",
      icon: Calendar,
      trend: "up" as const,
    },
    {
      title: "Client Satisfaction",
      value: "4.9/5",
      change: "+0.2",
      icon: Star,
      trend: "up" as const,
    },
    {
      title: "Free Passes Issued",
      value: "34",
      change: "-5",
      icon: Award,
      trend: "down" as const,
    },
  ];

  const quickActions = [
    { title: "Generate Free Pass", icon: Award, color: "bg-green-500" },
    { title: "Schedule Coach", icon: Calendar, color: "bg-primary" },
    { title: "Send Invoice", icon: CreditCard, color: "bg-purple-500" },
    { title: "View Reports", icon: BarChart3, color: "bg-orange-500" },
    { title: "Message Clients", icon: MessageSquare, color: "bg-pink-500" },
    { title: "Add Milestone", icon: TrendingUp, color: "bg-indigo-500" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
          <p className="text-gray-600 mt-1">
            Manage your fitness coaching business
          </p>
        </div>
        <div className="flex space-x-3">
          <button className="bg-mutedTeal text-white px-4 py-2 rounded-lg hover:bg-mutedTeal/90 transition-colors">
            Generate Report
          </button>
          <button className="border border-green-600 text-green-600 px-4 py-2 rounded-lg hover:bg-green-50 transition-colors">
            Add Client
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Performance Chart */}
        <div className="lg:col-span-2">
          <PerformanceChart />
        </div>

        {/* Quick Actions */}
        <div>
          <QuickActions actions={quickActions} />
        </div>
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RecentActivity />
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Top Performing Coaches
          </h3>
          <div className="space-y-4">
            {[
              { name: "Mike Chen", clients: 15, sessions: 89, rating: 4.9 },
              { name: "Sarah Johnson", clients: 12, sessions: 76, rating: 4.8 },
              {
                name: "Alex Rodriguez",
                clients: 14,
                sessions: 82,
                rating: 4.7,
              },
            ].map((coach, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-semibold">
                    {coach.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{coach.name}</p>
                    <p className="text-sm text-gray-500">
                      {coach.clients} clients • {coach.sessions} sessions
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-sm font-medium text-gray-900">
                    {coach.rating}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
