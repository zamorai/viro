import React from 'react'
import { useRouter } from 'next/dist/client/router'
import { useAuth } from '../contexts/Auth'

export function PrivateRoute({ component: Component, ...rest }) {
  const { user } = useAuth()
  const router = useRouter()

  return (
    <div
      {...rest}
      render={(props) => {
        // Renders the page only if `user` is present (user is authenticated)
        // Otherwise, redirect to the login page
        return user ? <Component {...props} /> : router.push('/')
      }}
    ></div>
  )
}