import { redirect } from '@remix-run/server-runtime'
import React from 'react'
import type { ActionFunction } from 'remix'
import { signIn } from '~/queries/auth'

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData()
  const email = formData.get('email')
  const password = formData.get('password')

  if (!email) {
    throw new Response('No email', { status: 500 })
  }

  if (!password) {
    throw new Response('No password', { status: 500 })
  }

  const { session, user, error } = await signIn(email.toString(), password.toString())

  return redirect('/')
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
