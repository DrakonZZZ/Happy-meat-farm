import { NextResponse } from 'next/server';

export default function middleware(req) {
  let checkPassword = req.cookies.get('check');
  let url = req.url;

  if (!checkPassword && url.includes('/portal')) {
    return NextResponse.redirect(new URL('/access', req.url));
  }
}
