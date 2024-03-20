import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import { ReactNode } from "react";
interface prop {
  children: ReactNode;
}
const RegisterButton = ({ children }: prop) => {
  return (
    <Box>
      <Button
        sx={{
          backgroundColor: "#2A454E",
          "&:hover": {
            backgroundColor: "#405e69",
          },

          width: { md: "65%", xs: "100%" },
          borderRadius: "12px",
          maxHeight: "200px",
          minWidth: "30px",
          minHeight: "30px",
          padding: "12px",
        }}
        variant="contained"
        size="large"
        type="submit"
      >
        {children}
      </Button>
    </Box>
  );
};

export default RegisterButton;
