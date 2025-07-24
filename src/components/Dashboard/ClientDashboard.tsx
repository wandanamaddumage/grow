import React, { useState } from "react";
import {
  Calendar,
  Target,
  Award,
  TrendingUp,
  MessageCircle,
  ShoppingCart,
  BookOpen,
  Star,
} from "lucide-react";
import StatCard from "../UI/StatCard";
import ChatBot from "../UI/ChatBot";
import BMICalculator from "../UI/BMICalculator";

const ClientDashboard: React.FC = () => {
  const [showChat, setShowChat] = useState(false);
  const [showBMI, setShowBMI] = useState(false);

  const stats = [
    {
      title: "Sessions Completed",
      value: "24",
      change: "+3 this week",
      icon: Calendar,
      trend: "up" as const,
    },
    {
      title: "Current Streak",
      value: "12 days",
      change: "Personal best!",
      icon: TrendingUp,
      trend: "up" as const,
    },
    {
      title: "Goals Achieved",
      value: "5/8",
      change: "3 remaining",
      icon: Target,
      trend: "up" as const,
    },
    {
      title: "Achievements",
      value: "8",
      change: "+2 this month",
      icon: Award,
      trend: "up" as const,
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header with Book Session CTA */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Welcome back, Emma!
          </h1>
          <p className="text-gray-600 mt-1">
            Ready to crush your fitness goals today?
          </p>
        </div>
        <button className="bg-gradient-to-r from-mutedTeal to-mutedTeal/90 text-white px-8 py-3 rounded-lg hover:from-mutedTeal/90 hover:to-mutedTeal/80 transition-all transform hover:scale-105 shadow-lg">
          Book a Free Session
        </button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Progress & Next Session */}
        <div className="lg:col-span-2 space-y-6">
          {/* Next Session */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Your Next Session
            </h3>
            <div className="flex items-center space-x-4 p-4 bg-mutedTeal/10 rounded-lg">
              <div className="w-12 h-12 bg-mutedTeal rounded-full flex items-center justify-center">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <p className="font-medium text-gray-900">
                  Personal Training with Mike Chen
                </p>
                <p className="text-gray-600">
                  Tomorrow at 10:00 AM • 60 minutes
                </p>
                <p className="text-sm text-mutedTeal mt-1">
                  Upper body strength focus
                </p>
              </div>
              <button className="hover:bg-white hover:text-primary px-4 py-2 rounded-lg border border-mutedTeal/20 bg-primary text-white transition-colors">
                View Details
              </button>
            </div>
          </div>

          {/* Progress Overview */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Your Progress
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <p className="text-2xl font-bold text-green-600">-8 lbs</p>
                <p className="text-sm text-gray-600">Weight Lost</p>
              </div>
              <div className="text-center p-4 bg-lightGreen/20 rounded-lg">
                <p className="text-2xl font-bold text-lightGreen">+15%</p>
                <p className="text-sm text-gray-600">Strength Gain</p>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <p className="text-2xl font-bold text-purple-600">92%</p>
                <p className="text-sm text-gray-600">Session Attendance</p>
              </div>
            </div>
          </div>

          {/* Recent Achievements */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Recent Achievements
            </h3>
            <div className="space-y-3">
              {[
                {
                  title: "Weight Loss Goal",
                  description: "Lost 10 pounds in first month",
                  date: "2 days ago",
                  icon: "⚖️",
                },
                {
                  title: "10 Sessions Complete",
                  description: "Completed first 10 training sessions",
                  date: "1 week ago",
                  icon: "🎯",
                },
                {
                  title: "Consistency Champion",
                  description: "7 days in a row workout streak",
                  date: "2 weeks ago",
                  icon: "🔥",
                },
              ].map((achievement, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 p-3 bg-yellow-50 rounded-lg"
                >
                  <div className="text-2xl">{achievement.icon}</div>
                  <div className="flex-1">
                    <p className="font-medium text-gray-900">
                      {achievement.title}
                    </p>
                    <p className="text-sm text-gray-600">
                      {achievement.description}
                    </p>
                  </div>
                  <span className="text-xs text-gray-500">
                    {achievement.date}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Quick Actions */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Quick Actions
            </h3>
            <div className="space-y-3">
              <button className="w-full flex items-center space-x-3 p-3 text-left bg-green-50 hover:bg-green-100 rounded-lg transition-colors">
                <Calendar className="w-5 h-5 text-green-600" />
                <span className="font-medium text-green-900">Book Session</span>
              </button>
              <button className="w-full flex items-center space-x-3 p-3 text-left bg-lightGreen/10 hover:bg-lightGreen/20 rounded-lg transition-colors">
                <Target className="w-5 h-5 text-lightGreen" />
                <span className="font-medium text-lightGreen">
                  View Progress
                </span>
              </button>
              <button className="w-full flex items-center space-x-3 p-3 text-left bg-purple-50 hover:bg-purple-100 rounded-lg transition-colors">
                <ShoppingCart className="w-5 h-5 text-purple-600" />
                <span className="font-medium text-purple-900">Visit Store</span>
              </button>
              <button className="w-full flex items-center space-x-3 p-3 text-left bg-orange-50 hover:bg-orange-100 rounded-lg transition-colors">
                <BookOpen className="w-5 h-5 text-orange-600" />
                <span className="font-medium text-orange-900">Resources</span>
              </button>
              <button
                onClick={() => setShowBMI(true)}
                className="w-full flex items-center space-x-3 p-3 text-left bg-pink-50 hover:bg-pink-100 rounded-lg transition-colors"
              >
                <Target className="w-5 h-5 text-pink-600" />
                <span className="font-medium text-pink-900">
                  BMI Calculator
                </span>
              </button>
            </div>
          </div>

          {/* Workout Plan */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              This Week's Plan
            </h3>
            <div className="space-y-3">
              {[
                { day: "Mon", workout: "Upper Body", completed: true },
                { day: "Wed", workout: "Cardio + Core", completed: true },
                { day: "Fri", workout: "Lower Body", completed: false },
                { day: "Sat", workout: "Active Recovery", completed: false },
              ].map((plan, index) => (
                <div
                  key={index}
                  className={`flex items-center justify-between p-3 rounded-lg ${
                    plan.completed ? "bg-green-50" : "bg-gray-50"
                  }`}
                >
                  <div>
                    <p className="font-medium text-gray-900">{plan.day}</p>
                    <p className="text-sm text-gray-600">{plan.workout}</p>
                  </div>
                  {plan.completed && (
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <svg
                        className="w-4 h-4 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Coach Info */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Your Coach
            </h3>
            <div className="flex items-center space-x-3">
              <img
                src="https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&fit=crop"
                alt="Mike Chen"
                className="w-12 h-12 rounded-full"
              />
              <div className="flex-1">
                <p className="font-medium text-gray-900">Mike Chen</p>
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-sm text-gray-600">4.9 rating</span>
                </div>
              </div>
            </div>
            <button className="w-full mt-4 bg-primary text-white py-2 rounded-lg hover:bg-primary/90 transition-colors">
              Message Coach
            </button>
          </div>
        </div>
      </div>

      {/* Floating Chat Button */}
      <button
        onClick={() => setShowChat(true)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-mutedTeal text-white rounded-full shadow-lg hover:bg-mutedTeal/90 transition-all transform hover:scale-110 flex items-center justify-center z-50"
      >
        <MessageCircle className="w-6 h-6" />
      </button>

      {/* Chat Bot Modal */}
      {showChat && <ChatBot onClose={() => setShowChat(false)} />}

      {/* BMI Calculator Modal */}
      {showBMI && <BMICalculator onClose={() => setShowBMI(false)} />}
    </div>
  );
};

export default ClientDashboard;
