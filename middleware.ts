import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getTenantFromHost } from '@/lib/utils/tenant';

export function middleware(request: NextRequest) {
  const tenant = getTenantFromHost(request.headers.get('host'));
  
  // If we're on the main domain, only allow access to the homepage and signup
  if (!tenant) {
    if (!request.nextUrl.pathname.match(/^\/($|signup|login)/)) {
      return NextResponse.redirect(new URL('/', request.url));
    }
    return NextResponse.next();
  }

  // Add tenant information to headers for use in the application
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-tenant-id', tenant);

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};