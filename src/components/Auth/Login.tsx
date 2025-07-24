import React, { useState } from "react";
import { Dumbbell, Eye, EyeOff } from "lucide-react";
import { useAuth } from "../../context/AuthContext";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const { login, switchRole } = useAuth();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (login(email, password)) {
      // Login successful
    } else {
      setError("Invalid email or password");
    }
  };

  const handleQuickLogin = (role: "admin" | "coach" | "client") => {
    switchRole(role);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 to-iceterine/10 flex items-center justify-center p-4">
      <div className="max-w-md w-full space-y-8">
        {/* Logo and Header */}
        <div className="text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-12 h-12 bg-mutedTeal rounded-xl flex items-center justify-center">
              {/* <Dumbbell className="w-7 h-7 text-white" /> */}
            <img
              src="src/data/image.png"
              alt="Dumbbell Icon"
              className="w-8 h-8 object-contain"
            />
            </div>
            <h1 className="text-3xl font-bold text-gray-900">GROW Fitness</h1>
          </div>
          <h2 className="text-xl text-gray-600">Welcome back!</h2>
          <p className="text-gray-500 mt-2">
            Sign in to your fitness coaching platform
          </p>
        </div>

        {/* Quick Access Demo Buttons */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <h3 className="text-sm font-medium text-gray-700 mb-3">
            Quick Demo Access:
          </h3>
          <div className="space-y-2">
            <button
              onClick={() => handleQuickLogin("admin")}
              className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors text-sm"
            >
              Login as Admin
            </button>
            <button
              onClick={() => handleQuickLogin("coach")}
              className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors text-sm"
            >
              Login as Coach
            </button>
            <button
              onClick={() => handleQuickLogin("client")}
              className="w-full bg-mutedTeal text-white py-2 px-4 rounded-lg hover:bg-mutedTeal/90 transition-colors text-sm"
            >
              Login as Client
            </button>
          </div>
        </div>

        {/* Login Form */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email Address
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mutedTeal focus:border-transparent"
                placeholder="your@email.com"
                required
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-3 py-2 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mutedTeal focus:border-transparent"
                  placeholder="••••••••"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? (
                    <EyeOff className="w-4 h-4" />
                  ) : (
                    <Eye className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {error && (
              <div className="bg-red-50 border border-red-200 text-red-600 px-3 py-2 rounded-lg text-sm">
                {error}
              </div>
            )}

            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="w-4 h-4 text-mutedTeal border-gray-300 rounded focus:ring-mutedTeal"
                />
                <span className="ml-2 text-sm text-gray-600">Remember me</span>
              </label>
              <a
                href="#"
                className="text-sm text-mutedTeal hover:text-mutedTeal/80"
              >
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full bg-mutedTeal text-white py-2 px-4 rounded-lg hover:bg-mutedTeal/90 transition-colors font-medium"
            >
              Sign In
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Don't have an account?{" "}
              <a
                href="#"
                className="text-mutedTeal hover:text-mutedTeal/80 font-medium"
              >
                Sign up for free
              </a>
            </p>
          </div>
        </div>

        {/* Features */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="font-medium text-gray-900 mb-3">Why GROW Fitness?</h3>
          <div className="space-y-2 text-sm text-gray-600">
            <div className="flex items-center space-x-2">
              <div className="w-1.5 h-1.5 bg-mutedTeal rounded-full"></div>
              <span>Comprehensive client management</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-1.5 h-1.5 bg-mutedTeal rounded-full"></div>
              <span>Advanced scheduling & booking system</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-1.5 h-1.5 bg-mutedTeal rounded-full"></div>
              <span>Progress tracking & analytics</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-1.5 h-1.5 bg-mutedTeal rounded-full"></div>
              <span>Integrated payments & invoicing</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
