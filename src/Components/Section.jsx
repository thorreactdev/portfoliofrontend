import React from "react";
import { Box, Typography } from "@mui/material";
import github from "../Assets/toolkit_images/github-icon-1.svg";
import instagram from "../Assets/toolkit_images/instagram-2016-5.svg";
import facebook from "../Assets/toolkit_images/facebook-2020-2-1.svg";
import linkedin from "../Assets/toolkit_images/linkedin-icon-3.svg";

const Section = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "5px",
      }}
      mt={4}
      mb={2}
    >
      <Typography variant="h6" fontWeight="800" fontSize={40}>
        VP.
      </Typography>
      <Typography variant="body1" fontWeight="400" fontSize={20}>
        What’s your story? Get in touch. Always available for freelancing if the
        right project comes along me.
      </Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <a href="https://github.com/thorreactdev">
          <img src={github} alt="" width={35} />
        </a>
        <a href="https://www.instagram.com/__vinay__04">
          <img src={instagram} alt="" width={35} />
        </a>
        <a href="https://www.facebook.com/profile.php?id=100065309109404&mibextid=ZbWKwL">
          <img src={facebook} alt="" width={45} height={42} />
        </a>
        <a href="https://www.linkedin.com/in/vinay-prajapati-3329b3289/">
          <img src={linkedin} alt="" width={35} />
        </a>
      </Box>
    </Box>
  );
};

export default Section;
