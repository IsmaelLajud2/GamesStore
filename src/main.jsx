import React from 'react'
import ReactDOM from 'react-dom/client' 
import { createRoot } from 'react-dom/client';

import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter,RouterProvider,createRoutesFromElements,Route } from 'react-router-dom'
import RootLayout from './layout/RootLayout.jsx';
import ErrorPage from './Views/ErrorPage.jsx';
import Routes from './Views/Rutas'


const userLog ={
  name:"Ismael",
  role:"Client"
}
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<RootLayout/>}>
      {
      Routes.map(({Element,path}) =>(
        <Route key={path} path={path} element={<Element/>}></Route>
  ))
  } 
  <Route path='*' element={<ErrorPage></ErrorPage>} >

  </Route>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
