import { Box, Button, Container, Typography } from "@mui/material";
import logo from "../../assets/Logo.png"
import { Link } from "react-router-dom";

export default function LandingPage() {

  return (

 
       <Container  maxWidth="lg" >

        <Box sx={{ display:'flex', flexGrow: 0 , justifyContent :"space-between",padding:"10px"}} >
          <Box>
            <img src={logo} width={280}/>
          </Box>

          <Box >
            <Link to={"/login"}> <Button  variant="outlined" className="login-btn"
             sx={{ mx: '1rem' ,
             textTransform:"capitalize",
             padding:"5px 30px",
             color:"#2C444E"
          
          }} >
          Login
          </Button>
           </Link>
           
          </Box>

        </Box>

<Box sx={{ display:"flex", flexDirection: { sm: "row", xs: "column-reverse",}, flexGrow: 0 , justifyContent :"space-between", alignItems:"center",  
}}>

<Box sx={{}}>
<Typography variant="h2" 
sx={{
  color: "#253940",
  fontSize: { sm: "2.5rem", xs: "2rem" },
  fontFamily: "Varela Round",
  fontWeight: 700,
  margin:"15px 0"
}} >
Enjoy the new experience of chating with global friends
</Typography>

<Typography variant="h5" 
sx={{
  color: "#BEBEBE",
  fontSize: { sm: "1rem", xs: "1rem" },
  fontFamily: "Varela Round",
  fontWeight: 300,
  margin:"15px 0"
}}>
The best Application for you
</Typography>

<Link to={"/register"}>
<Button  className="register-btn"  sx={{
    background:"#253940",
    color :"white",
    padding : "10px 20px",
    textTransform:"capitalize",
    margin:"15px 0",
  }}>Register Now</Button>
</Link>

</Box>

<Box sx={{ width:"100%"}}>
  <img src="https://img.freepik.com/free-vector/online-world-concept-illustration_114360-2212.jpg?w=740&t=st=1710988292~exp=1710988892~hmac=d42efe517d1d4ecf4f452d9cd321c2147c6c53b4d37d40a3f24b58500dfe7a25"
  alt="" />
</Box>


</Box>


         


        </Container>
   


  )
}
