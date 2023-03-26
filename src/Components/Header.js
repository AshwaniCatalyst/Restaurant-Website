import React, { useState } from "react";
import { Box } from "@mui/system";
import {
  AppBar,
  Button,
  Drawer,
  IconButton,
  ImageList,
  Toolbar,
  // Typography,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import Logo from "../Assets/navLogo.svg";
import MenuIcon from "@mui/icons-material/Menu";
import HeaderCss from "../Styles/HomePage.module.css";

const Header = () => {
  const Pages = ["Home", "Product", "Faq", "Contact"];
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const drawer = (
    <Box
      onClick={() => handleDrawerToggle}
      className={`${HeaderCss.flex} ${HeaderCss.navDrawer}`}
    >
      {Pages.map((page) => (
        <Button key={page} className="active">
          <NavLink to={`/${page}`}>{page}</NavLink>
        </Button>
      ))}
    </Box>
  );
  return (
    <>
      <>
        <AppBar
          component={"nav"}
          className={`${HeaderCss.navAppBar} ${HeaderCss.flex}`}
        >
          <Toolbar className={`${HeaderCss.flex} ${HeaderCss.navToolBar}`}>
            <Box>
              <ImageList>
                <img src={`${Logo}`} alt="logo" />
              </ImageList>
            </Box>
            <Box className={`${HeaderCss.flex} ${HeaderCss.navLinks}`}>
              {Pages.map((page) => (
                <Button
                  key={page}
                  sx={{ display: { xs: "none", sm: "none", md: "block" } }}
                >
                  <ul>
                  <NavLink
                    to={`/${page}`}
                  >
                    <li className={`${HeaderCss.navLinkPage}`}>
                    {/* <Typography variant="navLinks">{page}</Typography>  */}
                    {page}
                    </li>
                  </NavLink>
                  </ul>
                </Button>
              ))}
            </Box>
            <Box sx={{ display: { md: "none" } }}>
              <IconButton onClick={handleDrawerToggle}>
                <MenuIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            anchor="right"
            sx={{
              display: { xs: "block", sm: "block", md: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: "40%",
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
        <Box sx={{ mt: 11 }}>
          <Toolbar />
        </Box>
      </>
    </>
  );
};

export default Header;
