import React from 'react';
import { Plus, QrCode, Menu, BarChart3, Settings } from 'lucide-react';

const AdminDashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <QrCode className="h-8 w-8 text-primary-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">QR Menu Builder</span>
            </div>
            <nav className="flex items-center space-x-4">
              <button className="btn-primary">
                <Plus className="w-4 h-4 mr-2" />
                New Restaurant
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome to QR Menu Builder
          </h1>
          <p className="text-lg text-gray-600">
            Get started by creating your first restaurant or managing existing ones.
          </p>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="card hover:shadow-lg transition-shadow cursor-pointer">
            <div className="card-body text-center">
              <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <Plus className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Create Restaurant
              </h3>
              <p className="text-sm text-gray-600">
                Set up a new restaurant with branding and details
              </p>
            </div>
          </div>

          <div className="card hover:shadow-lg transition-shadow cursor-pointer">
            <div className="card-body text-center">
              <div className="bg-green-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <Menu className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Build Menu
              </h3>
              <p className="text-sm text-gray-600">
                Add categories and menu items with descriptions
              </p>
            </div>
          </div>

          <div className="card hover:shadow-lg transition-shadow cursor-pointer">
            <div className="card-body text-center">
              <div className="bg-purple-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <QrCode className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Generate QR
              </h3>
              <p className="text-sm text-gray-600">
                Create QR codes for tables and marketing
              </p>
            </div>
          </div>

          <div className="card hover:shadow-lg transition-shadow cursor-pointer">
            <div className="card-body text-center">
              <div className="bg-orange-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                View Analytics
              </h3>
              <p className="text-sm text-gray-600">
                Track menu performance and customer insights
              </p>
            </div>
          </div>
        </div>

        {/* Getting Started */}
        <div className="card">
          <div className="card-header">
            <h2 className="text-xl font-semibold text-gray-900">
              Getting Started
            </h2>
          </div>
          <div className="card-body">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">
                  Quick Setup Guide
                </h3>
                <ol className="space-y-3 text-sm text-gray-600">
                  <li className="flex items-start">
                    <span className="bg-primary-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mr-3 mt-0.5">
                      1
                    </span>
                    Create your restaurant profile with basic information
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mr-3 mt-0.5">
                      2
                    </span>
                    Customize your branding with colors, fonts, and logo
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mr-3 mt-0.5">
                      3
                    </span>
                    Build your menu with categories and items
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mr-3 mt-0.5">
                      4
                    </span>
                    Generate QR codes and share with customers
                  </li>
                </ol>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">
                  Help & Resources
                </h3>
                <ul className="space-y-3 text-sm">
                  <li>
                    <a href="#" className="text-primary-600 hover:text-primary-700">
                      📖 Documentation & Tutorials
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-primary-600 hover:text-primary-700">
                      🎥 Video Guides
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-primary-600 hover:text-primary-700">
                      💬 Community Support
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-primary-600 hover:text-primary-700">
                      📧 Contact Support Team
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Activity - Placeholder */}
        <div className="mt-8">
          <div className="card">
            <div className="card-header">
              <h2 className="text-xl font-semibold text-gray-900">
                Recent Activity
              </h2>
            </div>
            <div className="card-body">
              <div className="empty-state">
                <div className="empty-state-icon">
                  <BarChart3 className="w-16 h-16 text-gray-400" />
                </div>
                <h3 className="empty-state-title">No activity yet</h3>
                <p className="empty-state-description">
                  Create your first restaurant to see activity here
                </p>
                <button className="btn-primary mt-4">
                  <Plus className="w-4 h-4 mr-2" />
                  Create Your First Restaurant
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;