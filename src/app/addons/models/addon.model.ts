export interface Addon {
  id: number;
  name: string;
  description: string;
  price: number;
  isSelected: boolean;
}

export const DEFAULT_ADDON_VALUE: Addon = {
  id: 0,
  name: '',
  description: '',
  price: 0,
  isSelected: false,
};
