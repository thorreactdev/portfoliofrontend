import React from 'react'
import { Box , Typography } from "@mui/material"
import js from "../Assets/toolkit_images/logo-javascript.svg";
import react from "../Assets/toolkit_images/react-2.svg"
import nodejs from "../Assets/toolkit_images/nodejs-1.svg"
import html from "../Assets/toolkit_images/html-1.svg"
import css from "../Assets/toolkit_images/css-3.svg";
import python from "../Assets/toolkit_images/python-5.svg";
import mysql from "../Assets/toolkit_images/mysql-logo.svg";
import tailwind from "../Assets/toolkit_images/tailwindcss.svg";
import material_ui from "../Assets/toolkit_images/material-ui-1.svg";
import postman from "../Assets/toolkit_images/postman.svg"
import github from "../Assets/toolkit_images/github-icon-1.svg";
import git from "../Assets/toolkit_images/git-bash.svg";

const ToolKit = () => {
    const toolkit = [
        {
            id : 1,
            image : js,
            text : "JavaScript"

        },
        {
            id :2,
            image : react,
            text : "React"
        },
        {
            id : 3,
            image : nodejs,
            text : "Node"
        },
        {
            id : 4,
            image : html,
            text : "HTML5"
        },
        {
            id : 5,
            image : css,
            text : "CSS3"
        },
        {
            id : 6,
            image : tailwind,
            text : "Talwind CSS"
        },
        {
            id : 7,
            image : python,
            text : "Python"
        },
        {
            id : 8,
            image : mysql,
            text : "MySQL"
        },
        {
            id : 9,
            image : postman,
            text : "Postman"
        },
        {
            id : 10,
            image : material_ui,
            text : "Material UI"
        },
        {
            id : 11,
            image : github,
            text: "Github"
        },
        {
            id : 12,
            image : git,
            text : "Git"
        }
    ]


  return (
    <Box
    mt={11}
    
    >
        <Box 
        sx={{
            display : "flex",
            alignItems : "center",
            justifyContent : "center",
            flexDirection : "column"
        }}
        
        >
        <Typography variant="body1" fontWeight="700" fontSize={35} >
            My Toolkit
        </Typography>
        <div style={{
            width: "120px",
            height: "4px",
            backgroundColor: "#ff4b2b",
        }}>

        </div>
        </Box>
        <Box
        sx={{
            display : "flex",
            alignItems : "center",
            justifyContent: "center",
            gap : "120px",
            flexWrap : "wrap",
            padding : "20px 100px",
            marginTop : "60px"

        }}
        
        >
            {
                toolkit.map((tools)=>(
                    <Box key={tools.id} 
                    sx={{
                        display: "flex",
                        flexDirection : "column",
                        alignItems : "center",
                        gap : "12px"
                    }}
                    >
                        <img src={tools.image} alt={tools.text} width={100} height={80} />
                        <Typography variant='h6'>
                            {tools.text}
                        </Typography>

                    </Box>
                ))
            }

        </Box>
    </Box>
  )
}

export default ToolKit