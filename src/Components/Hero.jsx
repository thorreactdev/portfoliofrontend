import React, { useState, useEffect } from "react";
import { Box, Typography, Stack, Button } from "@mui/material";
import { Link } from "react-router-dom";

const Hero = () => {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const messages = ["Full Stack Developer", "Python Developer", "MERN STACK" , "Blogger"];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }, 2000); // Adjust animation interval as needed

    return () => clearInterval(intervalId);
  }, [messages.length]);

  

  return (
    <Stack
      direction="row"
      px={6}
      py={10}
      spacing={10}
      alignItems="center"
      justifyContent="center"
      marginTop={-5}
      marginBottom={30}
    
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "20px",
          position: "relative",
        }}
      >
        <Typography variant="h2" fontWeight="900" fontSize="69px">
          Hello! I'm Vinay 👋🏻
        </Typography>
        <Box mt={2} mb={1}>
          {messages.map((message, index) => (
            <Typography
              key={index}
              variant="h4"
              fontWeight="800"
              color="#d41919"
              style={{
                opacity: currentMessageIndex === index ? 1 : 0, // Control visibility based on index
                transition: "opacity 1s ease-in-out", // Animation for smooth fading
                position: "absolute",
                top: "90px",
              }}
            >
              {message}
            </Typography>
          ))}
        </Box>

        <Typography variant="h6" fontSize={18} fontWeight="410">
          Welcome to my digital garden, My journey mastering Software
          development, MERN STACK and improving as a developer, and advancing in
          the tech world.
        </Typography>

        <Box
          sx={{
            display: "flex",
            gap: "20px",
            alignItems: "center",
            marginTop: "10px",
          }}
        >
        
          <Button
            variant="contained"
            LinkComponent={Link}
            to="/resume"
            sx={{
              padding: "10px 30px",
            }}
          >
            Resume
          </Button>

          <Button
            href="https://github.com/thorreactdev"
            target="_blank"
            // rel="noreferrer"
            sx={{
              color: "#000",
              padding: "10px 30px",
            }}
          >
            GitHub Link
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          width: "70%",
        }}
      >
        <iframe
          src="https://lottie.host/embed/8dda79e6-d199-4b3f-874e-fd2c74aa9695/3zTEOnzUm1.json"
          title="image"
          style={{
            border: "none",
            marginTop: "-15px",
          }}
          width={700}
          height={500}
        ></iframe>
      </Box>
    </Stack>
  );
};

export default Hero;
