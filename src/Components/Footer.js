import { ImageList, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import FooterLogo from "../Assets/footerLogo.svg";
import FBicon from "../Assets/fb.svg";
import TwitterIcon from "../Assets/twitter.svg";
import InstgramIcon from "../Assets/instagram.svg";
const Footer = () => {
  return (
    <>
      <Box
        sx={{
          textAlign: "center",

          flexWrap: "wrap",
          padding: "68px 170px",
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              display: {
                xs: "none",
                sm: "none",
                md: "block",
                width: "246px",
              },
            }}
          >
            <ImageList>
              <img src={`${FooterLogo}`} alt="Footer Logo" />
            </ImageList>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "centre",
              gap: "1rem",
            }}
          >
            <ImageList>
              <img src={`${TwitterIcon}`} alt="twitter" />
            </ImageList>
            <ImageList>
              <img src={`${FBicon}`} alt="Facebook" />
            </ImageList>
            <ImageList>
              <img src={`${InstgramIcon}`} alt="Instagram" />
            </ImageList>
          </Box>
          <Box sx={{}}>
            <Typography variant="h6">
              Copywright 2020 Bella Onojie.com
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Footer;
