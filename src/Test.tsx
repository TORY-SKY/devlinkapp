import React, { useState } from "react";
import { doc, setDoc } from "firebase/firestore";
import { db } from "./common/firebase.ts";

interface LinkData {
  id: string;
  platform: string;
  url: string;
}

const LinkSaver: React.FC = () => {
  const [links, setLinks] = useState<LinkData[]>([]);
  const [newLink, setNewLink] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  // Function to handle adding a link
  const handleAddLink = async () => {
    const linkData: LinkData = {
      id: Date.now().toString(),
      platform: "GitHub", // This is just an example, you can dynamically get the platform
      url: newLink,
    };

    // Optimistically update state
    const previousLinks = [...links];
    setLinks([...links, linkData]);

    try {
      // Save to Firestore
      await setDoc(doc(db, "links", linkData.id), linkData);
    } catch (err) {
      // Revert state if there's an error
      setLinks(previousLinks);
      setError("Failed to save link!");
    }
  };

  return (
    <div>
      <h2>Save a new link</h2>
      <input
        type="text"
        value={newLink}
        onChange={(e) => setNewLink(e.target.value)}
        placeholder="Enter your link here"
      />
      <button onClick={handleAddLink}>Save Link</button>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <div>
        <h3>Saved Links:</h3>
        <ul>
          {links.map((link) => (
            <li key={link.id}>
              <strong>{link.platform}:</strong> {link.url}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LinkSaver;
