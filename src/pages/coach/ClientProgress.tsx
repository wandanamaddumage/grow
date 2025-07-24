import React, { useState } from "react";
import {
  Calendar,
  Target,
  TrendingUp,
  Plus,
  Eye,
  Filter,
  Edit,
} from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { clients } from "../../data/mockData";

const ClientProgress: React.FC = () => {
  const [selectedClient, setSelectedClient] = useState(clients[0]);
  const [showAddNote, setShowAddNote] = useState(false);

  const progressData = [
    { week: "Week 1", weight: 165, strength: 100, endurance: 85 },
    { week: "Week 2", weight: 164, strength: 105, endurance: 88 },
    { week: "Week 3", weight: 163, strength: 110, endurance: 92 },
    { week: "Week 4", weight: 162, strength: 115, endurance: 95 },
    { week: "Week 5", weight: 161, strength: 120, endurance: 98 },
    { week: "Week 6", weight: 160, strength: 125, endurance: 102 },
    { week: "Week 7", weight: 159, strength: 130, endurance: 105 },
    { week: "Week 8", weight: 158, strength: 135, endurance: 108 },
  ];

  const sessionNotes = [
    {
      id: "1",
      date: "2024-01-15",
      sessionType: "Personal Training",
      duration: 60,
      focus: "Upper Body Strength",
      notes:
        "Great improvement in bench press form. Increased weight by 10lbs. Client showed excellent motivation and completed all sets.",
      achievements: ["Bench Press PR", "Perfect Form"],
      nextGoals: ["Increase reps", "Add new exercises"],
    },
    {
      id: "2",
      date: "2024-01-12",
      sessionType: "HIIT Training",
      duration: 45,
      focus: "Cardio Endurance",
      notes:
        "High energy session. Client completed all intervals with minimal rest. Heart rate recovery improved significantly.",
      achievements: ["Completed all intervals", "Better recovery time"],
      nextGoals: ["Increase intensity", "Longer intervals"],
    },
    {
      id: "3",
      date: "2024-01-10",
      sessionType: "Personal Training",
      duration: 60,
      focus: "Lower Body",
      notes:
        "Focused on squat technique. Client is getting more comfortable with proper form. Added 5lbs to working weight.",
      achievements: ["Improved squat depth", "Weight increase"],
      nextGoals: ["Perfect form consistency", "Add variations"],
    },
  ];

  const milestones = [
    {
      id: "1",
      title: "Weight Loss Goal",
      target: "Lose 15 pounds",
      current: 10,
      progress: 67,
      deadline: "2024-03-01",
      status: "on-track",
    },
    {
      id: "2",
      title: "Strength Training",
      target: "Bench press 150 lbs",
      current: 135,
      progress: 90,
      deadline: "2024-02-15",
      status: "ahead",
    },
    {
      id: "3",
      title: "Cardio Endurance",
      target: "Run 5K in under 25 minutes",
      current: 27.5,
      progress: 45,
      deadline: "2024-04-01",
      status: "needs-attention",
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

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Client Progress</h1>
          <p className="text-gray-600 mt-1">
            Track and manage your clients' fitness journeys
          </p>
        </div>
        <button
          onClick={() => setShowAddNote(true)}
          className="bg-mutedTeal text-white px-4 py-2 rounded-lg hover:bg-mutedTeal/90 transition-colors flex items-center space-x-2"
        >
          <Plus className="w-4 h-4" />
          <span>Add Progress Note</span>
        </button>
      </div>

      {/* Client Selector */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-3">
            <img
              src={selectedClient.avatar}
              alt={selectedClient.name}
              className="w-12 h-12 rounded-full"
            />
            <div>
              <h3 className="font-semibold text-gray-900">
                {selectedClient.name}
              </h3>
              <p className="text-sm text-gray-500">
                Member since{" "}
                {new Date(selectedClient.joinDate).toLocaleDateString()}
              </p>
            </div>
          </div>
          <select
            value={selectedClient.id}
            onChange={(e) => {
              const client = clients.find((c) => c.id === e.target.value);
              if (client) setSelectedClient(client);
            }}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            {clients.map((client) => (
              <option key={client.id} value={client.id}>
                {client.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Progress Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
              <Calendar className="w-6 h-6 text-primary" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-600">
                Total Sessions
              </p>
              <p className="text-2xl font-bold text-gray-900">
                {selectedClient.totalSessions}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-600">Weight Lost</p>
              <p className="text-2xl font-bold text-gray-900">10 lbs</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <Target className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-600">
                Goals Achieved
              </p>
              <p className="text-2xl font-bold text-gray-900">5/8</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
              <Calendar className="w-6 h-6 text-orange-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-600">Attendance</p>
              <p className="text-2xl font-bold text-gray-900">92%</p>
            </div>
          </div>
        </div>
      </div>

      {/* Progress Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Progress Trends
          </h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={progressData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="week" />
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
                  dataKey="endurance"
                  stroke="#10B981"
                  strokeWidth={2}
                  name="Endurance Score"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Current Milestones
          </h3>
          <div className="space-y-4">
            {milestones.map((milestone) => (
              <div
                key={milestone.id}
                className="border border-gray-200 rounded-lg p-4"
              >
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium text-gray-900">
                    {milestone.title}
                  </h4>
                  <span
                    className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(
                      milestone.status
                    )}`}
                  >
                    {milestone.status.replace("-", " ")}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-2">{milestone.target}</p>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-600">Progress</span>
                  <span className="font-medium">{milestone.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full transition-all duration-500 ${
                      milestone.status === "ahead"
                        ? "bg-green-500"
                        : milestone.status === "on-track"
                        ? "bg-primary"
                        : "bg-orange-500"
                    }`}
                    style={{ width: `${milestone.progress}%` }}
                  ></div>
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  Deadline: {new Date(milestone.deadline).toLocaleDateString()}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Session Notes */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Session Notes</h3>
          <div className="flex space-x-2">
            <button className="flex items-center space-x-2 px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              <Filter className="w-4 h-4" />
              <span>Filter</span>
            </button>
            <button className="flex items-center space-x-2 px-3 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
              <Eye className="w-4 h-4" />
              <span>View All</span>
            </button>
          </div>
        </div>

        <div className="space-y-4">
          {sessionNotes.map((note) => (
            <div
              key={note.id}
              className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <div className="flex items-center space-x-3 mb-1">
                    <h4 className="font-medium text-gray-900">
                      {note.sessionType}
                    </h4>
                    <span className="text-sm text-gray-500">•</span>
                    <span className="text-sm text-gray-500">
                      {note.duration} minutes
                    </span>
                    <span className="text-sm text-gray-500">•</span>
                    <span className="text-sm text-gray-500">
                      {new Date(note.date).toLocaleDateString()}
                    </span>
                  </div>
                  <p className="text-sm font-medium text-primary">
                    {note.focus}
                  </p>
                </div>
                <button className="text-gray-400 hover:text-gray-600">
                  <Edit className="w-4 h-4" />
                </button>
              </div>

              <p className="text-gray-700 mb-3">{note.notes}</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-medium text-gray-900 mb-2">
                    Achievements:
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {note.achievements.map((achievement, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 text-xs bg-primary/10 text-primary rounded"
                      >
                        {achievement}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900 mb-2">
                    Next Goals:
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {note.nextGoals.map((goal, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 text-xs bg-green-100 text-green-800 rounded"
                      >
                        {goal}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Add Progress Note Modal */}
      {showAddNote && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Add Progress Note
              </h3>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Client
                    </label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                      {clients.map((client) => (
                        <option key={client.id} value={client.id}>
                          {client.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Session Type
                    </label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                      <option>Personal Training</option>
                      <option>HIIT Training</option>
                      <option>Consultation</option>
                      <option>Nutrition Coaching</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Session Date
                    </label>
                    <input
                      type="date"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Duration (minutes)
                    </label>
                    <input
                      type="number"
                      placeholder="60"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Session Focus
                  </label>
                  <input
                    type="text"
                    placeholder="e.g., Upper Body Strength, Cardio Endurance"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Session Notes
                  </label>
                  <textarea
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    rows={4}
                    placeholder="Detailed notes about the session, client performance, observations..."
                  ></textarea>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Achievements (comma-separated)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g., Bench Press PR, Perfect Form, Completed all sets"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Next Session Goals (comma-separated)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g., Increase weight, Add new exercises, Focus on form"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </form>
              <div className="flex space-x-3 mt-6">
                <button
                  onClick={() => setShowAddNote(false)}
                  className="flex-1 px-4 py-2 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={() => setShowAddNote(false)}
                  className="flex-1 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Save Note
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ClientProgress;
