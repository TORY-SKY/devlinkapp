import { useLinkContext } from "./LinkContextAPI";
import PreloadSkeleton from "./Skeloton";

const FetchedLinks = () => {
  const { linkss } = useLinkContext();
  return (
    <div>
      <div className="user-added-links-container">
        {linkss.map((link) => (
          <div key={link.id} className="link-item">
            {/* Fallback to skeleton if platform is missing */}
            {link.platform ? (
              <div>
                <img src={link.platform} alt="platform" />
                <a href={link.url}>{link.platform}</a>
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
