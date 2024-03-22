import { Box, Typography, Chip, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useEffect, useState } from "react";

import OneChat from "./OneChat";
import { ChatData } from "../../../Hooks/useFetchAllChats";
import useAuth from "../../../Hooks/useAuth";
import { UserData } from "../../../Hooks/useFetchAllUsers";

interface ChatsProps {
  chats: ChatData[];
  groupedChats: ChatData[];
  users: UserData[];
}

export default function Chats({ chats, groupedChats, users }: ChatsProps) {
  const [activeTab, setActiveTab] = useState<string>("chats");
  const { login, register } = useAuth();
  useEffect(() => {
    login("renadibrahim022@gmail.com", "12345678");
    register("Test for useAuth", "test@gmail.com", "123456789", "123456789");
  }, []);
  // const [open, setOpen] = useState(false);
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);

  function handleClick(e: string) {
    setActiveTab(e);
  }

  return (
    <Box sx={{ height: "85%", position: "relative" }}>
      <Typography fontSize={25} fontWeight={500} color={"#385A64"}>
        Messages
      </Typography>
      <Box
        sx={{
          background: "#385A64",
          display: "flex",
          justifyContent: "space-Evenly",
          padding: "7px 10px",
          borderRadius: "100px",
        }}
      >
        <Chip
          label="Chats"
          clickable
          onClick={() => handleClick("chats")}
          variant="outlined"
          sx={{
            background: activeTab === "chats" ? "#4E7C89" : "",
            fontFamily: "Inter",
            fontWeight: "500",
            color: "white",
            borderColor: "transparent",
            fontSize: "12px",
            transition: "all",
            transitionDuration: "0.1s",
            transitionTimingFunction: "ease-in-out",
            "&:hover": {
              borderColor: "white",
            },
          }}
        />
        <Chip
          label="Groups"
          clickable
          onClick={() => handleClick("groups")}
          variant="outlined"
          sx={{
            background: activeTab === "groups" ? "#4E7C89" : "",
            fontFamily: "Inter",
            fontWeight: "500",
            color: "white",
            borderColor: "transparent",
            fontSize: "12px",
            transition: "all",
            transitionDuration: "0.1s",
            transitionTimingFunction: "ease-in-out",
            "&:hover": {
              borderColor: "white",
            },
          }}
        />
        <Chip
          label="Contacts"
          clickable
          onClick={() => handleClick("contacts")}
          variant="outlined"
          sx={{
            background: activeTab === "contacts" ? "#4E7C89" : "",
            fontFamily: "Inter",
            fontWeight: "500",
            color: "white",
            borderColor: "transparent",
            fontSize: "12px",
            transition: "all",
            transitionDuration: "0.1s",
            transitionTimingFunction: "ease-in-out",
            "&:hover": {
              borderColor: "white",
            },
          }}
        />
      </Box>
      <Box
        sx={{
          marginTop: "10px",
          display: "flex",
          flexDirection: "column",
          maxHeight: "80%",
          overflowY: "scroll",
          padding: "0px 10px",
        }}
      >
        {activeTab === "chats"
          ? chats.map((chat) => {
              return (
                <OneChat
                  key={chat._id}
                  lastMessage={chat.lastMessage?.content}
                  user={chat.chatName}
                  image={chat.image}
                  isUnread={chat.unseenMessagesCount}
                  id={chat._id}
                  isUser={false}
                />
              );
            })
          : null}
        {activeTab === "groups"
          ? groupedChats.map((chat) => {
              return (
                <OneChat
                  key={chat._id}
                  lastMessage={chat.lastMessage?.content}
                  user={chat.chatName}
                  image={chat.image}
                  isUnread={chat.unseenMessagesCount}
                  id={chat._id}
                  isUser={false}
                />
              );
            })
          : ""}
        {activeTab === "contacts"
          ? users.map((user) => {
              return (
                <OneChat
                  key={user._id}
                  user={user.name}
                  image={user.image}
                  id={user._id}
                  isUnread={0}
                  isUser={true}
                />
              );
            })
          : ""}
      </Box>
      {activeTab === "groups" ? (
        <IconButton
          sx={{
            position: "absolute",
            backgroundColor: "#385A64",
            color: "white",
            "&:hover": {
              backgroundColor: "#4f6f7f",
            },
            bottom: "-10px",
            right: "10px",
          }}
          aria-label="Add"
        >
          <AddIcon />
        </IconButton>
      ) : (
        ""
      )}
    </Box>
  );
}
