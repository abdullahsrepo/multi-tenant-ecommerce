import { Store } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function Hero() {
  return (
    <div className="relative isolate px-6 pt-14 lg:px-8">
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <div className="text-center">
          <div className="flex justify-center mb-8">
            <Store className="h-12 w-12 text-primary" />
          </div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">
            Launch your online store in minutes
          </h1>
          <p className="text-lg leading-8 text-gray-600 mb-8">
            Everything you need to start selling online. No technical knowledge required.
          </p>
          <div className="flex items-center justify-center gap-x-6">
            <Link href="/signup">
              <Button size="lg">Get started</Button>
            </Link>
            <Link href="#features">
              <Button variant="outline" size="lg">Learn more</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}