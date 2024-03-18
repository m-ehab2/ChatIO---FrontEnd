import { Box, Typography } from "@mui/material";
import RegisterButton from "../../components/Register/RegisterButton";
import MyInput from "../../components/Register/MyInput";
import GoogleButton from "../../components/Register/GoogleButton";
import FacebookButton from "../../components/Register/FacebookButton";
// import { Formik, Form, Field, ErrorMessage } from "formik";
const Registration = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: { md: "space-between", xs: "center" },
          marginLeft: { md: "190px" },
          //   marginTop: "20px",
        }}
      >
        <Typography
          sx={{
            fontSize: { md: "2.5rem", sm: "2rem", xs: "1.5rem" },
            color: "#2A454E",
            fontWeight: "bold",
            // fontFamily: "ArialArial, Helvetica, sans-serif",
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
          height: "100vh",
          width: { md: "90%", xs: "100%" },
          marginLeft: { md: "100px" },
          marginTop: { md: "-50px" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: { md: "20px", xs: "10px" },
            width: { md: "50%", xs: "70%" },
            marginRight: { md: "-150px" },
          }}
        >
          <MyInput
            name="Username"
            type="string"
            placeholder="Enter your username"
          />
          <MyInput name="Email" type="email" placeholder="Example@email.com" />
          <MyInput name="Password" type="password" placeholder="" />
          <MyInput name="Confirm password" type="password" placeholder="" />
          <RegisterButton children="Register" />
          <Box
            sx={{
              display: "flex",
              width: { md: "60%", xs: "100%" },
              alignItems: "center",
              justifyContent: "center",
              color: "grey",
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

          <GoogleButton children="Sign Up with Google"></GoogleButton>
          <FacebookButton children="Sign Up with Facebook"></FacebookButton>

          <Box
            sx={{
              width: { md: "59%", xs: "100%" },
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "grey",
            }}
          >
            <Box sx={{ display: "flex", gap: "12px" }}>
              <Typography sx={{}}>have an account? </Typography>
              <Typography sx={{ color: "#2A454E" }}> Sign in </Typography>
            </Box>
          </Box>
        </Box>
        <Box
          component="img"
          sx={{
            marginRight: { md: "100px", xs: "1px" },
            width: { md: "40%", xs: "185px" },
            height: { md: "70%", xs: "148px" },
            // maxHeight: { xs: 233, md: 167 },
            // maxWidth: { xs: 350, md: 250 },
          }}
          alt="The house from the offer."
          src="/src/assets/6300959.jpg"
        />
      </Box>
    </>
  );
};

export default Registration;

//    <div>
//      <h1>Anywhere in your app!</h1>
//      <Formik
//        initialValues={{ email: "", password: "" }}
//        validate={(values) => {
//          const errors = {};
//          if (!values.email) {
//            errors.email = "Required";
//          } else if (
//            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
//          ) {
//            errors.email = "Invalid email address";
//          }
//          return errors;
//        }}
//        onSubmit={(values, { setSubmitting }) => {
//          setTimeout(() => {
//            alert(JSON.stringify(values, null, 2));
//            setSubmitting(false);
//          }, 400);
//        }}
//      >
//        {({
//          values,
//          errors,
//          touched,
//          handleChange,
//          handleBlur,
//          handleSubmit,
//          isSubmitting,
//          /* and other goodies */
//        }) => (
//          <form onSubmit={handleSubmit}>
//            <input
//              type="email"
//              name="email"
//              onChange={handleChange}
//              onBlur={handleBlur}
//              value={values.email}
//            />
//            {errors.email && touched.email && errors.email}
//            <input
//              type="password"
//              name="password"
//              onChange={handleChange}
//              onBlur={handleBlur}
//              value={values.password}
//            />
//            {errors.password && touched.password && errors.password}
//            <button type="submit" disabled={isSubmitting}>
//              Submit
//            </button>
//          </form>
//        )}
//      </Formik>
//    </div>;
