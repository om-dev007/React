import React, {useState, useContext} from 'react'
import UserContext from '../context/UserContext'

const Login = () => {
    const [userName, setUserName] = useState('')
    const [Password, setPassword] = useState('')
    const {setUser} = useContext(UserContext)
    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({userName, Password})
    }
  return (
    <div>
        <h2>Login</h2>
        <input value={userName} onChange={(e) => {
            setUserName(e.target.value)
        }} type="text" placeholder='Username..' />
        <input value={Password} onChange={(e) => {
            setPassword(e.target.value)
        }} type="text" name="" id="" placeholder='Password' />
        <button onClick={(e) => {
            handleSubmit(e)
        }}>Submit</button>
    </div>
  )
}

export default Login