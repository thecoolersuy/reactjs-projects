import React from 'react'
import userContext from '../context/userContext'


function Profile() {
    const contextValue = React.useContext(userContext)
    const {user} = contextValue
     console.log("context value in profile:" ,JSON.stringify(contextValue))
    if(!user) return <div>Please login first!</div>
  return (
     <div>Welcome {user.username} your password is {user.password}</div>
  )
}

export default Profile