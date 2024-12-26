export interface Store {
  id: string;
  name: string;
  description?: string;
  logo?: string;
  currency: string;
  languages: string[];
  theme: StoreTheme;
  tenantId: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface StoreTheme {
  primaryColor: string;
  secondaryColor: string;
  fontFamily: string;
  logoPosition: 'left' | 'center';
  navigation: 'top' | 'side';
  layout: 'modern' | 'classic' | 'minimal';
}

export interface StoreCurrency {
  code: string;
  symbol: string;
  name: string;
  rate: number;
}