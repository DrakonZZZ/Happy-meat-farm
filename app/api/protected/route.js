import { serialize } from 'cookie';

export async function POST(req) {
  const request = await req.json();

  const userProvidedCode = request.code;
  const cookie = serialize(process.env.COOKIE_NAME, 'true', {
    path: '/',
  });

  console.log(cookie);

  console.log(
    `usercode: ${userProvidedCode} and env: ${process.env.ACCESS_KEY}`
  );

  console.log(userProvidedCode === process.env.ACCESS_KEY);

  if (userProvidedCode !== process.env.ACCESS_KEY) {
    return new Response('Access Denied', {
      status: 401,
    });
  }

  return new Response('access granted', {
    status: 200,
    headers: {
      'set-Cookie': cookie,
    },
  });
}
