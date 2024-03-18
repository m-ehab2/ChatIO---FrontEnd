import React from "react";
import { Box, Typography, ButtonGroup, Button, Chip } from "@mui/material";

export default function Chats() {
  return (
    <Box>
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
          sx={{
            background: "#4E7C89",
            fontFamily: "Inter",
            fontWeight: "500",
            color: "white",
            borderColor: "transparent",
            fontSize: "12px",
          }}
        />
        <Chip
          label="Groups"
          clickable
          variant="outlined"
          sx={{
            fontFamily: "Inter",
            fontWeight: "500",
            color: "white",
            borderColor: "transparent",
            fontSize: "12px",
          }}
        />
        <Chip
          label="Contacts"
          clickable
          variant="outlined"
          sx={{
            fontFamily: "Inter",
            fontWeight: "500",
            color: "white",
            borderColor: "transparent",
            fontSize: "12px",
          }}
        />
      </Box>
    </Box>
  );
}
