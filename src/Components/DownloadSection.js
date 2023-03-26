import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import DownloadSectionImg from "../Assets/downloadAppImg.svg";
import HomePageButtons from "./HomePageButtons";
const DownloadSection = () => {
  return (
    <>
      <Box
        sx={{
          backgroundImage: `url(${DownloadSectionImg})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          height: "60vh",
          color:"white",
          display:"flex",
          flexDirection:"column",
          justifyContent:"center",
          alignItems:"center",
          gap:"1.5rem"
        }}
      >
        <Typography variant="h2" color="primary">Download the app now.</Typography>
        <Typography variant="h4" color="primary">
          Available on your favorite store. Start your premium experience now
        </Typography>
        <Box sx={{mt:5, display:"inherit", gap:"2rem"}}>
            <HomePageButtons btnName={"Playstore"} btnVariant={"contained"} btnRadius={"10px"}/>
            <HomePageButtons btnName={"Playstore"} btnVariant={"outlined"} btnRadius={"10px"}/>
        </Box>
      </Box>
    </>
  );
};

export default DownloadSection;
