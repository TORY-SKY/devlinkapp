import React from "react";
import { getAuth, signOut } from "firebase/auth";

const Logout = () => {
  // log out
  const handleSignout = async () => {
    try {
      const auth = getAuth();
      await signOut(auth)
        .then(() => {
          // Sign-out successful.
        })
        .catch((error) => {
          // An error happened.
          console.log(error);
        });
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div>
      <button onClick={handleSignout}>Log out</button>
    </div>
  );
};

export default Logout;
