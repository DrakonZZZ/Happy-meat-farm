import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export function middleware(req) {
  const cookieStore = cookies();
  const cookiePresent = cookieStore.get(process.env.COOKIE_NAME);
  const url = req.url;

  if (!cookiePresent && url.includes('/portal')) {
    return NextResponse.redirect(new URL('/access', url));
  }

  if (cookiePresent && url.includes('/access')) {
    return NextResponse.redirect(new URL('/portal/home', url));
  }
}
