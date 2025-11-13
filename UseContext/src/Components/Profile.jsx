import React, {useContext} from 'react'
import UserContext from '../context/UserContext'
import UserContextProvider from '../context/UserContextProvider'

const Profile = () => {
    const {user} = useContext(UserContext)
    if(!user) {
      return  (<div>Please LogIn</div>)
    }
    return (
        <div> Welcome {user.userName}  </div>
    )
}

export default Profile