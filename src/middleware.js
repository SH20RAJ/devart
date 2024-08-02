import { NextResponse } from 'next/server';

export default function middleware(request) {
  const url = new URL(request.url);
  url.hostname = 'devart.terabox.tech';
  
  return NextResponse.redirect(url.toString());
}

export const config = {
  matcher: '/:path*',
};
