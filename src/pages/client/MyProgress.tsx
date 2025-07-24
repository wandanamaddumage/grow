import React, { useState } from "react";
import {
  TrendingUp,
  Target,
  Calendar,
  Award,
  ChevronDown,
  ChevronUp,
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
} from "recharts";

const MyProgress: React.FC = () => {
  const [selectedTimeframe, setSelectedTimeframe] = useState("3months");
  const [expandedGoal, setExpandedGoal] = useState<string | null>(null);

  const progressData = [
    { date: "Week 1", weight: 165, strength: 100, cardio: 85 },
    { date: "Week 2", weight: 164, strength: 105, cardio: 88 },
    { date: "Week 3", weight: 163, strength: 110, cardio: 92 },
    { date: "Week 4", weight: 162, strength: 115, cardio: 95 },
    { date: "Week 5", weight: 161, strength: 120, cardio: 98 },
    { date: "Week 6", weight: 160, strength: 125, cardio: 102 },
    { date: "Week 7", weight: 159, strength: 130, cardio: 105 },
    { date: "Week 8", weight: 158, strength: 135, cardio: 108 },
    { date: "Week 9", weight: 157, strength: 140, cardio: 112 },
    { date: "Week 10", weight: 157, strength: 145, cardio: 115 },
    { date: "Week 11", weight: 156, strength: 150, cardio: 118 },
    { date: "Week 12", weight: 155, strength: 155, cardio: 122 },
  ];

  const workoutData = [
    { month: "Jan", sessions: 8, duration: 480 },
    { month: "Feb", sessions: 10, duration: 600 },
    { month: "Mar", sessions: 12, duration: 720 },
    { month: "Apr", sessions: 14, duration: 840 },
    { month: "May", sessions: 16, duration: 960 },
    { month: "Jun", sessions: 18, duration: 1080 },
  ];

  const goals = [
    {
      id: "1",
      title: "Weight Loss Goal",
      target: "Lose 15 pounds",
      current: "10 pounds lost",
      progress: 67,
      deadline: "2024-03-01",
      status: "on-track",
      milestones: [
        { weight: 160, date: "2024-01-15", achieved: true },
        { weight: 155, date: "2024-02-15", achieved: true },
        { weight: 150, date: "2024-03-01", achieved: false },
      ],
    },
    {
      id: "2",
      title: "Strength Training",
      target: "Bench press 150 lbs",
      current: "135 lbs",
      progress: 90,
      deadline: "2024-02-15",
      status: "ahead",
      milestones: [
        { weight: 120, date: "2024-01-01", achieved: true },
        { weight: 135, date: "2024-01-20", achieved: true },
        { weight: 150, date: "2024-02-15", achieved: false },
      ],
    },
    {
      id: "3",
      title: "Cardio Endurance",
      target: "Run 5K in under 25 minutes",
      current: "27:30 current time",
      progress: 45,
      deadline: "2024-04-01",
      status: "needs-attention",
      milestones: [
        { time: "30:00", date: "2024-01-01", achieved: true },
        { time: "27:30", date: "2024-02-01", achieved: true },
        { time: "25:00", date: "2024-04-01", achieved: false },
      ],
    },
  ];

  const achievements = [
    {
      id: "1",
      title: "First 10 Sessions",
      description: "Completed your first 10 training sessions",
      date: "2024-01-15",
      icon: "🎯",
      category: "milestone",
    },
    {
      id: "2",
      title: "Weight Loss Champion",
      description: "Lost 10 pounds in your first month",
      date: "2024-01-30",
      icon: "⚖️",
      category: "achievement",
    },
    {
      id: "3",
      title: "Consistency King",
      description: "14-day workout streak",
      date: "2024-02-05",
      icon: "🔥",
      category: "streak",
    },
    {
      id: "4",
      title: "Strength Milestone",
      description: "Increased bench press by 25 lbs",
      date: "2024-02-10",
      icon: "💪",
      category: "strength",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "ahead":
        return "text-green-600 bg-green-100";
      case "on-track":
        return "text-primary bg-primary/10";
      case "needs-attention":
        return "text-orange-600 bg-orange-100";
      default:
        return "text-gray-600 bg-gray-100";
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "milestone":
        return "🎯";
      case "achievement":
        return "🏆";
      case "streak":
        return "🔥";
      case "strength":
        return "💪";
      default:
        return "⭐";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">My Progress</h1>
          <p className="text-gray-600 mt-1">
            Track your fitness journey and celebrate achievements
          </p>
        </div>
        <select
          value={selectedTimeframe}
          onChange={(e) => setSelectedTimeframe(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="1month">Last Month</option>
          <option value="3months">Last 3 Months</option>
          <option value="6months">Last 6 Months</option>
          <option value="1year">Last Year</option>
        </select>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-600">Weight Lost</p>
              <p className="text-2xl font-bold text-gray-900">10 lbs</p>
              <p className="text-sm text-green-600">-6% from start</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
              <Target className="w-6 h-6 text-primary" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-600">Strength Gain</p>
              <p className="text-2xl font-bold text-gray-900">+55%</p>
              <p className="text-sm text-primary">Above target</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <Calendar className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-600">Sessions</p>
              <p className="text-2xl font-bold text-gray-900">24</p>
              <p className="text-sm text-purple-600">92% attendance</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
              <Award className="w-6 h-6 text-orange-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-600">Achievements</p>
              <p className="text-2xl font-bold text-gray-900">8</p>
              <p className="text-sm text-orange-600">+2 this month</p>
            </div>
          </div>
        </div>
      </div>

      {/* Progress Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Weight & Fitness Progress
          </h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={progressData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="weight"
                  stroke="#EF4444"
                  strokeWidth={2}
                  name="Weight (lbs)"
                />
                <Line
                  type="monotone"
                  dataKey="strength"
                  stroke="#3B82F6"
                  strokeWidth={2}
                  name="Strength Index"
                />
                <Line
                  type="monotone"
                  dataKey="cardio"
                  stroke="#10B981"
                  strokeWidth={2}
                  name="Cardio Fitness"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Monthly Workout Summary
          </h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={workoutData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="sessions" fill="#23B685" name="Sessions" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Goals Progress */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Current Goals
        </h3>
        <div className="space-y-4">
          {goals.map((goal) => (
            <div
              key={goal.id}
              className="border border-gray-200 rounded-lg p-4"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex-1">
                  <h4 className="font-medium text-gray-900">{goal.title}</h4>
                  <p className="text-sm text-gray-600">{goal.target}</p>
                </div>
                <div className="flex items-center space-x-3">
                  <span
                    className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(
                      goal.status
                    )}`}
                  >
                    {goal.status.replace("-", " ")}
                  </span>
                  <button
                    onClick={() =>
                      setExpandedGoal(expandedGoal === goal.id ? null : goal.id)
                    }
                    className="text-gray-400 hover:text-gray-600"
                  >
                    {expandedGoal === goal.id ? (
                      <ChevronUp className="w-5 h-5" />
                    ) : (
                      <ChevronDown className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>

              <div className="mb-3">
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-600">{goal.current}</span>
                  <span className="font-medium">{goal.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full transition-all duration-500 ${
                      goal.status === "ahead"
                        ? "bg-green-500"
                        : goal.status === "on-track"
                        ? "bg-primary"
                        : "bg-orange-500"
                    }`}
                    style={{ width: `${goal.progress}%` }}
                  ></div>
                </div>
              </div>

              {expandedGoal === goal.id && (
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <h5 className="font-medium text-gray-900 mb-2">Milestones</h5>
                  <div className="space-y-2">
                    {goal.milestones.map((milestone, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div
                          className={`w-4 h-4 rounded-full ${
                            milestone.achieved ? "bg-green-500" : "bg-gray-300"
                          }`}
                        ></div>
                        <span
                          className={`text-sm ${
                            milestone.achieved
                              ? "text-gray-900"
                              : "text-gray-500"
                          }`}
                        >
                          {milestone.weight
                            ? `${milestone.weight} lbs`
                            : milestone.time}{" "}
                          by {new Date(milestone.date).toLocaleDateString()}
                        </span>
                        {milestone.achieved && (
                          <span className="text-xs text-green-600 font-medium">
                            ✓ Achieved
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Recent Achievements */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Recent Achievements
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {achievements.map((achievement) => (
            <div
              key={achievement.id}
              className="flex items-start space-x-4 p-4 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg border border-yellow-200"
            >
              <div className="text-3xl">{achievement.icon}</div>
              <div className="flex-1">
                <h4 className="font-medium text-gray-900">
                  {achievement.title}
                </h4>
                <p className="text-sm text-gray-600 mb-2">
                  {achievement.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">
                    {new Date(achievement.date).toLocaleDateString()}
                  </span>
                  <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full">
                    {achievement.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyProgress;
