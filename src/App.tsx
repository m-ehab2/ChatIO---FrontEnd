import { Box, Input, Typography } from "@mui/material";
import REGButton from "./components/REGButton";
import MyInput from "./components/MyInput";
// import SecButton from "./components/SecButton";

const App = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        width: "90%",
        marginLeft: "100px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "30px",
          width: "50%",
        }}
      >
        <Typography variant="h4">Create your account</Typography>
        <MyInput
          name="Username"
          type="string"
          placeholder="Enter your username"
        />
        <MyInput name="Email" type="email" placeholder="Example@email.com" />
        <MyInput name="Password" type="password" placeholder="" />
        <MyInput name="Confirm password" type="password" placeholder="" />
        <REGButton children="Sign Up" />
        <Box
          sx={{
            display: "flex",
            width: "60%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography variant="h6">or</Typography>
        </Box>
        {/* <SecButton></SecButton> */}
      </Box>
      <Box
        marginRight="100px"
        component="img"
        sx={{
          width: "40%",
          height: "70%",
          // maxHeight: { xs: 233, md: 167 },
          // maxWidth: { xs: 350, md: 250 },
        }}
        alt="The house from the offer."
        src="/src/assets/6300959.jpg"
      />
    </Box>
  );
};

export default App;
