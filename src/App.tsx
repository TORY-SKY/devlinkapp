import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar";
import ErrorPage from "./ErrorPage";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Addlink from "./components/Addlink";
import AuthProtection from "./AuthProtection";
import ProfileDetails from "./components/ProfileDetails";
import ForgotPassword from "./components/ForgotPassword";
import LinkSaver from "./Test";
import { UserProvider } from "./common/LoginContext";
import Testing from "./Testing";
import AI from "./components/AI";

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
      errorElement: <AuthProtection Component={ErrorPage} />,
    },
    {
      path: "/signup",
      element: <Signup />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/addlink",
      element: <AuthProtection Component={Addlink} />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/profile",
      element: <AuthProtection Component={ProfileDetails} />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/forgotpassword",
      element: <ForgotPassword />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/test",
      element: <LinkSaver />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/testing",
      element: <Testing />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/ai",
      element: <AI />,
      errorElement: <ErrorPage />,
    },
  ]);
  return (
    <>
      <div>
        <UserProvider>
          <RouterProvider router={router} />
        </UserProvider>
      </div>
    </>
  );
}

export default App;
