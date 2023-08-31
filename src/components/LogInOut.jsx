import React from 'react'

const LogInOut = props => {
  const message = props.body.user ? 'sign out' : 'sign in'

  const path = props.body.user ? '/logout' : '/login'

  return <a href={props.uri + path}>{message}</a>
}

export default LogInOut
