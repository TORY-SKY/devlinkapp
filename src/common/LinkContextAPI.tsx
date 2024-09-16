import { createContext, useState, useContext, ReactNode } from "react";
import { LinkData } from "./Interfaces";

// Define the type for the image data
interface LinkContext {
  links: LinkData[];
  addLink: (link: LinkData) => void;
}
// Define the type for the context

const LinkContext = createContext<LinkContext | undefined>(undefined);

// firestore data
// Create a provider component
export const LinkProvider = ({
  children,
}: {
  children: ReactNode;
}): JSX.Element => {
  const [links, setDevLinks] = useState<LinkData[]>([]);

  const addLink = (linkss: LinkData) => {
    setDevLinks((prev) => [...prev, linkss]);
  };

  return (
    <LinkContext.Provider value={{ links, addLink }}>
      {children}
    </LinkContext.Provider>
  );
};

// Custom hook to use the ImageContext
export const useLinkContext = () => {
  const context = useContext(LinkContext);
  if (!context) {
    throw new Error("useLinkContext must be used within an ImageProvider");
  }
  return context;
};
