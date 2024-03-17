// import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";
import { Children, ReactNode } from "react";
import GoogleIcon from "@mui/icons-material/Google";
import { styled } from "@mui/material/styles";

const CustomButton = styled(Button)({
  textTransform: "none", // Prevents uppercase transformation
});
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

const GoogleButton = ({ children }: prop) => {
  return (
    <CustomButton
      variant="contained"
      startIcon={<GoogleIcon sx={{ color: "red" }} />}
      sx={{
        backgroundColor: "#E8F0F1",
        color: "black",
        width: { md: "59%", xs: "100%" },
        height: "45px",
        fontSize: { md: "1.2rem", xs: "0.5rem" },
        fontFamily: "Arial",
        borderRadius: "20px",
        textDecoration: "none",
        fontSize: "15px",
        "&:hover": {
          color: "white",
        },
      }}
      disableElevation
      disableRipple
    >
      {children}
      {/* <VisuallyHiddenInput type="file" /> */}
    </CustomButton>
  );
};

export default GoogleButton;
