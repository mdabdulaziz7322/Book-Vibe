import React from 'react';
import {
  createBrowserRouter,
} from "react-router";
import Root from '../pages/Root/Root';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import BookDetails from '../pages/BookDetailes/BookDetails';
import ReadList from '../pages/ReadList/ReadList';

export const router = createBrowserRouter([
    {
      path: "/",
      Component:Root,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            index:true,
            path:"/",
            Component:Home,

        },
        {
            path:'/about',
            Component:About
        },
        {
            path:'bookDetails/:bookId',
            loader:() => fetch('booksData.json'),
            Component:BookDetails
        },
        {
          path:'/readList',
          loader:() => fetch('booksData.json'),
          Component: ReadList
        }
      ]
    },
  ]);