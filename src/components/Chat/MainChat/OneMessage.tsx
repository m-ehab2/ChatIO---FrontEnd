import { Avatar, Box, Typography } from "@mui/material";
import React from "react";
import { useUser } from "../../../Context/UserContext";
import moment from "moment";

interface OneMessageProps {
  image: string;
  content: string;
  createdAt: string;
  senderId: string;
}

export default function OneMessage({
  content,
  createdAt,
  image,
  senderId,
}: OneMessageProps) {
  const { user } = useUser();
  const me = user?._id === senderId;
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "end",
        width: "100%",
        gap: "10px",
        padding: "10px 0px",
        justifyContent: me ? "end" : "start",
        flexDirection: me ? "row-reverse" : "row",
        flexGrow: "1",
      }}
    >
      <Avatar src={image} />
      <Box
        sx={{
          backgroundColor: me ? "#385A64" : "#f5f5f5",
          padding: "10px",
          maxWidth: "40%",
          borderRadius: me ? "10px 10px 0px 10px" : "10px 10px 10px 0px",
        }}
      >
        <Typography
          fontSize={"16px"}
          fontFamily={"Inter"}
          fontWeight={"400"}
          color={me ? "white" : "#385A64"}
          sx={{ marginBottom: "5px" }}
        >
          {content}
        </Typography>
        <Typography
          fontSize={"12px"}
          fontFamily={"Inter"}
          fontWeight={"300"}
          color={me ? "white" : "#385A64"}
          textAlign={me ? "end" : "start"}
        >
          {moment(createdAt).fromNow()}
        </Typography>
      </Box>
    </Box>
  );
}
