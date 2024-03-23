import { Box, CircularProgress } from "@mui/material";
import { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";

import NeutralBox from "../../components/Chat/MainChat/NeutralBox";
import StatusBar from "../../components/Chat/MainChat/StatusBar";
import MessageInput from "../../components/Chat/MainChat/MessageInput";
import ChatWindow from "../../components/Chat/MainChat/ChatWindow";
import useFetchOneChat from "../../Hooks/useFetchOneChat";
import useCreateChat from "../../Hooks/useCreateChat";

export default function MainChat() {
  const { id } = useParams<{ id: string }>();
  const { chat, fetchChat } = useFetchOneChat(id || "");
  const { createChat } = useCreateChat();
  const { pathname } = useLocation();
  const newChat = pathname.startsWith("/chat/new");
  useEffect(() => {
    newChat ? createChat(id || "") : fetchChat();
  }, [pathname, newChat]);
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: id ? "unset" : "center",
        height: "100%",
        width: "100%",
        justifyContent: id ? "unset" : "center",
      }}
    >
      {id ? (
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          {chat ? (
            <>
              <StatusBar name={chat?.chatName} img={chat?.chatImage} />
              <ChatWindow chat={chat} />
              <MessageInput />
            </>
          ) : (
            <Box
              sx={{
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                padding: "20px",
                color: "#385A64",
              }}
            >
              <CircularProgress size={"100px"} color="inherit" />
            </Box>
          )}
        </Box>
      ) : (
        <NeutralBox />
      )}
    </Box>
  );
}
