import { Box, Divider } from "@mui/material";
import Profile from "../../components/Chat/SideBar/Profile";
import Chats from "../../components/Chat/SideBar/Chats";

export default function SideBar() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "5px" }}>
      <Profile />
      <Divider />
      <Chats />
    </Box>
  );
}
