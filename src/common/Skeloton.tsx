import { Skeleton } from "@mui/material";

export const UserSkeleton = () => {
  return (
    <Skeleton
      variant="circular"
      width={96}
      height={96}
      style={{ marginBottom: "25px" }}
    />
  );
};
export const UserDisplayName = () => {
  return (
    <Skeleton
      variant="rectangular"
      width={237}
      height={20}
      style={{ marginBottom: "2px" }}
    />
  );
};
export const UserDisplayEmail = () => {
  return (
    <Skeleton
      variant="rectangular"
      width={72}
      height={8}
      style={{ borderRadius: "8px", marginTop: "13px" }}
    />
  );
};
const PreloadSkeleton = () => {
  return (
    <div>
      <Skeleton
        variant="rectangular"
        width={237}
        height={44}
        style={{ borderRadius: "8px", marginBottom: "25px" }}
      />
    </div>
  );
};

export default PreloadSkeleton;
