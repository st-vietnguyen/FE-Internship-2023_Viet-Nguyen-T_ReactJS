export const getDataFromLocalStorage = (key: string) => {
  return JSON.parse(localStorage.getItem(key) || '[]');
};

export const saveDataToLocalStorage = (key: string, value: Object[]): void => {
  localStorage.setItem(key, JSON.stringify(value));
};

export enum StorageKey {
  CART = 'cart',
  USER = 'user',
}
