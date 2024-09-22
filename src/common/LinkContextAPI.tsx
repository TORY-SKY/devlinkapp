import { createContext, useState, useContext, ReactNode } from "react";
import { LinkData } from "./Interfaces";

// Define the type for the image data
interface LinkContext {
  links: LinkData[];
  addLink: (links: LinkData[]) => void;
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

  const addLink = (links: LinkData[]) => {
    // setDevLinks((prev) => [...prev, links]);
    // up there was what the code looks like before and i was getting errors
    // i was putting another array (links) inside of the [...prev] array and i was getting error
    // what i should have done was to spread the new incoming array (links) inside the [...prev, ] like i did down here
    setDevLinks((prev) => [...prev, ...links]);
    console.log(links);
    debugger;
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
    throw new Error("useLinkContext must be used within an LinkProvider");
  }
  return context;
};
