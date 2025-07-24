import React, { useState } from 'react';
import { Search, Filter, BookOpen, Video, Download, Clock, Star, Play, Upload, Plus } from 'lucide-react';

const CoachResources: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  const [showUploadModal, setShowUploadModal] = useState(false);

  const categories = [
    { id: 'all', name: 'All Categories' },
    { id: 'training', name: 'Training Techniques' },
    { id: 'nutrition', name: 'Nutrition & Diet' },
    { id: 'business', name: 'Business & Marketing' },
    { id: 'client-management', name: 'Client Management' },
    { id: 'continuing-education', name: 'Continuing Education' }
  ];

  const types = [
    { id: 'all', name: 'All Types' },
    { id: 'article', name: 'Articles' },
    { id: 'video', name: 'Videos' },
    { id: 'template', name: 'Templates' },
    { id: 'course', name: 'Courses' },
    { id: 'webinar', name: 'Webinars' }
  ];

  const resources = [
    {
      id: '1',
      title: 'Advanced HIIT Programming for Coaches',
      description: 'Comprehensive guide to designing effective HIIT programs for different fitness levels and goals.',
      category: 'training',
      type: 'course',
      duration: '2.5 hours',
      rating: 4.9,
      image: 'https://images.pexels.com/photos/416778/pexels-photo-416778.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
      author: 'Dr. Sarah Mitchell',
      publishDate: '2024-01-15',
      downloadable: true,
      featured: true
    },
    {
      id: '2',
      title: 'Client Onboarding Checklist Template',
      description: 'Complete template for streamlining your client onboarding process.',
      category: 'client-management',
      type: 'template',
      duration: 'Template',
      rating: 4.8,
      image: 'https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
      author: 'Mike Chen',
      publishDate: '2024-01-20',
      downloadable: true,
      featured: false
    },
    {
      id: '3',
      title: 'Nutrition Coaching Fundamentals',
      description: 'Essential principles every fitness coach should know about nutrition counseling.',
      category: 'nutrition',
      type: 'video',
      duration: '45 min',
      rating: 4.7,
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
      author: 'Lisa Rodriguez',
      publishDate: '2024-01-25',
      downloadable: false,
      featured: true
    },
    {
      id: '4',
      title: 'Building Your Coaching Business',
      description: 'Strategies for growing your personal training business and attracting clients.',
      category: 'business',
      type: 'webinar',
      duration: '1 hour',
      rating: 4.6,
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
      author: 'Tom Wilson',
      publishDate: '2024-02-01',
      downloadable: false,
      featured: false
    },
    {
      id: '5',
      title: 'Injury Prevention and Recovery',
      description: 'Best practices for keeping your clients safe and helping them recover from injuries.',
      category: 'training',
      type: 'article',
      duration: '15 min read',
      rating: 4.9,
      image: 'https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
      author: 'Dr. Alex Park',
      publishDate: '2024-02-05',
      downloadable: true,
      featured: true
    },
    {
      id: '6',
      title: 'Session Planning Template',
      description: 'Structured template for planning effective training sessions.',
      category: 'client-management',
      type: 'template',
      duration: 'Template',
      rating: 4.5,
      image: 'https://images.pexels.com/photos/4327024/pexels-photo-4327024.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
      author: 'Emma Davis',
      publishDate: '2024-02-10',
      downloadable: true,
      featured: false
    }
  ];

  const filteredResources = resources.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || resource.category === selectedCategory;
    const matchesType = selectedType === 'all' || resource.type === selectedType;
    return matchesSearch && matchesCategory && matchesType;
  });

  const featuredResources = resources.filter(resource => resource.featured);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'video': return <Video className="w-4 h-4" />;
      case 'course': return <BookOpen className="w-4 h-4" />;
      case 'template': return <Download className="w-4 h-4" />;
      case 'webinar': return <Play className="w-4 h-4" />;
      default: return <BookOpen className="w-4 h-4" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'video': return 'bg-red-100 text-red-800';
      case 'course': return 'bg-green-100 text-green-900';
      case 'template': return 'bg-green-100 text-green-800';
      case 'webinar': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Coach Resources</h1>
          <p className="text-gray-600 mt-1">Expand your coaching knowledge and skills</p>
        </div>
        <div className="flex space-x-3">
          <button
            onClick={() => setShowUploadModal(true)}
            className="bg-mutedTeal text-white px-4 py-2 rounded-lg hover:bg-mutedTeal/90 transition-colors flex items-center space-x-2"
          >
            <Upload className="w-4 h-4" />
            <span>Upload Resource</span>
          </button>
          {/* <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center space-x-2"> */}
          <button className="border border-green-600 text-green-600 px-4 py-2 rounded-lg hover:bg-green-50 transition-colors flex items-center space-x-2">
            <Plus className="w-4 h-4" />
            <span>Request Resource</span>
          </button>
        </div>
      </div>

      {/* Featured Resources */}
      <div className="bg-gradient-to-r from-green-500 to-blue-500 rounded-lg p-8 text-white">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-bold mb-2">Featured Learning Path</h2>
          <p className="text-paleYellow/90 mb-4">
            Master advanced coaching techniques with our curated collection of expert-led courses and resources.
          </p>
          <button className="bg-white text-green-600 px-6 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors">
            Start Learning
          </button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-600">Total Resources</p>
              <p className="text-2xl font-bold text-gray-900">{resources.length}</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <Download className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-600">Downloaded</p>
              <p className="text-2xl font-bold text-gray-900">24</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <Video className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-600">Hours Watched</p>
              <p className="text-2xl font-bold text-gray-900">18.5</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
              <Star className="w-6 h-6 text-orange-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-600">Avg Rating</p>
              <p className="text-2xl font-bold text-gray-900">4.8</p>
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
              placeholder="Search resources..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
          >
            {categories.map(category => (
              <option key={category.id} value={category.id}>{category.name}</option>
            ))}
          </select>
          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
          >
            {types.map(type => (
              <option key={type.id} value={type.id}>{type.name}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Featured Resources Section */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Featured Resources</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {featuredResources.slice(0, 3).map((resource) => (
            <div key={resource.id} className="border border-yellow-200 bg-yellow-50 rounded-lg p-4">
              <div className="flex items-center space-x-2 mb-2">
                <Star className="w-4 h-4 text-yellow-500 fill-current" />
                <span className="text-sm font-medium text-yellow-800">Featured</span>
              </div>
              <h4 className="font-medium text-gray-900 mb-1">{resource.title}</h4>
              <p className="text-sm text-gray-600 mb-2">{resource.description}</p>
              <div className="flex items-center justify-between">
                <span className={`inline-flex items-center space-x-1 px-2 py-1 text-xs font-medium rounded-full ${getTypeColor(resource.type)}`}>
                  {getTypeIcon(resource.type)}
                  <span className="capitalize">{resource.type}</span>
                </span>
                <button className="text-green-600 hover:text-green-700 text-sm font-medium">
                  Access
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Resources Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredResources.map((resource) => (
          <div key={resource.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
            <div className="relative">
              <img
                src={resource.image}
                alt={resource.title}
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-3 left-3">
                <span className={`inline-flex items-center space-x-1 px-2 py-1 text-xs font-medium rounded-full ${getTypeColor(resource.type)}`}>
                  {getTypeIcon(resource.type)}
                  <span className="capitalize">{resource.type}</span>
                </span>
              </div>
              {resource.featured && (
                <div className="absolute top-3 right-3">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                </div>
              )}
              {(resource.type === 'video' || resource.type === 'webinar') && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-black bg-opacity-50 rounded-full flex items-center justify-center">
                    <Play className="w-8 h-8 text-white ml-1" />
                  </div>
                </div>
              )}
            </div>
            
            <div className="p-6">
              <div className="flex items-start justify-between mb-2">
                <h3 className="font-semibold text-gray-900 line-clamp-2">{resource.title}</h3>
                {resource.downloadable && (
                  <Download className="w-4 h-4 text-gray-400 flex-shrink-0 ml-2" />
                )}
              </div>
              
              <p className="text-sm text-gray-600 mb-4 line-clamp-2">{resource.description}</p>
              
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
                  <p className="text-sm font-medium text-gray-900">{resource.author}</p>
                  <p className="text-xs text-gray-500">{new Date(resource.publishDate).toLocaleDateString()}</p>
                </div>
                <button className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors text-sm font-medium">
                  {resource.type === 'video' || resource.type === 'webinar' ? 'Watch' : 
                   resource.type === 'template' ? 'Download' : 'Access'}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Upload Resource Modal */}
      {showUploadModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Upload Resource</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Resource Title
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Enter resource title"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Category
                  </label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent">
                    {categories.slice(1).map(category => (
                      <option key={category.id} value={category.id}>{category.name}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Resource Type
                  </label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent">
                    {types.slice(1).map(type => (
                      <option key={type.id} value={type.id}>{type.name}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Description
                  </label>
                  <textarea
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    rows={3}
                    placeholder="Brief description of the resource"
                  ></textarea>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    File Upload
                  </label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                    <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                    <p className="text-sm text-gray-600">Click to upload or drag and drop</p>
                    <p className="text-xs text-gray-500">PDF, DOC, MP4, or ZIP files</p>
                  </div>
                </div>
              </form>
              <div className="flex space-x-3 mt-6">
                <button
                  onClick={() => setShowUploadModal(false)}
                  className="flex-1 px-4 py-2 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={() => setShowUploadModal(false)}
                  className="flex-1 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Upload
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CoachResources;