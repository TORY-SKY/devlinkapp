import { createContext, useContext, useState, ReactNode } from "react";

import {User} from "../common/Interfaces"
interface UserContextType {
  theUser: User | null;
  setUser: (user: User | null) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);
export const UserProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [theUser, setUser] = useState<User | null>(null);
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
