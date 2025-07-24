import React, { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Calendar,
  Clock,
  User,
  Video,
  MapPin,
  Plus,
  Filter,
} from "lucide-react";

const CoachSchedule: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [viewMode, setViewMode] = useState<"week" | "day">("week");
  const [showAddModal, setShowAddModal] = useState(false);

  const sessions = [
    {
      id: "1",
      clientName: "Emma Wilson",
      clientAvatar:
        "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&fit=crop",
      date: "2024-01-16",
      startTime: "10:00",
      endTime: "11:00",
      type: "Personal Training",
      location: "Gym Floor A",
      status: "confirmed",
      notes: "Focus on upper body strength",
    },
    {
      id: "2",
      clientName: "James Rodriguez",
      clientAvatar:
        "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&fit=crop",
      date: "2024-01-16",
      startTime: "14:00",
      endTime: "14:45",
      type: "HIIT Training",
      location: "Studio B",
      status: "confirmed",
      notes: "High intensity cardio session",
    },
    {
      id: "3",
      clientName: "Lisa Thompson",
      clientAvatar:
        "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&fit=crop",
      date: "2024-01-17",
      startTime: "09:00",
      endTime: "09:30",
      type: "Consultation",
      location: "Virtual",
      status: "pending",
      notes: "Initial fitness assessment",
    },
    {
      id: "4",
      clientName: "Emma Wilson",
      clientAvatar:
        "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&fit=crop",
      date: "2024-01-18",
      startTime: "10:00",
      endTime: "11:00",
      type: "Personal Training",
      location: "Gym Floor A",
      status: "confirmed",
      notes: "Lower body focus",
    },
  ];

  const timeSlots = Array.from({ length: 12 }, (_, i) => {
    const hour = i + 8; // Start from 8 AM
    return `${hour.toString().padStart(2, "0")}:00`;
  });

  const getWeekDays = (date: Date) => {
    const week = [];
    const startOfWeek = new Date(date);
    const day = startOfWeek.getDay();
    const diff = startOfWeek.getDate() - day;
    startOfWeek.setDate(diff);

    for (let i = 0; i < 7; i++) {
      const day = new Date(startOfWeek);
      day.setDate(startOfWeek.getDate() + i);
      week.push(day);
    }
    return week;
  };

  const getSessionsForDate = (date: Date) => {
    const dateStr = date.toISOString().split("T")[0];
    return sessions.filter((session) => session.date === dateStr);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "confirmed":
        return "bg-green-100 text-green-800 border-green-200";
      case "pending":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "cancelled":
        return "bg-red-100 text-red-800 border-red-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const navigateWeek = (direction: "prev" | "next") => {
    const newDate = new Date(currentDate);
    newDate.setDate(currentDate.getDate() + (direction === "next" ? 7 : -7));
    setCurrentDate(newDate);
  };

  const weekDays = getWeekDays(currentDate);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">My Schedule</h1>
          <p className="text-gray-600 mt-1">
            Manage your coaching sessions and availability
          </p>
        </div>
        <div className="flex items-center space-x-3">
          <div className="flex bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => setViewMode("week")}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                viewMode === "week"
                  ? "bg-white text-gray-900 shadow-sm"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Week
            </button>
            <button
              onClick={() => setViewMode("day")}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                viewMode === "day"
                  ? "bg-white text-gray-900 shadow-sm"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Day
            </button>
          </div>
          <button
            onClick={() => setShowAddModal(true)}
            className="bg-mutedTeal text-white px-4 py-2 rounded-lg hover:bg-mutedTeal/90 transition-colors flex items-center space-x-2"
          >
            <Plus className="w-4 h-4" />
            <span>Add Session</span>
          </button>
        </div>
      </div>

      {/* Calendar Header */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => navigateWeek("prev")}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <h2 className="text-xl font-semibold text-gray-900">
              {weekDays[0].toLocaleDateString("en-US", {
                month: "long",
                year: "numeric",
              })}
            </h2>
            <button
              onClick={() => navigateWeek("next")}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
          <div className="flex items-center space-x-2">
            <button className="flex items-center space-x-2 px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              <Filter className="w-4 h-4" />
              <span>Filter</span>
            </button>
            <button className="flex items-center space-x-2 px-3 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
              <Calendar className="w-4 h-4" />
              <span>Sync Calendar</span>
            </button>
          </div>
        </div>

        {/* Week View */}
        <div className="grid grid-cols-8 gap-4">
          {/* Time column */}
          <div className="space-y-16">
            <div className="h-12"></div> {/* Header spacer */}
            {timeSlots.map((time) => (
              <div key={time} className="text-sm text-gray-500 text-right pr-2">
                {time}
              </div>
            ))}
          </div>

          {/* Day columns */}
          {weekDays.map((day, dayIndex) => (
            <div key={dayIndex} className="space-y-2">
              {/* Day header */}
              <div className="text-center p-3 border-b">
                <p className="text-sm font-medium text-gray-600">
                  {day.toLocaleDateString("en-US", { weekday: "short" })}
                </p>
                <p
                  className={`text-lg font-bold ${
                    day.toDateString() === new Date().toDateString()
                      ? "text-mutedTeal"
                      : "text-gray-900"
                  }`}
                >
                  {day.getDate()}
                </p>
              </div>

              {/* Time slots */}
              <div className="space-y-16 relative">
                {timeSlots.map((time, timeIndex) => (
                  <div
                    key={timeIndex}
                    className="h-12 border-t border-gray-100 relative"
                  >
                    {getSessionsForDate(day)
                      .filter((session) => session.startTime === time)
                      .map((session) => (
                        <div
                          key={session.id}
                          className={`absolute inset-x-0 p-2 rounded-lg border-l-4 ${getStatusColor(
                            session.status
                          )} cursor-pointer hover:shadow-md transition-shadow`}
                          style={{
                            height: "48px",
                            zIndex: 10,
                          }}
                        >
                          <div className="flex items-center space-x-2">
                            <img
                              src={session.clientAvatar}
                              alt={session.clientName}
                              className="w-6 h-6 rounded-full"
                            />
                            <div className="flex-1 min-w-0">
                              <p className="text-xs font-medium text-gray-900 truncate">
                                {session.clientName}
                              </p>
                              <p className="text-xs text-gray-600 truncate">
                                {session.type}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Today's Sessions */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Today's Sessions
        </h3>
        <div className="space-y-4">
          {getSessionsForDate(new Date()).map((session) => (
            <div
              key={session.id}
              className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <img
                src={session.clientAvatar}
                alt={session.clientName}
                className="w-12 h-12 rounded-full"
              />
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <p className="font-medium text-gray-900">
                    {session.clientName}
                  </p>
                  <span
                    className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(
                      session.status
                    )}`}
                  >
                    {session.status}
                  </span>
                </div>
                <div className="flex items-center space-x-4 text-sm text-gray-600">
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>
                      {session.startTime} - {session.endTime}
                    </span>
                  </div>
                  <div className="flex items-center space-x-1">
                    {session.location === "Virtual" ? (
                      <Video className="w-4 h-4" />
                    ) : (
                      <MapPin className="w-4 h-4" />
                    )}
                    <span>{session.location}</span>
                  </div>
                  <span>•</span>
                  <span>{session.type}</span>
                </div>
                {session.notes && (
                  <p className="text-sm text-gray-500 mt-1">{session.notes}</p>
                )}
              </div>
              <div className="flex space-x-2">
                <button className="text-mutedTeal hover:text-mutedTeal/80 text-sm font-medium">
                  Edit
                </button>
                <button className="text-green-600 hover:text-green-700 text-sm font-medium">
                  Start
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Add Session Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Add New Session
              </h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Client
                  </label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mutedTeal focus:border-transparent">
                    <option>Select a client</option>
                    <option>Emma Wilson</option>
                    <option>James Rodriguez</option>
                    <option>Lisa Thompson</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Session Type
                  </label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mutedTeal focus:border-transparent">
                    <option>Personal Training</option>
                    <option>HIIT Training</option>
                    <option>Consultation</option>
                    <option>Nutrition Coaching</option>
                  </select>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Date
                    </label>
                    <input
                      type="date"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mutedTeal focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Time
                    </label>
                    <input
                      type="time"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mutedTeal focus:border-transparent"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Location
                  </label>
                  <input
                    type="text"
                    placeholder="Gym Floor A, Studio B, or Virtual"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mutedTeal focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Notes (Optional)
                  </label>
                  <textarea
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mutedTeal focus:border-transparent"
                    rows={3}
                    placeholder="Session focus, special instructions..."
                  ></textarea>
                </div>
              </form>
              <div className="flex space-x-3 mt-6">
                <button
                  onClick={() => setShowAddModal(false)}
                  className="flex-1 px-4 py-2 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={() => setShowAddModal(false)}
                  className="flex-1 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Add Session
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CoachSchedule;
