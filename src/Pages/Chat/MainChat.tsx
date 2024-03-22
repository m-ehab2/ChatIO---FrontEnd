import { Box } from "@mui/material";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

import NeutralBox from "../../components/Chat/MainChat/NeutralBox";
import StatusBar from "../../components/Chat/MainChat/StatusBar";
import MessageInput from "../../components/Chat/MainChat/MessageInput";
import ChatWindow from "../../components/Chat/MainChat/ChatWindow";
import useFetchOneChat from "../../Hooks/useFetchOneChat";

export default function MainChat() {
  const { id } = useParams<{ id: string }>();
  const { chat, fetchChat } = useFetchOneChat(id || "");
  useEffect(() => {
    fetchChat();
  }, [id]);
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
            ""
          )}
        </Box>
      ) : (
        <NeutralBox />
      )}
    </Box>
  );
}
