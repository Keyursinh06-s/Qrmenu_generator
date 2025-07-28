export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '/api';

export const CURRENCY_OPTIONS = [
  { value: 'USD', label: '$', name: 'US Dollar' },
  { value: 'EUR', label: '€', name: 'Euro' },
  { value: 'GBP', label: '£', name: 'British Pound' },
  { value: 'CAD', label: 'C$', name: 'Canadian Dollar' },
  { value: 'AUD', label: 'A$', name: 'Australian Dollar' },
  { value: 'JPY', label: '¥', name: 'Japanese Yen' },
  { value: 'CNY', label: '¥', name: 'Chinese Yuan' },
  { value: 'INR', label: '₹', name: 'Indian Rupee' },
  { value: 'BRL', label: 'R$', name: 'Brazilian Real' },
  { value: 'MXN', label: '$', name: 'Mexican Peso' },
];

export const LANGUAGE_OPTIONS = [
  { value: 'en', label: 'English' },
  { value: 'es', label: 'Español' },
  { value: 'fr', label: 'Français' },
  { value: 'de', label: 'Deutsch' },
  { value: 'it', label: 'Italiano' },
  { value: 'pt', label: 'Português' },
  { value: 'ru', label: 'Русский' },
  { value: 'ja', label: '日本語' },
  { value: 'ko', label: '한국어' },
  { value: 'zh', label: '中文' },
  { value: 'ar', label: 'العربية' },
  { value: 'hi', label: 'हिन्दी' },
];

export const TIMEZONE_OPTIONS = [
  'America/New_York',
  'America/Chicago',
  'America/Denver',
  'America/Los_Angeles',
  'America/Toronto',
  'America/Vancouver',
  'America/Mexico_City',
  'America/Sao_Paulo',
  'Europe/London',
  'Europe/Paris',
  'Europe/Berlin',
  'Europe/Rome',
  'Europe/Madrid',
  'Europe/Amsterdam',
  'Asia/Tokyo',
  'Asia/Shanghai',
  'Asia/Seoul',
  'Asia/Mumbai',
  'Asia/Dubai',
  'Australia/Sydney',
  'Australia/Melbourne',
  'Pacific/Auckland',
];

export const DIETARY_TAGS = [
  { value: 'vegan', label: 'Vegan', color: 'bg-green-100 text-green-800' },
  { value: 'vegetarian', label: 'Vegetarian', color: 'bg-green-100 text-green-800' },
  { value: 'gluten-free', label: 'Gluten Free', color: 'bg-yellow-100 text-yellow-800' },
  { value: 'dairy-free', label: 'Dairy Free', color: 'bg-blue-100 text-blue-800' },
  { value: 'nut-free', label: 'Nut Free', color: 'bg-orange-100 text-orange-800' },
  { value: 'spicy', label: 'Spicy', color: 'bg-red-100 text-red-800' },
];

export const COMMON_ALLERGENS = [
  'Milk', 'Eggs', 'Fish', 'Shellfish', 'Tree nuts', 'Peanuts', 'Wheat', 'Soybeans',
  'Sesame', 'Mustard', 'Celery', 'Lupin', 'Molluscs', 'Sulphites'
];

export const FONT_OPTIONS = [
  { value: 'Inter', label: 'Inter (Modern)', category: 'Sans Serif' },
  { value: 'Poppins', label: 'Poppins (Friendly)', category: 'Sans Serif' },
  { value: 'Roboto', label: 'Roboto (Clean)', category: 'Sans Serif' },
  { value: 'Open Sans', label: 'Open Sans (Readable)', category: 'Sans Serif' },
  { value: 'Lato', label: 'Lato (Professional)', category: 'Sans Serif' },
  { value: 'Montserrat', label: 'Montserrat (Elegant)', category: 'Sans Serif' },
  { value: 'Playfair Display', label: 'Playfair Display (Elegant)', category: 'Serif' },
  { value: 'Merriweather', label: 'Merriweather (Classic)', category: 'Serif' },
  { value: 'Lora', label: 'Lora (Readable)', category: 'Serif' },
  { value: 'Source Sans Pro', label: 'Source Sans Pro (Clean)', category: 'Sans Serif' },
];

