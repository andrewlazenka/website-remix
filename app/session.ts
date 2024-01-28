import { createCookieSessionStorage } from "@remix-run/cloudflare";

const sixHoursMs = 1000 * 60 * 60 * 6

const { getSession, commitSession, destroySession } =
  createCookieSessionStorage({
    cookie: {
      name: '__session',
      expires: new Date(Date.now() + sixHoursMs),
      httpOnly: true,
      maxAge: sixHoursMs,
      path: '/',
      sameSite: 'strict',
      secrets: [process.env.SESSION_SECRET || ''],
    },
  })

export { getSession, commitSession, destroySession }
