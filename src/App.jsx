import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.scss'
import "./pages/layout/layout.scss";
import Homepage from './pages/homepage/Homepage';
import Listpage from './pages/listpage/Listpage';
import Layout from './pages/layout/Layout';
import {
  createBrowserRouter,
  RouterProvider,

} from "react-router-dom";
import Singlepage from './pages/singlepage/Singlepage';
import Profilepage from './pages/profilePage.jsx/Profilepage';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
      {
        path : "/",
        element: <Homepage/>
      },
      {path : "/list",
        element: <Listpage/>
      },
      {path : "/:id",
        element: <Singlepage/>
      },
      {
        path: "/profile",
        element: <Profilepage/>
      }
    ]
    }
  ]);

  return (
    <RouterProvider router = {router}/>
  )
}

export default App
