import React from 'react'

const Greeting = props => {
  console.log(props)
  const email = props?.body?.user?.email
  const message = email ? `Hi, ${email}!` : "You're not logged in."

  return <span> {message} </span>
}

export default Greeting
