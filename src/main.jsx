import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Layout from './layout.jsx'
import Detail1 from './Components/Detail1.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom'

const router = createBrowserRouter(
   createRoutesFromElements(
    <><Route path='/' element={<App />} />
    <Route path='/detailchair' element={<Detail1 />} /></>
   
   )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router}/>
  </React.StrictMode>,
)
