import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar";
import ErrorPage from "./components/ErrorPage";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Addlink from "./components/Addlink";
import AuthProtection from "./AuthProtection";
import ProfileDetails from "./components/ProfileDetails";
import ForgotPassword from "./components/ForgotPassword";
import AddLinkComponent from "./components/AddLinkComponent";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/nav",
      // had to wrap it like this cause i got this typscript error ()
      //Type 'Element | ((props: any) => Element)' is not assignable to type 'ReactNode'
      element: <AuthProtection Component={Navbar} />,
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
      element: <AuthProtection Component={Addlink} />,
      errorElement: "error reaching this page",
    },
    {
      path: "/profile",
      element: <AuthProtection Component={ProfileDetails} />,
      errorElement: "error reaching profile",
    },
    {
      path: "/forgotpassword",
      element: <ForgotPassword />,
      errorElement: "error reaching profile",
    },
    {
      path: "/test",
      element: <AddLinkComponent />,
      errorElement: "error reaching profile",
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
