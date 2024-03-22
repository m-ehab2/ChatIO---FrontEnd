import { Avatar, Box, IconButton, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import InfoIcon from "@mui/icons-material/Info";

interface StatusBarProps {
  name: string;
  img: string;
}

export default function StatusBar({ name, img }: StatusBarProps) {
  return (
    <Box
      sx={{
        backgroundColor: "#F5F5F5",
        border: "1px solid #DFE0E4",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: "10%",
      }}
    >
      <Box
        sx={{
          display: "flex",

          padding: "10px 20px",
          gap: "10px",
        }}
      >
        <Avatar src={img} sx={{ width: "45px", height: "45px" }} />
        <Box>
          <Typography
            fontFamily={"Inter"}
            fontSize={"14px"}
            fontWeight={"500"}
            color={"#385A64"}
          >
            {name}
          </Typography>
          <Typography
            fontFamily={"Inter"}
            fontSize={"14px"}
            fontWeight={"300"}
            color={"#27AE60"}
          >
            Online
          </Typography>
        </Box>
      </Box>
      <Box>
        <IconButton
          aria-label="Edit"
          sx={{
            borderRadius: "50%",
            fontSize: "20px",
            color: "#5f5f5f",
          }}
        >
          <SearchIcon fontSize="inherit" />
        </IconButton>
        <IconButton
          aria-label="Edit"
          sx={{
            borderRadius: "50%",
            fontSize: "20px",
            color: "#5f5f5f",
          }}
        >
          <InfoIcon fontSize="inherit" />
        </IconButton>
      </Box>
    </Box>
  );
}
