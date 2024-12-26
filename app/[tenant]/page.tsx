import { getCurrentTenant } from '@/lib/utils/tenant';

export default async function TenantHomePage() {
  const tenant = await getCurrentTenant();
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Welcome to {tenant}</h1>
      {/* TODO: Add tenant-specific content */}
    </div>
  );
}