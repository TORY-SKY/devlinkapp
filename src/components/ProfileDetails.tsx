import { useNavigate } from "react-router-dom";
import { useLinkContext } from "../common/LinkContextAPI";
import { Skeleton } from "@mui/material";

const ProfileDetails = () => {
  const navigate = useNavigate();
  function Navigate() {
    navigate("/addLink");
  }
  const { links } = useLinkContext();

  return (
    <div>
      <h1>Profile Details</h1>
      <div className="linkcomponents">
        {links.map((link, key) => (
          <table key={key}>
            <tbody>
              <tr>
                <th>Links</th>
              </tr>
              <tr>
                <td>
                  {link.url != "" ? (
                    <a href={link.url}>{link.url} link</a>
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
            </tbody>
          </table>
        ))}
      </div>
      <div>
        {links.map((li) => (
          <h1>{li.platform}</h1>
        ))}
      </div>
      <button onClick={Navigate}>back home</button>
    </div>
  );
};

export default ProfileDetails;
