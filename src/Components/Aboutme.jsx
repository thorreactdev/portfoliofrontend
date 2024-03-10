import React from "react";
import { Box, Typography } from "@mui/material";
import trekvinay from "../Assets/vinaylake.jpg";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

const Aboutme = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "40px",
      }}
      px={6}
    >
      <Box
        sx={{
          width: "60%",
          paddingBottom: "80px",
        }}
      >
        <div
          style={{
            backgroundColor: "#c5e2f0",
            height: "640px",
            width: "520px",
            borderRadius: "30px",
            position: "relative",
          }}
        ></div>
        <img
          src={trekvinay}
          alt="about-me"
          width={520}
          height={580}
          style={{
            position: "absolute",
            borderRadius: "30px",
            top: "860px",
            left: "140px",
          }}
        />
      </Box>

      <Box
        sx={{
          width: "60%",
          marginTop: "-100px",
        }}
      >
        <Typography variant="body1" fontWeight="700" fontSize={35}>
          About Me
        </Typography>
        <div
          style={{
            width: "90px",
            height: "4px",
            backgroundColor: "#ff4b2b",
          }}
        ></div>

        <Box>
          <Typography variant="body1" fontWeight={400} fontSize={18} mt={3}>
            I am an ambitious and motivated individual pursuing a Bachelor in
            Information Technology at Mumbai University, aspiring to bridge the
            gap between technology and innovation. With a keen interest as a
            Software Developer, I have honed my abilities to work both
            independently and within a team, ensuring efficiency and focus in
            every task. My expertise lies in crafting seamless React Web App and
            a MERN Stack Developer.Through my time at Prodigy InfoTech as a Web
            Developer i got chance to work on real world project.
            <br /> <br />I am dedicated to continuously enhancing my programming
            and web technology skills. I am eager to apply my growing knowledge
            as a full stack developer within an engaging and collaborative
            environment, seeking challenges that will expand my network and
            refine my expertise.
          </Typography>
          <Box  sx={{
            display : "flex",
            gap : "35px",
            alignItems : "center",
            marginTop : "24px"
            
          }}>
          <Typography  
          sx={{
            width : "50px",
            height : "50px",
            borderRadius : "50%",
            backgroundColor : "#c5e2f0",
            display : "flex",
            alignItems : "center",
            justifyContent : "center"
          }}
          >
            <EmailIcon  />
          </Typography>
          <Typography
          sx={{
            width : "50px",
            height : "50px",
            borderRadius : "50%",
            backgroundColor : "#c5e2f0",
            display : "flex",
            alignItems : "center",
            justifyContent : "center"
          }}
          >
            <GitHubIcon />
          </Typography>
          <Typography 
          sx={{
            width : "50px",
            height : "50px",
            borderRadius : "50%",
            backgroundColor : "#c5e2f0",
            display : "flex",
            alignItems : "center",
            justifyContent : "center"
          }}
          >
            <LinkedInIcon />
          </Typography>
          <Typography 
          sx={{
            width : "50px",
            height : "50px",
            borderRadius : "50%",
            backgroundColor : "#c5e2f0",
            display : "flex",
            alignItems : "center",
            justifyContent : "center"
          }}
          >
            <InstagramIcon />
          </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Aboutme;
