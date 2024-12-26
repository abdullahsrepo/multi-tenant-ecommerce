import { headers } from 'next/headers';

export function getTenantFromHost(host?: string | null): string | null {
  if (!host) return null;
  
  // Remove port if present
  const hostname = host.split(':')[0];
  
  // Check if it's a custom domain (to be implemented with tenant settings)
  // For now, we'll just handle subdomains
  const parts = hostname.split('.');
  
  if (parts.length > 2) {
    // We have a subdomain
    return parts[0];
  }
  
  return null;
}

export async function getCurrentTenant() {
  const headersList = headers();
  const host = headersList.get('host');
  return getTenantFromHost(host);
}