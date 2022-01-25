import React from 'react'
import { redirect, useLoaderData } from 'remix'
import type { ActionFunction, LoaderFunction } from 'remix'
import { resetPassword } from '~/queries/auth'

type LoaderData = {
  token?: string
}

export const loader: LoaderFunction = ({ request }) => {
  const [, urlSearch] = request.url.split('?')

  if (!urlSearch) {
    return redirect('/')
  }

  const token = new URLSearchParams(urlSearch).get('token')

  if (!token) {
    return redirect('/')
  }

  return {
    token,
  }
}

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData()
  const password = formData.get('password')?.toString()
  const confirmPassword = formData.get('confirm-password')?.toString()
  const formToken = formData.get('token')

  if (!formToken) {
    return redirect('/')
  }

  if (!password || !confirmPassword) {
    throw new Response('New password not provided', { status: 400 })
  }

  if (password !== confirmPassword) {
    throw new Response('Password do not match', { status: 400 })
  }

  const token = formToken.toString()
  const { error } = await resetPassword(token, password)

  if (error) {
    return redirect('/')
  }

  return redirect('/sign-in')
}

function ResetPassword() {
  const { token } = useLoaderData<LoaderData>()

  return (
    <main>
      <h1>Reset Password</h1>
      <form method="post" action="/reset-password">
        <label>
          Password
          <input type="password" name="password" />
        </label>
        <label>
          Confirm Password
          <input type="password" name="confirm-password" />
        </label>
        <input type="hidden" name="token" value={token} />
        <button type="submit">Reset Password</button>
      </form>
    </main>
  )
}

export default ResetPassword
