import { Avatar, Box, Typography } from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
import { useNavigate } from "react-router-dom";

interface OneChatProps {
  isUnread: number;
  lastMessage?: string;
  user?: string;
  image: string;
  id: string;
  isUser: boolean;
}

export default function OneChat({
  isUnread,
  user,
  lastMessage,
  image,
  id,
  isUser,
}: OneChatProps) {
  const navigate = useNavigate();
  function handleClick() {
    isUser ? navigate("/chat/new/" + id) : navigate("/chat/" + id);
  }
  return (
    <Box
      onClick={handleClick}
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "5px",
        padding: "10px",
        cursor: "pointer",
        borderRadius: "10px",
        "&:hover": {
          background: "rgba(0,0,0,0.05)",
        },
      }}
    >
      <Avatar
        src={image || ""}
        alt={user || "John Doe"}
        sx={{ width: "45px", height: "45px" }}
      />
      <Box sx={{ flexGrow: "1" }}>
        <Typography
          color={"#385A64"}
          fontSize={14}
          fontWeight={"600"}
          fontFamily={"Inter"}
        >
          {user || "John Doe"}
        </Typography>
        <Typography
          color={"#959595"}
          fontSize={9}
          fontWeight={"400"}
          fontFamily={"Inter"}
          sx={{ width: "200px", textWrap: "pretty" }}
        >
          {lastMessage || "Start chatting " + (user || "John Doe")}
        </Typography>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", alignItems: "end" }}>
        <Typography
          color={"#BABABA"}
          fontSize={9}
          fontWeight={"400"}
          fontFamily={"Inter"}
        >
          10:35 AM
        </Typography>
        {isUnread ? (
          <Box
            sx={{
              width: "20px",
              height: "20px",
              background: "#385A64",
              borderRadius: "50%",
              textAlign: "center",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
              fontFamily: "Roboto",
              fontWeight: "300",
            }}
          >
            {isUnread}
          </Box>
        ) : (
          <Box
            sx={{
              width: "20px",
              height: "20px",
              background: "#D3D3D3",
              color: "#385A64",
              borderRadius: "50%",
              textAlign: "center",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <DoneIcon fontSize="inherit" />
          </Box>
        )}
      </Box>
    </Box>
  );
}
