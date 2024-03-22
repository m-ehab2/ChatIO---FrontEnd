import React, { ChangeEvent, useState } from 'react';
import { Box, TextField, Button, Typography, CircularProgress,useMediaQuery, InputAdornment, IconButton,Input } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useTheme } from "@mui/material/styles";
import imgPath from "../../assets/Edit Profile.png";
import useEditProfile from "../../Hooks/useEditProfile";
import { useUser } from "../../Context/UserContext";
import { Link } from 'react-router-dom';
import { IoClose } from "react-icons/io5";
import { VscCloudUpload } from "react-icons/vsc";




export default function EditProfile() {
    const [showPassword, setShowPassword] = useState(false);
    const { error, loading, editProfile } = useEditProfile();
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [previewImage, setPreviewImage] = useState(null);

    const { user } = useUser();

    const theme = useTheme();

  const isMediumOrSmaller = useMediaQuery(theme.breakpoints.down("lg"));

function handleFileChange(event: ChangeEvent<HTMLInputElement>) {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
        setSelectedFile(selectedFile);
    }
}

const imgUrl = selectedFile ? URL.createObjectURL(selectedFile) : imgPath;


  const handleUpload = () => {
    console.log('Selected file:', selectedFile);
  };
    const formik = useFormik({
        initialValues: {
            name: user ? user.name : "",
            status: user ? user.status : "",
            password: "",
            photo:user? user.image : {imgPath},
        },
        validationSchema: Yup.object({
            name: Yup.string().typeError("Name must be a string")
                .required("Name cannot be empty!"),
            status: Yup.string().max(100, "Cannot contain more than 100 characters"),
            password: Yup.string()
                .min(6, "Password must be at least 6 characters")
                .required("Please, enter a password!"),
        }),
        onSubmit: async (values) => {
            try {
                await editProfile( values.name, values.status, values.password);
            } catch (error) {
                console.error("Edit error:", error);
            }
        },
    });

    return (
        <Box sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        }}>
            <Box sx={{
                width: { sm: "50rem", xs: "100%" },
                height: "auto",
                border: "0.1rem solid gray",
                borderRadius: "16px",
                display: "flex",
                // background: "yellow",
                justifyContent: "center",
                pb:"2rem",
                alignItems: "center",
                flexDirection: "column",
            }}>
                <Box sx={{width:"100%",display:"flex",justifyContent:"end", pt:"2rem",pr:"4rem", fontSize:"2rem"}}>
                <Link to="#">
                
                <IoClose />
                </Link>
                </Box>

                <Box
                    sx={{
                        width: { lg: "12rem", xs: "10rem" },
                        height: { lg: "12rem", xs: "10rem" },
                        position: "relative",
                        overflow: "hidden",
                        borderRadius: "50%", 
                        background: "#e3e5e8",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    {/* img */}
                    
                    <Box
                        component="img"
                        src={selectedFile ? imgUrl : imgPath} 
                        sx={{
                            width: "70%",
                            height: "auto", 
                        }}
                        alt="Your Image"
                    />
                </Box>
                {/* <Box
                        component="img"
                        src={selectedFile ? imgUrl : imgPath} 
                        sx={{
                            width: "70%",
                            height: "auto", 
                        }}
                        alt="Your Image"
                    /> */}
               

                <Box
                    component="form"
                    onSubmit={formik.handleSubmit}
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "1.5rem",
                        width: "50%",
                    }}
                >

                <Input
                
                        type="file"
                        id="photoInput"
                        name="photo"
                        onChange={handleFileChange}
                        {...formik.getFieldProps("image")}
                        sx={{ display: "none" }}
                    />
                    <label htmlFor="photoInput" style={{ fontSize:"1rem" ,color: '#9fa2a6', cursor: 'pointer',
                    textAlign:"center",
                    paddingTop:"2rem",
                    paddingBottom:"1rem",
                    // fontFamily:"Inter, system-ui, Avenir, Helvetica, Arial, sans-serif",
                    fontFamily: "Varela Round",
                     }}>
   <VscCloudUpload />
 Click to change photo
</label>

                    <TextField
                        required
                        label="Name"
                        variant="outlined"
                        size={isMediumOrSmaller ? "small" : "medium"}
                        error={formik.touched.name && Boolean(formik.errors.name)}
                        helperText={formik.touched.name && formik.errors.name}
                        disabled={loading}
                        {...formik.getFieldProps("name")}
                        sx={{
                            
                            background: '#fbfbfb',

                          }}
                    />
                    <TextField
                        label="Status"
                        variant="outlined"
                        size={isMediumOrSmaller ? "small" : "medium"}
                        error={formik.touched.status && Boolean(formik.errors.status)}
                        helperText={formik.touched.status && formik.errors.status}
                        disabled={loading}
                        {...formik.getFieldProps("status")}
                        sx={{
                            
                            background: '#fbfbfb',

                          }}
                    />

<TextField
                  label="Password"
                  type={showPassword ? 'text' : 'password'} 
                  variant="outlined"
                  size={isMediumOrSmaller ? "small" : "medium"}
                  helperText={
                    formik.touched.password && formik.errors.password ? (
                      <Typography sx={{ color: 'error.main' }}>{formik.errors.password}</Typography>
                    ) : null
                  }
                  error={formik.touched.password && Boolean(formik.errors.password)}
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
                  sx={{
                    mb: 1,
                    borderRadius: '12px',
                    borderColor: formik.touched.password && formik.errors.password ? 'red' : '#d4d7e3',
                    background: '#fbfbfb',
                    width: '100%',
                    'input[type="password"]::-ms-reveal': {
                      display: 'none',
                      width: 0,
                      height: 0,
                    },
                    'input[type="password"]::-webkit-credentials-auto-fill-button': {
                      visibility: 'hidden',
                    },
                  }}
                  disabled={loading}

                  {...formik.getFieldProps('password')}
                />

                    
                    <Button
                        type="submit"
                        variant="contained"
                        disabled={loading}
                        sx={{width:"6rem",color:"#385a64","&:hover": {
                            background: "#385a64",
                            color:"white",fontFamily: "Varela Round",
                          }, border:"1px solid #c9ced6",marginTop:"1rem" ,background:"transparent",height:"2rem",margin:'auto',borderRadius:"8px"}}
                    >
                        {loading ? <CircularProgress size={24} /> : "Save"}
                    </Button>
                </Box>

                {error && <Typography color="error">{error}</Typography>}
            </Box>
        </Box>
    );
}


