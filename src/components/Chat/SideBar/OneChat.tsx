import { Avatar, Box, Typography } from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
import { UserData } from "../../../Hooks/useAuth";

interface OneChatProps {
  isUnread: boolean;
  lastMessage?: string;
  user?: UserData;
}

export default function OneChat({ isUnread, user, lastMessage }: OneChatProps) {
  return (
    <Box
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
        src={user?.image || ""}
        alt={user?.name || "John Doe"}
        sx={{ width: "45px", height: "45px" }}
      />
      <Box sx={{ flexGrow: "1" }}>
        <Typography
          color={"#385A64"}
          fontSize={14}
          fontWeight={"600"}
          fontFamily={"Inter"}
        >
          {user?.name || "John Doe"}
        </Typography>
        <Typography
          color={"#959595"}
          fontSize={9}
          fontWeight={"400"}
          fontFamily={"Inter"}
        >
          {lastMessage || "Start chatting " + (user?.name || "John Doe")}
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
            }}
          ></Box>
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
