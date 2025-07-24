import React, { useState } from "react";
import {
  DollarSign,
  TrendingUp,
  Calendar,
  Download,
  Filter,
  Eye,
} from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const EarningsReport: React.FC = () => {
  const [selectedPeriod, setSelectedPeriod] = useState("month");
  const [showDetailModal, setShowDetailModal] = useState(false);

  const monthlyEarnings = [
    { month: "Jan", earnings: 3200, sessions: 32, avgRate: 100 },
    { month: "Feb", earnings: 3600, sessions: 36, avgRate: 100 },
    { month: "Mar", earnings: 4200, sessions: 42, avgRate: 100 },
    { month: "Apr", earnings: 4800, sessions: 48, avgRate: 100 },
    { month: "May", earnings: 5200, sessions: 52, avgRate: 100 },
    { month: "Jun", earnings: 4800, sessions: 48, avgRate: 100 },
  ];

  const weeklyEarnings = [
    { week: "Week 1", earnings: 1200, sessions: 12 },
    { week: "Week 2", earnings: 1400, sessions: 14 },
    { week: "Week 3", earnings: 1100, sessions: 11 },
    { week: "Week 4", earnings: 1300, sessions: 13 },
  ];

  const sessionTypes = [
    { name: "Personal Training", value: 65, color: "#3B82F6" },
    { name: "HIIT Sessions", value: 20, color: "#10B981" },
    { name: "Consultations", value: 10, color: "#F59E0B" },
    { name: "Nutrition Coaching", value: 5, color: "#EF4444" },
  ];

  const recentSessions = [
    {
      id: "1",
      client: "Emma Wilson",
      date: "2024-01-15",
      type: "Personal Training",
      duration: 60,
      rate: 80,
      status: "paid",
    },
    {
      id: "2",
      client: "James Rodriguez",
      date: "2024-01-15",
      type: "HIIT Training",
      duration: 45,
      rate: 60,
      status: "paid",
    },
    {
      id: "3",
      client: "Lisa Thompson",
      date: "2024-01-14",
      type: "Consultation",
      duration: 30,
      rate: 40,
      status: "pending",
    },
    {
      id: "4",
      client: "Emma Wilson",
      date: "2024-01-12",
      type: "Personal Training",
      duration: 60,
      rate: 80,
      status: "paid",
    },
    {
      id: "5",
      client: "Mike Johnson",
      date: "2024-01-12",
      type: "Nutrition Coaching",
      duration: 45,
      rate: 70,
      status: "paid",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "paid":
        return "bg-green-100 text-green-800";
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      case "overdue":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const currentMonthEarnings = 4800;
  const lastMonthEarnings = 5200;
  const earningsChange = (
    ((currentMonthEarnings - lastMonthEarnings) / lastMonthEarnings) *
    100
  ).toFixed(1);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Earnings Report</h1>
          <p className="text-gray-600 mt-1">
            Track your coaching income and session performance
          </p>
        </div>
        <div className="flex space-x-3">
          <select
            value={selectedPeriod}
            onChange={(e) => setSelectedPeriod(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="week">This Week</option>
            <option value="month">This Month</option>
            <option value="quarter">This Quarter</option>
            <option value="year">This Year</option>
          </select>
          <button className="bg-mutedTeal text-white px-4 py-2 rounded-lg hover:bg-mutedTeal/90 transition-colors flex items-center space-x-2">
            <Download className="w-4 h-4" />
            <span>Export Report</span>
          </button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <DollarSign className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-600">This Month</p>
              <p className="text-2xl font-bold text-gray-900">
                ${currentMonthEarnings.toLocaleString()}
              </p>
              <p
                className={`text-sm ${
                  parseFloat(earningsChange) >= 0
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {parseFloat(earningsChange) >= 0 ? "+" : ""}
                {earningsChange}% from last month
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-mutedTeal/10 rounded-lg flex items-center justify-center">
              <Calendar className="w-6 h-6 text-mutedTeal" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-600">Sessions</p>
              <p className="text-2xl font-bold text-gray-900">48</p>
              <p className="text-sm text-mutedTeal">This month</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-600">Avg Rate</p>
              <p className="text-2xl font-bold text-gray-900">$100</p>
              <p className="text-sm text-purple-600">Per session</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
              <DollarSign className="w-6 h-6 text-orange-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-600">Pending</p>
              <p className="text-2xl font-bold text-gray-900">$240</p>
              <p className="text-sm text-orange-600">3 sessions</p>
            </div>
          </div>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Earnings Trend */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-gray-900">
              Earnings Trend
            </h3>
            <div className="flex space-x-2">
              <button className="text-sm text-mutedTeal hover:text-mutedTeal/80">
                Monthly
              </button>
              <span className="text-gray-300">|</span>
              <button className="text-sm text-gray-500 hover:text-gray-700">
                Weekly
              </button>
            </div>
          </div>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={monthlyEarnings}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip formatter={(value) => [`$${value}`, "Earnings"]} />
                <Line
                  type="monotone"
                  dataKey="earnings"
                  stroke="#3B82F6"
                  strokeWidth={3}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Session Types Distribution */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Session Types
          </h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={sessionTypes}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={120}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {sessionTypes.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => [`${value}%`, "Percentage"]} />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="grid grid-cols-2 gap-2 mt-4">
            {sessionTypes.map((type, index) => (
              <div key={index} className="flex items-center space-x-2">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: type.color }}
                ></div>
                <span className="text-sm text-gray-600">{type.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Sessions */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold text-gray-900">
            Recent Sessions
          </h3>
          <div className="flex space-x-2">
            <button className="flex items-center space-x-2 px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              <Filter className="w-4 h-4" />
              <span>Filter</span>
            </button>
            <button
              onClick={() => setShowDetailModal(true)}
              className="flex items-center space-x-2 px-3 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
            >
              <Eye className="w-4 h-4" />
              <span>View All</span>
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Client
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Session Type
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Duration
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Rate
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {recentSessions.map((session) => (
                <tr key={session.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {session.client}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {new Date(session.date).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {session.type}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {session.duration} min
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    ${session.rate}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(
                        session.status
                      )}`}
                    >
                      {session.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Weekly Breakdown */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          This Month's Weekly Breakdown
        </h3>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={weeklyEarnings}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="week" />
              <YAxis />
              <Tooltip formatter={(value) => [`$${value}`, "Earnings"]} />
              <Bar dataKey="earnings" fill="#23B685" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Goals and Targets */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Monthly Goals
        </h3>
        <div className="space-y-4">
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span className="text-gray-600">Earnings Goal</span>
              <span className="font-medium">$4,800 / $6,000</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-mutedTeal h-2 rounded-full"
                style={{ width: "80%" }}
              ></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span className="text-gray-600">Sessions Goal</span>
              <span className="font-medium">48 / 60</span>
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
              <span className="text-gray-600">New Clients Goal</span>
              <span className="font-medium">3 / 5</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-purple-600 h-2 rounded-full"
                style={{ width: "60%" }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* Detail Modal */}
      {showDetailModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  Detailed Earnings Report
                </h3>
                <button
                  onClick={() => setShowDetailModal(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  ✕
                </button>
              </div>

              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-600">
                      Total Earnings (YTD)
                    </p>
                    <p className="text-2xl font-bold text-gray-900">$28,800</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-600">
                      Total Sessions (YTD)
                    </p>
                    <p className="text-2xl font-bold text-gray-900">288</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-600">Average Monthly</p>
                    <p className="text-2xl font-bold text-gray-900">$4,800</p>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium text-gray-900 mb-3">
                    Monthly Breakdown
                  </h4>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-4 py-2 text-left">Month</th>
                          <th className="px-4 py-2 text-left">Earnings</th>
                          <th className="px-4 py-2 text-left">Sessions</th>
                          <th className="px-4 py-2 text-left">Avg Rate</th>
                          <th className="px-4 py-2 text-left">Growth</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        {monthlyEarnings.map((month, index) => (
                          <tr key={month.month}>
                            <td className="px-4 py-2 font-medium">
                              {month.month}
                            </td>
                            <td className="px-4 py-2">
                              ${month.earnings.toLocaleString()}
                            </td>
                            <td className="px-4 py-2">{month.sessions}</td>
                            <td className="px-4 py-2">${month.avgRate}</td>
                            <td className="px-4 py-2">
                              {index > 0 && (
                                <span
                                  className={`${
                                    month.earnings >
                                    monthlyEarnings[index - 1].earnings
                                      ? "text-green-600"
                                      : "text-red-600"
                                  }`}
                                >
                                  {month.earnings >
                                  monthlyEarnings[index - 1].earnings
                                    ? "+"
                                    : ""}
                                  {(
                                    ((month.earnings -
                                      monthlyEarnings[index - 1].earnings) /
                                      monthlyEarnings[index - 1].earnings) *
                                    100
                                  ).toFixed(1)}
                                  %
                                </span>
                              )}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              <div className="flex justify-end mt-6">
                <button
                  onClick={() => setShowDetailModal(false)}
                  className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EarningsReport;
