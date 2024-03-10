import React, { useState } from "react";
import { Box, Typography, Stack, TextField, Button } from "@mui/material";
import { toast  } from "react-toastify";
import { BASE_URL } from "../services/helper";
// import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
    const[contactData , setContactData] = useState({
        name : "",
        email : "",
        message : "",
    })

    const handleChange = (e) =>{
        setContactData({
        ...contactData , [e.target.name] : [e.target.value]
        });
    }

    const validateEmail = (email) => {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return regex.test(email);
    };

    const handleSubmitData = async(e) =>{
        e.preventDefault();
       if(contactData.name && contactData.email && contactData.message){
        if(!validateEmail(contactData.email)){
          return toast.error("Please Enter Valid Email");
        }
        const response = await fetch(`${BASE_URL}/api/contactdata` , {
            method : "POST",
            headers : {
                "Content-Type" : "application/json",
            },
            body:JSON.stringify(contactData)
        });

        if(response.ok){
            const data = await response.json();
            console.log(data);
            toast.success(data.message);
            setContactData({
                name : "",
                email : "",
                message : ""
            })
        }else{
            toast.error("Sorry ! Something went wrong");
        }  
       }else{
        toast.error("Please Fill All The Field");
       }
    }


  return (
    <Stack
      direction="row"
      spacing={13}
      flex={1}
      mt={15}
      alignItems="center"
      px={2}
    >
      <Box>
        <iframe
          src="https://lottie.host/embed/819e810e-dcb4-4204-b452-d6ab24cfd33f/leba9OymL2.json"
          title="women"
          width={700}
          height={610}
          style={{
            border: "none",
          }}
        ></iframe>
      </Box>

      <Box>
        <Typography variant="h5" fontWeight="700" fontSize={32}>
          Let's Connect
        </Typography>
        <div
          style={{
            width: "90px",
            height: "4px",
            backgroundColor: "#ff4b2b",
          }}
        ></div>
        <Typography
          variant="body1"
          fontWeight="400"
          fontSize={17}
          mt={3}
          mb={3}
        >
          I live in Mumbai, but I would be more than happy to relocate anywhere
          in the Mumbai if the role interests me!
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "25px",
            marginTop: "20px",
            paddingLeft: "30px",
          }}
        >
          <TextField
            id="outlined-name-input"
            label="Name"
            name="name"
            type="text"
            value={contactData.name}
            onChange={handleChange}
            autoComplete="off"
            required
            sx={{
              width: "330px",
            }}
          />
          <TextField
            id="outlined-email-input"
            label="Email"
            name="email"
            type="email"
            value={contactData.email}
            onChange={handleChange}
            required
            autoComplete="off"
            sx={{
              width: "330px",
            }}
          />

          <TextField
            id="outlined-multiline-flexible"
            label="Message"
            name="message"
            value={contactData.message}
            onChange={handleChange}
            multiline
            required
            rows={5}
            style={{
              width: "600px",
            }}
          />
          <Button
            variant="contained"
            sx={{
              width: "200px",
              padding: "15px 0px",
            }}
            onClick={handleSubmitData}
          >
            Send Message
          </Button>
        </Box>
      </Box>
    </Stack>
  );
};

export default Contact;
