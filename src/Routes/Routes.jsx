import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Home from "../Pages/Home/Home";
import Apps from "../Pages/Apps/Apps";
import Installations from "../Pages/Installations/Installations";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: '/apps',
        Component: Apps,
      },
      {
        path: '/installation',
        Component: Installations,
      },
    ],
  },
]);

export default router;
