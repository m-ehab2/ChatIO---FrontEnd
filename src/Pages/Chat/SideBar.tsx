import { Box, Divider } from "@mui/material";
import Profile from "../../components/Chat/SideBar/Profile";
import Chats from "../../components/Chat/SideBar/Chats";
import { ChatData } from "../../Hooks/useFetchAllChats";
import { UserData } from "../../Hooks/useFetchAllUsers";

export interface SideBarProps {
  chats: ChatData[];
  groupedChats: ChatData[];
  users: UserData[];
}

export default function SideBar({ chats, groupedChats, users }: SideBarProps) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "5px",
        height: "100%",
      }}
    >
      <Profile />
      <Divider />
      <Chats chats={chats} groupedChats={groupedChats} users={users} />
    </Box>
  );
}
