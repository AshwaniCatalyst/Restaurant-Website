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
          padding: "68px 170px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexWrap: "wrap",
            justifyContent: "space-between",
            gap:"2rem"
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
              alignItems:"center",
              justifyContent: "space-around",
              gap: "2.2rem",
            }}
          >
            <ImageList sx={{
              display: "inherit"
            }}>
              <img src={`${TwitterIcon}`} alt="twitter" />
            </ImageList>
            <ImageList sx={{
              display: "inherit"
              }}>
              <img src={`${FBicon}`} alt="Facebook" />
            </ImageList>
            <ImageList sx={{
              display: "inherit"
            }}>
              <img src={`${InstgramIcon}`} alt="Instagram" />
            </ImageList>
          </Box>
          <Box sx={{
             }}>
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
