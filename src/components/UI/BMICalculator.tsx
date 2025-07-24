import React, { useState } from "react";
import { Calculator, Target, AlertCircle } from "lucide-react";

interface BMICalculatorProps {
  onClose: () => void;
}

const BMICalculator: React.FC<BMICalculatorProps> = ({ onClose }) => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [unit, setUnit] = useState("metric"); // metric or imperial
  const [result, setResult] = useState<{
    bmi: number;
    category: string;
    recommendations: string[];
  } | null>(null);

  const calculateBMI = () => {
    if (!height || !weight) return;

    let heightInMeters: number;
    let weightInKg: number;

    if (unit === "metric") {
      heightInMeters = parseFloat(height) / 100; // cm to meters
      weightInKg = parseFloat(weight);
    } else {
      heightInMeters = parseFloat(height) * 0.0254; // inches to meters
      weightInKg = parseFloat(weight) * 0.453592; // pounds to kg
    }

    const bmi = weightInKg / (heightInMeters * heightInMeters);

    let category: string;
    let recommendations: string[];

    if (bmi < 18.5) {
      category = "Underweight";
      recommendations = [
        "Focus on strength training to build muscle mass",
        "Increase caloric intake with nutrient-dense foods",
        "Consider consulting with a nutritionist",
        "Regular meals with healthy fats and proteins",
      ];
    } else if (bmi < 25) {
      category = "Normal Weight";
      recommendations = [
        "Maintain current weight with balanced diet",
        "Continue regular exercise routine",
        "Focus on overall fitness and strength",
        "Monitor weight periodically",
      ];
    } else if (bmi < 30) {
      category = "Overweight";
      recommendations = [
        "Create a moderate caloric deficit",
        "Increase cardiovascular exercise",
        "Focus on portion control",
        "Consider working with a fitness coach",
      ];
    } else {
      category = "Obese";
      recommendations = [
        "Consult with healthcare professionals",
        "Start with low-impact exercises",
        "Focus on sustainable lifestyle changes",
        "Consider professional nutrition guidance",
      ];
    }

    setResult({
      bmi: Math.round(bmi * 10) / 10,
      category,
      recommendations,
    });
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Underweight":
        return "text-mutedTeal bg-mutedTeal/10";
      case "Normal Weight":
        return "text-green-600 bg-green-100";
      case "Overweight":
        return "text-yellow-600 bg-yellow-100";
      case "Obese":
        return "text-red-600 bg-red-100";
      default:
        return "text-gray-600 bg-gray-100";
    }
  };

  const getBMIPosition = (bmi: number) => {
    if (bmi < 18.5) return Math.min((bmi / 18.5) * 25, 25);
    if (bmi < 25) return 25 + ((bmi - 18.5) / (25 - 18.5)) * 25;
    if (bmi < 30) return 50 + ((bmi - 25) / (30 - 25)) * 25;
    return Math.min(75 + ((bmi - 30) / 10) * 25, 100);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-mutedTeal/10 rounded-lg flex items-center justify-center">
                <Calculator className="w-5 h-5 text-mutedTeal" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">
                BMI Calculator
              </h3>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              ✕
            </button>
          </div>

          {/* Unit Selection */}
          <div className="mb-6">
            <div className="flex bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setUnit("metric")}
                className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                  unit === "metric"
                    ? "bg-white text-gray-900 shadow-sm"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Metric
              </button>
              <button
                onClick={() => setUnit("imperial")}
                className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                  unit === "imperial"
                    ? "bg-white text-gray-900 shadow-sm"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Imperial
              </button>
            </div>
          </div>

          {/* Input Fields */}
          <div className="space-y-4 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Height {unit === "metric" ? "(cm)" : "(inches)"}
              </label>
              <input
                type="number"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                placeholder={unit === "metric" ? "170" : "67"}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mutedTeal focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Weight {unit === "metric" ? "(kg)" : "(lbs)"}
              </label>
              <input
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                placeholder={unit === "metric" ? "70" : "154"}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mutedTeal focus:border-transparent"
              />
            </div>
          </div>

          <button
            onClick={calculateBMI}
            disabled={!height || !weight}
            className="w-full bg-mutedTeal text-white py-3 rounded-lg hover:bg-mutedTeal/90 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed font-medium"
          >
            Calculate BMI
          </button>

          {/* Results */}
          {result && (
            <div className="mt-6 space-y-4">
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <p className="text-3xl font-bold text-gray-900 mb-2">
                  {result.bmi}
                </p>
                <span
                  className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(
                    result.category
                  )}`}
                >
                  {result.category}
                </span>
              </div>

              {/* BMI Scale */}
              <div className="space-y-2">
                <p className="text-sm font-medium text-gray-700">BMI Scale</p>
                <div className="relative h-4 bg-gradient-to-r from-mutedTeal via-green-400 via-yellow-400 to-red-400 rounded-full">
                  <div
                    className="absolute w-3 h-3 bg-white border-2 border-gray-800 rounded-full transform -translate-x-1/2 -translate-y-1/2 top-1/2"
                    style={{ left: `${getBMIPosition(result.bmi)}%` }}
                  ></div>
                </div>
                <div className="flex justify-between text-xs text-gray-500">
                  <span>18.5</span>
                  <span>25</span>
                  <span>30</span>
                  <span>35+</span>
                </div>
              </div>

              {/* Recommendations */}
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Target className="w-5 h-5 text-mutedTeal" />
                  <h4 className="font-medium text-gray-900">Recommendations</h4>
                </div>
                <ul className="space-y-2">
                  {result.recommendations.map((rec, index) => (
                    <li
                      key={index}
                      className="flex items-start space-x-2 text-sm text-gray-600"
                    >
                      <div className="w-1.5 h-1.5 bg-mutedTeal rounded-full mt-2 flex-shrink-0"></div>
                      <span>{rec}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Disclaimer */}
              <div className="flex items-start space-x-2 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-yellow-800">
                  BMI is a general indicator and may not account for muscle
                  mass, bone density, and other factors. Consult with a
                  healthcare professional for personalized advice.
                </p>
              </div>

              <button
                onClick={onClose}
                className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors font-medium"
              >
                Book a Consultation
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BMICalculator;
