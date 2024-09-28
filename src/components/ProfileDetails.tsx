import { useNavigate } from "react-router-dom";
import { useLinkContext } from "../common/LinkContextAPI";
import { Skeleton } from "@mui/material";
import Navbar from "./Navbar";

const ProfileDetails = () => {
  const navigate = useNavigate();
  function Navigate() {
    navigate("/addLink");
  }
  const { linkss } = useLinkContext();

  return (
    <div>
      <Navbar />
      <h1>Profile Details</h1>
      <div className="linkcomponents">
        {linkss.map((link) => (
          <table key={link.id}>
            <tr>
              <th>Links</th>
            </tr>
            <tr>
              <td>
                {link.url != "" ? (
                  <a href={link.url}>{link.url}</a>
                ) : (
                  <div>
                    <Skeleton
                      variant="rectangular"
                      width={237}
                      height={44}
                      style={{ borderRadius: "8px", marginBottom: "25px" }}
                    />
                    <a href={link.url}>
                      {link.url} {link.platform}
                    </a>
                  </div>
                )}
              </td>
            </tr>
          </table>
        ))}
      </div>
      <div>
        {linkss.map((li) => (
          <div key={li.id}>
            <h1>{li.platform}</h1>
            <h1>{li.url}</h1>
          </div>
        ))}
      </div>
      <button
        onClick={
          Navigate
          // disp();
        }
      >
        back home
      </button>
    </div>
  );
};

export default ProfileDetails;
