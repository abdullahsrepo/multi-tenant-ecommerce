import { ShoppingCart, Globe, Zap, Shield } from 'lucide-react';

const features = [
  {
    name: 'Quick Setup',
    description: 'Launch your store in minutes with our intuitive setup process.',
    icon: Zap,
  },
  {
    name: 'Custom Domain',
    description: 'Use your own domain or get started with our free subdomain.',
    icon: Globe,
  },
  {
    name: 'Secure Payments',
    description: 'Accept payments securely from customers worldwide.',
    icon: Shield,
  },
  {
    name: 'Inventory Management',
    description: 'Manage your products and stock levels with ease.',
    icon: ShoppingCart,
  },
];

export function Features() {
  return (
    <div id="features" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">Everything you need</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            All-in-one platform for your business
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}