import React , { useState  } from 'react'
import { Box , Card , CardContent, CardMedia , Typography} from "@mui/material";
import { keyframes } from '@emotion/react';
// import { Link } from "react-router-dom";


const scrollAnimation = keyframes`
0% {
  transform: translateY(0);
}
100% {
  transform: translateY(calc(-100% * 6));
}
`;


const ProjectCard = ( { title ,images ,link }) => {


const [hovered, setHovered] = useState(false);
const [animationDirection, setAnimationDirection] = useState("reverse");

const handleHover = () => {
    setHovered(true);
    setAnimationDirection("normal");
  };

  const handleMouseLeave = () => {
    setHovered(false);
    setAnimationDirection("reverse");
  };


    console.log(images);
  return (
    <Box
     mt={3}
    >
      <a href={link} target='_blank' rel="noreferrer">
        <Card
        sx={{
            width : "450px",
            height : "450px",
            border : "1px solid #ccc",  
            zIndex : 200 ,
            boxShadow : "none",
            paddingBottom : "10px"
        }}

        onMouseOver={handleHover}
        onMouseLeave={handleMouseLeave}
        
        
        >
         <CardContent
          style={{
            padding : "0px",
            position : "sticky", 
            top:0,
            left : 0,
            zIndex : 200
            
          }}
         >
            <div 
            style={{
                display : "flex",
                justifyContent : "space-between",
                alignItems : "center",
                backgroundColor : "#e7e7e7",
                height :"35px",
                padding : "6px 10px",
                borderBottom : ".5px solid #000"
            }}
            >
            <div style={{ 
                display : "flex",
                alignItems:"center",
                gap : "10px",
                
            }}>
                <div style={{
                    width : "10px" , 
                    height : "10px" , 
                    borderRadius : "50%",
                    color : "#000",
                    backgroundColor : 'red',
                    
                }}>

                </div>
                <div style={{
                    width : "10px" , 
                    height : "10px" , 
                    borderRadius : "50%",
                    color : "#000",
                    backgroundColor : 'orange',
                    
                }}>

                </div>
                <div style={{
                    width : "10px" , 
                    height : "10px" , 
                    borderRadius : "50%",
                    color : "#000",
                    backgroundColor : 'green',
                   
                }}>

                </div>
           

            </div>
            <Typography fontWeight="600" fontSize={14} textAlign="center" >
                {title}
            </Typography>
        </div>
            
         </CardContent>
        
            <CardMedia
            sx={{
                width : "100%",
                height : "100%",
                display : "flex", 
                flexDirection : "column",
                gap : "10px",
                padding : "15px 30px",
                animation:  hovered ? `${scrollAnimation} 18s linear infinite ${animationDirection}` : `none`
                
            }}
            >
                {
                    images.map((image , index)=>(
                        <img key={index} src={image}  alt="" style={{ width: '100%', height: 'auto', objectFit: 'cover' }}/>
                    ))
                }

            </CardMedia>
        </Card>
        </a> 
    </Box>
  )
}

export default ProjectCard