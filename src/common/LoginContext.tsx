import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import {
  auth,
  googleProvider,
  signInWithPopup,
  signOut,
  User,
} from "./firebase";

import { AuthContextType } from "./Interfaces";

const UserContext = createContext<AuthContextType | undefined>(undefined);
export const UserProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [theUser, setUser] = useState<User | null>(null);
  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      setUser(result.user);
      console.log("user logged in");
    } catch (error) {
      console.log(error);
    }
  };
  const signOutUser = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      console.error("Sign-out error", error);
    }
  };

  useEffect(() => {
    // Subscribe to the Firebase authentication state changes
    const unsubScribe = auth.onAuthStateChanged((firebaseUser) => {
      // Update the local user state with the current authenticated user
      setUser(firebaseUser);
    });
    return () => unsubScribe();
  }, [theUser]);
  return (
    <UserContext.Provider value={{ theUser, signInWithGoogle, signOutUser }}>
      {children}
    </UserContext.Provider>
  );
};
export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("user must be used within userProvider");
  }
  return context;
};
