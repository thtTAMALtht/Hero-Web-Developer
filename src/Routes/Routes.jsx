import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Home from "../Pages/Home/Home";
import Apps from "../Pages/Apps/Apps";
import Installations from "../Pages/Installations/Installations";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import AllApplication from "../Pages/Apps/AllApplication";
import AppDetails from "../Pages/Apps/AppDetails";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    // errorElement: <ErrorPage></ErrorPage>,
    // hydrateFallbackElement: <p>loading.....</p>,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: '/applications',
        Component: AllApplication,
        
      },
      {
        path: '/installation',
        Component: Installations,
      },
      {
        path: '/app/:id',
        Component: AppDetails
      },
      {
        path: '*',
        Component: ErrorPage
      },
    ],
  },
]);

export default router;
