import { Box, Divider } from "@mui/material";
import Profile from "../../components/Chat/SideBar/Profile";
import Chats from "../../components/Chat/SideBar/Chats";

export default function SideBar() {
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
      <Chats chats={chats} />
    </Box>
  );
}
