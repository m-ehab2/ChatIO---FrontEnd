import { Box } from "@mui/material";
import NeutralBox from "../../components/Chat/MainChat/NeutralBox";
export default function MainChat() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        height: "100%",
        justifyContent: "center",
      }}
    >
      <NeutralBox />
    </Box>
  );
}
