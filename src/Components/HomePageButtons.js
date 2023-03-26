import { Button, Typography } from "@mui/material";
import React from "react";
// import { styled } from "@mui/system";
const HomePageButtons = ({ btnName, btnVariant, btnRadius }) => {
  
  return (
    <>
      <Button
        variant={`${btnVariant}`}
        color="orange"
        size="large"

        sx={{ borderRadius: (`${btnRadius}`) , width: "236px", height: "68px" }}
      >
        <Typography color={"primary"}>{btnName}</Typography>
      </Button>
    </>
  );
};

export default HomePageButtons;
