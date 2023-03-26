import React, { useState } from "react";
import { Box } from "@mui/system";
import {
  AppBar,
  Button,
  Drawer,
  IconButton,
  ImageList,
  Toolbar,
} from "@mui/material";
import { Link } from "react-router-dom";
import Logo from "../Assets/navLogo.svg";
import MenuIcon from "@mui/icons-material/Menu";
import HeaderCss from "../Styles/Header.module.css";

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
        <Button key={page} sx={{}}>
          <Link to={`/${page}`}>{page}</Link>
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
                  <Link to={`/${page}`}>{page}</Link>
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
