import { createContext, useContext, useState, ReactNode } from "react";
import {
  auth,
  googleProvider,
  signInWithPopup,
  signOut,
  User,
} from "./firebase";
import { onAuthStateChanged } from "firebase/auth";
import { AuthContextType } from "./Interfaces";

const UserContext = createContext<AuthContextType | undefined>(undefined);
export const UserProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [theUser, setUser] = useState<"" | null>(null);
  return (
    <UserContext.Provider value={{ theUser, setUser }}>
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
