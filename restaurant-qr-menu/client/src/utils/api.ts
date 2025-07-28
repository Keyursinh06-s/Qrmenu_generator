import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { API_BASE_URL } from './constants';
import { ApiResponse, Restaurant, Menu, Analytics, UploadResponse } from '../types';

// Create axios instance with default config
const api: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor for adding common headers
api.interceptors.request.use(
  (config) => {
    // Add timestamp for cache busting
    if (config.method === 'get') {
      config.params = {
        ...config.params,
        _t: Date.now(),
      };
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor for error handling
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 429) {
      throw new Error('Too many requests. Please try again later.');
    }
    if (error.response?.status >= 500) {
      throw new Error('Server error. Please try again later.');
    }
    if (error.code === 'ECONNABORTED') {
      throw new Error('Request timeout. Please check your connection.');
    }
    throw error;
  }
);

// Generic API request function
async function request<T>(config: AxiosRequestConfig): Promise<T> {
  try {
    const response: AxiosResponse<ApiResponse<T>> = await api.request(config);
    
    if (response.data.success) {
      return response.data.data as T;
    } else {
      throw new Error(response.data.error || 'Request failed');
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const message = error.response?.data?.error || error.message;
      throw new Error(message);
    }
    throw error;
  }
}

// Restaurant API functions
export const restaurantApi = {
  getAll: () => request<Restaurant[]>({ method: 'GET', url: '/restaurants' }),
  
  getBySlug: (slug: string) => 
    request<Restaurant>({ method: 'GET', url: `/restaurant/${slug}` }),
  
  create: (data: Partial<Restaurant>) => 
    request<Restaurant>({ method: 'POST', url: '/restaurants', data }),
  
  update: (id: string, data: Partial<Restaurant>) => 
    request<Restaurant>({ method: 'PUT', url: `/restaurant/${id}`, data }),
  
  delete: (id: string) => 
    request<void>({ method: 'DELETE', url: `/restaurant/${id}` }),
  
  updateBranding: (id: string, branding: Restaurant['branding']) => 
    request<Restaurant>({ method: 'PUT', url: `/restaurant/${id}/branding`, data: branding }),
  
  getQRCodes: (id: string) => 
    request<Restaurant['qrCodes']>({ method: 'GET', url: `/restaurant/${id}/qr-codes` }),
  
  generateQRCode: (id: string, tableNumber?: string) => 
    request<{ qrCodeUrl: string }>({ 
      method: 'POST', 
      url: `/restaurant/${id}/qr-codes`,
      data: { tableNumber }
    }),
};

// Menu API functions
export const menuApi = {
  getAll: (restaurantId?: string) => {
    const params = restaurantId ? { restaurantId } : {};
    return request<Menu[]>({ method: 'GET', url: '/menu', params });
  },
  
  getById: (id: string) => 
    request<Menu>({ method: 'GET', url: `/menu/${id}` }),
  
  create: (data: Partial<Menu>) => 
    request<Menu>({ method: 'POST', url: '/menu', data }),
  
  update: (id: string, data: Partial<Menu>) => 
    request<Menu>({ method: 'PUT', url: `/menu/${id}`, data }),
  
  delete: (id: string) => 
    request<void>({ method: 'DELETE', url: `/menu/${id}` }),
  
  duplicate: (id: string, name: string) => 
    request<Menu>({ method: 'POST', url: `/menu/${id}/duplicate`, data: { name } }),
  
  // Category operations
  getCategories: (menuId: string) => 
    request<Menu['categories']>({ method: 'GET', url: `/menu/${menuId}/categories` }),
  
  addCategory: (menuId: string, category: Partial<Menu['categories'][0]>) => 
    request<Menu['categories'][0]>({ 
      method: 'POST', 
      url: `/menu/${menuId}/categories`, 
      data: category 
    }),
  
  updateCategory: (menuId: string, categoryId: string, data: Partial<Menu['categories'][0]>) => 
    request<Menu['categories'][0]>({ 
      method: 'PUT', 
      url: `/menu/${menuId}/categories/${categoryId}`, 
      data 
    }),
  
  deleteCategory: (menuId: string, categoryId: string) => 
    request<void>({ method: 'DELETE', url: `/menu/${menuId}/categories/${categoryId}` }),
  
  reorderCategories: (menuId: string, categoryIds: string[]) => 
    request<Menu['categories']>({ 
      method: 'POST', 
      url: `/menu/${menuId}/categories/reorder`, 
      data: { categoryIds } 
    }),
  
  // Item operations
  getItems: (menuId: string) => 
    request<Menu['categories'][0]['items']>({ method: 'GET', url: `/menu/${menuId}/items` }),
  
  addItem: (menuId: string, categoryId: string, item: Partial<Menu['categories'][0]['items'][0]>) => 
    request<Menu['categories'][0]['items'][0]>({ 
      method: 'POST', 
      url: `/menu/${menuId}/items`, 
      data: { ...item, categoryId } 
    }),
  
  updateItem: (menuId: string, itemId: string, data: Partial<Menu['categories'][0]['items'][0]>) => 
    request<Menu['categories'][0]['items'][0]>({ 
      method: 'PUT', 
      url: `/menu/${menuId}/items/${itemId}`, 
      data 
    }),
  
  deleteItem: (menuId: string, itemId: string) => 
    request<void>({ method: 'DELETE', url: `/menu/${menuId}/items/${itemId}` }),
  
  bulkImportItems: (menuId: string, items: any[]) => 
    request<{ successful: number; failed: number; errors: any[] }>({ 
      method: 'POST', 
      url: `/menu/${menuId}/items/bulk`, 
      data: { items } 
    }),
  
  reorderItems: (menuId: string, categoryId: string, itemIds: string[]) => 
    request<Menu['categories'][0]['items']>({ 
      method: 'POST', 
      url: `/menu/${menuId}/items/reorder`, 
      data: { categoryId, itemIds } 
    }),
};

