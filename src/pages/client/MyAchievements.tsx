import React, { useState } from "react";
import {
  Award,
  Trophy,
  Star,
  Target,
  TrendingUp,
  Medal,
  Crown,
} from "lucide-react";

const MyAchievements: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Achievements", icon: Award },
    { id: "milestone", name: "Milestones", icon: Target },
    { id: "streak", name: "Streaks", icon: TrendingUp },
    { id: "strength", name: "Strength", icon: Medal },
    { id: "endurance", name: "Endurance", icon: Trophy },
    { id: "special", name: "Special", icon: Crown },
  ];

  const achievements = [
    {
      id: "1",
      title: "First Steps",
      description: "Completed your first training session",
      category: "milestone",
      date: "2024-01-10",
      icon: "👟",
      rarity: "common",
      points: 10,
      unlocked: true,
    },
    {
      id: "2",
      title: "Week Warrior",
      description: "Completed 7 consecutive days of workouts",
      category: "streak",
      date: "2024-01-17",
      icon: "🔥",
      rarity: "uncommon",
      points: 25,
      unlocked: true,
    },
    {
      id: "3",
      title: "Weight Loss Champion",
      description: "Lost 10 pounds from your starting weight",
      category: "milestone",
      date: "2024-01-30",
      icon: "⚖️",
      rarity: "rare",
      points: 50,
      unlocked: true,
    },
    {
      id: "4",
      title: "Strength Seeker",
      description: "Increased bench press by 25 pounds",
      category: "strength",
      date: "2024-02-05",
      icon: "💪",
      rarity: "uncommon",
      points: 30,
      unlocked: true,
    },
    {
      id: "5",
      title: "Consistency King",
      description: "Maintained a 14-day workout streak",
      category: "streak",
      date: "2024-02-10",
      icon: "👑",
      rarity: "rare",
      points: 75,
      unlocked: true,
    },
    {
      id: "6",
      title: "Marathon Mindset",
      description: "Completed a 5K run in under 25 minutes",
      category: "endurance",
      date: "2024-02-15",
      icon: "🏃",
      rarity: "epic",
      points: 100,
      unlocked: true,
    },
    {
      id: "7",
      title: "Perfect Month",
      description: "Attended all scheduled sessions in a month",
      category: "special",
      date: "2024-02-28",
      icon: "🌟",
      rarity: "legendary",
      points: 150,
      unlocked: true,
    },
    {
      id: "8",
      title: "Transformation Master",
      description: "Achieved all initial fitness goals",
      category: "milestone",
      date: null,
      icon: "🎯",
      rarity: "legendary",
      points: 200,
      unlocked: false,
      progress: 75,
    },
    {
      id: "9",
      title: "Iron Will",
      description: "Bench press your body weight",
      category: "strength",
      date: null,
      icon: "🏋️",
      rarity: "epic",
      points: 125,
      unlocked: false,
      progress: 90,
    },
    {
      id: "10",
      title: "Endurance Elite",
      description: "Complete a 10K run",
      category: "endurance",
      date: null,
      icon: "🏃‍♂️",
      rarity: "epic",
      points: 120,
      unlocked: false,
      progress: 45,
    },
    {
      id: "11",
      title: "Century Club",
      description: "Complete 100 training sessions",
      category: "milestone",
      date: null,
      icon: "💯",
      rarity: "legendary",
      points: 300,
      unlocked: false,
      progress: 24,
    },
    {
      id: "12",
      title: "Unstoppable",
      description: "Maintain a 30-day workout streak",
      category: "streak",
      date: null,
      icon: "⚡",
      rarity: "legendary",
      points: 250,
      unlocked: false,
      progress: 60,
    },
  ];

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case "common":
        return "border-gray-300 bg-gray-50";
      case "uncommon":
        return "border-green-300 bg-green-50";
      case "rare":
        return "border-primary/30 bg-primary/10";
      case "epic":
        return "border-purple-300 bg-purple-50";
      case "legendary":
        return "border-yellow-300 bg-yellow-50";
      default:
        return "border-gray-300 bg-gray-50";
    }
  };

  const getRarityTextColor = (rarity: string) => {
    switch (rarity) {
      case "common":
        return "text-gray-600";
      case "uncommon":
        return "text-green-600";
      case "rare":
        return "text-primary";
      case "epic":
        return "text-purple-600";
      case "legendary":
        return "text-yellow-600";
      default:
        return "text-gray-600";
    }
  };

  const filteredAchievements = achievements.filter(
    (achievement) =>
      selectedCategory === "all" || achievement.category === selectedCategory
  );

  const unlockedAchievements = achievements.filter((a) => a.unlocked);
  const totalPoints = unlockedAchievements.reduce(
    (sum, a) => sum + a.points,
    0
  );

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">My Achievements</h1>
          <p className="text-gray-600 mt-1">
            Celebrate your fitness milestones and unlock new goals
          </p>
        </div>
        <div className="text-right">
          <p className="text-2xl font-bold text-primary">{totalPoints}</p>
          <p className="text-sm text-gray-600">Total Points</p>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
              <Trophy className="w-6 h-6 text-primary" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-600">Unlocked</p>
              <p className="text-2xl font-bold text-gray-900">
                {unlockedAchievements.length}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <Target className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-600">In Progress</p>
              <p className="text-2xl font-bold text-gray-900">
                {achievements.filter((a) => !a.unlocked).length}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <Star className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-600">Completion</p>
              <p className="text-2xl font-bold text-gray-900">
                {Math.round(
                  (unlockedAchievements.length / achievements.length) * 100
                )}
                %
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
              <Award className="w-6 h-6 text-yellow-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-600">Rank</p>
              <p className="text-2xl font-bold text-gray-900">Gold</p>
            </div>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  selectedCategory === category.id
                    ? "bg-primary/10 text-primary"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{category.name}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Recent Achievements */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Recent Achievements
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {unlockedAchievements
            .slice(-3)
            .reverse()
            .map((achievement) => (
              <div
                key={achievement.id}
                className="flex items-center space-x-4 p-4 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg border border-yellow-200"
              >
                <div className="text-3xl">{achievement.icon}</div>
                <div className="flex-1">
                  <h4 className="font-medium text-gray-900">
                    {achievement.title}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {achievement.description}
                  </p>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-xs text-gray-500">
                      {achievement.date &&
                        new Date(achievement.date).toLocaleDateString()}
                    </span>
                    <span className="text-sm font-bold text-primary">
                      +{achievement.points} pts
                    </span>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>

      {/* All Achievements */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          All Achievements
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredAchievements.map((achievement) => (
            <div
              key={achievement.id}
              className={`relative p-6 rounded-lg border-2 transition-all ${
                achievement.unlocked
                  ? getRarityColor(achievement.rarity)
                  : "border-gray-200 bg-gray-50 opacity-60"
              }`}
            >
              {achievement.unlocked && (
                <div className="absolute top-2 right-2">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                </div>
              )}

              <div className="text-center">
                <div className="text-4xl mb-3">{achievement.icon}</div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  {achievement.title}
                </h4>
                <p className="text-sm text-gray-600 mb-3">
                  {achievement.description}
                </p>

                <div className="flex items-center justify-between text-sm">
                  <span
                    className={`font-medium capitalize ${getRarityTextColor(
                      achievement.rarity
                    )}`}
                  >
                    {achievement.rarity}
                  </span>
                  <span className="font-bold text-primary">
                    +{achievement.points} pts
                  </span>
                </div>

                {achievement.unlocked ? (
                  <div className="mt-3 text-xs text-gray-500">
                    Unlocked{" "}
                    {achievement.date &&
                      new Date(achievement.date).toLocaleDateString()}
                  </div>
                ) : achievement.progress !== undefined ? (
                  <div className="mt-3">
                    <div className="flex justify-between text-xs text-gray-600 mb-1">
                      <span>Progress</span>
                      <span>{achievement.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-primary h-2 rounded-full transition-all duration-500"
                        style={{ width: `${achievement.progress}%` }}
                      ></div>
                    </div>
                  </div>
                ) : (
                  <div className="mt-3 text-xs text-gray-500">Locked</div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Achievement Levels */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Achievement Levels
        </h3>
        <div className="space-y-4">
          {[
            { level: "Bronze", min: 0, max: 100, color: "bg-orange-500" },
            { level: "Silver", min: 100, max: 300, color: "bg-gray-400" },
            { level: "Gold", min: 300, max: 600, color: "bg-yellow-500" },
            { level: "Platinum", min: 600, max: 1000, color: "bg-primary" },
            { level: "Diamond", min: 1000, max: 1500, color: "bg-purple-500" },
          ].map((level) => {
            const isCurrentLevel =
              totalPoints >= level.min && totalPoints < level.max;
            const progress = Math.min(
              ((totalPoints - level.min) / (level.max - level.min)) * 100,
              100
            );

            return (
              <div
                key={level.level}
                className={`p-4 rounded-lg border ${
                  isCurrentLevel
                    ? "border-primary/30 bg-primary/10"
                    : "border-gray-200"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-3">
                    <div
                      className={`w-8 h-8 ${level.color} rounded-full`}
                    ></div>
                    <span className="font-medium text-gray-900">
                      {level.level}
                    </span>
                    {isCurrentLevel && (
                      <span className="px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                        Current
                      </span>
                    )}
                  </div>
                  <span className="text-sm text-gray-600">
                    {level.min} - {level.max} pts
                  </span>
                </div>
                {isCurrentLevel && (
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className={`${level.color} h-2 rounded-full transition-all duration-500`}
                      style={{ width: `${progress}%` }}
                    ></div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MyAchievements;