export const THEME_PRESETS = {
  modern: {
    name: 'Modern',
    primaryColor: '#2563eb',
    secondaryColor: '#64748b',
    backgroundColor: '#ffffff',
    textColor: '#1f2937',
    accentColor: '#3b82f6',
    borderRadius: '0.5rem',
    fontFamily: 'Inter',
  },
  classic: {
    name: 'Classic',
    primaryColor: '#1f2937',
    secondaryColor: '#6b7280',
    backgroundColor: '#f9fafb',
    textColor: '#111827',
    accentColor: '#059669',
    borderRadius: '0.25rem',
    fontFamily: 'Merriweather',
  },
  minimal: {
    name: 'Minimal',
    primaryColor: '#000000',
    secondaryColor: '#6b7280',
    backgroundColor: '#ffffff',
    textColor: '#1f2937',
    accentColor: '#374151',
    borderRadius: '0.125rem',
    fontFamily: 'Lato',
  },
  colorful: {
    name: 'Colorful',
    primaryColor: '#7c3aed',
    secondaryColor: '#ec4899',
    backgroundColor: '#fef3c7',
    textColor: '#1f2937',
    accentColor: '#f59e0b',
    borderRadius: '1rem',
    fontFamily: 'Poppins',
  },
};

export const COLOR_PALETTES = [
  ['#ef4444', '#f97316', '#f59e0b', '#eab308', '#84cc16', '#22c55e'],
  ['#06b6d4', '#3b82f6', '#6366f1', '#8b5cf6', '#a855f7', '#d946ef'],
  ['#ec4899', '#f43f5e', '#ef4444', '#f97316', '#f59e0b', '#eab308'],
  ['#1f2937', '#374151', '#4b5563', '#6b7280', '#9ca3af', '#d1d5db'],
  ['#065f46', '#047857', '#059669', '#10b981', '#34d399', '#6ee7b7'],
];

export const QR_CODE_SIZES = [
  { value: 200, label: 'Small (200px)' },
  { value: 300, label: 'Medium (300px)' },
  { value: 400, label: 'Large (400px)' },
  { value: 500, label: 'Extra Large (500px)' },
];

export const QR_ERROR_CORRECTION_LEVELS = [
  { value: 'L', label: 'Low (~7%)' },
  { value: 'M', label: 'Medium (~15%)' },
  { value: 'Q', label: 'Quartile (~25%)' },
  { value: 'H', label: 'High (~30%)' },
];

export const DAYS_OF_WEEK = [
  { value: 'monday', label: 'Monday' },
  { value: 'tuesday', label: 'Tuesday' },
  { value: 'wednesday', label: 'Wednesday' },
  { value: 'thursday', label: 'Thursday' },
  { value: 'friday', label: 'Friday' },
  { value: 'saturday', label: 'Saturday' },
  { value: 'sunday', label: 'Sunday' },
];

export const SPICY_LEVELS = [
  { value: 1, label: 'Mild 🌶️', color: 'text-yellow-600' },
  { value: 2, label: 'Medium 🌶️🌶️', color: 'text-orange-600' },
  { value: 3, label: 'Hot 🌶️🌶️🌶️', color: 'text-red-600' },
];

export const IMAGE_UPLOAD_CONFIG = {
  maxSize: 5 * 1024 * 1024, // 5MB
  allowedTypes: ['image/jpeg', 'image/png', 'image/webp'],
  maxDimensions: {
    width: 2048,
    height: 2048,
  },
};

export const CSV_IMPORT_TEMPLATE = {
  headers: [
    'categoryName',
    'itemName',
    'description',
    'price',
    'dietaryTags',
    'allergens',
    'isAvailable',
    'isPopular',
    'preparationTime',
  ],
  sampleData: [
    [
      'Appetizers',
      'Caesar Salad',
      'Fresh romaine lettuce with parmesan cheese and croutons',
      '12.99',
      'vegetarian',
      'milk,wheat',
      'true',
      'false',
      '10',
    ],
    [
      'Main Course',
      'Grilled Salmon',
      'Atlantic salmon with seasonal vegetables',
      '24.99',
      'gluten-free',
      'fish',
      'true',
      'true',
      '25',
    ],
  ],
};

export const STORAGE_KEYS = {
  RESTAURANT: 'restaurant_data',
  MENU: 'menu_data',
  THEME: 'theme_preference',
  RECENT_RESTAURANTS: 'recent_restaurants',
  DRAFT_MENU: 'draft_menu',
  USER_PREFERENCES: 'user_preferences',
};

export const ANIMATION_DURATIONS = {
  fast: 150,
  normal: 300,
  slow: 500,
};

export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
};

export const MAX_FILE_UPLOADS = 10;
export const MAX_MENU_ITEMS_PER_CATEGORY = 50;
export const MAX_CATEGORIES_PER_MENU = 20;
export const MAX_RESTAURANT_NAME_LENGTH = 100;
export const MAX_ITEM_NAME_LENGTH = 100;
export const MAX_DESCRIPTION_LENGTH = 500;