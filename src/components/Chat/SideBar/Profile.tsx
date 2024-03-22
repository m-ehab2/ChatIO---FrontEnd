import {
  Box,
  Avatar,
  Typography,
  InputAdornment,
  TextField,
  IconButton,
} from "@mui/material";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import SearchIcon from "@mui/icons-material/Search";
import { useUser } from "../../../Context/UserContext";
import { useNavigate } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";
import useAuth from "../../../Hooks/useAuth";

export default function Profile() {
  const { user } = useUser();
  const { logout } = useAuth();
  const navigate = useNavigate();
  function handleNav() {
    navigate("/chat");
  }
  function handleLogout() {
    logout();
    navigate("/");
  }
  return (
    <Box sx={{ padding: "0px 5px" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            marginBottom: "15px",
          }}
        >
          <Avatar
            alt="Remy Sharp"
            src={user?.image}
            sx={{ width: 45, height: 45 }}
          />
          <Box>
            <Typography
              fontSize={"20px"}
              fontWeight={500}
              sx={{ lineHeight: "1", color: "#385A64" }}
              fontFamily={"Inter"}
            >
              {user?.name}
            </Typography>
            <Typography
              fontSize={"13px"}
              fontWeight={500}
              fontFamily={"Roboto"}
              sx={{ lineHeight: "1", color: "#545454" }}
            >
              Senior Developer
            </Typography>
          </Box>
        </Box>
        <Box>
          <IconButton
            onClick={handleNav}
            aria-label="Edit"
            size="small"
            sx={{
              borderRadius: "50%",
              fontSize: "20px",
              color: "#545454",
            }}
          >
            <EditOutlinedIcon fontSize="inherit" />
          </IconButton>
          <IconButton
            onClick={handleLogout}
            aria-label="Edit"
            size="small"
            sx={{
              borderRadius: "50%",
              fontSize: "20px",
              color: "#545454",
            }}
          >
            <LogoutIcon fontSize="inherit" />
          </IconButton>
        </Box>
      </Box>
      <TextField
        id="input-with-icon-textfield"
        hiddenLabel
        fullWidth
        placeholder="Search..."
        size="small"
        inputProps={{
          style: { fontSize: "16px" },
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon fontSize="medium" />
            </InputAdornment>
          ),
        }}
        variant="filled"
      />
    </Box>
  );
}
