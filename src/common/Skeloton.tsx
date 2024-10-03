import { Skeleton } from "@mui/material";

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
