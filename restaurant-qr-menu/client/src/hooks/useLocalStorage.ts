import { useState, useEffect, useCallback } from 'react';
import { getFromStorage, setToStorage, removeFromStorage } from '../utils/helpers';

type SetValue<T> = (value: T | ((prevValue: T) => T)) => void;

interface UseLocalStorageReturn<T> {
  value: T;
  setValue: SetValue<T>;
  removeValue: () => void;
}

export function useLocalStorage<T>(
  key: string,
  defaultValue: T
): UseLocalStorageReturn<T> {
  // Initialize state with value from localStorage or default value
  const [value, setValue] = useState<T>(() => {
    return getFromStorage(key, defaultValue);
  });

  // Update localStorage when value changes
  useEffect(() => {
    setToStorage(key, value);
  }, [key, value]);

  // Setter function that supports functional updates
  const setStoredValue: SetValue<T> = useCallback(
    (newValue) => {
      setValue((prevValue) => {
        const valueToStore = typeof newValue === 'function' 
          ? (newValue as (prevValue: T) => T)(prevValue)
          : newValue;
        
        setToStorage(key, valueToStore);
        return valueToStore;
      });
    },
    [key]
  );

  // Remove value from localStorage
  const removeStoredValue = useCallback(() => {
    removeFromStorage(key);
    setValue(defaultValue);
  }, [key, defaultValue]);

  // Listen for changes to localStorage from other tabs/windows
  useEffect(() => {
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === key && e.newValue !== null) {
        try {
          setValue(JSON.parse(e.newValue));
        } catch (error) {
          console.error(`Error parsing localStorage value for key "${key}":`, error);
        }
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, [key]);

  return {
    value,
    setValue: setStoredValue,
    removeValue: removeStoredValue,
  };
}

// Specialized hooks for common use cases
export function useRestaurantStorage() {
  return useLocalStorage('current_restaurant', null);
}

export function useMenuStorage() {
  return useLocalStorage('current_menu', null);
}

export function useRecentRestaurants() {
  return useLocalStorage<string[]>('recent_restaurants', []);
}

export function useUserPreferences() {
  return useLocalStorage('user_preferences', {
    theme: 'light',
    language: 'en',
    currency: 'USD',
  });
}

export function useDraftMenu() {
  return useLocalStorage('draft_menu', null);
}