import { ImageList, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import CreateAccountImg from "../Assets/CreateAccountImg.svg";
import { styled } from "@mui/system";

const HomePageSectionShow = ({ sectionDirection, sectionHeading, sectionSubHeading, sectionDescription }) => {
  const OuterContainer = styled(Box)({
    display: "flex",
    flexDirection: `${sectionDirection}`,
    justifyContent: "space-around",
    alignItems: "center",
    flexWrap: "wrap",
    padding: "0 10%",
  });

  const ImageListContainer = styled(ImageList)({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    minWidth: "302px",
    minHeight: "525px",
  });

  const SectionTextArea = styled(Box)({
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "column",
    alignItems: "start",
    gap: "1.1rem",
    justifyContent: "center",
    maxWidth: "561px",
  });
  return (
    <>
      <OuterContainer>
        <ImageListContainer>
          <img src={`${CreateAccountImg}`} alt="device" />
        </ImageListContainer>

        <SectionTextArea>
          <Typography variant="h3">{sectionHeading}</Typography>
          <Typography variant="h2">
            {sectionSubHeading}
          </Typography>
          <Typography variant="h4" sx={{ marginTop: "1rem" }}>
            {sectionDescription}
          </Typography>
        </SectionTextArea>
      </OuterContainer>
    </>
  );
};

export default HomePageSectionShow;
