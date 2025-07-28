import React from 'react';
import { useParams } from 'react-router-dom';
import { MapPin, Phone, Globe, Clock } from 'lucide-react';

const MenuPage: React.FC = () => {
  const { restaurantSlug } = useParams<{ restaurantSlug: string }>();

  // This would normally fetch menu data based on the slug
  // For now, we'll show a placeholder

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Restaurant Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-center">
            <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4"></div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Restaurant Name
            </h1>
            <p className="text-gray-600 mb-4">
              Delicious food made with love and fresh ingredients
            </p>
            
            {/* Restaurant Info */}
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-1" />
                123 Restaurant St, City
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-1" />
                (555) 123-4567
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                Open 9 AM - 10 PM
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Menu Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search Bar */}
        <div className="mb-8">
          <input
            type="text"
            placeholder="Search menu items..."
            className="input w-full max-w-md mx-auto block"
          />
        </div>

        {/* Menu Categories */}
        <div className="space-y-8">
          {/* Category: Appetizers */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b pb-2">
              Appetizers
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Menu Item */}
              <div className="menu-item">
                <div className="aspect-menu-item bg-gray-200 mb-4"></div>
                <div className="menu-item-content">
                  <h3 className="menu-item-title">Caesar Salad</h3>
                  <p className="menu-item-description">
                    Fresh romaine lettuce with parmesan cheese, croutons, and our signature Caesar dressing
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="menu-item-price">$12.99</span>
                    <div className="flex gap-2">
                      <span className="dietary-tag bg-green-100 text-green-800">
                        Vegetarian
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Menu Item */}
              <div className="menu-item">
                <div className="aspect-menu-item bg-gray-200 mb-4"></div>
                <div className="menu-item-content">
                  <h3 className="menu-item-title">Chicken Wings</h3>
                  <p className="menu-item-description">
                    Crispy chicken wings tossed in your choice of buffalo, BBQ, or honey garlic sauce
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="menu-item-price">$14.99</span>
                    <div className="flex gap-2">
                      <span className="dietary-tag bg-red-100 text-red-800">
                        Spicy 🌶️
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Category: Main Courses */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b pb-2">
              Main Courses
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Menu Item */}
              <div className="menu-item">
                <div className="aspect-menu-item bg-gray-200 mb-4"></div>
                <div className="menu-item-content">
                  <h3 className="menu-item-title">Grilled Salmon</h3>
                  <p className="menu-item-description">
                    Fresh Atlantic salmon grilled to perfection, served with seasonal vegetables and lemon butter
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="menu-item-price">$24.99</span>
                    <div className="flex gap-2">
                      <span className="dietary-tag bg-blue-100 text-blue-800">
                        Gluten Free
                      </span>
                      <span className="badge-success">Popular</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Menu Item */}
              <div className="menu-item">
                <div className="aspect-menu-item bg-gray-200 mb-4"></div>
                <div className="menu-item-content">
                  <h3 className="menu-item-title">Beef Ribeye Steak</h3>
                  <p className="menu-item-description">
                    Premium 12oz ribeye steak grilled to your liking, served with mashed potatoes and asparagus
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="menu-item-price">$32.99</span>
                    <div className="flex gap-2">
                      <span className="dietary-tag bg-blue-100 text-blue-800">
                        Gluten Free
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Category: Desserts */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b pb-2">
              Desserts
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Menu Item */}
              <div className="menu-item">
                <div className="aspect-menu-item bg-gray-200 mb-4"></div>
                <div className="menu-item-content">
                  <h3 className="menu-item-title">Chocolate Lava Cake</h3>
                  <p className="menu-item-description">
                    Warm chocolate cake with a molten center, served with vanilla ice cream
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="menu-item-price">$8.99</span>
                    <div className="flex gap-2">
                      <span className="dietary-tag bg-green-100 text-green-800">
                        Vegetarian
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Footer Info */}
        <footer className="mt-12 pt-8 border-t text-center text-gray-500">
          <p className="mb-2">
            Menu last updated: {new Date().toLocaleDateString()}
          </p>
          <p className="text-sm">
            Powered by QR Menu Builder
          </p>
        </footer>
      </main>
    </div>
  );
};

export default MenuPage;