// Upload API functions
export const uploadApi = {
  uploadImage: (file: File) => {
    const formData = new FormData();
    formData.append('image', file);
    
    return request<UploadResponse>({
      method: 'POST',
      url: '/upload/image',
      data: formData,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  },
  
  uploadImages: (files: File[]) => {
    const formData = new FormData();
    files.forEach((file, index) => {
      formData.append(`images`, file);
    });
    
    return request<UploadResponse[]>({
      method: 'POST',
      url: '/upload/images',
      data: formData,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  },
  
  uploadCSV: (file: File) => {
    const formData = new FormData();
    formData.append('csv', file);
    
    return request<{ data: any[]; headers: string[] }>({
      method: 'POST',
      url: '/upload/csv',
      data: formData,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  },
  
  deleteFile: (filename: string) => 
    request<void>({ method: 'DELETE', url: `/upload/${filename}` }),
};

// Public API functions (for customer menu viewing)
export const publicApi = {
  getMenuBySlug: (restaurantSlug: string) => 
    request<{ restaurant: Restaurant; menu: Menu }>({ 
      method: 'GET', 
      url: `/public/menu/${restaurantSlug}` 
    }),
  
  getRestaurantBySlug: (restaurantSlug: string) => 
    request<Restaurant>({ method: 'GET', url: `/public/restaurant/${restaurantSlug}` }),
  
  trackView: (restaurantId: string, data: any) => 
    request<void>({ 
      method: 'POST', 
      url: `/public/analytics/${restaurantId}`, 
      data 
    }),
  
  getQRCode: (restaurantSlug: string, tableNumber?: string) => {
    const params = tableNumber ? { table: tableNumber } : {};
    return api.get(`/public/qr/${restaurantSlug}`, { 
      params,
      responseType: 'blob' 
    });
  },
};

// Analytics API functions
export const analyticsApi = {
  getDashboard: (restaurantId: string, dateRange?: { start: string; end: string }) => 
    request<Analytics>({ 
      method: 'GET', 
      url: `/analytics/${restaurantId}/dashboard`,
      params: dateRange 
    }),
  
  getScans: (restaurantId: string, dateRange?: { start: string; end: string }) => 
    request<Analytics['metrics']>({ 
      method: 'GET', 
      url: `/analytics/${restaurantId}/scans`,
      params: dateRange 
    }),
  
  getPopularItems: (restaurantId: string, limit?: number) => 
    request<Analytics['metrics']['popularItems']>({ 
      method: 'GET', 
      url: `/analytics/${restaurantId}/items`,
      params: { limit } 
    }),
  
  getTimeAnalytics: (restaurantId: string, dateRange?: { start: string; end: string }) => 
    request<Analytics['metrics']['timeDistribution']>({ 
      method: 'GET', 
      url: `/analytics/${restaurantId}/time`,
      params: dateRange 
    }),
  
  exportData: (restaurantId: string, format: 'csv' | 'pdf' = 'csv') => 
    api.get(`/analytics/${restaurantId}/export`, { 
      params: { format },
      responseType: 'blob' 
    }),
};

// Health check
export const healthCheck = () => 
  request<{ status: string; timestamp: string }>({ 
    method: 'GET', 
    url: '/health' 
  });

export default api;