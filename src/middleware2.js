import { NextResponse } from 'next/server';

export default function middleware(request) {
  const url = new URL(request.url);
  // Change the hostname to devart.terabox.tech
  url.hostname = 'devart.terabox.tech';
  url.port=""
  
  // Optional: Add logging for debugging
  console.log(`Redirecting to: ${url.toString()}`);
  
  return NextResponse.redirect(url.toString());
}

export const config = {
  matcher: '/:path*',
};
