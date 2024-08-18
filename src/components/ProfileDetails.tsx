import { useNavigate } from "react-router-dom";

const ProfileDetails = () => {
  const navigate = useNavigate();
  function Navigate() {
    navigate("/nav");
  }
  return (
    <div>
      <h1>Profile Details</h1>
      <button onClick={Navigate}>back home</button>
    </div>
  );
};

export default ProfileDetails;
