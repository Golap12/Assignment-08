import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './components/Home';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/root/Root';
import ListedBooks from './components/ListedBooks';
import PagesToRead from './components/PagesToRead';
import Details from './components/Details';
import WishList from './components/WishList';
import Read from './components/Read';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/listedbooks',
        element: <ListedBooks />,
        children: [
          {
            index: true,
            element: <Read />,
            loader: () => fetch('/books.json')
          },
          {
            path: 'wishlist',
            element: <WishList />,
            loader: () => fetch('/books.json')
          },
        ]
      },
      {
        path: '/pagestoRead',
        element: <PagesToRead />,
      },
      {
        path: '/details/:id',
        element: <Details />,
        loader: () => fetch('/books.json')
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
