import React, { useState } from "react";
import {
  Search,
  HelpCircle,
  MessageCircle,
  Phone,
  Mail,
  ChevronDown,
  ChevronRight,
  Clock,
} from "lucide-react";

const SupportCenter: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [expandedFaq, setExpandedFaq] = useState<string | null>(null);
  const [showContactForm, setShowContactForm] = useState(false);

  const categories = [
    { id: "all", name: "All Topics" },
    { id: "account", name: "Account & Billing" },
    { id: "sessions", name: "Sessions & Booking" },
    { id: "technical", name: "Technical Support" },
    { id: "fitness", name: "Fitness & Training" },
    { id: "nutrition", name: "Nutrition & Diet" },
  ];

  const faqs = [
    {
      id: "1",
      question: "How do I book a training session?",
      answer:
        'You can book a session by going to the "Book Session" page, selecting your preferred date, time, and coach. You can also use the persistent "Book a Free Session" button available throughout the app.',
      category: "sessions",
      helpful: 24,
      notHelpful: 2,
    },
    {
      id: "2",
      question: "Can I cancel or reschedule my session?",
      answer:
        "Yes, you can cancel or reschedule your session up to 24 hours before the scheduled time without any penalty. To do this, go to your dashboard and click on the upcoming session.",
      category: "sessions",
      helpful: 18,
      notHelpful: 1,
    },
    {
      id: "3",
      question: "How do I track my progress?",
      answer:
        'Your progress is automatically tracked through the "My Progress" section. You can view your weight changes, strength improvements, session attendance, and achievements all in one place.',
      category: "fitness",
      helpful: 32,
      notHelpful: 0,
    },
    {
      id: "4",
      question: "What should I do if I forgot my password?",
      answer:
        'Click on "Forgot Password" on the login page and enter your email address. You\'ll receive a password reset link within a few minutes.',
      category: "account",
      helpful: 15,
      notHelpful: 1,
    },
    {
      id: "5",
      question: "How do I update my payment information?",
      answer:
        'Go to your account settings and select "Payment Methods". You can add, remove, or update your payment information there.',
      category: "account",
      helpful: 12,
      notHelpful: 0,
    },
    {
      id: "6",
      question: "Can I switch coaches?",
      answer:
        "Yes, you can request a coach change by contacting our support team. We'll help you find a coach that better matches your fitness goals and preferences.",
      category: "sessions",
      helpful: 9,
      notHelpful: 2,
    },
    {
      id: "7",
      question: "What equipment do I need for online sessions?",
      answer:
        "For most online sessions, you'll need basic equipment like resistance bands, dumbbells, or bodyweight exercises. Your coach will provide a specific equipment list based on your program.",
      category: "fitness",
      helpful: 21,
      notHelpful: 1,
    },
    {
      id: "8",
      question: "How do I access the nutrition resources?",
      answer:
        'Visit the Resource Center and filter by "Nutrition & Diet" category. You\'ll find meal plans, recipes, and nutritional guidance from our certified nutritionists.',
      category: "nutrition",
      helpful: 16,
      notHelpful: 0,
    },
    {
      id: "9",
      question: "The app is running slowly, what should I do?",
      answer:
        "Try refreshing your browser or clearing your cache. If the problem persists, check your internet connection or contact our technical support team.",
      category: "technical",
      helpful: 8,
      notHelpful: 3,
    },
    {
      id: "10",
      question: "How do I earn achievements?",
      answer:
        'Achievements are earned automatically as you reach fitness milestones, complete sessions, and maintain workout streaks. Check the "My Achievements" page to see your progress.',
      category: "fitness",
      helpful: 25,
      notHelpful: 1,
    },
  ];

  const contactOptions = [
    {
      type: "chat",
      title: "Live Chat",
      description: "Get instant help from our support team",
      availability: "Available 24/7",
      icon: MessageCircle,
      color: "bg-primary",
    },
    {
      type: "email",
      title: "Email Support",
      description: "Send us a detailed message",
      availability: "Response within 24 hours",
      icon: Mail,
      color: "bg-green-500",
    },
    {
      type: "phone",
      title: "Phone Support",
      description: "Speak directly with our team",
      availability: "Mon-Fri, 9AM-6PM EST",
      icon: Phone,
      color: "bg-purple-500",
    },
  ];

  const filteredFaqs = faqs.filter((faq) => {
    const matchesSearch =
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleFaq = (faqId: string) => {
    setExpandedFaq(expandedFaq === faqId ? null : faqId);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Support Center</h1>
          <p className="text-gray-600 mt-1">
            Find answers to your questions or get in touch with our team
          </p>
        </div>
        <button
          onClick={() => setShowContactForm(true)}
          className="bg-mutedTeal text-white px-4 py-2 rounded-lg hover:bg-mutedTeal/90 transition-colors flex items-center space-x-2"
        >
          Contact Support
        </button>
      </div>

      {/* Quick Help */}
      <div className="bg-gradient-to-r from-green-500 to-blue-500 rounded-lg p-8 text-white">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-bold mb-2">Need Quick Help?</h2>
          <p className="text-paleYellow/90 mb-4">
            Try our AI assistant for instant answers to common questions, or
            browse our comprehensive FAQ section below.
          </p>
          <button className="bg-white text-primary px-6 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors">
            Chat with AI Assistant
          </button>
        </div>
      </div>

      {/* Contact Options */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {contactOptions.map((option) => {
          const Icon = option.icon;
          return (
            <div
              key={option.type}
              className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div
                  className={`w-12 h-12 ${option.color} rounded-lg flex items-center justify-center`}
                >
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">
                    {option.title}
                  </h3>
                  <p className="text-sm text-gray-600">{option.description}</p>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-1 text-sm text-gray-500">
                  <Clock className="w-4 h-4" />
                  <span>{option.availability}</span>
                </div>
                <button className="text-primary hover:text-primary/80 font-medium text-sm">
                  Contact
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Search and Filter */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          <div className="flex-1 relative">
            <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search for help..."
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
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Frequently Asked Questions
        </h3>
        <div className="space-y-4">
          {filteredFaqs.map((faq) => (
            <div key={faq.id} className="border border-gray-200 rounded-lg">
              <button
                onClick={() => toggleFaq(faq.id)}
                className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-medium text-gray-900">
                  {faq.question}
                </span>
                {expandedFaq === faq.id ? (
                  <ChevronDown className="w-5 h-5 text-gray-400" />
                ) : (
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                )}
              </button>
              {expandedFaq === faq.id && (
                <div className="px-4 pb-4">
                  <p className="text-gray-600 mb-4">{faq.answer}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <span className="text-sm text-gray-500">
                        Was this helpful?
                      </span>
                      <div className="flex items-center space-x-2">
                        <button className="flex items-center space-x-1 text-sm text-green-600 hover:text-green-700">
                          <span>👍</span>
                          <span>{faq.helpful}</span>
                        </button>
                        <button className="flex items-center space-x-1 text-sm text-red-600 hover:text-red-700">
                          <span>👎</span>
                          <span>{faq.notHelpful}</span>
                        </button>
                      </div>
                    </div>
                    <span className="text-xs text-gray-400 capitalize">
                      {faq.category}
                    </span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Popular Articles */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Popular Help Articles
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            {
              title: "Getting Started Guide",
              views: "2.1k views",
              category: "General",
            },
            {
              title: "Setting Up Your Profile",
              views: "1.8k views",
              category: "Account",
            },
            {
              title: "Understanding Your Progress Metrics",
              views: "1.5k views",
              category: "Fitness",
            },
            {
              title: "Nutrition Guidelines for Beginners",
              views: "1.3k views",
              category: "Nutrition",
            },
            {
              title: "Troubleshooting Common Issues",
              views: "1.1k views",
              category: "Technical",
            },
            {
              title: "Making the Most of Your Sessions",
              views: "980 views",
              category: "Sessions",
            },
          ].map((article, index) => (
            <div
              key={index}
              className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
            >
              <HelpCircle className="w-5 h-5 text-primary flex-shrink-0" />
              <div className="flex-1">
                <p className="font-medium text-gray-900">{article.title}</p>
                <div className="flex items-center space-x-2 text-sm text-gray-500">
                  <span>{article.views}</span>
                  <span>•</span>
                  <span>{article.category}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Form Modal */}
      {showContactForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Contact Support
              </h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Brief description of your issue"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Category
                  </label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option>Select a category</option>
                    <option>Account & Billing</option>
                    <option>Sessions & Booking</option>
                    <option>Technical Support</option>
                    <option>Fitness & Training</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    rows={4}
                    placeholder="Please describe your issue in detail..."
                  ></textarea>
                </div>
              </form>
              <div className="flex space-x-3 mt-6">
                <button
                  onClick={() => setShowContactForm(false)}
                  className="flex-1 px-4 py-2 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={() => setShowContactForm(false)}
                  className="flex-1 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SupportCenter;
