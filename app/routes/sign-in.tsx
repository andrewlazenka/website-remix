import React from 'react'
import { redirect } from 'remix'

import { signIn } from '~/queries/auth'
import { getSession, commitSession } from '~/session'

import type { ActionFunction } from 'remix'

export const action: ActionFunction = async ({ request }) => {
  const remixSession = await getSession(
    request.headers.get("Cookie")
  );
  const formData = await request.formData()
  const email = formData.get('email')
  const password = formData.get('password')

  if (!email) {
    throw new Response('No email', { status: 500 })
  }

  if (!password) {
    throw new Response('No password', { status: 500 })
  }

  const { session } = await signIn(email.toString(), password.toString())
  remixSession.set('auth', session?.access_token)
  remixSession.set('userId', session?.user?.id)

  return redirect('/', {
    headers: {
      "Set-Cookie": await commitSession(remixSession)
    }
  })
}

const SignIn = () => {
  return (
    <main>
      <h1>Sign In</h1>
      <form method="post" action="/sign-in">
        <label>
          Email
          <input type="text" name="email" />
        </label>
        <label>
          Password
          <input type="password" name="password" />
        </label>
        <button type='submit'>Sign In</button>
      </form>
    </main>
  )
}

export default SignIn
