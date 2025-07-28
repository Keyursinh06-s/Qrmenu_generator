export interface Restaurant {
  _id: string;
  name: string;
  slug: string;
  logo?: string;
  branding: {
    primaryColor: string;
    secondaryColor: string;
    font: string;
    theme: 'modern' | 'classic' | 'minimal' | 'colorful';
  };
  contactInfo: {
    phone?: string;
    address?: string;
    website?: string;
    whatsapp?: string;
  };
  settings: {
    currency: string;
    language: string;
    timezone: string;
    orderingEnabled: boolean;
  };
  qrCodes: {
    menuUrl: string;
    qrCodeUrl: string;
    tableSpecific?: {
      tableNumber: string;
      qrCodeUrl: string;
    }[];
  };
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface MenuItem {
  _id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  image?: string;
  dietaryTags: ('vegan' | 'vegetarian' | 'gluten-free' | 'dairy-free' | 'nut-free' | 'spicy')[];
  allergens: string[];
  nutritionInfo?: {
    calories?: number;
    protein?: number;
    carbs?: number;
    fat?: number;
  };
  isAvailable: boolean;
  isPopular: boolean;
  preparationTime?: number;
  spicyLevel?: 1 | 2 | 3;
  customizations?: string[];
  order: number;
}

export interface Category {
  _id: string;
  name: string;
  description?: string;
  order: number;
  isActive: boolean;
  items: MenuItem[];
}

export interface Menu {
  _id: string;
  restaurantId: string;
  name: string;
  isActive: boolean;
  schedule?: {
    startTime: string;
    endTime: string;
    days: string[];
  };
  categories: Category[];
  lastUpdated: string;
}

export interface Analytics {
  _id: string;
  restaurantId: string;
  date: string;
  metrics: {
    totalScans: number;
    uniqueVisitors: number;
    avgSessionDuration: number;
    popularItems: {
      itemId: string;
      itemName: string;
      views: number;
    }[];
    deviceTypes: {
      mobile: number;
      tablet: number;
      desktop: number;
    };
    timeDistribution: {
      hour: number;
      scans: number;
    }[];
    geolocation?: {
      country: string;
      city: string;
      count: number;
    }[];
  };
  createdAt: string;
}

// Form interfaces
export interface RestaurantFormData {
  name: string;
  contactInfo: {
    phone?: string;
    address?: string;
    website?: string;
    whatsapp?: string;
  };
  settings: {
    currency: string;
    language: string;
    timezone: string;
    orderingEnabled: boolean;
  };
}

export interface MenuFormData {
  name: string;
  schedule?: {
    startTime: string;
    endTime: string;
    days: string[];
  };
}

export interface ItemFormData {
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  dietaryTags: string[];
  allergens: string[];
  nutritionInfo?: {
    calories?: number;
    protein?: number;
    carbs?: number;
    fat?: number;
  };
  isAvailable: boolean;
  isPopular: boolean;
  preparationTime?: number;
  spicyLevel?: 1 | 2 | 3;
  customizations?: string[];
}

export interface CategoryFormData {
  name: string;
  description?: string;
}

// State interfaces
export interface RestaurantState {
  current: Restaurant | null;
  loading: boolean;
  error: string | null;
}

export interface MenuState {
  menus: Menu[];
  currentMenu: Menu | null;
  loading: boolean;
  error: string | null;
}

export interface AnalyticsState {
  data: Analytics | null;
  loading: boolean;
  error: string | null;
}

export interface UIState {
  theme: 'light' | 'dark';
  sidebarOpen: boolean;
  notifications: Notification[];
}

export interface Notification {
  id: string;
  type: 'success' | 'error' | 'warning' | 'info';
  title: string;
  message: string;
  duration?: number;
}

// API Response interfaces
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

// Upload interfaces
export interface UploadResponse {
  filename: string;
  originalName: string;
  size: number;
  mimeType: string;
  url: string;
}

// Search and filter interfaces
export interface MenuFilters {
  category?: string;
  dietaryTags?: string[];
  priceRange?: {
    min: number;
    max: number;
  };
  searchQuery?: string;
  isAvailable?: boolean;
  isPopular?: boolean;
}

export interface SortOptions {
  field: 'name' | 'price' | 'order' | 'createdAt';
  direction: 'asc' | 'desc';
}

// Theme and branding interfaces
export interface ThemeConfig {
  name: string;
  primaryColor: string;
  secondaryColor: string;
  backgroundColor: string;
  textColor: string;
  accentColor: string;
  borderRadius: string;
  fontFamily: string;
}

export interface BrandingConfig {
  logo?: string;
  primaryColor: string;
  secondaryColor: string;
  font: string;
  theme: 'modern' | 'classic' | 'minimal' | 'colorful';
  customCss?: string;
}

// QR Code interfaces
export interface QRCodeConfig {
  size: number;
  format: 'png' | 'svg';
  errorCorrectionLevel: 'L' | 'M' | 'Q' | 'H';
  margin: number;
  color: {
    dark: string;
    light: string;
  };
  logo?: {
    src: string;
    width: number;
    height: number;
  };
}

// Bulk import interfaces
export interface BulkImportData {
  categoryName: string;
  itemName: string;
  description: string;
  price: number;
  dietaryTags?: string;
  allergens?: string;
  isAvailable?: boolean;
  isPopular?: boolean;
  preparationTime?: number;
}

export interface ImportResult {
  successful: number;
  failed: number;
  errors: {
    row: number;
    message: string;
  }[];
}