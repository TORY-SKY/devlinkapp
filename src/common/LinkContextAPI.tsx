import {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
} from "react";
import { LinkData } from "./Interfaces";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "./firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";

// Define the type for the image data
interface LinkContext {
  linkss: LinkData[];
  addLink: (links: LinkData[]) => void;
  unsubscribe: () => void;
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
  const [linkss, setDevLinks] = useState<LinkData[]>([]);

  // fetching saved links from the firestore
  // passing it to the context API
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchLinks = async () => {
      const querySnapshot = await getDocs(collection(db, "links"));
      const fetchedLinks = querySnapshot.docs.map((link) => ({
        id: link.id,
        ...link.data(),
      })) as LinkData[];
      setDevLinks(fetchedLinks);
    };

    fetchLinks();
  }, []);
  const auth = getAuth();
  const unsubscribe = onAuthStateChanged(auth, (user) => {
    if (user) {
      setLoading(false);
    } else {
      setLoading(true);
    }
  });
  // Adding link to Firestore and update context state
  const addLink = async (linkss: LinkData[]) => {
    try {
      const newLinks = await Promise.all(
        // the {_ignoredId} is introduced because i already specify id in the interface of the links array
        // and to use a unique id for the objects in the (links) array
        // so basically _ignoredId is introduced just so i could use a unique ids, which is coming from firebase
        linkss.map(async ({ id: _ignoredId, ...link }) => {
          const docRef = await addDoc(collection(db, "links"), link);
          return { id: docRef.id, ...link };
        })
      );
      // Updating the state with all new links
      setDevLinks((prev) => [...prev, ...newLinks]);
    } catch (error) {
      console.error("Error adding link: ", error);
    }

    // setDevLinks((prev) => [...prev, links]);
    // up there was what the code looks like before and i was getting errors
    // i was putting another array (links) inside of the [...prev] array and i was getting error
    // what i should have done was to spread the new incoming array (links) inside the [...prev, ] like i did down here
  };

  return (
    <LinkContext.Provider value={{ linkss, addLink, unsubscribe }}>
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
