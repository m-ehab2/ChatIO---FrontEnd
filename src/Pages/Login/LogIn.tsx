// import { useState } from 'react';
import { Box, TextField, Button, Typography, Link } from "@mui/material";
import { useFormik } from "formik";
import { Link as RouterLink } from "react-router-dom";
import * as Yup from "yup";
import path from "../../assets/login.jpeg";
import iconGoole from "../../assets/Google.png"
import iconFaceBook from "../../assets/Vector.png"

function LogIn() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Wrong email pattern")
        .required("Email is required"),
      password: Yup.string()
        .min(6, "Password should be at least 6 chars")
        .required("Password is required"),
    }),
  });

  // console.log(formik)

  return (
    <>
      {/* <Formik> */}
      {/* Main container */}
      <Box
        sx={{
          // background: "red",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          // position: "relative",
          height: { md: "98vh", xs: "auto" },
          margin: 0,
        }}
      >
        {/* heading */}
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: { md: "start", xs: "center" },
            paddingBottom: { md: "4rem", xs: "2rem" },
          }}
        >
          <Typography
            variant="h4"
            sx={{
              textShadow: "2px 2px 2px rgba(0, 0, 0, 0.25)",
              color: "#253940",
              fontSize: { sm: "2.5rem", xs: "2rem" },
              fontFamily: "Varela Round",
              fontWeight: 700,
              paddingLeft: { xs: "1rem", md: "7rem", lg: "10rem" },
              paddingTop: { md: "4rem", xs: "2rem" },
            }}
          >
            Welcome Back 👋
          </Typography>
        </Box>

        {/* sub-Main Container hold left form container & right img container */}
        <Box
          sx={{
            paddingLeft: { lg: "5.5rem", md: "3.5rem", sm: "0", xs: "1rem" },
            display: "flex",
            flexDirection: {
              md: "row",
              xs: "column-reverse",
              justifyContent: "center",
              alignItems: "center",
            },
          }}
        >
          {/* left container inside sub-Main*/}
          <Box
            sx={{
              paddingRight: { lg: "2.5rem", md: "1.5rem" },
              width: { lg: "30%", md: "33%", xs: "90%" },
            }}
          >
            {/* input form */}
            <form
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "2.3rem",
                width: "100%",
              }}
              onSubmit={formik.handleSubmit}
            >
              {/* inputs container inside form */}
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <TextField
                  label="Email"
                  variant="outlined"
                  sx={{
                    mb: 5,
                    borderRadius: "12px",
                    borderColor: "#d4d7e3",
                    background: "#fbfbfb",
                    width: "100%", // Change background color to white
                  }}
                  {...formik.getFieldProps("email")}
                />
                {formik.touched.email && formik.errors.email ? (
                  <Box>{formik.errors.email}</Box>
                ) : null}
                <TextField
                  label="Password"
                  type="password"
                  variant="outlined"
                  sx={{
                    mb: 2,
                    borderRadius: "12px",
                    borderColor: "#d4d7e3",
                    background: "#fbfbfb",
                  }}
                  {...formik.getFieldProps("password")}

                  // name="password"
                  // value = {formik.values.password}
                  // onChange = { formik.handleChange}
                  // onBlur = {formik.handleBlur}
                />
                {formik.touched.password && formik.errors.password ? (
                  <Box>{formik.errors.password}</Box>
                ) : null}

                {/* link container inside form*/}
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "flex-end",
                    fontSize: "1.2rem",
                    fontFamily:
                      "Inter, system-ui, Avenir, Helvetica, Arial, sans-serif",
                  }}
                >
                  <Link
                    href="#"
                    sx={{ color: "#385a64", mb: 2, textDecoration: "none" }}
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
                  width: { md: "100%", xs: "75%" },
                  height: "60px",
                  borderRadius: "16px",
                  fontSize: "20px",
                  background: "#2a454e",
                }}
              >
                Log in
              </Button>
            </form>

            {/* Or container */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                color: "gray",
                mt: 2,
                width: "97%",
                paddingLeft: "0.5rem",
                paddingTop: "1.2rem",
                marginBottom: "1.8rem",
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
                gap: "1.5rem",
              }}
            >
              <Box
                sx={{
                  background: "#e8f0f1",
                  width: "90%",
                  display: "flex",
                  justifyContent: "center",
                  padding: "1rem",
                  borderRadius: "14px",
                  gap: ".5rem",
                  alignItems: "center",
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <img src={iconGoole}/>
                </Box>
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
                  Sign in with Google
                </Typography>{" "}
              </Box>
              <Box
                sx={{
                  background: "#e8f0f1",
                  width: "90%",
                  display: "flex",
                  justifyContent: "center",
                  padding: "1rem",
                  borderRadius: "14px",
                  gap: ".5rem",
                  alignItems: "center",
                }}
              >
                <Box>
                  <img src={iconFaceBook}/>
                </Box>
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
              </Box>
            </Box>

            {/* sign up link container */}
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                fontSize: { lg: "1.2rem", md: "1rem", sm: ".7", xs: ".5" },
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
                  mb: 2,
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
              src={path}
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
