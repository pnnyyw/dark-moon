import { createBrowserRouter, redirect } from "react-router-dom";
import { RegisterPage, HomeCMS, LoginPage } from "../src/pages/pages/index";
import FormData from "../src/pages/pages/EditPage";
import NotFound from "../src/pages/pages/NotfoundPage";
import UploadImage from "../src/pages/pages/UploadImg";
import Categories from "../src/pages/pages/CategoryPage";

const router = createBrowserRouter([
  {
    path: "/*",
    element: <NotFound />,
  },
  {
    path: "/login",
    element: <LoginPage />,
    loader: () => {
      if (localStorage.getItem("access_token")) {
        return redirect("/");
      }
      return null;
    },
  },
  {
    loader: () => {
      if (!localStorage.getItem("access_token")) {
        return redirect("/login");
      }
      return null;
    },
    children: [
      {
        path: "/",
        element: <HomeCMS />,
      },
      {
        path: "/add-user",
        element: <RegisterPage />,
      },
      {
        path: "/add-edit-products",
        element: <FormData />,
      },
      {
        path: "/add-edit-products/:id",
        element: <FormData />,
      },
      {
        path: "/edit-image/:id",
        element: <UploadImage />,
      },
      {
        path: "/categories",
        element: <Categories />,
      },
      {
        path: "/*",
        element: <NotFound />,
      },
    ],
  },
]);

export default router;
