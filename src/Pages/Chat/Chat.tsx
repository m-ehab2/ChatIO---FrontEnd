import { Box, Button, Drawer, Grid, IconButton } from "@mui/material";
import SideBar from "./SideBar";
import MainChat from "./MainChat";
import useFetchAllChats from "../../Hooks/useFetchAllChats";
import useFetchAllGroupChats from "../../Hooks/useFetchAllGroupChats";
import useFetchAllUsers from "../../Hooks/useFetchAllUsers";
import withProtectedRoute from "../../components/HOC/withProtectedRoute";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
export function Chat() {
  const { chats } = useFetchAllChats();
  const { chats: groupedChats } = useFetchAllGroupChats();
  const { users } = useFetchAllUsers();
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };
  return (
    <Box sx={{ background: "#F5F5F5", height: "100vh" }}>
      <Grid container sx={{ height: "100%" }}>
        {/* {!open && (
          <Button
            variant="contained"
            sx={{
              display: { lg: "none", md: "block", xs: "none" },
              position: "absolute",
              right: "10px",
              top: "10px",
              fontSize: "14px",
              fontFamily: "Inter",
              color: "#f5f5f5",
              backgroundColor: "#385A64",
              padding: "7px",
              "&:hover": {
                color: "#f5f5f5",
                backgroundColor: "#284A54",
              },
            }}
            onClick={toggleDrawer(true)}
          >
            Open Chats
          </Button>
        )} */}
        {!open && (
          <IconButton
            sx={{
              display: { lg: "none", xs: "block" },
              position: "absolute",
              right: "10px",
              top: "10px",
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
            onClick={toggleDrawer(true)}
            aria-label="nav"
          >
            <MenuIcon />
          </IconButton>
        )}
        <Drawer
          open={open}
          onClose={toggleDrawer(false)}
          sx={{ width: { md: "1%", xs: "70%" } }}
        >
          <SideBar chats={chats} groupedChats={groupedChats} users={users} />
        </Drawer>{" "}
        <Grid
          sx={{ height: "100%", display: { lg: "block", xs: "none" } }}
          item
          xs={3}
        >
          <SideBar chats={chats} groupedChats={groupedChats} users={users} />
        </Grid>
        <Grid sx={{ height: "100%" }} item lg={9} xs={12}>
          <MainChat />
        </Grid>
      </Grid>
    </Box>
  );
}
const ProtectedChat = withProtectedRoute(Chat);

export default ProtectedChat;
