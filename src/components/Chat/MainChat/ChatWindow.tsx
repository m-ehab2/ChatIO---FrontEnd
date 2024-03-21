import { Box } from "@mui/material";
import OneMessage from "./OneMessage";
import { OneChat } from "../../../Hooks/useFetchOneChat";
import { MessageData } from "../../../Hooks/useFetchAllChats";

interface ChatWindow {
  chat: OneChat | null;
}

export default function ChatWindow({ chat }: ChatWindow) {
  return (
    <Box
      sx={{
        backgroundColor: "white",
        padding: "0px 20px",
        height: "80%",
        overflowY: "scroll",
        display: "flex",
        flexDirection: "column",
        scrollBehavior: "smooth",
      }}
    >
      {chat?.data.map((message: MessageData) => (
        <OneMessage
          content={message.content}
          createdAt={message.createdAt}
          image={message.sender.image}
          key={message._id}
          senderId={message.sender._id}
        />
      ))}
    </Box>
  );
}
