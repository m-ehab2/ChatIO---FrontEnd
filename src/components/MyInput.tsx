import TextField from "@mui/material/TextField";
import {Box} from "@mui/material";
interface prop {
  type: "string" | "number" | "password" | "email" | "date";
  name: string;
  placeholder: string;
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

const MyInput = ({ type, name, placeholder }: prop) => {
  return (
    <TextField
      sx={{
        width: { md: "59%", xs: "100%" },
        borderRadius: "40px",
        // maxHeight: "200px",
        minWidth: "30px",
        minHeight: "30px",
      }}
      type={type}
      id="outlined-basic"
      label={name}
      variant="outlined"
      defaultValue={placeholder}
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
