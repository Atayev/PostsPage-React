import React from 'react'
import { useContext } from 'react'
import {Link} from "react-router-dom"
import { AuthContext } from '../../../context/context'
import MyButton from '../button/MyButton'
export const Navbar = () => {
  const {setIsAuth} = useContext(AuthContext)
  const logout = () => {
    setIsAuth(false)
    localStorage.removeItem('auth')
  }
  return (
    <div className="navbar">
      <MyButton onClick={logout}>logout</MyButton>
    <div className="navbar_links">
        <Link to="/about">About US</Link>
        <Link to="/page">POSTS Page</Link>
    </div>
  </div>
  )
}
