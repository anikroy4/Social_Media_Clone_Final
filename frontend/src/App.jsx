import './App.css'
import Home from './pages/home/index.jsx'
import Login from './pages/login/Login.jsx'
import Registration from './pages/registration/index.jsx'
import { createBrowserRouter,createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import "react-toastify/dist/ReactToastify.css"
import LoginUser from './privateRouter/LoginUser.jsx'
import NotLoggedUser from './privateRouter/NotLoggedUser.jsx'



function App() {
  const router= createBrowserRouter(
    createRoutesFromElements(
      <Route >
        <Route element={<LoginUser/>}>
          <Route path='/' element={<Home/>} />
        </Route>
        <Route element={<NotLoggedUser />}>
          <Route path='/registration' element={<Registration/>} />
          <Route path='/login' element={<Login/>} />
        </Route>
      </Route>
    )
  )

  return (
    <>
      <RouterProvider router ={router} />
    </>
  )
}

export default App
