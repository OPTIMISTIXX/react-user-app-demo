import { AppBar, Toolbar, Typography, Link, Box } from "@mui/material";
import { NavLink } from "react-router-dom";
import { RoutesEnum } from "../constants/RoutesEnum";

export default function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar variant="dense">
        <Typography variant="h6" component="div">
          User App
        </Typography>

        <Box sx={{ flexGrow: 1 }} />

        <Link
          component={NavLink}
          to={RoutesEnum.About}
          sx={{
            color: "white",
            textDecoration: "none",
            marginRight: 2,
            "&.active": { textDecoration: "underline", fontWeight: "bold" },
          }}
        >
          <Typography variant="h6" component="div">
            About
          </Typography>
        </Link>

        <Link
          component={NavLink}
          to={RoutesEnum.Users}
          sx={{
            color: "white",
            textDecoration: "none",
            "&.active": { textDecoration: "underline", fontWeight: "bold" },
          }}
        >
          <Typography variant="h6" component="div">
            Users
          </Typography>
        </Link>
      </Toolbar>
    </AppBar>
  );
}
