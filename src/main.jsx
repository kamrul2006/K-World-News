import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, Navigate, RouterProvider, } from "react-router-dom";
import HomeLayOuts from './Layouts/HomeLayOuts';
import Error from './Components/error';
import MainNews from './Home/MainNews';
import AuthLayout from './Layouts/AuthLayout';
import LoginPage from './Auth/Login';
import SignUpSection from './Auth/SignUp';
import AuthProvider from './Providers/AuthProvider';
import NewsDetailsLayOut from './Layouts/NewsDetails';
import PrivetRout from './Firebase/Privetrought';

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <Error></Error>,
    element: <HomeLayOuts></HomeLayOuts>,
    children: [
      {
        path: "/",
        element: <Navigate to={"/category/08"}></Navigate>
      },
      {
        path: "/category/:id",
        loader: ({ params }) => fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`),
        element: <MainNews></MainNews>
      }
    ]
  },

  {
    path: "/news/:id",
    loader: ({ params }) => fetch(`https://openapi.programming-hero.com/api/news/${params.id}`),
    element: <PrivetRout><NewsDetailsLayOut></NewsDetailsLayOut></PrivetRout>
  },

  {
    path: '/auth',
    errorElement: <Error></Error>,
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: '/auth/login',
        element: <LoginPage></LoginPage>
      },
      {
        path: '/auth/signUp',
        element: <SignUpSection></SignUpSection>
      },
    ]

  }

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
