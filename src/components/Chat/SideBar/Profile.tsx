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
import imgPath from "../../../assets/christopher-campbell-rDEOVtE7vOs-unsplash.jpg";

export default function Profile() {
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
            src={imgPath}
            sx={{ width: 45, height: 45 }}
          />
          <Box>
            <Typography
              fontSize={"20px"}
              fontWeight={500}
              sx={{ lineHeight: "1", color: "#385A64" }}
              fontFamily={"Inter"}
            >
              David Peters
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
