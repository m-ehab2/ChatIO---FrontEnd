import { Box, Input } from "@mui/material";
import REGButton from "./components/REGButton";
import MyInput from "./components/MyInput";

const App = () => {
  return (
    <Box
      className="app-container"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "50px",
          width: "50%",
        }}
      >
        <h1>Create your account</h1>
        <MyInput
          name="Username"
          type="string"
          placeholder="Enter your username"
        />
        <MyInput name="Email" type="email" placeholder="Example@email.com" />
        <MyInput name="Password" type="password" placeholder="" />
        <MyInput name="Confirm password" type="password" placeholder="" />
        <REGButton children="Sign Up" />
      </Box>
      <Box>
        <img className="image" src="/src/assets/6300959.jpg" alt="" />
      </Box>
    </Box>
  );
};

export default App;
