export const saveToLocalStorage = (key: string, value: unknown) => {
  if (typeof window !== 'undefined') {
    window.localStorage.setItem(key, JSON.stringify(value));
  }
};

export const getFromLocalStorage = (key: string): never | null => {
  if (typeof window !== 'undefined') {
    const item = window.localStorage.getItem(key);
    if (item) {
      try {
        return JSON.parse(item);
      } catch (error) {
        console.error('Error parsing localStorage item:', error);
        return null;
      }
    }
  }
  return null;
};

export const removeFromLocalStorage = (key: string) => {
  if (typeof window !== 'undefined') {
    window.localStorage.removeItem(key);
  }
};
