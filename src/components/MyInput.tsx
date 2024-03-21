import TextField from "@mui/material/TextField";
// import Box from "@mui/material/Box";
import Registration from "../Pages/Register/Registration";
interface prop {
  type: "string" | "number" | "password" | "email" | "date";
  name: string;
}

// // const Input = ({ type, name, placeholder }: prop) => {
// //   return <input type={type} name={name} placeholder={placeholder} />;
// // };

// const input = ({ type, name, placeholder }: prop) => {
//   return {
//     /* <TextField id="filled-basic" label="Filled" variant="filled" /> */
//   };
// };

// export default input;

const MyInput = ({ type, name }: prop) => {
  return (
    <TextField
      sx={{
        width: { md: "65%", xs: "100%" },
        borderRadius: "40px",
      }}
      size="small"
      type={type}
      id="outlined-error-helper-text"
      label={name}
      variant="outlined"
      required
      autoComplete="false"
    />
    // <TextField id="outlined-basic" label="Outlined" variant="outlined" />
    // <TextField id="outlined-basic" label="Outlined" variant="outlined" />
    // <TextField
    //     id="outlined-helperText"
    //     label="Helper text"
    //     defaultValue="Default Value"
    //     helperText="Some important text"
    //   />
  );
};

export default MyInput;
