import { useState, useCallback } from 'react';
import { menuApi } from '../utils/api';
import { Menu, MenuItem, Category, MenuFormData, ItemFormData, CategoryFormData } from '../types';
import { generateId, getErrorMessage } from '../utils/helpers';
import { useMenuStorage } from './useLocalStorage';
import toast from 'react-hot-toast';

interface UseMenuReturn {
  menu: Menu | null;
  menus: Menu[];
  loading: boolean;
  error: string | null;
  createMenu: (data: MenuFormData & { restaurantId: string }) => Promise<Menu | null>;
  updateMenu: (id: string, data: Partial<Menu>) => Promise<Menu | null>;
  deleteMenu: (id: string) => Promise<boolean>;
  duplicateMenu: (id: string, name: string) => Promise<Menu | null>;
  getMenu: (id: string) => Promise<Menu | null>;
  getMenus: (restaurantId?: string) => Promise<Menu[]>;
  addCategory: (menuId: string, category: CategoryFormData) => Promise<Category | null>;
  updateCategory: (menuId: string, categoryId: string, data: Partial<Category>) => Promise<Category | null>;
  deleteCategory: (menuId: string, categoryId: string) => Promise<boolean>;
  reorderCategories: (menuId: string, categoryIds: string[]) => Promise<boolean>;
  addItem: (menuId: string, categoryId: string, item: ItemFormData) => Promise<MenuItem | null>;
  updateItem: (menuId: string, itemId: string, data: Partial<MenuItem>) => Promise<MenuItem | null>;
  deleteItem: (menuId: string, itemId: string) => Promise<boolean>;
  reorderItems: (menuId: string, categoryId: string, itemIds: string[]) => Promise<boolean>;
  bulkImportItems: (menuId: string, items: any[]) => Promise<boolean>;
  setCurrentMenu: (menu: Menu | null) => void;
  clearError: () => void;
}

