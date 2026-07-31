import './App.css'
import Registration from './pages/registration/index.jsx'
import { createBrowserRouter,createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'


const router= createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route element={<Registration/>} path='/registration'/>
    </Route>
  )
)


function App() {
  

  return (
    <>
      <RouterProvider router ={router} />
    </>
  )
}

export default App
