import React from 'react'
import { Box , Typography , Stack } from '@mui/material'
import logo from "../Assets/portfolio-logo.png";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    
        <Stack 
        direction="row" 
        justifyContent="space-between"
        alignItems="center"
        px={5}
        sx={{
            boxShadow : "0px 0px 10px 0px #ccc",
            position : "sticky",
            top : 0,
            left :0,
            cursor : "pointer",
            zIndex : 3,
            backgroundColor : "#fff"

        }}
        
        >
            <Box>
                <img src={ logo } alt='logo' width={150}/>
            </Box>
            <Box 
            sx={{
                display : "flex",
                alignItems : "center",
                gap : "20px"
            }}
            >
                <Link to="/">
                <Typography variant='body1' fontSize={18} fontWeight="450" color="#0f0f0f">
                    Home
                </Typography>
                </Link>
               
                <Typography variant='body1' fontSize={18} fontWeight="450" color="#0f0f0f">
                    About 
                </Typography>
               
                <Typography 
                sx={{
                    backgroundColor: "#000",
                    color : "#fff",
                    padding:"6px 17px",
                    borderRadius : "20px"
                }}
                >
                    <a href="https://github.com/thorreactdev" target='_blank' rel="noreferrer" >
                    GitHub
                    </a>
                </Typography>
            </Box>


        </Stack>
    
  )
}

export default Navbar