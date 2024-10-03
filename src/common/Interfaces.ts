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
export interface User {
  accessToken: string | "";
  displayName: string | "";
  email: string | "";
  emailVerified: boolean | "";
  isAnonymous: boolean | "";
  metadata: {
    createdAt: string | "";
    lastLoginAt: string | "";
    lastSignInTime: string | "";
    creationTime: string | "";
  };
  phoneNumber: string | null;
  photoURL: string | "";
  providerId: string | "";
  uid: string | "";
}
