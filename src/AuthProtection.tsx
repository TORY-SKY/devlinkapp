import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./common/firebase";

import { Navigate } from "react-router-dom";

interface AuthProtectionProps {
  Component: React.ComponentType<any>;
}
const AuthProtection: React.FC<AuthProtectionProps> = ({ Component }) => {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    // console.log(user);
    return <h1>loading...</h1>;
  }
  if (!user) {
    // console.log(user + "<= user");
    return <Navigate to="/login" />;
  }
  return <Component />;
};

export default AuthProtection;
// after setting up the sign up and signin page,
// I discovered that user can just type my component directory into the url
// and without signin up or login in thet'll be able to access the app
// this led me to learn about protected routes
// im still getting myself familiar with it cause i know this is not all to it
// aluta continua...
