import './App.css'
import Login from './pages/login/Login.jsx'
import Registration from './pages/registration/index.jsx'
import { createBrowserRouter,createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import "react-toastify/dist/ReactToastify.css"



function App() {
  const router= createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route element={<Registration/>} path='/registration'/>
        <Route element={<Login/>} path='/'/>
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
