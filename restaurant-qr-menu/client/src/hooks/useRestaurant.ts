import { useState, useCallback } from 'react';
import { restaurantApi } from '../utils/api';
import { Restaurant, RestaurantFormData } from '../types';
import { generateSlug, getErrorMessage } from '../utils/helpers';
import { useRestaurantStorage, useRecentRestaurants } from './useLocalStorage';
import toast from 'react-hot-toast';

interface UseRestaurantReturn {
  restaurant: Restaurant | null;
  restaurants: Restaurant[];
  loading: boolean;
  error: string | null;
  createRestaurant: (data: RestaurantFormData) => Promise<Restaurant | null>;
  updateRestaurant: (id: string, data: Partial<Restaurant>) => Promise<Restaurant | null>;
  deleteRestaurant: (id: string) => Promise<boolean>;
  getRestaurant: (slug: string) => Promise<Restaurant | null>;
  getAllRestaurants: () => Promise<Restaurant[]>;
  updateBranding: (id: string, branding: Restaurant['branding']) => Promise<Restaurant | null>;
  generateQRCode: (id: string, tableNumber?: string) => Promise<string | null>;
  setCurrentRestaurant: (restaurant: Restaurant | null) => void;
  clearError: () => void;
}

export function useRestaurant(): UseRestaurantReturn {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const { value: restaurant, setValue: setStoredRestaurant } = useRestaurantStorage();
  const { value: recentRestaurants, setValue: setRecentRestaurants } = useRecentRestaurants();

  const clearError = useCallback(() => setError(null), []);

  const addToRecent = useCallback((restaurantId: string) => {
    setRecentRestaurants(prev => {
      const filtered = prev.filter(id => id !== restaurantId);
      return [restaurantId, ...filtered].slice(0, 10); // Keep last 10
    });
  }, [setRecentRestaurants]);

  const setCurrentRestaurant = useCallback((restaurant: Restaurant | null) => {
    setStoredRestaurant(restaurant);
    if (restaurant) {
      addToRecent(restaurant._id);
    }
  }, [setStoredRestaurant, addToRecent]);

  const createRestaurant = useCallback(async (data: RestaurantFormData): Promise<Restaurant | null> => {
    setLoading(true);
    setError(null);

    try {
      const slug = generateSlug(data.name);
      const restaurantData: Partial<Restaurant> = {
        ...data,
        slug,
        branding: {
          primaryColor: '#2563eb',
          secondaryColor: '#64748b',
          font: 'Inter',
          theme: 'modern',
        },
        qrCodes: {
          menuUrl: '',
          qrCodeUrl: '',
        },
        isActive: true,
      };

      const newRestaurant = await restaurantApi.create(restaurantData);
      
      // Update local state
      setRestaurants(prev => [...prev, newRestaurant]);
      setCurrentRestaurant(newRestaurant);
      
      toast.success('Restaurant created successfully!');
      return newRestaurant;
    } catch (err) {
      const message = getErrorMessage(err);
      setError(message);
      toast.error(message);
      return null;
    } finally {
      setLoading(false);
    }
  }, [setCurrentRestaurant]);

  const updateRestaurant = useCallback(async (
    id: string, 
    data: Partial<Restaurant>
  ): Promise<Restaurant | null> => {
    setLoading(true);
    setError(null);

    try {
      const updatedRestaurant = await restaurantApi.update(id, data);
      
      // Update local state
      setRestaurants(prev => 
        prev.map(r => r._id === id ? updatedRestaurant : r)
      );
      
      // Update current restaurant if it's the one being updated
      if (restaurant && restaurant._id === id) {
        setCurrentRestaurant(updatedRestaurant);
      }
      
      toast.success('Restaurant updated successfully!');
      return updatedRestaurant;
    } catch (err) {
      const message = getErrorMessage(err);
      setError(message);
      toast.error(message);
      return null;
    } finally {
      setLoading(false);
    }
  }, [restaurant, setCurrentRestaurant]);

  const deleteRestaurant = useCallback(async (id: string): Promise<boolean> => {
    setLoading(true);
    setError(null);

    try {
      await restaurantApi.delete(id);
      
      // Update local state
      setRestaurants(prev => prev.filter(r => r._id !== id));
      
      // Clear current restaurant if it's the one being deleted
      if (restaurant && restaurant._id === id) {
        setCurrentRestaurant(null);
      }
      
      // Remove from recent restaurants
      setRecentRestaurants(prev => prev.filter(rId => rId !== id));
      
      toast.success('Restaurant deleted successfully!');
      return true;
    } catch (err) {
      const message = getErrorMessage(err);
      setError(message);
      toast.error(message);
      return false;
    } finally {
      setLoading(false);
    }
  }, [restaurant, setCurrentRestaurant, setRecentRestaurants]);

  const getRestaurant = useCallback(async (slug: string): Promise<Restaurant | null> => {
    setLoading(true);
    setError(null);

    try {
      const fetchedRestaurant = await restaurantApi.getBySlug(slug);
      setCurrentRestaurant(fetchedRestaurant);
      return fetchedRestaurant;
    } catch (err) {
      const message = getErrorMessage(err);
      setError(message);
      return null;
    } finally {
      setLoading(false);
    }
  }, [setCurrentRestaurant]);

  const getAllRestaurants = useCallback(async (): Promise<Restaurant[]> => {
    setLoading(true);
    setError(null);

    try {
      const fetchedRestaurants = await restaurantApi.getAll();
      setRestaurants(fetchedRestaurants);
      return fetchedRestaurants;
    } catch (err) {
      const message = getErrorMessage(err);
      setError(message);
      return [];
    } finally {
      setLoading(false);
    }
  }, []);

  const updateBranding = useCallback(async (
    id: string, 
    branding: Restaurant['branding']
  ): Promise<Restaurant | null> => {
    setLoading(true);
    setError(null);

    try {
      const updatedRestaurant = await restaurantApi.updateBranding(id, branding);
      
      // Update local state
      setRestaurants(prev => 
        prev.map(r => r._id === id ? updatedRestaurant : r)
      );
      
      // Update current restaurant if it's the one being updated
      if (restaurant && restaurant._id === id) {
        setCurrentRestaurant(updatedRestaurant);
      }
      
      toast.success('Branding updated successfully!');
      return updatedRestaurant;
    } catch (err) {
      const message = getErrorMessage(err);
      setError(message);
      toast.error(message);
      return null;
    } finally {
      setLoading(false);
    }
  }, [restaurant, setCurrentRestaurant]);

  const generateQRCode = useCallback(async (
    id: string, 
    tableNumber?: string
  ): Promise<string | null> => {
    setLoading(true);
    setError(null);

    try {
      const result = await restaurantApi.generateQRCode(id, tableNumber);
      toast.success('QR code generated successfully!');
      return result.qrCodeUrl;
    } catch (err) {
      const message = getErrorMessage(err);
      setError(message);
      toast.error(message);
      return null;
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    restaurant,
    restaurants,
    loading,
    error,
    createRestaurant,
    updateRestaurant,
    deleteRestaurant,
    getRestaurant,
    getAllRestaurants,
    updateBranding,
    generateQRCode,
    setCurrentRestaurant,
    clearError,
  };
}