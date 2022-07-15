import React from 'react'
import MyInput from '../Components/UI/input/MyInput'
import MyButton from '../Components/UI/button/MyButton'
import { useContext } from 'react'
import { AuthContext } from '../context/context'
export const Login = () => {
  const {setIsAuth}= useContext(AuthContext)
  const login = event => {
    event.preventDefault();
    setIsAuth(true)
    localStorage.setItem('auth',"true")
  }
  return (
    <div>
        <h1>Login Page</h1>
        <form onSubmit={login}>
            <MyInput type="text" placeholder='Enter you login' />
            <MyInput type="password" placeholder='Enter your password' />
            <MyButton>Login</MyButton>
        </form>
    </div>
  )
}
