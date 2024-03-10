import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import resume_image from "../Assets/youtube_project_images/reume_ss.png";

const Resume = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#111111",
      }}
      minHeight="100vh"
    >
      <Box px={4} py={4}  
      sx={{
        display : "flex",
        gap : "35px"
      }}
      >
        <Link to="/">
          <Button
            sx={{
              backgroundColor: "#FAC213",
              color: "#000",
              padding: "12px 30px",
              ":hover": {
                backgroundColor: "#FAC213",
                color: "#000",
              },
            }}
            variant="none"
          >
            Back To Portfolio
          </Button>
        </Link>

        <Link to="/contact">
          <Button
            sx={{
              backgroundColor: "#FAC213",
              color: "#000",
              padding: "12px 30px",
              ":hover": {
                backgroundColor: "#FAC213",
                color: "#000",
              },
            }}
            variant="none"
          >
            Contact Me
          </Button>
        </Link>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mt: "30px",
          flexDirection: "column",
          gap : "10px",
          pb : "30px"
        }}
      >
        <Typography
          variant="body1"
          color="#fff"
          textAlign="center"
          width={1030}
          fontSize={20}
          
        
        
        >
          So, if you're looking for a developer who can bring your wildest
          dreams to life while keeping things light-hearted and entertaining,
          look no further. I'm here to make your software dreams come true, one
          witty comment at a time.
        </Typography>
        <Box>
            <Typography  variant="h6" color="#fff" fontSize={35} >
                My Resume
            </Typography>
            <div style={{
                width : "130px",
                height : "4px",
                backgroundColor : "#FAC213",
                borderRadius : "5px"
            }}>

            </div>
        </Box>
        <img src={resume_image} alt="resume" width={600}
        style={{
            borderRadius : "3px",
            marginTop : "30px"
        }}
        
        />
        
      </Box>
    </Box>
  );
};

export default Resume;
