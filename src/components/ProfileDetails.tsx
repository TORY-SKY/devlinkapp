import { useNavigate } from "react-router-dom";
import { useLinkContext } from "../common/LinkContextAPI";
import { Skeleton } from "@mui/material";
import Navbar from "./Navbar";
import Logout from "../Logout";
import { useEffect, useRef } from "react";

const ProfileDetails = () => {
  const navigate = useNavigate();
  function Navigate() {
    navigate("/addLink");
  }
  const { linkss } = useLinkContext();

  const myButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (myButton.current) {
      myButton.current.focus();
    }
  }, []);

  return (
    <div>
      <Navbar />
      <h1>Profile Details</h1>
      <div className="some-content"></div>

      <button
        ref={myButton}
        onClick={
          Navigate
          // disp();
        }
        className="focused-btn"
        style={{
          padding: "12px",
          backgroundColor: "none",
          border: "1px solid grey",
        }}
      >
        back home
      </button>
      <Logout  />
    </div>
  );
};
// onClick={() => handleSignout()}
// onClick={handleSignout()}

export default ProfileDetails;
