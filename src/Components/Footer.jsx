import React from 'react';
import { Box , Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
    sx={{
        backgroundColor : "#0f152f",
        height : "7vh",
        display : "flex",
        alignItems : "center",
        justifyContent : "center",

    }}
    >
        <Typography variant='body1' color="#fff">
        Developed and designed with love ❤️ Vinay Prajapati
        </Typography>
    </Box>
  )
}

export default Footer