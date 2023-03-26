import { ImageList, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import CreateAccountImg from "../Assets/CreateAccountImg.svg";

const HomePageSectionShow = ({ item1, item2 }) => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row-reverse",
          justifyContent: "space-around",
          alignItems: "center",
          padding: "30px 250px"
        }}
      >
        <ImageList
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <img src={`${CreateAccountImg}`} alt="device" />
        </ImageList>

        <Box
          sx={{
            wordBreak: "break-word",
            display: "flex",
            flexDirection: "column",
            gap: "1.1rem",
            justifyContent: "center",
          }}
        >
          <Typography variant="h3">Create an account</Typography>
          <Typography variant="h2">
            Create/login to an existing account to get started
          </Typography>
          <Typography variant="h4" sx={{ marginTop: "1rem" }}>
            An account is created with your email and a desired password
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default HomePageSectionShow;
