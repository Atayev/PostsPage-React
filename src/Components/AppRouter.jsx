import React, { useContext } from 'react'
import Page from '../pages/Page'
import {Routes,Route} from "react-router-dom"
import { publicRoutes,privateRoutes } from './routes/routes'
import { AuthContext } from '../context/context'
import { Login } from '../pages/Login'

const AppRouter = () => {
  const {isAuth} = useContext(AuthContext)

  
  return (
      isAuth
      ? <Routes>
      {privateRoutes.map((route,index)=> <Route path={route.path} element={route.element}  exact={route.exact}  key={index}/>)}
      <Route path="/*"   element={<Page />}/>
      </Routes>
       :<Routes>
        {publicRoutes.map((route,index)=> <Route path={route.path} element={route.element}  exact={route.exact}  key={index}/>)}
          <Route path="/*"   element={<Login />}/>
        </Routes>

  )
}

export default AppRouter;