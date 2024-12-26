import { getCurrentTenant } from '@/lib/utils/tenant';
import { notFound } from 'next/navigation';

export default async function TenantLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const tenant = await getCurrentTenant();
  
  if (!tenant) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background">
      {/* TODO: Add tenant-specific header/navigation */}
      <main>{children}</main>
      {/* TODO: Add tenant-specific footer */}
    </div>
  );
}