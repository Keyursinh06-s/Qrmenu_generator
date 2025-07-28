import React from 'react';
import { Link } from 'react-router-dom';
import { QrCode, Menu, Smartphone, BarChart3, Palette, Globe } from 'lucide-react';

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <QrCode className="h-8 w-8 text-primary-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">QR Menu Builder</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#features" className="text-gray-700 hover:text-primary-600">Features</a>
              <a href="#how-it-works" className="text-gray-700 hover:text-primary-600">How it Works</a>
              <a href="#pricing" className="text-gray-700 hover:text-primary-600">Pricing</a>
            </nav>
            <Link 
              to="/admin" 
              className="btn-primary"
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Create Beautiful
            <span className="gradient-text block">Digital Menus</span>
            in Minutes
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Build stunning QR code menus for your restaurant. No coding required. 
            Mobile-first design with real-time updates and analytics.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/admin" 
              className="btn-primary btn-lg"
            >
              Start Building Your Menu
            </Link>
            <a 
              href="#demo" 
              className="btn-outline btn-lg"
            >
              View Demo
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Everything You Need for Digital Menus
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Powerful features designed specifically for restaurants and food service businesses
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <QrCode className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">QR Code Generation</h3>
              <p className="text-gray-600">
                Automatically generate QR codes for your menus. Print them for tables or use digitally.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Smartphone className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Mobile-First Design</h3>
              <p className="text-gray-600">
                Beautiful, responsive menus that work perfectly on all devices and screen sizes.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Menu className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Easy Menu Builder</h3>
              <p className="text-gray-600">
                Drag-and-drop interface makes it simple to create and organize your menu items.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Analytics & Insights</h3>
              <p className="text-gray-600">
                Track menu views, popular items, and customer behavior with detailed analytics.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-pink-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Palette className="h-8 w-8 text-pink-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Custom Branding</h3>
              <p className="text-gray-600">
                Customize colors, fonts, and themes to match your restaurant's brand perfectly.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-indigo-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Multi-Language Support</h3>
              <p className="text-gray-600">
                Support for multiple languages and currencies to serve diverse customers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section id="how-it-works" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Get your digital menu up and running in just 3 simple steps
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Create Your Restaurant</h3>
              <p className="text-gray-600">
                Add your restaurant details, logo, and branding preferences to get started.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Build Your Menu</h3>
              <p className="text-gray-600">
                Add categories, menu items, descriptions, prices, and photos using our easy builder.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Share with QR Codes</h3>
              <p className="text-gray-600">
                Generate QR codes and place them on tables for customers to scan and view your menu.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Modernize Your Menu?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of restaurants already using QR Menu Builder to enhance their customer experience.
          </p>
          <Link 
            to="/admin" 
            className="btn bg-white text-primary-600 hover:bg-gray-50 btn-lg"
          >
            Start Your Free Menu Today
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <QrCode className="h-6 w-6 text-primary-400" />
                <span className="ml-2 text-lg font-bold">QR Menu Builder</span>
              </div>
              <p className="text-gray-400">
                The easiest way to create beautiful digital menus for your restaurant.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#features" className="hover:text-white">Features</a></li>
                <li><a href="#pricing" className="hover:text-white">Pricing</a></li>
                <li><a href="#demo" className="hover:text-white">Demo</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#help" className="hover:text-white">Help Center</a></li>
                <li><a href="#contact" className="hover:text-white">Contact Us</a></li>
                <li><a href="#docs" className="hover:text-white">Documentation</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#about" className="hover:text-white">About</a></li>
                <li><a href="#privacy" className="hover:text-white">Privacy Policy</a></li>
                <li><a href="#terms" className="hover:text-white">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 QR Menu Builder. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;