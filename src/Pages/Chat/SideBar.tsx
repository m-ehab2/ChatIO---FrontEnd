import { Box, Divider } from "@mui/material";
import Profile from "../../components/Chat/SideBar/Profile";
import Chats from "../../components/Chat/SideBar/Chats";
import { ChatData } from "../../Hooks/useFetchAllChats";
import { UserData } from "../../Hooks/useFetchAllUsers";
import { useState } from "react";

export interface SideBarProps {
  chats: ChatData[];
  groupedChats: ChatData[];
  users: UserData[];
}

export default function SideBar({ chats, groupedChats, users }: SideBarProps) {
  const [param, setParam] = useState<string>("");
  function handleChange(e) {
    setParam(e.target.value);
  }
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "5px",
        height: "100%",
        padding: "30px",
        border: "2px solid #DFE0E4",
        borderWidth: "0px 2px 0px 0px",
      }}
    >
      <Profile handleChange={handleChange} />
      <Divider />
      <Chats
        chats={chats.filter((chat) =>
          chat.chatName.toLowerCase().includes(param.toLowerCase())
        )}
        groupedChats={groupedChats.filter((chat) =>
          chat.chatName.toLowerCase().includes(param.toLowerCase())
        )}
        users={users.filter((user) =>
          user.name.toLowerCase().includes(param.toLowerCase())
        )}
      />
    </Box>
  );
}
