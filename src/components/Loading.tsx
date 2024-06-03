import { CircularProgress } from "@mui/material";

export const Loading = ({ size }: { size?: number | string | undefined }) => {
  return (
    <div className="flex justify-center">
      <CircularProgress
        size={size}
        // size={smale ? 20 : undefined}
        sx={{
          color: "var(--color-primary)",
        }}
      />
    </div>
  );
};
