import { Button, Typography } from "@mui/material";
import React from "react";
const HomePageButtons = ({ btnName, btnVariant }) => {
  return (
    <>
      <Button
        variant={`${btnVariant}`}
        color="orange"
        size="large"
        sx={{ borderRadius: "30px", width: "236px", height: "68px" }}
      >
        <Typography color={"primary"}>{btnName}</Typography>
      </Button>
    </>
  );
};

export default HomePageButtons;
