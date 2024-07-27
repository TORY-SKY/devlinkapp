import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import ErrorPage from "./components/ErrorPage";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Addlink from "./components/Addlink";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/nav",
      element: <Navbar />,
      errorElement: "error",
    },
    {
      path: "/login",
      element: <Login />,
      errorElement: "error",
    },
    {
      path: "/signup",
      element: <Signup />,
      errorElement: "error reaching this page",
    },
    {
      path: "/addlink",
      element: <Addlink />,
      errorElement: "error reaching this page",
    },
  ]);
  return (
    <>
      <div>
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
