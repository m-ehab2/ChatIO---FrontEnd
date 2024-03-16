// import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";
import { ReactNode } from "react";
import GoogleIcon from "@mui/icons-material/Google";
// const VisuallyHiddenInput = styled("input")({
//   clip: "rect(0 0 0 0)",
//   clipPath: "inset(50%)",
//   height: 1,
//   overflow: "hidden",
//   position: "absolute",
//   bottom: 0,
//   left: 0,
//   whiteSpace: "nowrap",
//   width: 1,
// });

interface prop {
  children: ReactNode;
}

const SecButton = () => {
  return (
    <Button
      component="label"
      role={undefined}
      variant="contained"
      tabIndex={-1}
      startIcon={<GoogleIcon />}
    >
      Upload file
      {/* <VisuallyHiddenInput type="file" /> */}
    </Button>
  );
};

export default SecButton;
