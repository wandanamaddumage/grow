import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Home,
  Users,
  Calendar,
  CreditCard,
  MessageSquare,
  BarChart3,
  Settings,
  BookOpen,
  Target,
  DollarSign,
  UserCheck,
  ShoppingCart,
  Dumbbell,
  Award,
  PlusCircle,
  HelpCircle,
} from "lucide-react";
import { useAuth } from "../../context/AuthContext";

const Sidebar: React.FC = () => {
  const { user } = useAuth();
  const location = useLocation();

  const getMenuItems = () => {
    switch (user?.role) {
      case "admin":
      case "team":
        return [
          { icon: Home, label: "Dashboard", path: "/" },
          { icon: Users, label: "Clients", path: "/clients" },
          { icon: UserCheck, label: "Coaches", path: "/coaches" },
          { icon: Calendar, label: "Scheduling", path: "/scheduling" },
          { icon: CreditCard, label: "Invoices", path: "/invoices" },
          { icon: PlusCircle, label: "Free Passes", path: "/free-passes" },
          {
            icon: MessageSquare,
            label: "Communications",
            path: "/communications",
          },
          { icon: BarChart3, label: "Reports", path: "/reports" },
          { icon: Award, label: "Milestones", path: "/milestones" },
          { icon: Settings, label: "Settings", path: "/settings" },
        ];
      case "coach":
        return [
          { icon: Home, label: "Dashboard", path: "/coach" },
          { icon: Users, label: "My Clients", path: "/coach/clients" },
          { icon: Calendar, label: "Schedule", path: "/coach/schedule" },
          { icon: Target, label: "Progress", path: "/coach/progress" },
          { icon: BookOpen, label: "Resources", path: "/coach/resources" },
          { icon: DollarSign, label: "Earnings", path: "/coach/earnings" },
          { icon: Settings, label: "Settings", path: "/coach/settings" },
        ];
      case "client":
        return [
          { icon: Home, label: "Dashboard", path: "/client" },
          { icon: Calendar, label: "Book Session", path: "/client/booking" },
          { icon: Target, label: "My Progress", path: "/client/progress" },
          { icon: BookOpen, label: "Resources", path: "/client/resources" },
          { icon: ShoppingCart, label: "Store", path: "/client/store" },
          { icon: Award, label: "Achievements", path: "/client/achievements" },
          { icon: MessageSquare, label: "Chat", path: "/client/chat" },
          { icon: HelpCircle, label: "Support", path: "/client/support" },
        ];
      default:
        return [];
    }
  };

  const menuItems = getMenuItems();

  return (
    <div className="w-64 bg-white shadow-lg h-full flex flex-col">
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center space-x-3">
          {/* <Dumbbell className="w-8 h-8 text-mutedTeal" /> */}
        <img
          src="src/data/image.png"
          alt="Dumbbell Icon"
          className="w-14 h-14 object-contain"
        />
          <div>
            <h1 className="text-xl font-bold text-gray-900">GROW Fitness</h1>
            <p className="text-sm text-gray-500 capitalize">
              {user?.role} Portal
            </p>
          </div>
        </div>
      </div>

      <nav className="flex-1 p-4 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;

          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                isActive
                  ? "bg-mutedTeal/10 text-mutedTeal border-r-2 border-mutedTeal"
                  : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="font-medium">{item.label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-gray-200">
        <div className="flex items-center space-x-3">
          <img
            src={
              user?.avatar ||
              "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop"
            }
            alt={user?.name}
            className="w-10 h-10 rounded-full"
          />
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-900 truncate">
              {user?.name}
            </p>
            <p className="text-xs text-gray-500 truncate">{user?.email}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
