import * as yup from "yup";


export const userSchema = yup.object().shape({
    userName: yup.string().required("Please Enter your Username"),
    email: yup.string().email("Invalid email").required("Please Enter your email"),
    password:yup.string().min(8).required("Please Enter a password"),
    passwordConfirm:yup.string().oneOf([yup.ref("password")],"Password not matched").min(8).max(12).required()
    
})
    
    