import React, { useState } from "react";
import {
  Search,
  Filter,
  Plus,
  Mail,
  Phone,
  Calendar,
  TrendingUp,
  Target,
  MessageSquare,
  MoreVertical,
} from "lucide-react";
import { clients } from "../../data/mockData";

const CoachClients: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [selectedClient, setSelectedClient] = useState<string | null>(null);

  const filteredClients = clients.filter((client) => {
    const matchesSearch =
      client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      client.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus =
      selectedStatus === "all" || client.status === selectedStatus;
    return matchesSearch && matchesStatus;
  });

  const handleAddProgressNote = (clientId: string) => {
    // Handle adding progress note
    console.log("Adding progress note for client:", clientId);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">My Clients</h1>
          <p className="text-gray-600 mt-1">
            Manage and track your client relationships
          </p>
        </div>
        <button className="bg-mutedTeal text-white px-4 py-2 rounded-lg hover:bg-mutedTeal/90 transition-colors flex items-center space-x-2">
          <Plus className="w-4 h-4" />
          <span>Add Client Note</span>
        </button>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-mutedTeal/10 rounded-lg flex items-center justify-center">
              <Target className="w-6 h-6 text-mutedTeal" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-600">Total Clients</p>
              <p className="text-2xl font-bold text-gray-900">
                {clients.length}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-600">
                Active Clients
              </p>
              <p className="text-2xl font-bold text-gray-900">
                {clients.filter((c) => c.status === "active").length}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <Calendar className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-600">
                Sessions This Week
              </p>
              <p className="text-2xl font-bold text-gray-900">23</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
              <MessageSquare className="w-6 h-6 text-orange-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-600">
                Avg Response Time
              </p>
              <p className="text-2xl font-bold text-gray-900">2.3h</p>
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          <div className="flex-1 relative">
            <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search clients..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-mutedTeal focus:border-transparent"
            />
          </div>
          <select
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mutedTeal focus:border-transparent"
          >
            <option value="all">All Status</option>
            <option value="active">Active</option>
            <option value="trial">Trial</option>
            <option value="inactive">Inactive</option>
          </select>
          <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            <Filter className="w-4 h-4" />
            <span>More Filters</span>
          </button>
        </div>
      </div>

      {/* Client Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredClients.map((client) => (
          <div
            key={client.id}
            className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                <img
                  src={
                    client.avatar ||
                    "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&fit=crop"
                  }
                  alt={client.name}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h3 className="font-semibold text-gray-900">{client.name}</h3>
                  <p className="text-sm text-gray-500">
                    Joined {new Date(client.joinDate).toLocaleDateString()}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <span
                  className={`px-2 py-1 text-xs font-medium rounded-full ${
                    client.status === "active"
                      ? "bg-green-100 text-green-800"
                      : client.status === "trial"
                      ? "bg-yellow-100 text-yellow-800"
                      : "bg-gray-100 text-gray-800"
                  }`}
                >
                  {client.status}
                </span>
                <button className="p-1 hover:bg-gray-100 rounded">
                  <MoreVertical className="w-4 h-4 text-gray-400" />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="text-center p-3 bg-mutedTeal/10 rounded-lg">
                <p className="text-lg font-bold text-mutedTeal">
                  {client.totalSessions}
                </p>
                <p className="text-xs text-gray-600">Total Sessions</p>
              </div>
              <div className="text-center p-3 bg-green-50 rounded-lg">
                <p className="text-lg font-bold text-green-600">
                  {client.upcomingSessions}
                </p>
                <p className="text-xs text-gray-600">Upcoming</p>
              </div>
            </div>

            <div className="mb-4">
              <p className="text-sm text-gray-600 mb-2">Current Goals:</p>
              <div className="flex flex-wrap gap-1">
                {client.goals.slice(0, 2).map((goal, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 text-xs bg-purple-100 text-purple-800 rounded"
                  >
                    {goal}
                  </span>
                ))}
                {client.goals.length > 2 && (
                  <span className="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded">
                    +{client.goals.length - 2} more
                  </span>
                )}
              </div>
            </div>

            {client.notes && (
              <div className="mb-4 p-3 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-700">{client.notes}</p>
              </div>
            )}

            <div className="flex space-x-2">
              <button className="flex-1 flex items-center justify-center space-x-1 py-2 text-sm text-mutedTeal border border-mutedTeal/20 rounded hover:bg-mutedTeal/5 transition-colors">
                <MessageSquare className="w-4 h-4" />
                <span>Message</span>
              </button>
              <button className="flex-1 flex items-center justify-center space-x-1 py-2 text-sm text-green-600 border border-green-200 rounded hover:bg-green-50 transition-colors">
                <Calendar className="w-4 h-4" />
                <span>Schedule</span>
              </button>
              <button
                onClick={() => handleAddProgressNote(client.id)}
                className="flex-1 flex items-center justify-center space-x-1 py-2 text-sm text-purple-600 border border-purple-200 rounded hover:bg-purple-50 transition-colors"
              >
                <TrendingUp className="w-4 h-4" />
                <span>Progress</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredClients.length === 0 && (
        <div className="bg-white rounded-lg shadow-sm p-12 text-center">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Search className="w-8 h-8 text-gray-400" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            No clients found
          </h3>
          <p className="text-gray-500">Try adjusting your search criteria.</p>
        </div>
      )}
    </div>
  );
};

export default CoachClients;
