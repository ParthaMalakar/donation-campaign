import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import RootPage from './Components/RootPage/RootPage';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import Home from './Components/Home/Home';
import Donation from './Components/Donation/Donation';
import Statistics from './Components/Statistics/Statistics';
import Description from './Components/Description/Description';

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage></RootPage>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element:<Home></Home>,
      },
      {
        path: "/donation",
        element:<Donation></Donation>,
        loader: () => fetch('../public/donationData.json')
      },
      {
        path: "/statistics",
        element:<Statistics></Statistics>,
      },
      {
        path: "/description/:id",
        element: <Description></Description>,
        loader: () => fetch('../public/donationData.json')
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
