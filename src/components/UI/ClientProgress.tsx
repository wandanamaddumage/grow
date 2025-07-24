import React from "react";
import { TrendingUp, Target, Calendar } from "lucide-react";

const ClientProgress: React.FC = () => {
  const clients = [
    {
      id: 1,
      name: "Emma Wilson",
      avatar:
        "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&fit=crop",
      progress: 85,
      goal: "Weight Loss",
      lastSession: "2 days ago",
      trend: "up",
    },
    {
      id: 2,
      name: "James Rodriguez",
      avatar:
        "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&fit=crop",
      progress: 92,
      goal: "Muscle Building",
      lastSession: "1 day ago",
      trend: "up",
    },
    {
      id: 3,
      name: "Lisa Thompson",
      avatar:
        "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&fit=crop",
      progress: 68,
      goal: "Flexibility",
      lastSession: "3 days ago",
      trend: "up",
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">
        Client Progress Overview
      </h3>
      <div className="space-y-4">
        {clients.map((client) => (
          <div
            key={client.id}
            className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg"
          >
            <img
              src={client.avatar}
              alt={client.name}
              className="w-12 h-12 rounded-full"
            />
            <div className="flex-1">
              <div className="flex items-center justify-between mb-2">
                <p className="font-medium text-gray-900">{client.name}</p>
                <div className="flex items-center space-x-1">
                  <TrendingUp className="w-4 h-4 text-green-500" />
                  <span className="text-sm font-medium text-green-600">
                    {client.progress}%
                  </span>
                </div>
              </div>
              <div className="flex items-center space-x-4 text-sm text-gray-600">
                <div className="flex items-center space-x-1">
                  <Target className="w-4 h-4" />
                  <span>{client.goal}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Calendar className="w-4 h-4" />
                  <span>{client.lastSession}</span>
                </div>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                <div
                  className="bg-primary h-2 rounded-full transition-all duration-500"
                  style={{ width: `${client.progress}%` }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientProgress;
