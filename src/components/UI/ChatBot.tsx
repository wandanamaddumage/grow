import React, { useState } from "react";
import { X, Send, Bot } from "lucide-react";

interface Message {
  id: number;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

interface ChatBotProps {
  onClose: () => void;
}

const ChatBot: React.FC<ChatBotProps> = ({ onClose }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hi! I'm your AI fitness assistant. How can I help you today?",
      isBot: true,
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");

  const quickResponses = [
    "Book a session",
    "Check my progress",
    "Nutrition tips",
    "Exercise guidance",
  ];

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      const userMessage: Message = {
        id: messages.length + 1,
        text: inputValue,
        isBot: false,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, userMessage]);

      // Simulate bot response
      setTimeout(() => {
        const botResponse: Message = {
          id: messages.length + 2,
          text: getBotResponse(inputValue),
          isBot: true,
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, botResponse]);
      }, 1000);

      setInputValue("");
    }
  };

  const getBotResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();
    if (input.includes("book") || input.includes("session")) {
      return "I'd be happy to help you book a session! You can schedule with your coach Mike Chen. Would you like me to show you available time slots?";
    } else if (input.includes("progress")) {
      return "Your progress is looking great! You've completed 24 sessions and are 85% towards your weight loss goal. Keep up the excellent work!";
    } else if (input.includes("nutrition") || input.includes("diet")) {
      return "For nutrition advice, I recommend focusing on lean proteins, complex carbs, and plenty of vegetables. Your coach can provide a personalized meal plan during your next session.";
    } else if (input.includes("exercise") || input.includes("workout")) {
      return "Based on your current program, your next workout focuses on upper body strength. Remember to warm up properly and maintain good form!";
    } else {
      return "I'm here to help with fitness questions, booking sessions, checking progress, and more. What would you like to know about your fitness journey?";
    }
  };

  const handleQuickResponse = (response: string) => {
    setInputValue(response);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md h-96 flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-mutedTeal rounded-full flex items-center justify-center">
              <Bot className="w-4 h-4 text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">
                AI Fitness Assistant
              </h3>
              <p className="text-xs text-green-500">Online</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${
                message.isBot ? "justify-start" : "justify-end"
              }`}
            >
              <div
                className={`max-w-xs px-3 py-2 rounded-lg ${
                  message.isBot
                    ? "bg-gray-100 text-gray-900"
                    : "bg-mutedTeal text-white"
                }`}
              >
                <p className="text-sm">{message.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Responses */}
        <div className="px-4 py-2 border-t bg-gray-50">
          <div className="flex flex-wrap gap-2 mb-2">
            {quickResponses.map((response, index) => (
              <button
                key={index}
                onClick={() => handleQuickResponse(response)}
                className="text-xs px-2 py-1 bg-white border border-gray-200 rounded-full hover:bg-gray-100 transition-colors"
              >
                {response}
              </button>
            ))}
          </div>
        </div>

        {/* Input */}
        <div className="p-4 border-t">
          <div className="flex items-center space-x-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
              placeholder="Type your message..."
              className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mutedTeal focus:border-transparent"
            />
            <button
              onClick={handleSendMessage}
              className="bg-mutedTeal text-white p-2 rounded-lg hover:bg-mutedTeal/90 transition-colors"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatBot;
