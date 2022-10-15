import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  const accessToken = req.cookies.get('accessToken');

  if (!accessToken) {
    NextResponse.redirect(new URL('/auth/login', req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/about/:path*'],
};
