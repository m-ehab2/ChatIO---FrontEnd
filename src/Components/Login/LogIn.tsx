// import { useState } from 'react';
import { Box, TextField, Button, Typography, Link } from '@mui/material'
import path from '../../assets/login.jpeg'
function LogIn() {

  return (
    <>
      {/* Main container */}
      <Box sx={{
        // background: "red",
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        position: "relative",
        height: "100vh",
        // right: 0,
        // top: 0,
        // bottom: 0,
        // padding: "2rem",
        margin: 0
      }}
      >

        {/* left container inside Main*/}
        <Box sx={{ paddingLeft:{ lg:"5.5rem", md:"3.5rem", xs:"1rem"}, paddingBottom: "5.5rem", paddingRight: {lg:"5.5rem"}, width: {lg:"30%",md:"90%",xs:"100%"}, paddingTop: "4.2rem" }}>

          {/* heading */}
          <Typography variant="h4" sx={{ fontFamily: 'Varela Round', color: 'black', marginBottom: '5rem', fontWeight: 700, paddingLeft: "1rem" }}>
            Welcome Back 👋
          </Typography>

          {/* input form */}
          <form style={{ display: "flex", flexDirection: "column", gap: "2.3rem",width:"100%" }}>

            {/* inputs container inside form */}
            <Box sx={{ display: "flex", flexDirection: "column" }} >
              <TextField
                label="Username"
                variant="outlined"
                sx={{
                  mb: 5,
                  borderRadius: "12px",
                  borderColor: '#d4d7e3',
                  background: "#fbfbfb",
                  width:"100%" // Change background color to white
                }}
              />
              <TextField
                label="Password"
                type="password"
                variant="outlined"
                sx={{
                  mb: 2,
                  borderRadius: "12px",
                  borderColor: '#d4d7e3',
                  background: "#fbfbfb",
                }}
              />

              {/* link container inside form*/}
              <Box sx={{ width: "100%", display: "flex", justifyContent: "flex-end", fontSize: "1.2rem", }}>
                <Link href="#" sx={{ color: "#385a64", mb: 2, textDecoration: "none" }}>Forget Password?</Link>
              </Box>
            </Box>

            {/* submit bottom inside form */}
            <Button variant="contained" sx={{ height: "60px", borderRadius: "16px", fontSize: "20px", background: "#2a454e" }}>Log in</Button>
          </form>

          {/* Or container */}
          <Box sx={{ display: "flex", alignItems: "center", color: "gray", mt: 2, width: "97%", paddingLeft: "0.5rem" }}>
            
            {/* left line */}
            <Box sx={{ flex: 1, height: "1px", background: "#d4d4d4", mr: 1 }} />

            Or

            {/* right line */}
            <Box sx={{ flex: 1, height: "1px", background: "#d4d4d4", ml: 1 }} />
          </Box>

          {/* google & Facebook links container */}
          <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", width: "100%", alignItems: "center", gap: "1.5rem" }}>
            <Box sx={{ background: "#e8f0f1", width: "90%", display: "flex", justifyContent: "center", padding: "1rem", borderRadius: "14px" }}><Typography>Sign in with Google</Typography> </Box>
            <Box sx={{ background: "#e8f0f1", width: "90%", display: "flex", justifyContent: "center", padding: "1rem", borderRadius: "14px" }}><Typography>Sign in with Facebook</Typography> </Box>
          </Box>

          {/* sign up link container */}
          <Box sx={{ width: "90%", display: "flex", justifyContent: "center", fontSize: "1.2rem", fontWeight: 400, fontFamily: "Varela Round", padding: "2rem" }}>
            <Link href="#" sx={{ color: "#385a64", mb: 2, textDecoration: "none" }}>Don't you have an account? Signup</Link>
          </Box>
        </Box>

        {/* right container inside Main */}
        <Box sx={{ background:"red", width: { md: "60%", sm: "50%" }, display: { xs: "none", md: "flex" }, alignItems: "center", justifyContent: { sm: "end" } }}>
          
          {/* img */}
          <Box
            component="img"
            src={path}
            sx={{
              // width: { md: '100%', lg: '100%' }, 
              width: "100%"

            }}
            alt="Your Image"
          /></Box>


      </Box>

    </>
  )
}

export default LogIn