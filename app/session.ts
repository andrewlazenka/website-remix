import { createCookieSessionStorage } from "remix"

const { getSession, commitSession, destroySession } =
  createCookieSessionStorage({
    cookie: {
      name: "__session",
      expires: new Date(Date.now() + 60),
      httpOnly: true,
      maxAge: 60,
      path: "/",
      sameSite: "strict",
    }
  })

export { getSession, commitSession, destroySession }
