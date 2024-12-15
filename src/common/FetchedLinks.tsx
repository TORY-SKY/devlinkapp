import { useLinkContext } from "./LinkContextAPI";
import PreloadSkeleton from "./Skeloton";
// WEE NEED TO ADD AI TO THIS APP
const FetchedLinks = () => {
  const { linkss } = useLinkContext();
  return (
    <div>
      <div className="user-added-links-container">
        {linkss.map((link) => (
          <div key={link.id} className="link-item">
            {/* Fallback to skeleton if platform is missing */}
            {link.platform ? (
              <div className="clickable">
                <a href={link.url} target="_blank" rel="noopener noreferrer">
                  {link.platform}
                </a>
                <div className="a">
                  <a href={link.url} target="_blank" rel="noopener noreferrer">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.666626 5.3333V6.66664H8.66663L4.99996 10.3333L5.94663 11.28L11.2266 5.99997L5.94663 0.719971L4.99996 1.66664L8.66663 5.3333H0.666626Z"
                        fill="white"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            ) : (
              <PreloadSkeleton />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FetchedLinks;
