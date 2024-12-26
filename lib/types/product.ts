export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  images: string[];
  sku: string;
  stock: number;
  categories: string[];
  createdAt: Date;
  updatedAt: Date;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description?: string;
  parentId?: string;
}