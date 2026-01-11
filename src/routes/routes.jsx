import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import AboutUs from "../pages/AboutUs";
import Profile from "../pages/Profile";
import HomePage from "../pages/HomePage";
import Signup from "../pages/SIgnup";
import Signin from "../pages/SIgnin";
import PrivateRoute from "../privateRoute/PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        index: true,
        element: <HomePage></HomePage>,
      },
      {
        path: "/about-us",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile></Profile>
          </PrivateRoute>
        ),
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
      {
        path: "/signin",
        element: <Signin></Signin>,
      },
    ],
  },
]);
