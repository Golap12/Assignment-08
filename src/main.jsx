import React from 'react';
import ReactDOM from 'react-dom/client';
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
import Error from './components/error/Error';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Bookshelf from './components/Bookshelf';
import Contact from './components/Contact';
import SignIn from './components/SignIn';
import Login from './components/Login';





const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error></Error>,

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
        loader: () => fetch('/books.json')
      },
      {
        path: '/details/:id',
        element: <Details />,
        loader: () => fetch('/books.json')
      },
      {
        path: '/bookshelf',
        element: <Bookshelf />,
        loader: () => fetch('/books2.json')
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/sign-in',
        element: <SignIn />,
      },
      {
        path: '/login',
        element: <Login />,
      },
    ]
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <ToastContainer />
  </React.StrictMode>
);
