import React from "react";
import {
  Users,
  Calendar,
  DollarSign,
  TrendingUp,
  BookOpen,
  Star,
  Award,
} from "lucide-react";
import StatCard from "../UI/StatCard";
import UpcomingSessions from "../UI/UpcomingSessions";
import ClientProgress from "../UI/ClientProgress";

const CoachDashboard: React.FC = () => {
  const stats = [
    {
      title: "My Clients",
      value: "15",
      change: "+2",
      icon: Users,
      trend: "up" as const,
    },
    {
      title: "Sessions This Week",
      value: "23",
      change: "+5",
      icon: Calendar,
      trend: "up" as const,
    },
    {
      title: "Monthly Earnings",
      value: "$4,800",
      change: "+12%",
      icon: DollarSign,
      trend: "up" as const,
    },
    {
      title: "Avg Session Rating",
      value: "4.9/5",
      change: "+0.1",
      icon: Star,
      trend: "up" as const,
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Coach Dashboard</h1>
          <p className="text-gray-600 mt-1">
            Welcome back, Mike! Ready to inspire today?
          </p>
        </div>
        <div className="flex space-x-3">
          <button className="bg-mutedTeal text-white px-4 py-2 rounded-lg hover:bg-mutedTeal/90 transition-colors">
            Add Session Notes
          </button>
          <button className="border border-green-600 text-green-600 px-4 py-2 rounded-lg hover:bg-green-50 transition-colors">
            Message Client
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Today's Schedule */}
        <div className="lg:col-span-2">
          <UpcomingSessions />
        </div>

        {/* Quick Actions */}
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Quick Actions
            </h3>
            <div className="space-y-3">
              <button className="w-full flex items-center space-x-3 p-3 text-left bg-primary/10 hover:bg-primary/20 rounded-lg transition-colors">
                <Calendar className="w-5 h-5 text-primary" />
                <span className="font-medium text-primary">
                  Schedule Session
                </span>
              </button>
              <button className="w-full flex items-center space-x-3 p-3 text-left bg-lightGreen/10 hover:bg-lightGreen/20 rounded-lg transition-colors">
                <BookOpen className="w-5 h-5 text-green-600" />
                <span className="font-medium text-lightGreen">
                  Add Progress Note
                </span>
              </button>
              <button className="w-full flex items-center space-x-3 p-3 text-left bg-purple-50 hover:bg-purple-100 rounded-lg transition-colors">
                <Award className="w-5 h-5 text-purple-600" />
                <span className="font-medium text-purple-900">
                  Set Milestone
                </span>
              </button>
              <button className="w-full flex items-center space-x-3 p-3 text-left bg-orange-50 hover:bg-orange-100 rounded-lg transition-colors">
                <TrendingUp className="w-5 h-5 text-orange-600" />
                <span className="font-medium text-orange-900">
                  View Reports
                </span>
              </button>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              This Week's Goals
            </h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-600">Sessions Completed</span>
                  <span className="font-medium">18/25</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-primary h-2 rounded-full"
                    style={{ width: "72%" }}
                  ></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-600">Client Check-ins</span>
                  <span className="font-medium">12/15</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-green-600 h-2 rounded-full"
                    style={{ width: "80%" }}
                  ></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-600">Progress Reviews</span>
                  <span className="font-medium">8/10</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-purple-600 h-2 rounded-full"
                    style={{ width: "80%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Client Progress Overview */}
      <ClientProgress />
    </div>
  );
};

export default CoachDashboard;
