import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Package2, ShoppingCart, TrendingUp, Users } from 'lucide-react';

const stats = [
  {
    title: 'Total Products',
    value: '24',
    icon: Package2,
  },
  {
    title: 'Total Orders',
    value: '12',
    icon: ShoppingCart,
  },
  {
    title: 'Total Customers',
    value: '48',
    icon: Users,
  },
  {
    title: 'Revenue',
    value: '$1,234',
    icon: TrendingUp,
  },
];

export default function StoreDashboard() {
  return (
    <div className="py-8">
      <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">
                {stat.title}
              </CardTitle>
              <stat.icon className="h-4 w-4 text-gray-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}