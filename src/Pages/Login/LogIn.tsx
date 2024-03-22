import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Link,
  useMediaQuery,
  InputAdornment,
  IconButton,
  CircularProgress,
} from "@mui/material";
import { useFormik } from "formik";
import { useTheme } from "@mui/material/styles";
import { Link as RouterLink } from "react-router-dom";
import * as Yup from "yup";
import imgPath from "../../assets/login.jpeg";
import useAuth from "../../Hooks/useAuth";
import { FcGoogle } from "react-icons/fc";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import { useGoogleLogin } from "@react-oauth/google";
import axios, { AxiosResponse, AxiosError } from "axios";
// import { GoogleLogin } from '@react-oauth/google';
// import { jwtDecode } from "jwt-decode";

function LogIn() {
  const loginWithGoogle = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        const res = await axios.get(
          "https://www.googleapis.com/oauth2/v3/userinfo",
          {
            headers: {
              Authorization: `Bearer ${tokenResponse.access_token}`, // Use tokenResponse.access_token
            },
          }
        );

        console.log(res);
      } catch (err) {
        console.log(err);
      }
    },
  });

  const { login, loading, error } = useAuth();

  const [isSubmitting, setIsSubmitting] = useState(false);

  const theme = useTheme();

  const isMediumOrSmaller = useMediaQuery(theme.breakpoints.down("lg"));
  // const isLargeOrAbove = useMediaQuery(theme.breakpoints.up("lg"));

  const [showPassword, setShowPassword] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Please enter a valid email address")
        .required("Email is required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
    }),
    onSubmit: async (values) => {
      try {
        console.log(values);
        setIsSubmitting(true);
        await login(values.email, values.password);
      } catch (error) {
        console.error("Login error:", error);
      } finally {
        setIsSubmitting(false);
      }
    },
  });

  return (
    <>
      {/* Main container */}
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          margin: 0,
          boxSizing: "border-box",
        }}
      >
        {/* heading */}
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: { md: "start", xs: "center" },
            paddingBottom: { md: "1.8rem", xs: "2rem" },
          }}
        >
          <Typography
            variant="h4"
            sx={{
              textShadow: "2px 2px 2px rgba(0, 0, 0, 0.25)",
              color: "#253940",
              fontSize: { sm: "2.5rem", xs: "1.2rem" },
              fontFamily: "Varela Round",
              fontWeight: 700,
              paddingLeft: { xs: "1rem", md: "3rem", lg: "10.5rem" },
              paddingTop: { md: "4rem", xs: "2rem" },
            }}
          >
            Welcome Back 👋
          </Typography>
        </Box>

        {/* sub-Main Container hold left form container & right img container */}
        <Box
          sx={{
            paddingLeft: { xl: "5.5rem" },
            display: "flex",
            flexDirection: {
              md: "row",
              xs: "column-reverse",
            },
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* left container inside sub-Main*/}
          <Box
            sx={{
              // paddingRight: {  md:"0",sm: "1.5rem" },
              width: { lg: "30%", md: "33%", xs: "90%" },
            }}
          >
            {/* input form */}
            <Box
              component="form"
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
                width: "100%",
              }}
              noValidate
              // autoComplete="off"
              onSubmit={formik.handleSubmit}
            >
              {/* inputs container inside form */}
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <TextField
                  required
                  label="Email"
                  variant="outlined"
                  id="outlined-error-helper-text"
                  size={isMediumOrSmaller ? "small" : "medium"}
                  autoComplete="false"
                  helperText={
                    formik.touched.email && formik.errors.email ? (
                      <Typography sx={{ color: "e06e6e" }}>
                        {formik.errors.email}
                      </Typography>
                    ) : null
                  }
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  sx={{
                    mb: { lg: 3, xs: 2 },
                    borderRadius: "12px",
                    borderColor:
                      formik.touched.email && formik.errors.email
                        ? "red"
                        : "#d4d7e3",
                    background: "#fbfbfb",
                    width: "100%",
                  }}
                  disabled={isSubmitting}
                  {...formik.getFieldProps("email")}
                />
                <TextField
                  label="Password"
                  type={showPassword ? "text" : "password"} // Toggle between text and password type
                  variant="outlined"
                  size={isMediumOrSmaller ? "small" : "medium"}
                  helperText={
                    formik.touched.password && formik.errors.password ? (
                      <Typography sx={{ color: "error.main" }}>
                        {formik.errors.password}
                      </Typography>
                    ) : null
                  }
                  error={
                    formik.touched.password && Boolean(formik.errors.password)
                  }
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={() => setShowPassword((prev) => !prev)}
                          onKeyDown={(event) => event.preventDefault()} // Prevent default behavior
                          edge="end"
                          sx={{
                            pr: 3,
                          }}
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  sx={{
                    mb: 1,
                    borderRadius: "12px",
                    borderColor:
                      formik.touched.password && formik.errors.password
                        ? "red"
                        : "#d4d7e3",
                    background: "#fbfbfb",
                    width: "100%",
                    'input[type="password"]::-ms-reveal': {
                      display: "none",
                      width: 0,
                      height: 0,
                    },
                    'input[type="password"]::-webkit-credentials-auto-fill-button':
                      {
                        visibility: "hidden",
                      },
                  }}
                  disabled={isSubmitting}
                  {...formik.getFieldProps("password")}
                />
                {/* link container inside form*/}
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "flex-end",
                    fontSize: { lg: "1.2rem", xs: ".8.rem" },
                    // fontFamily:
                    //   "Inter, system-ui, Avenir, Helvetica, Arial, sans-serif",
                  }}
                >
                  <Link
                    // to="#"
                    sx={{
                      color: "#536a70",
                      mb: 2,
                      fontFamily: "Varela Round",
                      textDecoration: "none",
                      "&:hover": {
                        color: "#849599",
                      },
                    }}
                  >
                    Forget Password?
                  </Link>
                </Box>
              </Box>

              {/* submit bottom inside form */}
              <Button
                variant="contained"
                type="submit"
                sx={{
                  margin: "auto",
                  width: { lg: "100%", md: "70%", sm: "50%", xs: "100%" },
                  height: { lg: "60px", md: "45", xs: "45px" },
                  borderRadius: { lg: "16px", xs: "4px" },
                  fontSize: { lg: "20px", sm: "16px", xs: "12px" },
                  background: "#2a454e",
                  "&:hover": {
                    background: "#385a64",
                  },
                }}
              >
                {isSubmitting ? <CircularProgress size={24} /> : "Log in"}
              </Button>
            </Box>

            {/* Or container */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                color: "gray",
                mt: 1,
                width: "100%",
                paddingLeft: "1rem",
                paddingRight: "1rem",
                paddingTop: "1rem",
                marginBottom: "1rem",
              }}
            >
              {/* left line */}
              <Box
                sx={{ flex: 1, height: "1px", background: "#d4d4d4", mr: 1 }}
              />
              Or
              {/* right line */}
              <Box
                sx={{ flex: 1, height: "1px", background: "#d4d4d4", ml: 1 }}
              />
            </Box>

            {/* google & Facebook links container */}
            <Box
              sx={{
                display: "flex",
                flexDirection: { md: "column", xs: "row" },
                justifyContent: "center",
                width: "100%",
                alignItems: "center",
                gap: "1rem",
              }}
            >
              <Button
                sx={{
                  background: "#e8f0f1",
                  width: "90%",
                  display: "flex",
                  justifyContent: "center",
                  paddingLeft: "1rem",
                  paddingRight: "1rem",
                  height: { lg: "60px", md: "45px", xs: "50px" },
                  borderRadius: "14px",
                  gap: ".5rem",
                  alignItems: "center",
                  textTransform: "none",
                  border: { xs: "1px solid #cbcdd1", lg: "none" },
                }}
                onClick={() => loginWithGoogle()}
              >
                <Box sx={{ fontSize: "35px" }}>
                  <FcGoogle />
                </Box>
                <Typography
                  sx={{
                    display: { md: "flex", xs: "none" },
                    fontWeight: "400",
                    color: "#72778a",
                    fontSize: "1.1rem",
                    fontFamily:
                      "Inter, system-ui, Avenir, Helvetica, Arial, sans-serif",
                    paddingRight: "1.2rem",
                  }}
                >
                  {" "}
                  Sign in with Google
                </Typography>{" "}
              </Button>

              {/* <Box  
              sx={{
                background: "#e8f0f1",
                width: "90%",
                display: "flex",
                justifyContent: "center",
                paddingLeft: "1rem",
                paddingRight: "1rem",
                height: { lg: "60px", md: "45px", xs: "50px" },
                borderRadius: "14px",
                gap: ".5rem",
                alignItems: "center",
                textTransform: "none",
                border: { xs: "1px solid #cbcdd1", lg: "none" }
              }} >
              <GoogleLogin 
              
                onSuccess={(credentialResponse) => {
                  const credentialResponseOncoded=jwtDecode(credentialResponse?.credential)
                  console.log(credentialResponseOncoded);
                }}
                onError={() => {
                  console.log('Login Failed');
                }}
              />;
              </Box> */}
              <Button
                sx={{
                  background: "#e8f0f1",
                  width: "90%",
                  display: "flex",
                  justifyContent: "center",
                  padding: "1rem",
                  height: { lg: "60px", md: "45px", xs: "50px" },
                  borderRadius: "14px",
                  gap: ".5rem",
                  alignItems: "center",
                  textTransform: "none",
                  border: { xs: "1px solid #cbcdd1", lg: "none" },
                }}
              >
                <FacebookRoundedIcon sx={{ fontSize: "35px" }} />
                <Typography
                  sx={{
                    display: { md: "flex", xs: "none" },
                    fontWeight: "400",
                    color: "#72778a",
                    fontSize: "1.1rem",
                    fontFamily:
                      "Inter, system-ui, Avenir, Helvetica, Arial, sans-serif",
                  }}
                >
                  {" "}
                  Sign in with Facebook
                </Typography>{" "}
              </Button>
            </Box>

            {/* sign up link container */}
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                fontSize: { lg: "1.2rem", md: "1rem", sm: ".7", xs: ".3" },
                fontWeight: 400,
                fontFamily: "Varela Round",
                paddingTop: "2rem",
                paddingRight: "2rem",
              }}
            >
              Don't you have an account?
              <Link
                to={"/register"}
                component={RouterLink}
                sx={{
                  color: "#385a64",
                  marginLeft: "5px",
                  textDecoration: "none",
                }}
              >
                Signup
              </Link>
            </Box>
          </Box>

          {/* right container inside sub-Main */}
          <Box
            sx={{
              background: "red",
              width: { md: "60%" },
              display: { xs: "flex", md: "flex" },
              alignItems: "center",
              justifyContent: { sm: "center" },
            }}
          >
            {/* img */}
            <Box
              component="img"
              src={imgPath}
              sx={{
                // width: { md: '100%', lg: '100%' },
                width: "100%",
              }}
              alt="Your Image"
            />
          </Box>
        </Box>
      </Box>
      {/* </Formik> */}
    </>
  );
}

export default LogIn;
