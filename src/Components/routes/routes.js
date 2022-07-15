import About from "../../pages/About";
import { Login } from "../../pages/Login";
import Page from "../../pages/Page";
import PostIdPage from "../../pages/PostIdPage";



export const privateRoutes = [

    {path: "/about", element:<About/>, exact:true},
    {path: "/page", element:<Page/>, exact:true},
    {path: "/page/:id", element:<PostIdPage/>, exact:true},

]

export const publicRoutes = [
    {path: "/login", element:<Login/>, exact:true},
]

