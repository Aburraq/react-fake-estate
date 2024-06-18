import "./layout.scss";
import HomePage from "./routes/homepage/HomePage";
import { Layout, RequireAuth } from "./routes/layout/Layout";
import ListPage from "./routes/list-page/ListPage";

import {
  createBrowserRouter, 
  RouterProvider,

} from "react-router-dom";
import SinglePage from "./routes/single-page/SinglePage";
import ProfilePage from "./routes/profile-page/ProfilePage";
import Login from "./routes/login/Login";
import Register from "./routes/register/Register";
import NewPostPage from "./routes/new-post-page/NewPostPage";
import ProfileUpdatePage from "./routes/proile-update-page/ProfileUpdatePage";
import { listPageLoader, profilePageLoader, singlePageLoader } from "./lib/loaders";

export default function App() {

  const router = createBrowserRouter([
    {
      path:"/",
      element: <Layout />,
      children:[
        {
          path: "/",
          element: <HomePage />
        },
        {
          path: "/list",
          element: <ListPage />,
          loader: listPageLoader
        },
        {
          path: "/:id",
          element: <SinglePage />,
          loader: singlePageLoader
        },

        {
          path: "/login",
          element: <Login />
        },
        {
          path: "/register",
          element: <Register />
        },
        {
          path: "/add",
          element: <NewPostPage />
        },
        {
          path: "/profile/update",
          element: <ProfileUpdatePage />
        },
      ]
  
    },
    {
      path:"/",
      element: <RequireAuth />,
      children: [
        {
          path: "/profile",
          element: <ProfilePage />,
          loader: profilePageLoader
        },
        {
          path: "/profile/update",
          element: <ProfileUpdatePage />
        },
      ]
    }
  ]);

  return (
    <RouterProvider router={router} />
  )
}
