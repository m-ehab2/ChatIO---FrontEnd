import {
  Box,
  Typography,
  Link,
  TextField,
  InputAdornment,
  IconButton,
} from "@mui/material";
import RegisterButton from "../../components/RegisterButton";
import GoogleButton from "../../components/GoogleButton";
import FacebookButton from "../../components/FacebookButton";
import { userSchema } from "../../Validations/UserSchema";
import { Link as RouterLink } from "react-router-dom";
import { useFormik } from "formik";
import useAuth from "../../Hooks/useAuth";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useState } from "react";
const initialValues = {
  userName: "",
  email: "",
  password: "",
  confirmPassword: "",
};
const Registration = () => {
  const { register, error } = useAuth();

  const [showPassword, setShowPassword] = useState(false);
  const [showCPassword, setShowCPassword] = useState(false);

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: userSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        console.log(values);
        await register(
          values.userName,
          values.email,
          values.password,
          values.confirmPassword
        );

        resetForm();
      } catch (error) {
        console.log(error, "hhhhhhhhhh");
        console.error("register error:", error);
      }
    },
  });

  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: { md: "space-between", xs: "center" },
          marginLeft: { md: "190px" },
          gap: "12px",
          marginBottom: "23px",
        }}
      >
        <Typography
          sx={{
            fontSize: { md: "2.5rem", sm: "2rem", xs: "1.5rem" },
            color: "#2A454E",
            fontWeight: "bold",
            marginTop: "50px",
            paddingY: "14px",
          }}
        >
          Create your account
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: { md: "row", xs: "column-reverse" },
          alignItems: "center",
          justifyContent: "center",
          height: { md: "90vh", xs: "100vh" },
          width: { md: "90%", xs: "100%" },
          marginLeft: { md: "100px" },
          marginTop: { md: "-30px" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",

            width: { md: "50%", sm: "80%", xs: "90%" },
            marginRight: { md: "-40px" },
          }}
        >
          <Box
            component="form"
            onSubmit={formik.handleSubmit}
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              paddingTop: "30px",
            }}
          >
            <TextField
              sx={{
                width: { md: "65%", xs: "100%" },
                borderRadius: "40px",
                borderColor:
                  formik.touched.userName && formik.errors.userName
                    ? "red"
                    : "#d4d7e3",
                background: "#fbfbfb",
              }}
              size="small"
              id="outlined-error-helper-text"
              label="Username"
              variant="outlined"
              helperText={
                formik.touched.userName && formik.errors.userName ? (
                  <Typography sx={{ color: "e06e6e" }}>
                    {formik.errors.userName}
                  </Typography>
                ) : null
              }
              error={formik.touched.userName && Boolean(formik.errors.userName)}
              {...formik.getFieldProps("userName")}
            />
            <TextField
              sx={{
                width: { md: "65%", xs: "100%" },
                borderRadius: "40px",
                borderColor:
                  formik.touched.email && formik.errors.email
                    ? "red"
                    : "#d4d7e3",
                background: "#fbfbfb",
              }}
              size="small"
              id="outlined-error-helper-text"
              label="Email"
              variant="outlined"
              helperText={
                formik.touched.email && formik.errors.email ? (
                  <Typography sx={{ color: "e06e6e" }}>
                    {formik.errors.email}
                  </Typography>
                ) : null
              }
              error={formik.touched.email && Boolean(formik.errors.email)}
              {...formik.getFieldProps("email")}
            />
            <TextField
              sx={{
                width: { md: "65%", xs: "100%" },
                borderRadius: "40px",
                borderColor:
                  formik.touched.password && formik.errors.password
                    ? "red"
                    : "#d4d7e3",
                background: "#fbfbfb",
              }}
              type={showPassword ? "text" : "password"}
              size="small"
              id="outlined-error-helper-text"
              label="Password"
              variant="outlined"
              helperText={
                formik.touched.password && formik.errors.password ? (
                  <Typography sx={{ color: "e06e6e" }}>
                    {formik.errors.password}
                  </Typography>
                ) : null
              }
              error={formik.touched.password && Boolean(formik.errors.password)}
              {...formik.getFieldProps("password")}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() => setShowPassword((prev) => !prev)}
                      onKeyDown={(event) => event.preventDefault()}
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
            />
            <TextField
              sx={{
                width: { md: "65%", xs: "100%" },
                borderRadius: "40px",
                borderColor:
                  formik.touched.confirmPassword &&
                  formik.errors.confirmPassword
                    ? "red"
                    : "#d4d7e3",
                background: "#fbfbfb",
              }}
              type={showCPassword ? "text" : "password"}
              size="small"
              id="outlined-error-helper-text"
              label="Confirm password"
              variant="outlined"
              helperText={
                formik.touched.confirmPassword &&
                formik.errors.confirmPassword ? (
                  <Typography sx={{ color: "e06e6e" }}>
                    {formik.errors.confirmPassword}
                  </Typography>
                ) : null
              }
              error={
                formik.touched.confirmPassword &&
                Boolean(formik.errors.confirmPassword)
              }
              {...formik.getFieldProps("confirmPassword")}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() => setShowCPassword((prev) => !prev)}
                      onKeyDown={(event) => event.preventDefault()}
                      edge="end"
                      sx={{
                        pr: 3,
                      }}
                    >
                      {showCPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <RegisterButton children="Register" />
          </Box>

          <Box
            sx={{
              display: "flex",
              width: { md: "65%", xs: "100%" },
              alignItems: "center",
              justifyContent: "center",
              color: "grey",
              paddingY: "12px",
            }}
          >
            <Box
              sx={{ flex: 1, height: "1px", background: "#d4d4d4", mr: 1 }}
            />

            <Typography variant="h6">or</Typography>
            <Box
              sx={{ flex: 1, height: "1px", background: "#d4d4d4", ml: 1 }}
            />
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <GoogleButton children="Sign Up with Google"></GoogleButton>
            <FacebookButton children="Sign Up with Facebook"></FacebookButton>
          </Box>
          <Box
            sx={{
              width: { md: "65%", xs: "100%" },
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "grey",
            }}
          >
            <Box sx={{ display: "flex", gap: "12px", paddingTop: "12px" }}>
              <Typography sx={{}}>have an account? </Typography>
              <Typography sx={{ color: "#2A454E" }}>
                <Link
                  to={"/"}
                  component={RouterLink}
                  sx={{ textDecoration: "none" }}
                >
                  Sign in
                </Link>
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box
          component="img"
          sx={{
            marginRight: { xs: "1px" },
            width: { md: "550px", sm: "200px", xs: "185px" },
            height: { md: "500px", xs: "200px" },
            marginTop: { md: "1px", xs: "120px" },
          }}
          alt="The house from the offer."
          src="/src/assets/6300959.jpg"
        />
      </Box>
    </>
  );
};

export default Registration;
