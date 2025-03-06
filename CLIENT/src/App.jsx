import HomePage from "./routes/homePage/homePage";
import { Layout, RequireAuth } from "./routes/layout/layout";
import ListPage from "./routes/listPage/listPage";
import Login from "./routes/login/login";
import ProfilePage from "./routes/profilePage/profilePage";
import ProfileUpdatePage from "./routes/profileUpdatePage/profileUpdatePage";
import Register from "./routes/register/register";
import SinglePage from "./routes/singlePage/singlePage";
import NewPostPage from "./routes/newPostPage/newPostPage";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { listPageLoader, profilePageLoader, singlePageLoader } from "./lib/loaders";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/list",
          loader: listPageLoader,
          element: <ListPage />,
        },
        {
          path: "/:id",
          loader: singlePageLoader,
          element: <SinglePage />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register />,
        }
      ]
    },
    {
      path: "/",
      element: <RequireAuth />,
      children: [
        {
          path: "/profile",
          loader: profilePageLoader,
          element: <ProfilePage />,
        },
        {
          path: "/profile/update",
          element: <ProfileUpdatePage />
        },
        {
          path: "/add",
          element: <NewPostPage />
        },
      ]
    }
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
