import React from 'react'
import UserContextProvider from './context/UserContextProvider'
import Login from './Components/Login'
import Profile from './Components/Profile'

const App = () => {
  return (
    <UserContextProvider>
      <div>
        <h1>React With Chai and COde</h1>
        <Login/>
        <Profile/>
      </div>
    </UserContextProvider>
  )
}

export default App