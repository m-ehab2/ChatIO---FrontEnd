import { Box, Grid } from "@mui/material";
import SideBar from "./SideBar";
import MainChat from "./MainChat";

export default function Chat() {
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
          }}
        >
          <SideBar />
        </Grid>
        <Grid item md={9}>
          <MainChat />
        </Grid>
      </Grid>
    </Box>
  );
}
