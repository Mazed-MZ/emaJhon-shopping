import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Order from './components/Shop/Order/Order.jsx';
import Inventory from './components/Inventory/Inventory.jsx';
import Shop from './components/Shop/Shop.jsx';
import Match from './components/MatchTickets/Match.jsx';
import TeamDetails from './components/MatchTickets/TeamDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "inventory",
        element: <Inventory />,
        loader: () => fetch('https://restcountries.com/v3.1/all')
      },
      {
        path: "shop",
        element: <Shop></Shop>
      },
      {
        path: "match",
        element: <Match></Match>,
        loader: () => fetch('https://www.thesportsdb.com/api/v1/json/3/search_all_teams.php?s=Soccer&c=England')
      }
    ],
  },
]);


// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App></App>,
//   },
//   {
//     path: "/order",
//     element: <Order></Order>,
//   },
//   {
//     path: "/inventory",
//     element: <Inventory></Inventory>
//   }
// ]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
