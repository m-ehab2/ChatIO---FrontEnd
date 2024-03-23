import {
  Box,
  Typography,
  Chip,
  IconButton,
  LinearProgress,
  Modal,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";

import OneChat from "./OneChat";
import { ChatData } from "../../../Hooks/useFetchAllChats";
import { UserData } from "../../../Hooks/useFetchAllUsers";

interface ChatsProps {
  chats: ChatData[];
  groupedChats: ChatData[];
  users: UserData[];
}

export default function Chats({ chats, groupedChats, users }: ChatsProps) {
  const [activeTab, setActiveTab] = useState<string>("chats");
  const [open, setOpen] = useState<boolean>(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
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
        {activeTab === "chats" ? (
          chats.length ? (
            chats.map((chat) => {
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
          ) : (
            <LinearProgress />
          )
        ) : null}
        {activeTab === "groups" ? (
          groupedChats ? (
            groupedChats.map((chat) => {
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
          ) : (
            <LinearProgress />
          )
        ) : (
          ""
        )}
        {activeTab === "contacts" ? (
          users ? (
            users.map((user) => {
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
          ) : (
            <LinearProgress />
          )
        ) : (
          ""
        )}
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute" as "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
          }}
        >
          {users.map((user) => user.name)}
        </Box>
      </Modal>
      {activeTab === "groups" ? (
        <IconButton
          onClick={handleOpen}
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
