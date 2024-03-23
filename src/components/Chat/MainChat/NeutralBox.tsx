import { Box, Typography } from "@mui/material";
import logoPath from "../../../assets/Logo_Grey.png";
export default function NeutralBox() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        width: { md: "100%", xs: "40&" },
      }}
    >
      <Box sx={{ width: "40%" }}>
        <img src={logoPath} />
      </Box>
      <Typography
        fontWeight={"500"}
        fontFamily={"Inter"}
        fontSize={32}
        color={"#A2B1B5"}
      >
        Welcome To Speako Chat
      </Typography>
      <Typography
        fontWeight={"300"}
        fontFamily={"Inter"}
        fontSize={{ md: "18", xs: "14" }}
        color={"#A2B1B5"}
        width={520}
        textAlign={"center"}
      >
        Here you can chat with People from all over the world. Send and receive
        messages In a way that's both simple and easy.
      </Typography>
    </Box>
  );
}
