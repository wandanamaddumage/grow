import React from "react";
import { Calendar, CreditCard, User, MessageSquare } from "lucide-react";

const RecentActivity: React.FC = () => {
  const activities = [
    {
      id: 1,
      type: "session",
      description: "Emma Wilson completed her training session",
      time: "2 hours ago",
      icon: Calendar,
      color: "bg-green-500",
    },
    {
      id: 2,
      type: "payment",
      description: "Payment received from James Rodriguez ($200)",
      time: "4 hours ago",
      icon: CreditCard,
      color: "bg-primary",
    },
    {
      id: 3,
      type: "client",
      description: "New client registration: Sarah Martinez",
      time: "6 hours ago",
      icon: User,
      color: "bg-purple-500",
    },
    {
      id: 4,
      type: "message",
      description: "Mike Chen sent progress update for Lisa Thompson",
      time: "8 hours ago",
      icon: MessageSquare,
      color: "bg-orange-500",
    },
    {
      id: 5,
      type: "session",
      description: "James Rodriguez scheduled new session",
      time: "1 day ago",
      icon: Calendar,
      color: "bg-green-500",
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">
        Recent Activity
      </h3>
      <div className="space-y-4">
        {activities.map((activity) => {
          const Icon = activity.icon;
          return (
            <div key={activity.id} className="flex items-start space-x-3">
              <div
                className={`w-8 h-8 ${activity.color} rounded-full flex items-center justify-center flex-shrink-0`}
              >
                <Icon className="w-4 h-4 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-gray-900">{activity.description}</p>
                <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
              </div>
            </div>
          );
        })}
      </div>
      <button className="w-full mt-4 text-sm text-primary hover:text-primary/80 font-medium">
        View all activity
      </button>
    </div>
  );
};

export default RecentActivity;
