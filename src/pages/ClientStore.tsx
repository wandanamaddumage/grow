import React, { useState } from "react";
import { ShoppingCart, Plus, Minus, Star, Filter } from "lucide-react";
import { products } from "../data/mockData";

const ClientStore: React.FC = () => {
  const [cartItems, setCartItems] = useState<{ [key: string]: number }>({});
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredProducts = products.filter(
    (product) =>
      selectedCategory === "all" || product.category === selectedCategory
  );

  const addToCart = (productId: string) => {
    setCartItems((prev) => ({
      ...prev,
      [productId]: (prev[productId] || 0) + 1,
    }));
  };

  const removeFromCart = (productId: string) => {
    setCartItems((prev) => ({
      ...prev,
      [productId]: Math.max(0, (prev[productId] || 0) - 1),
    }));
  };

  const cartTotal = Object.entries(cartItems).reduce(
    (total, [productId, quantity]) => {
      const product = products.find((p) => p.id === productId);
      return total + (product?.price || 0) * quantity;
    },
    0
  );

  const cartItemCount = Object.values(cartItems).reduce(
    (total, quantity) => total + quantity,
    0
  );

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">FitCoach Store</h1>
          <p className="text-gray-600 mt-1">
            Supplements, equipment, and digital products to enhance your fitness
            journey
          </p>
        </div>
        <div className="relative">
          <button className="bg-mutedTeal text-white px-4 py-2 rounded-lg hover:bg-mutedTeal/90 transition-colors flex items-center space-x-2">
            <ShoppingCart className="w-4 h-4" />
            <span>Cart ({cartItemCount})</span>
          </button>
          {cartTotal > 0 && (
            <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center">
              ${cartTotal.toFixed(0)}
            </div>
          )}
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center space-x-4">
          <Filter className="w-5 h-5 text-gray-400" />
          <div className="flex space-x-2">
            {["all", "supplement", "equipment", "digital", "apparel"].map(
              (category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? "bg-primary/20 text-primary"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              )
            )}
          </div>
        </div>
      </div>

      {/* Featured Banner */}
      <div className="bg-gradient-to-r from-green-500 to-blue-500 rounded-lg p-8 text-white">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-bold mb-2">New Client Special!</h2>
          <p className="text-paleYellow/90 mb-4">
            Get 20% off your first supplement order with code NEWFIT20
          </p>
          <button className="bg-white text-mutedTeal px-6 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors">
            Shop Now
          </button>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="flex items-start justify-between mb-2">
                <h3 className="font-semibold text-gray-900">{product.name}</h3>
                <span className="text-lg font-bold text-mutedTeal">
                  ${product.price}
                </span>
              </div>

              <span className="inline-block px-2 py-1 text-xs font-medium bg-gray-100 text-gray-600 rounded mb-2">
                {product.category}
              </span>

              <p className="text-sm text-gray-600 mb-4">
                {product.description}
              </p>

              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-yellow-400 fill-current"
                    />
                  ))}
                  <span className="text-sm text-gray-500 ml-1">(4.8)</span>
                </div>
                <span
                  className={`text-sm font-medium ${
                    product.inStock ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {product.inStock ? "In Stock" : "Out of Stock"}
                </span>
              </div>

              <div className="flex items-center space-x-2">
                {cartItems[product.id] > 0 ? (
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => removeFromCart(product.id)}
                      className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="font-medium text-gray-900 w-8 text-center">
                      {cartItems[product.id]}
                    </span>
                    <button
                      onClick={() => addToCart(product.id)}
                      className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => addToCart(product.id)}
                    disabled={!product.inStock}
                    className="flex-1 bg-primary text-white py-2 rounded-lg hover:bg-primary/90 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                  >
                    <ShoppingCart className="w-4 h-4" />
                    <span>Add to Cart</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Checkout Summary */}
      {cartTotal > 0 && (
        <div className="fixed bottom-6 right-6 bg-white rounded-lg shadow-lg p-6 border border-gray-200">
          <h3 className="font-semibold text-gray-900 mb-2">Order Summary</h3>
          <div className="space-y-2 mb-4">
            {Object.entries(cartItems).map(([productId, quantity]) => {
              const product = products.find((p) => p.id === productId);
              if (!product || quantity === 0) return null;
              return (
                <div key={productId} className="flex justify-between text-sm">
                  <span>
                    {product.name} x{quantity}
                  </span>
                  <span>${(product.price * quantity).toFixed(2)}</span>
                </div>
              );
            })}
          </div>
          <div className="border-t pt-2 mb-4">
            <div className="flex justify-between font-semibold">
              <span>Total:</span>
              <span>${cartTotal.toFixed(2)}</span>
            </div>
          </div>
          <button className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors">
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default ClientStore;
