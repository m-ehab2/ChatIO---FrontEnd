import { Box, IconButton, TextField, styled } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import { useState } from "react";
import { useParams } from "react-router-dom";

import useSendMessage from "../../../Hooks/useSendMessage";

export default function MessageInput() {
  const [message, setMessage] = useState<string>("");
  const { sendMessage } = useSendMessage();
  const { id } = useParams<{ id: string }>();

  const CssTextField = styled(TextField)({
    "& .MuiOutlinedInput-root": {
      borderRadius: "30px",
      paddingLeft: "40px",
      backgroundColor: "white",
      "& .MuiInputBase-input": {
        padding: "10px",
        color: "#385A64",
        borderRadius: "30px",
      },

      "& fieldset": {
        color: "blue",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#6F7E8C",
      },
      "&:hover fieldset": {
        borderColor: "#aFaEaC",
      },
    },
  });
  function handleClick() {
    message && sendMessage({ chatId: id || "", content: message });
    setMessage("");
  }

  return (
    <Box
      sx={{
        backgroundColor: "#F5F5F5",
        border: "1px solid #DFE0E4",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "10px 30px",
        height: "10%",
      }}
    >
      <CssTextField
        onChange={(e) => setMessage(e.target.value)}
        value={message}
        autoFocus
        fullWidth
        placeholder="Write Something..."
      />
      <IconButton
        aria-label="send"
        onClick={handleClick}
        sx={{
          borderRadius: "50%",
          fontSize: "20px",
          color: "#f5f5f5",
          backgroundColor: "#385A64",
          padding: "7px",
          marginLeft: "20px",
          "&:hover": {
            color: "#f5f5f5",
            backgroundColor: "#284A54",
          },
        }}
      >
        <AddAPhotoIcon fontSize="inherit" />
      </IconButton>
      <IconButton
        aria-label="send"
        onClick={handleClick}
        sx={{
          borderRadius: "50%",
          fontSize: "20px",
          color: "#f5f5f5",
          backgroundColor: "#385A64",
          padding: "7px",
          marginLeft: "20px",
          "&:hover": {
            color: "#f5f5f5",
            backgroundColor: "#284A54",
          },
        }}
      >
        <SendIcon fontSize="inherit" />
      </IconButton>
    </Box>
  );
}
