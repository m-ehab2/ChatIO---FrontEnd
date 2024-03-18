import { Box, Typography, Chip } from "@mui/material";
import OneChat from "./OneChat";
import { useState } from "react";
interface ChatsProps {
  chats: unknown[];
}

export default function Chats() {
  const [activeTab, setActiveTab] = useState<string>("chats");
  function handleClick(e) {
    setActiveTab(e);
  }
  const chats = [
    {
      _id: "60e7c71d4cb96b001cf25441",
      chatName: "Group Chat 1",
      groupAdmin: "60e7c6e64cb96b001cf2543f",
      users: [
        {
          _id: "60e7c6e64cb96b001cf2543f",
          name: "Alice",
          image: "https://example.com/avatar1.jpg",
        },
        {
          _id: "60e7c6f64cb96b001cf25440",
          name: "Bob",
          image: "https://example.com/avatar2.jpg",
        },
        {
          _id: "60e7c6f64cb96b001cf25440",
          name: "Ehab",
          image: "https://example.com/avatar2.jpg",
        },
      ],
      lastMessage: {
        _id: "60e7c71d4cb96b001cf25445",
        text: "Hello, everyone!",
      },
    },
    {
      _id: "60e7c7284cb96b001cf25446",
      chatName: "Individual Chat",
      groupAdmin: "60e7c6e64cb96b001cf2543f",
      users: [
        {
          _id: "60e7c6e64cb96b001cf2543f",
          name: "Crapy",
          image: "https://example.com/avatar1.jpg",
        },
        {
          _id: "60e7c6f64cb96b001cf25441",
          name: "Charlie",
          image: "https://example.com/avatar3.jpg",
        },
      ],
      lastMessage: {
        _id: "60e7c7284cb96b001cf25447",
        text: "Hi there!",
      },
    },
  ];
  return (
    <Box sx={{ height: "85%" }}>
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
            background: activeTab === "chats" && "#4E7C89",
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
            background: activeTab === "groups" && "#4E7C89",
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
            background: activeTab === "contacts" && "#4E7C89",
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
      ></Box>
    </Box>
  );
}
