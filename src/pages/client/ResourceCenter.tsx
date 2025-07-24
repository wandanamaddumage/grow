import React, { useState } from "react";
import {
  Search,
  BookOpen,
  Video,
  Download,
  Clock,
  Star,
  Play,
} from "lucide-react";

const ResourceCenter: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedType, setSelectedType] = useState("all");

  const categories = [
    { id: "all", name: "All Categories" },
    { id: "fitness", name: "Fitness & Exercise" },
    { id: "nutrition", name: "Nutrition & Diet" },
    { id: "recovery", name: "Recovery & Wellness" },
    { id: "mindset", name: "Mindset & Motivation" },
    { id: "equipment", name: "Equipment & Gear" },
  ];

  const types = [
    { id: "all", name: "All Types" },
    { id: "article", name: "Articles" },
    { id: "video", name: "Videos" },
    { id: "guide", name: "Guides" },
    { id: "workout", name: "Workouts" },
  ];

  const resources = [
    {
      id: "1",
      title: "Complete Guide to HIIT Training",
      description:
        "Learn the fundamentals of high-intensity interval training and how to maximize your results.",
      category: "fitness",
      type: "guide",
      duration: "15 min read",
      rating: 4.8,
      image:
        "https://images.pexels.com/photos/416778/pexels-photo-416778.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
      author: "Mike Chen",
      publishDate: "2024-01-15",
      downloadable: true,
    },
    {
      id: "2",
      title: "Nutrition Basics for Beginners",
      description:
        "Essential nutrition principles every fitness enthusiast should know.",
      category: "nutrition",
      type: "video",
      duration: "12 min",
      rating: 4.9,
      image:
        "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
      author: "Sarah Johnson",
      publishDate: "2024-01-20",
      downloadable: false,
    },
    {
      id: "3",
      title: "30-Minute Full Body Workout",
      description:
        "A comprehensive workout routine you can do anywhere, no equipment needed.",
      category: "fitness",
      type: "workout",
      duration: "30 min",
      rating: 4.7,
      image:
        "https://images.pexels.com/photos/3768916/pexels-photo-3768916.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
      author: "Alex Rodriguez",
      publishDate: "2024-01-25",
      downloadable: true,
    },
    {
      id: "4",
      title: "Recovery and Sleep Optimization",
      description:
        "How proper recovery and sleep can accelerate your fitness progress.",
      category: "recovery",
      type: "article",
      duration: "8 min read",
      rating: 4.6,
      image:
        "https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
      author: "Dr. Lisa Park",
      publishDate: "2024-02-01",
      downloadable: false,
    },
    {
      id: "5",
      title: "Building Mental Resilience",
      description:
        "Develop the mindset needed to overcome fitness challenges and stay motivated.",
      category: "mindset",
      type: "video",
      duration: "18 min",
      rating: 4.9,
      image:
        "https://images.pexels.com/photos/3823488/pexels-photo-3823488.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
      author: "Mike Chen",
      publishDate: "2024-02-05",
      downloadable: false,
    },
    {
      id: "6",
      title: "Home Gym Equipment Guide",
      description:
        "Essential equipment recommendations for building an effective home gym.",
      category: "equipment",
      type: "guide",
      duration: "10 min read",
      rating: 4.5,
      image:
        "https://images.pexels.com/photos/4162481/pexels-photo-4162481.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
      author: "Tom Wilson",
      publishDate: "2024-02-10",
      downloadable: true,
    },
    {
      id: "7",
      title: "Meal Prep Made Simple",
      description:
        "Step-by-step guide to efficient meal preparation for busy schedules.",
      category: "nutrition",
      type: "article",
      duration: "12 min read",
      rating: 4.8,
      image:
        "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
      author: "Sarah Johnson",
      publishDate: "2024-02-12",
      downloadable: true,
    },
    {
      id: "8",
      title: "Yoga for Athletes",
      description:
        "How incorporating yoga can improve flexibility, balance, and performance.",
      category: "recovery",
      type: "video",
      duration: "25 min",
      rating: 4.7,
      image:
        "https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
      author: "Emma Davis",
      publishDate: "2024-02-15",
      downloadable: false,
    },
  ];

  const filteredResources = resources.filter((resource) => {
    const matchesSearch =
      resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || resource.category === selectedCategory;
    const matchesType =
      selectedType === "all" || resource.type === selectedType;
    return matchesSearch && matchesCategory && matchesType;
  });

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "video":
        return <Video className="w-4 h-4" />;
      case "guide":
        return <BookOpen className="w-4 h-4" />;
      case "workout":
        return <Play className="w-4 h-4" />;
      default:
        return <BookOpen className="w-4 h-4" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "video":
        return "bg-red-100 text-red-800";
      case "guide":
        return "bg-primary/10 text-primary";
      case "workout":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Resource Center</h1>
          <p className="text-gray-600 mt-1">
            Expand your fitness knowledge with expert guides and tutorials
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-600">
            {filteredResources.length} resources
          </span>
        </div>
      </div>

      {/* Featured Resource */}
      <div className="bg-gradient-to-r from-green-500 to-blue-500 rounded-lg p-8 text-white">
        <div className="max-w-2xl">
          <span className="inline-block px-3 py-1 bg-white bg-opacity-20 rounded-full text-sm font-medium mb-4">
            Featured Resource
          </span>
          <h2 className="text-2xl font-bold mb-2">
            Complete Fitness Transformation Guide
          </h2>
          <p className="text-paleYellow/90 mb-4">
            A comprehensive 12-week program designed to help you achieve your
            fitness goals with structured workouts, nutrition plans, and
            progress tracking.
          </p>
          <button className="bg-white text-primary px-6 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors">
            Access Now
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          <div className="flex-1 relative">
            <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search resources..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            {types.map((type) => (
              <option key={type.id} value={type.id}>
                {type.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Resources Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredResources.map((resource) => (
          <div
            key={resource.id}
            className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow"
          >
            <div className="relative">
              <img
                src={resource.image}
                alt={resource.title}
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-3 left-3">
                <span
                  className={`inline-flex items-center space-x-1 px-2 py-1 text-xs font-medium rounded-full ${getTypeColor(
                    resource.type
                  )}`}
                >
                  {getTypeIcon(resource.type)}
                  <span className="capitalize">{resource.type}</span>
                </span>
              </div>
              {resource.type === "video" && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-black bg-opacity-50 rounded-full flex items-center justify-center">
                    <Play className="w-8 h-8 text-white ml-1" />
                  </div>
                </div>
              )}
            </div>

            <div className="p-6">
              <div className="flex items-start justify-between mb-2">
                <h3 className="font-semibold text-gray-900 line-clamp-2">
                  {resource.title}
                </h3>
                {resource.downloadable && (
                  <Download className="w-4 h-4 text-gray-400 flex-shrink-0 ml-2" />
                )}
              </div>

              <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                {resource.description}
              </p>

              <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                <div className="flex items-center space-x-1">
                  <Clock className="w-4 h-4" />
                  <span>{resource.duration}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span>{resource.rating}</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    {resource.author}
                  </p>
                  <p className="text-xs text-gray-500">
                    {new Date(resource.publishDate).toLocaleDateString()}
                  </p>
                </div>
                <button className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors text-sm font-medium">
                  {resource.type === "video" ? "Watch" : "Read"}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Access Categories */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Quick Access
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.slice(1).map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className="flex flex-col items-center p-4 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors group"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-2 group-hover:bg-primary/20 transition-colors">
                <BookOpen className="w-6 h-6 text-primary" />
              </div>
              <span className="text-sm font-medium text-gray-900 text-center">
                {category.name}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResourceCenter;
