import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const PerformanceChart: React.FC = () => {
  const data = [
    { month: "Jan", revenue: 32000, sessions: 145, clients: 98 },
    { month: "Feb", revenue: 35000, sessions: 162, clients: 105 },
    { month: "Mar", revenue: 38000, sessions: 178, clients: 112 },
    { month: "Apr", revenue: 42000, sessions: 195, clients: 125 },
    { month: "May", revenue: 45000, sessions: 210, clients: 138 },
    { month: "Jun", revenue: 48000, sessions: 225, clients: 145 },
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold text-gray-900">
          Performance Overview
        </h3>
        <div className="flex space-x-4">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-mutedTeal rounded-full"></div>
            <span className="text-sm text-gray-600">Revenue</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="text-sm text-gray-600">Sessions</span>
          </div>
        </div>
      </div>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="revenue"
              stroke="#40A090"
              strokeWidth={2}
            />
            <Line
              type="monotone"
              dataKey="sessions"
              stroke="#10B981"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default PerformanceChart;
