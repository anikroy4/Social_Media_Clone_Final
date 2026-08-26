import './App.css'
import Home from './pages/home/Index.jsx'
import Login from './pages/login/Login.jsx'
import Registration from './pages/registration/index.jsx'
import { createBrowserRouter,createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import "react-toastify/dist/ReactToastify.css"



function App() {
  const router= createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/' element={<Home/>} />
        <Route path='/registration' element={<Registration/>} />
        <Route path='/login' element={<Login/>} />
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
