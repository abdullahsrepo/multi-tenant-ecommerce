import { Store } from 'lucide-react';
import Link from 'next/link';

export default function StoreLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background">
      <nav className="border-b">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Store className="h-6 w-6" />
            <Link href="/store" className="font-semibold">
              Store Dashboard
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/store/products" className="text-sm">
              Products
            </Link>
            <Link href="/store/settings" className="text-sm">
              Settings
            </Link>
          </div>
        </div>
      </nav>
      <main className="container mx-auto px-4">{children}</main>
    </div>
  );
}