'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { formatCurrency } from '@/lib/utils/currency';

const MOCK_PRODUCTS = [
  {
    id: '1',
    name: 'Sample Product',
    description: 'This is a sample product',
    price: 29.99,
    images: ['https://images.unsplash.com/photo-1505740420928-5e560c06d30e'],
    sku: 'PROD-001',
    stock: 100,
    categories: ['Electronics'],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

export function ProductList() {
  const [products] = useState(MOCK_PRODUCTS);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <Card key={product.id} className="overflow-hidden">
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
            <p className="text-gray-600 text-sm mb-2">{product.description}</p>
            <div className="flex justify-between items-center">
              <span className="font-bold">{formatCurrency(product.price, 'USD')}</span>
              <span className="text-sm text-gray-500">Stock: {product.stock}</span>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}