import React, { useState } from "react";
import {
  Send,
  Paperclip,
  Smile,
  Phone,
  Video,
  MoreVertical,
  Calendar,
  Image,
} from "lucide-react";

const ChatWithCoach: React.FC = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "coach",
      content:
        "Hi Emma! Great job on yesterday's session. How are you feeling today?",
      timestamp: new Date("2024-01-16T09:00:00"),
      type: "text",
    },
    {
      id: 2,
      sender: "client",
      content:
        "Thanks Mike! I'm feeling good, a bit sore but in a good way. Ready for today's workout!",
      timestamp: new Date("2024-01-16T09:15:00"),
      type: "text",
    },
    {
      id: 3,
      sender: "coach",
      content:
        "Perfect! That's exactly what we want to hear. Today we'll focus on lower body. I've prepared a special routine for you.",
      timestamp: new Date("2024-01-16T09:20:00"),
      type: "text",
    },
    {
      id: 4,
      sender: "coach",
      content: "Here's your workout plan for today:",
      timestamp: new Date("2024-01-16T09:21:00"),
      type: "text",
    },
    {
      id: 5,
      sender: "coach",
      content: "workout-plan-jan16.pdf",
      timestamp: new Date("2024-01-16T09:21:30"),
      type: "file",
    },
    {
      id: 6,
      sender: "client",
      content:
        "Awesome! I'll review it before our session. Quick question - should I do any warm-up beforehand?",
      timestamp: new Date("2024-01-16T09:25:00"),
      type: "text",
    },
    {
      id: 7,
      sender: "coach",
      content:
        "Yes, definitely! 5-10 minutes of light cardio and dynamic stretching. I'll send you a video.",
      timestamp: new Date("2024-01-16T09:30:00"),
      type: "text",
    },
    {
      id: 8,
      sender: "coach",
      content: "https://example.com/warmup-routine",
      timestamp: new Date("2024-01-16T09:31:00"),
      type: "link",
    },
  ]);

  const coach = {
    name: "Mike Chen",
    avatar:
      "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&fit=crop",
    status: "online",
    specialties: ["Weight Training", "HIIT", "Nutrition"],
  };

  const handleSendMessage = () => {
    if (message.trim()) {
      const newMessage = {
        id: messages.length + 1,
        sender: "client" as const,
        content: message,
        timestamp: new Date(),
        type: "text" as const,
      };
      setMessages([...messages, newMessage]);
      setMessage("");

      // Simulate coach response
      setTimeout(() => {
        const coachResponse = {
          id: messages.length + 2,
          sender: "coach" as const,
          content: "Thanks for your message! I'll get back to you shortly.",
          timestamp: new Date(),
          type: "text" as const,
        };
        setMessages((prev) => [...prev, coachResponse]);
      }, 2000);
    }
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
  };

  const isToday = (date: Date) => {
    const today = new Date();
    return date.toDateString() === today.toDateString();
  };

  const renderMessage = (msg: (typeof messages)[0]) => {
    const isCoach = msg.sender === "coach";

    return (
      <div
        key={msg.id}
        className={`flex ${isCoach ? "justify-start" : "justify-end"} mb-4`}
      >
        {isCoach && (
          <img
            src={coach.avatar}
            alt={coach.name}
            className="w-8 h-8 rounded-full mr-3 flex-shrink-0"
          />
        )}
        <div
          className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
            isCoach ? "bg-gray-100 text-gray-900" : "bg-primary text-white"
          }`}
        >
          {msg.type === "text" && <p className="text-sm">{msg.content}</p>}
          {msg.type === "file" && (
            <div className="flex items-center space-x-2">
              <Paperclip className="w-4 h-4" />
              <span className="text-sm underline cursor-pointer">
                {msg.content}
              </span>
            </div>
          )}
          {msg.type === "link" && (
            <a
              href={msg.content}
              className="text-sm underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Warm-up Routine Video
            </a>
          )}
          <p
            className={`text-xs mt-1 ${
              isCoach ? "text-gray-500" : "text-primary/80"
            }`}
          >
            {formatTime(msg.timestamp)}
          </p>
        </div>
      </div>
    );
  };

  return (
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <img
                src={coach.avatar}
                alt={coach.name}
                className="w-12 h-12 rounded-full"
              />
              <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-900">
                {coach.name}
              </h2>
              <p className="text-sm text-green-600">
                Online • Personal Trainer
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
              <Phone className="w-5 h-5" />
            </button>
            <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
              <Video className="w-5 h-5" />
            </button>
            <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
              <Calendar className="w-5 h-5" />
            </button>
            <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
              <MoreVertical className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          {/* Date separator */}
          <div className="flex items-center justify-center mb-6">
            <div className="bg-white px-4 py-2 rounded-full shadow-sm">
              <span className="text-sm text-gray-600">
                {isToday(new Date())
                  ? "Today"
                  : new Date().toLocaleDateString()}
              </span>
            </div>
          </div>

          {/* Messages */}
          {messages.map(renderMessage)}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white border-t border-gray-200 px-6 py-3">
        <div className="flex space-x-2">
          <button className="flex items-center space-x-2 px-3 py-2 bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-colors text-sm">
            <Calendar className="w-4 h-4" />
            <span>Schedule Session</span>
          </button>
          <button className="flex items-center space-x-2 px-3 py-2 bg-green-50 text-green-700 rounded-lg hover:bg-green-100 transition-colors text-sm">
            <Image className="w-4 h-4" />
            <span>Share Progress Photo</span>
          </button>
        </div>
      </div>

      {/* Message Input */}
      <div className="bg-white border-t border-gray-200 px-6 py-4">
        <div className="flex items-center space-x-4">
          <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
            <Paperclip className="w-5 h-5" />
          </button>
          <div className="flex-1 relative">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
              placeholder="Type your message..."
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-12"
            />
            <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600">
              <Smile className="w-5 h-5" />
            </button>
          </div>
          <button
            onClick={handleSendMessage}
            disabled={!message.trim()}
            className="bg-primary text-white p-3 rounded-lg hover:bg-primary/90 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatWithCoach;
