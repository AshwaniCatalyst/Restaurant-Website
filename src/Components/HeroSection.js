import { Box } from "@mui/system";
import React from "react";
// import HeroBanner from "../Assets/HeroBanner.svg";
import { Typography } from "@mui/material";
import HomePageButtons from "../Components/HomePageButtons";
import HeroSectionCss from "../Styles/Header.module.css";
// import DeviceImages from "../Assets/HeroDevicesImg.svg";
const HeroSection = () => {
  return (
    <>
      <Box
        className={`${HeroSectionCss.heroSectionBg} ${HeroSectionCss.flex} ${HeroSectionCss.heroSection}`}
      >
        <Box>
          <Typography variant="h3" color="primary">Food app</Typography>
        </Box>
        <Box>
          <Typography variant="h1" color="primary">
            Why stay hungry when
            <br /> you can order form Bella Onojie
          </Typography>
        </Box>
        <Box>
          <Typography variant="h4">
            Download the bella onoje’s food app now on
          </Typography>
        </Box>
        <Box
          className={`${HeroSectionCss.flex} ${HeroSectionCss.heroSectionBtnWrapper}`}
        >
          <HomePageButtons btnName={"PlayStore"} btnVariant={"contained"} />
          <HomePageButtons btnName={"App store"} btnVariant={"outlined"} />
        </Box>
      </Box>
      {/* <Box sx={{zIndex:0,  border:"2px solid black" }}>
            
              <ImageList sx={{display:"flex", justifyContent:"center" }}>
                <img src={`${DeviceImages}`} alt="Mobile Devices" />
              </ImageList>
          </Box> */}
    </>
  );
};

export default HeroSection;
