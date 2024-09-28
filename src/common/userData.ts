import { doc, getDoc } from "firebase/firestore";
import { db } from "./firebase";

const getUserData = async (userId: string) => {
  try {
    const userDoc = doc(db, "users", userId);
    const docSnapshot = await getDoc(userDoc);
    if (docSnapshot.exists()) {
      const data = docSnapshot.data();
      console.log("User Data: ", data);
      return data;
    } else {
      console.log("No user data found.");
    }
  } catch (error) {
    console.error("Error retrieving user data: ", error);
  }
};
export default getUserData;
