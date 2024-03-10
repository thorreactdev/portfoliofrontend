import React from 'react'
import ProjectCard from './ProjectCard'
import { Box, Typography } from "@mui/material";
import youtube1 from "../Assets/youtube_project_images/youtube1.png";
import youtube2 from "../Assets/youtube_project_images/youtube2.png";
import youtube3 from "../Assets/youtube_project_images/youtube3.png";
import youtube4 from "../Assets/youtube_project_images/youtube4.png";
import youtube5 from "../Assets/youtube_project_images/youtube5.png";
import youtube6 from "../Assets/youtube_project_images/youtube6.png";

import picvista1 from "../Assets/picvista_images/picvista1.png";
import picvista2 from "../Assets/picvista_images/picvista2.png";
import picvista3 from "../Assets/picvista_images/picvista3.png";
import picvista4 from "../Assets/picvista_images/picvista4.png";
import picvista5 from "../Assets/picvista_images/picvista5.png";
import picvista6 from "../Assets/picvista_images/picvista6.png";

import anime1 from "../Assets/anime_images/anime1.png";
import anime2 from "../Assets/anime_images/anime2.png";
import anime3 from "../Assets/anime_images/anime3.png";
import anime4 from "../Assets/anime_images/anime4.png";
import anime5 from "../Assets/anime_images/anime5.png";
import anime6 from "../Assets/anime_images/anime6.png";

import just1 from "../Assets/just_images/just1.png";
import just2 from "../Assets/just_images/just2.png";
import just3 from "../Assets/just_images/just3.png";
import just4 from "../Assets/just_images/just4.png";
import just5 from "../Assets/just_images/just5.png";
import just6 from "../Assets/just_images/just6.png";
import just7 from "../Assets/just_images/just7.png";
import just8 from "../Assets/just_images/just8.png";
import just9 from "../Assets/just_images/just9.png";

import ai1 from "../Assets/ai_images/ai1.png";
import ai2 from "../Assets/ai_images/ai2.png";
import ai3 from "../Assets/ai_images/ai3.png";
import ai4 from "../Assets/ai_images/ai4.png";
import ai5 from "../Assets/ai_images/ai5.png";

import apna1 from "../Assets/apna_images/apna1.png";
import apna2 from "../Assets/apna_images/apna2.png";
import apna3 from "../Assets/apna_images/apna3.png";
import apna4 from "../Assets/apna_images/apna4.png";
import apna5 from "../Assets/apna_images/apna5.png";
import apna6 from "../Assets/apna_images/apna6.png";


const ProjectSection = () => {
    const projects =[
        {
            title : "Youtube Clone",
            images : [ youtube1,youtube2,youtube3,youtube4,youtube5,youtube6],
            link : "https://youtubeprajapati.netlify.app/"
        } ,

        {
            title : "Picvista",
            images :[picvista1 , picvista2 ,picvista3 , picvista4 , picvista5 , picvista6],
            link : "https://github.com/thorreactdev/picvistaprajapati"
        },
        {
            title : "Animeverse",
            images :[anime1 , anime2 , anime3 , anime4 , anime5 , anime6],
            link :"https://animeprajapati.netlify.app/"
        },
        {
            title : "Just Shop",
            images :[just1,just2,just3,just4,just5,just6,just7,just8,just9],
            link : "https://github.com/thorreactdev/PRODIGY_WD_01"
        },
        {
            title : "AI Summarizer",
            images : [ai1,ai2,ai3,ai4,ai5],
            link : "https://aisummarydev.netlify.app/"
        },
        {
            title : "Apna College",
            images : [apna1 , apna2, apna3 , apna4 , apna5, apna6],
            link : "https://apnacollege123.vercel.app/",
            category : "Static"
        }
    ];


  return (
    <Box 
    
    >
        <Box
        sx={{
            display : "flex",
            alignItems : "center",
            justifyContent : "center",
            flexDirection : "column",
            marginTop : "160px"
        }}
         >
        <Typography variant='h6' fontWeight="700" fontSize={27}>
            Let's See My Project
        </Typography>
        <div style={{
            width: "160px",
            height: "4px",
            backgroundColor: "#ff4b2b",
        }}></div>
        <Typography variant='body1' textTransform="capitalize" mt={2.5} color="#333" fontWeight="410" fontSize={17.9} >
        Following is the work I enjoy doing, to which I put all my heart and hard work into!!
        </Typography>
        </Box>
    <Box
    sx={{
        display : "flex",
        flexWrap : "wrap",
        justifyContent : "center",
        gap : "50px",
        marginTop : "30px"
    }}
    px={6}
    >
        {
            projects.map((project ,index)=>(
                <ProjectCard key={index} title = {project.title} images={project.images} category={project.category} link={project.link} />
            ))
        }

    </Box>
    </Box>
  )
}

export default ProjectSection