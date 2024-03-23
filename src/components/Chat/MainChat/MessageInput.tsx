import { Box, Button, IconButton, TextField, styled } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import { ChangeEvent, useState } from "react";
import { useParams } from "react-router-dom";

import useSendMessage from "../../../Hooks/useSendMessage";

export default function MessageInput() {
  const [message, setMessage] = useState<string>("");
  const [image, setImage] = useState<File | null>(null);
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
    sendMessage({ chatId: id || "", content: message, media: image });
    setMessage("");
    setImage(null);
  }
  function handlePhotoUpload(e: ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0] ?? null;
    setImage(file);
  }

  const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
  });

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
        gap: "10px",
      }}
    >
      <CssTextField
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleClick()}
        value={message}
        autoFocus
        fullWidth
        placeholder="Write Something..."
      />
      <Button
        component="label"
        role={undefined}
        variant="contained"
        tabIndex={-1}
        startIcon={<AddAPhotoIcon fontSize="inherit" />}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#f5f5f5",
          backgroundColor: "#385A64",
          "&:hover": {
            color: "#f5f5f5",
            backgroundColor: "#284A54",
          },
        }}
      >
        <VisuallyHiddenInput
          onChange={(e) => handlePhotoUpload(e)}
          type="file"
        />
      </Button>
      <IconButton
        disabled={!message && !image}
        aria-label="send"
        onClick={handleClick}
        sx={{
          borderRadius: "50%",
          fontSize: "20px",
          color: "#f5f5f5",
          backgroundColor: "#385A64",
          padding: "7px",
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
