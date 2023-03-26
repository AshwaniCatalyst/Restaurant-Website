import { ImageList, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import  CreateAccountImg from "../Assets/CreateAccountImg.svg";
import { styled } from "@mui/system";

const HomePageSectionShow = ({sectionDirection}) => {
  const OuterContainer = styled(Box)({
    display: "flex",
    flexDirection:(`${sectionDirection}`),
    justifyContent: "space-around",
    alignItems: "center",
    flexWrap:"wrap",
    padding: "0 10%"
  });
  console.log(sectionDirection);
  return (
    <>
      <OuterContainer>
        <ImageList
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            minWidth:"302px",
            minHeight:"525px"
          }}
        >
          <img src={`${CreateAccountImg}`} alt="device" width="100%" height="100%" />
        </ImageList>

        <Box
          sx={{
            display: "flex",
            flexWrap:"wrap",
            flexDirection: "column",
            alignItems:"start",
            gap: "1.1rem",
            justifyContent: "center",
            maxWidth:"561px"
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
      </OuterContainer>
    </>
  );
};

export default HomePageSectionShow;
