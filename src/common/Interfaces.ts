import { User } from "./firebase";

// interface for individual link
export type LinkData = {
  id: string;
  platform: string;
  url: string;
};
export type LinkDataContext = {
  id: number;
  platform: string;
  url: string;
};

export interface LinkContext {
  linkss: LinkData[];
  addLink: (link: LinkData) => void;
}

//login interface

// types/User.ts
export interface AuthContextType {
  user: User | null;
  signInWithGoogle: () => Promise<void>;
  signOutUser: () => Promise<void>;
}
