import { Box, Grid } from "@mui/material";
import SideBar from "./SideBar";
import MainChat from "./MainChat";
import useFetchAllChats from "../../Hooks/useFetchAllChats";
import useFetchAllGroupChats from "../../Hooks/useFetchAllGroupChats";
import useFetchAllUsers from "../../Hooks/useFetchAllUsers";

export default function Chat() {
  const { chats } = useFetchAllChats();
  const { chats: groupedChats } = useFetchAllGroupChats();
  const { users } = useFetchAllUsers();
  return (
    <Box sx={{ background: "#F5F5F5", height: "100vh" }}>
      <Grid container sx={{ height: "100%" }}>
        <Grid
          item
          md={3}
          sx={{
            padding: "30px",
            border: "2px solid #DFE0E4",
            borderWidth: "0px 2px 0px 0px",
            height: "100%",
          }}
        >
          <SideBar chats={chats} groupedChats={groupedChats} users={users} />
        </Grid>
        <Grid sx={{ height: "100%" }} item md={9}>
          <MainChat />
        </Grid>
      </Grid>
    </Box>
  );
}
