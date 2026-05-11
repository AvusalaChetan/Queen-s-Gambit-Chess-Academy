import Navbar from "./components/Navbar";
import LadingPage from "./pages/LadingPage";

import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";

const RootLayout = () => (
  <>
    <Navbar />
    <Outlet />
  </>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {index: true, element: <LadingPage />},
      {path: "curriculum", element: <>Curriculum</>},
      {path: "Coaches", element: <>Our Coaches</>},
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
