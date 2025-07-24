import React, { useState } from "react";
import { Clock, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { coaches } from "../../data/mockData";

const SessionBooking: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedCoach, setSelectedCoach] = useState("");
  const [sessionType, setSessionType] = useState("");
  const [showBookingModal, setShowBookingModal] = useState(false);

  const sessionTypes = [
    {
      id: "personal",
      name: "Personal Training",
      duration: "60 min",
      price: 80,
      description: "One-on-one focused training",
    },
    {
      id: "hiit",
      name: "HIIT Session",
      duration: "45 min",
      price: 60,
      description: "High-intensity interval training",
    },
    {
      id: "consultation",
      name: "Fitness Consultation",
      duration: "30 min",
      price: 40,
      description: "Goal setting and planning",
    },
    {
      id: "nutrition",
      name: "Nutrition Coaching",
      duration: "45 min",
      price: 70,
      description: "Personalized meal planning",
    },
  ];

  const timeSlots = [
    "09:00",
    "10:00",
    "11:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
  ];

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const days = [];

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null);
    }

    // Add all days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(new Date(year, month, day));
    }

    return days;
  };

  const isDateAvailable = (date: Date | null) => {
    if (!date) return false;
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date >= today;
  };

  const handleBookSession = () => {
    setShowBookingModal(true);
  };

  const confirmBooking = () => {
    // Handle booking confirmation
    setShowBookingModal(false);
    // Reset form or show success message
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Book a Session</h1>
          <p className="text-gray-600 mt-1">
            Schedule your next fitness session with our expert coaches
          </p>
        </div>
        <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-6 py-3 rounded-lg font-semibold">
          Free Session Available!
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Session Type Selection */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Choose Session Type
          </h3>
          <div className="space-y-3">
            {sessionTypes.map((type) => (
              <div
                key={type.id}
                className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                  sessionType === type.id
                    ? "border-primary bg-primary/10"
                    : "border-gray-200 hover:border-gray-300"
                }`}
                onClick={() => setSessionType(type.id)}
              >
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-medium text-gray-900">{type.name}</h4>
                  <span className="text-lg font-bold text-primary">
                    ${type.price}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-1">{type.description}</p>
                <div className="flex items-center space-x-2 text-sm text-gray-500">
                  <Clock className="w-4 h-4" />
                  <span>{type.duration}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Calendar */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Select Date</h3>
            <div className="flex items-center space-x-2">
              <button
                onClick={() =>
                  setSelectedDate(
                    new Date(
                      selectedDate.getFullYear(),
                      selectedDate.getMonth() - 1
                    )
                  )
                }
                className="p-1 hover:bg-gray-100 rounded"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <span className="font-medium">
                {selectedDate.toLocaleDateString("en-US", {
                  month: "long",
                  year: "numeric",
                })}
              </span>
              <button
                onClick={() =>
                  setSelectedDate(
                    new Date(
                      selectedDate.getFullYear(),
                      selectedDate.getMonth() + 1
                    )
                  )
                }
                className="p-1 hover:bg-gray-100 rounded"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-7 gap-1 mb-2">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
              <div
                key={day}
                className="text-center text-sm font-medium text-gray-500 py-2"
              >
                {day}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-1">
            {getDaysInMonth(selectedDate).map((date, index) => (
              <button
                key={index}
                disabled={!isDateAvailable(date)}
                onClick={() => date && setSelectedDate(date)}
                className={`aspect-square flex items-center justify-center text-sm rounded-lg transition-colors ${
                  !date
                    ? "invisible"
                    : !isDateAvailable(date)
                    ? "text-gray-300 cursor-not-allowed"
                    : date.toDateString() === selectedDate.toDateString()
                    ? "bg-primary text-white"
                    : "hover:bg-gray-100 text-gray-900"
                }`}
              >
                {date?.getDate()}
              </button>
            ))}
          </div>
        </div>

        {/* Time & Coach Selection */}
        <div className="space-y-6">
          {/* Time Slots */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Available Times
            </h3>
            <div className="grid grid-cols-2 gap-2">
              {timeSlots.map((time) => (
                <button
                  key={time}
                  onClick={() => setSelectedTime(time)}
                  className={`p-3 text-sm font-medium rounded-lg transition-colors ${
                    selectedTime === time
                      ? "bg-primary text-white"
                      : "bg-gray-50 text-gray-900 hover:bg-gray-100"
                  }`}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>

          {/* Coach Selection */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Choose Coach
            </h3>
            <div className="space-y-3">
              {coaches.map((coach) => (
                <div
                  key={coach.id}
                  className={`p-3 border rounded-lg cursor-pointer transition-colors ${
                    selectedCoach === coach.id
                      ? "border-primary bg-primary/10"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                  onClick={() => setSelectedCoach(coach.id)}
                >
                  <div className="flex items-center space-x-3">
                    <img
                      src={coach.avatar}
                      alt={coach.name}
                      className="w-10 h-10 rounded-full"
                    />
                    <div className="flex-1">
                      <p className="font-medium text-gray-900">{coach.name}</p>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-gray-600">
                          {coach.rating}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Book Session Button */}
      {sessionType && selectedTime && selectedCoach && (
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                Ready to Book
              </h3>
              <p className="text-gray-600">
                {sessionTypes.find((t) => t.id === sessionType)?.name} on{" "}
                {selectedDate.toLocaleDateString()} at {selectedTime}
              </p>
            </div>
            <button
              onClick={handleBookSession}
              className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors font-semibold"
            >
              Book Session
            </button>
          </div>
        </div>
      )}

      {/* Booking Confirmation Modal */}
      {showBookingModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Confirm Booking
              </h3>
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Session Type:</span>
                  <span className="font-medium">
                    {sessionTypes.find((t) => t.id === sessionType)?.name}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Date:</span>
                  <span className="font-medium">
                    {selectedDate.toLocaleDateString()}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Time:</span>
                  <span className="font-medium">{selectedTime}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Coach:</span>
                  <span className="font-medium">
                    {coaches.find((c) => c.id === selectedCoach)?.name}
                  </span>
                </div>
                <div className="flex justify-between text-lg font-semibold">
                  <span>Total:</span>
                  <span className="text-primary">
                    ${sessionTypes.find((t) => t.id === sessionType)?.price}
                  </span>
                </div>
              </div>
              <div className="flex space-x-3">
                <button
                  onClick={() => setShowBookingModal(false)}
                  className="flex-1 px-4 py-2 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={confirmBooking}
                  className="flex-1 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Confirm Booking
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SessionBooking;