export function useMenu(): UseMenuReturn {
  const [menus, setMenus] = useState<Menu[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const { value: menu, setValue: setStoredMenu } = useMenuStorage();

  const clearError = useCallback(() => setError(null), []);

  const setCurrentMenu = useCallback((menu: Menu | null) => {
    setStoredMenu(menu);
  }, [setStoredMenu]);

  const createMenu = useCallback(async (
    data: MenuFormData & { restaurantId: string }
  ): Promise<Menu | null> => {
    setLoading(true);
    setError(null);

    try {
      const menuData: Partial<Menu> = {
        ...data,
        isActive: true,
        categories: [],
        lastUpdated: new Date().toISOString(),
      };

      const newMenu = await menuApi.create(menuData);
      
      setMenus(prev => [...prev, newMenu]);
      setCurrentMenu(newMenu);
      
      toast.success('Menu created successfully!');
      return newMenu;
    } catch (err) {
      const message = getErrorMessage(err);
      setError(message);
      toast.error(message);
      return null;
    } finally {
      setLoading(false);
    }
  }, [setCurrentMenu]);

  const updateMenu = useCallback(async (
    id: string, 
    data: Partial<Menu>
  ): Promise<Menu | null> => {
    setLoading(true);
    setError(null);

    try {
      const updatedMenu = await menuApi.update(id, {
        ...data,
        lastUpdated: new Date().toISOString(),
      });
      
      setMenus(prev => prev.map(m => m._id === id ? updatedMenu : m));
      
      if (menu && menu._id === id) {
        setCurrentMenu(updatedMenu);
      }
      
      toast.success('Menu updated successfully!');
      return updatedMenu;
    } catch (err) {
      const message = getErrorMessage(err);
      setError(message);
      toast.error(message);
      return null;
    } finally {
      setLoading(false);
    }
  }, [menu, setCurrentMenu]);

  const deleteMenu = useCallback(async (id: string): Promise<boolean> => {
    setLoading(true);
    setError(null);

    try {
      await menuApi.delete(id);
      
      setMenus(prev => prev.filter(m => m._id !== id));
      
      if (menu && menu._id === id) {
        setCurrentMenu(null);
      }
      
      toast.success('Menu deleted successfully!');
      return true;
    } catch (err) {
      const message = getErrorMessage(err);
      setError(message);
      toast.error(message);
      return false;
    } finally {
      setLoading(false);
    }
  }, [menu, setCurrentMenu]);

  const duplicateMenu = useCallback(async (id: string, name: string): Promise<Menu | null> => {
    setLoading(true);
    setError(null);

    try {
      const duplicatedMenu = await menuApi.duplicate(id, name);
      
      setMenus(prev => [...prev, duplicatedMenu]);
      
      toast.success('Menu duplicated successfully!');
      return duplicatedMenu;
    } catch (err) {
      const message = getErrorMessage(err);
      setError(message);
      toast.error(message);
      return null;
    } finally {
      setLoading(false);
    }
  }, []);

  const getMenu = useCallback(async (id: string): Promise<Menu | null> => {
    setLoading(true);
    setError(null);

    try {
      const fetchedMenu = await menuApi.getById(id);
      setCurrentMenu(fetchedMenu);
      return fetchedMenu;
    } catch (err) {
      const message = getErrorMessage(err);
      setError(message);
      return null;
    } finally {
      setLoading(false);
    }
  }, [setCurrentMenu]);

  const getMenus = useCallback(async (restaurantId?: string): Promise<Menu[]> => {
    setLoading(true);
    setError(null);

    try {
      const fetchedMenus = await menuApi.getAll(restaurantId);
      setMenus(fetchedMenus);
      return fetchedMenus;
    } catch (err) {
      const message = getErrorMessage(err);
      setError(message);
      return [];
    } finally {
      setLoading(false);
    }
  }, []);

  const addCategory = useCallback(async (
    menuId: string, 
    category: CategoryFormData
  ): Promise<Category | null> => {
    setLoading(true);
    setError(null);

    try {
      const categoryData: Partial<Category> = {
        ...category,
        _id: generateId(),
        order: menu?.categories.length || 0,
        isActive: true,
        items: [],
      };

      const newCategory = await menuApi.addCategory(menuId, categoryData);
      
      // Update local menu state
      if (menu && menu._id === menuId) {
        const updatedMenu = {
          ...menu,
          categories: [...menu.categories, newCategory],
          lastUpdated: new Date().toISOString(),
        };
        setCurrentMenu(updatedMenu);
      }
      
      toast.success('Category added successfully!');
      return newCategory;
    } catch (err) {
      const message = getErrorMessage(err);
      setError(message);
      toast.error(message);
      return null;
    } finally {
      setLoading(false);
    }
  }, [menu, setCurrentMenu]);

  const updateCategory = useCallback(async (
    menuId: string,
    categoryId: string,
    data: Partial<Category>
  ): Promise<Category | null> => {
    setLoading(true);
    setError(null);

    try {
      const updatedCategory = await menuApi.updateCategory(menuId, categoryId, data);
      
      // Update local menu state
      if (menu && menu._id === menuId) {
        const updatedMenu = {
          ...menu,
          categories: menu.categories.map(c => 
            c._id === categoryId ? updatedCategory : c
          ),
          lastUpdated: new Date().toISOString(),
        };
        setCurrentMenu(updatedMenu);
      }
      
      toast.success('Category updated successfully!');
      return updatedCategory;
    } catch (err) {
      const message = getErrorMessage(err);
      setError(message);
      toast.error(message);
      return null;
    } finally {
      setLoading(false);
    }
  }, [menu, setCurrentMenu]);

  const deleteCategory = useCallback(async (
    menuId: string,
    categoryId: string
  ): Promise<boolean> => {
    setLoading(true);
    setError(null);

    try {
      await menuApi.deleteCategory(menuId, categoryId);
      
      // Update local menu state
      if (menu && menu._id === menuId) {
        const updatedMenu = {
          ...menu,
          categories: menu.categories.filter(c => c._id !== categoryId),
          lastUpdated: new Date().toISOString(),
        };
        setCurrentMenu(updatedMenu);
      }
      
      toast.success('Category deleted successfully!');
      return true;
    } catch (err) {
      const message = getErrorMessage(err);
      setError(message);
      toast.error(message);
      return false;
    } finally {
      setLoading(false);
    }
  }, [menu, setCurrentMenu]);

  const reorderCategories = useCallback(async (
    menuId: string,
    categoryIds: string[]
  ): Promise<boolean> => {
    setLoading(true);
    setError(null);

    try {
      await menuApi.reorderCategories(menuId, categoryIds);
      
      // Update local menu state
      if (menu && menu._id === menuId) {
        const reorderedCategories = categoryIds.map((id, index) => {
          const category = menu.categories.find(c => c._id === id);
          return category ? { ...category, order: index } : null;
        }).filter(Boolean) as Category[];
        
        const updatedMenu = {
          ...menu,
          categories: reorderedCategories,
          lastUpdated: new Date().toISOString(),
        };
        setCurrentMenu(updatedMenu);
      }
      
      return true;
    } catch (err) {
      const message = getErrorMessage(err);
      setError(message);
      toast.error(message);
      return false;
    } finally {
      setLoading(false);
    }
  }, [menu, setCurrentMenu]);

  const addItem = useCallback(async (
    menuId: string,
    categoryId: string,
    item: ItemFormData
  ): Promise<MenuItem | null> => {
    setLoading(true);
    setError(null);

    try {
      const category = menu?.categories.find(c => c._id === categoryId);
      const itemData: Partial<MenuItem> = {
        ...item,
        _id: generateId(),
        order: category?.items.length || 0,
      };

      const newItem = await menuApi.addItem(menuId, categoryId, itemData);
      
      // Update local menu state
      if (menu && menu._id === menuId) {
        const updatedMenu = {
          ...menu,
          categories: menu.categories.map(c => 
            c._id === categoryId 
              ? { ...c, items: [...c.items, newItem] }
              : c
          ),
          lastUpdated: new Date().toISOString(),
        };
        setCurrentMenu(updatedMenu);
      }
      
      toast.success('Item added successfully!');
      return newItem;
    } catch (err) {
      const message = getErrorMessage(err);
      setError(message);
      toast.error(message);
      return null;
    } finally {
      setLoading(false);
    }
  }, [menu, setCurrentMenu]);

  const updateItem = useCallback(async (
    menuId: string,
    itemId: string,
    data: Partial<MenuItem>
  ): Promise<MenuItem | null> => {
    setLoading(true);
    setError(null);

    try {
      const updatedItem = await menuApi.updateItem(menuId, itemId, data);
      
      // Update local menu state
      if (menu && menu._id === menuId) {
        const updatedMenu = {
          ...menu,
          categories: menu.categories.map(c => ({
            ...c,
            items: c.items.map(i => i._id === itemId ? updatedItem : i)
          })),
          lastUpdated: new Date().toISOString(),
        };
        setCurrentMenu(updatedMenu);
      }
      
      toast.success('Item updated successfully!');
      return updatedItem;
    } catch (err) {
      const message = getErrorMessage(err);
      setError(message);
      toast.error(message);
      return null;
    } finally {
      setLoading(false);
    }
  }, [menu, setCurrentMenu]);

  const deleteItem = useCallback(async (
    menuId: string,
    itemId: string
  ): Promise<boolean> => {
    setLoading(true);
    setError(null);

    try {
      await menuApi.deleteItem(menuId, itemId);
      
      // Update local menu state
      if (menu && menu._id === menuId) {
        const updatedMenu = {
          ...menu,
          categories: menu.categories.map(c => ({
            ...c,
            items: c.items.filter(i => i._id !== itemId)
          })),
          lastUpdated: new Date().toISOString(),
        };
        setCurrentMenu(updatedMenu);
      }
      
      toast.success('Item deleted successfully!');
      return true;
    } catch (err) {
      const message = getErrorMessage(err);
      setError(message);
      toast.error(message);
      return false;
    } finally {
      setLoading(false);
    }
  }, [menu, setCurrentMenu]);

  const reorderItems = useCallback(async (
    menuId: string,
    categoryId: string,
    itemIds: string[]
  ): Promise<boolean> => {
    setLoading(true);
    setError(null);

    try {
      await menuApi.reorderItems(menuId, categoryId, itemIds);
      
      // Update local menu state
      if (menu && menu._id === menuId) {
        const updatedMenu = {
          ...menu,
          categories: menu.categories.map(c => {
            if (c._id !== categoryId) return c;
            
            const reorderedItems = itemIds.map((id, index) => {
              const item = c.items.find(i => i._id === id);
              return item ? { ...item, order: index } : null;
            }).filter(Boolean) as MenuItem[];
            
            return { ...c, items: reorderedItems };
          }),
          lastUpdated: new Date().toISOString(),
        };
        setCurrentMenu(updatedMenu);
      }
      
      return true;
    } catch (err) {
      const message = getErrorMessage(err);
      setError(message);
      toast.error(message);
      return false;
    } finally {
      setLoading(false);
    }
  }, [menu, setCurrentMenu]);

  const bulkImportItems = useCallback(async (
    menuId: string,
    items: any[]
  ): Promise<boolean> => {
    setLoading(true);
    setError(null);

    try {
      const result = await menuApi.bulkImportItems(menuId, items);
      
      if (result.successful > 0) {
        // Refresh the menu to get updated data
        await getMenu(menuId);
        toast.success(`Successfully imported ${result.successful} items!`);
      }
      
      if (result.failed > 0) {
        toast.error(`Failed to import ${result.failed} items. Check the console for details.`);
        console.error('Import errors:', result.errors);
      }
      
      return result.failed === 0;
    } catch (err) {
      const message = getErrorMessage(err);
      setError(message);
      toast.error(message);
      return false;
    } finally {
      setLoading(false);
    }
  }, [getMenu]);

  return {
    menu,
    menus,
    loading,
    error,
    createMenu,
    updateMenu,
    deleteMenu,
    duplicateMenu,
    getMenu,
    getMenus,
    addCategory,
    updateCategory,
    deleteCategory,
    reorderCategories,
    addItem,
    updateItem,
    deleteItem,
    reorderItems,
    bulkImportItems,
    setCurrentMenu,
    clearError,
  };
}