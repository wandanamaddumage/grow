import React from "react";
import { Calendar, Clock } from "lucide-react";

const UpcomingSessions: React.FC = () => {
  const sessions = [
    {
      id: 1,
      client: "Emma Wilson",
      time: "10:00 AM",
      duration: "60 min",
      type: "Personal Training",
      status: "confirmed",
      avatar:
        "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&fit=crop",
    },
    {
      id: 2,
      client: "James Rodriguez",
      time: "2:00 PM",
      duration: "45 min",
      type: "HIIT Training",
      status: "confirmed",
      avatar:
        "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&fit=crop",
    },
    {
      id: 3,
      client: "Lisa Thompson",
      time: "4:30 PM",
      duration: "30 min",
      type: "Consultation",
      status: "pending",
      avatar:
        "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&fit=crop",
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-900">
          Today's Sessions
        </h3>
        <Calendar className="w-5 h-5 text-gray-400" />
      </div>
      <div className="space-y-4">
        {sessions.map((session) => (
          <div
            key={session.id}
            className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <img
              src={session.avatar}
              alt={session.client}
              className="w-12 h-12 rounded-full"
            />
            <div className="flex-1">
              <p className="font-medium text-gray-900">{session.client}</p>
              <div className="flex items-center space-x-4 text-sm text-gray-600 mt-1">
                <div className="flex items-center space-x-1">
                  <Clock className="w-4 h-4" />
                  <span>{session.time}</span>
                </div>
                <span>•</span>
                <span>{session.duration}</span>
                <span>•</span>
                <span>{session.type}</span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <span
                className={`px-2 py-1 text-xs font-medium rounded-full ${
                  session.status === "confirmed"
                    ? "bg-green-100 text-green-800"
                    : "bg-yellow-100 text-yellow-800"
                }`}
              >
                {session.status}
              </span>
              <button className="text-primary hover:text-primary/80 text-sm font-medium">
                View
              </button>
            </div>
          </div>
        ))}
      </div>
      <button className="w-full mt-4 text-sm text-primary hover:text-primary/80 font-medium">
        View full schedule
      </button>
    </div>
  );
};

export default UpcomingSessions;
