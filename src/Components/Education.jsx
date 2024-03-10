import React from "react";
import { Box, Typography  } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";

const Education = () => {
  return (
    <Box mt={8} mb={20}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Typography variant="body1" fontWeight="700" fontSize={35}>
          Education & Experience
        </Typography>
        <div
          style={{
            width: "230px",
            height: "4px",
            backgroundColor: "#ff4b2b",
          }}
        ></div>
      </Box>
      

      <Box 
      sx={{
        display : "flex",
        alignItems : "center",
        justifyContent : "center",
        gap : "130px"
        // backgroundColor : "red"
      }}
      px={4}
      >
      <Box
      sx={{
        display : 'flex',
        flexDirection : "column",
        alignItems : "center",
        // justifyContent : "center",
        // width : "50%",
       
      }}
      >
      <Box
        sx={{
          display: "flex",
          gap: "12px",
        }}
        mt={15}
        // px={5}
      >
        <Box>
          <Typography
            sx={{
              background: "#fff",
              opacity: 0.6,
              fontSize: "17.5px",
              fontWeight: "500",
            }}
          >
            August' 21 - April' 24
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            gap: "3px",
            marginTop: "-50px",
          }}
        >
          <span style={{}}>
            <SchoolIcon />
          </span>
          <div
            style={{
              width: "4px",
              height: "130px",
              backgroundColor: "#ccc",
            }}
          ></div>
        </Box>

        <Box 
        sx={{
            display : 'flex',
            flexDirection : "column",
            gap : "5px"
        }}
        
        >
          
            <Typography variant="body1" color="#ff4b2b" fontWeight="600" fontSize={20}>Mumbai University</Typography>
            <Typography variant="caption" fontSize={13} fontWeight="500"
            sx={{
                backgroundColor : "#fff",
                opacity : .6

            }}
            >Mumbai , Maharashtra , India</Typography>
            <Typography variant="body1" fontSize={16} fontWeight="700" >
            Bachelor's in Information Technology
            </Typography>
       
          
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          gap: "12px",
        }}
        mt={10}
        ml={9}
        // px={5}
      >
        <Box>
          <Typography
            sx={{
              background: "#fff",
              opacity: 0.6,
              fontSize: "17.5px",
              fontWeight: "500",
            }}
          >
            Jun' 20 - April' 21
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            gap: "3px",
            marginTop: "-50px",
          }}
        >
          <span style={{}}>
            <SchoolIcon />
          </span>
          <div
            style={{
              width: "4px",
              height: "130px",
              backgroundColor: "#ccc",
            }}
          ></div>
        </Box>

        <Box>
          
            <Typography variant="body1" color="#ff4b2b" fontWeight="600" fontSize={20}>Ramniranjan Jhunjhunwala College </Typography>
            <Typography variant="caption" fontSize={13} fontWeight="500"
            sx={{
                backgroundColor : "#fff",
                opacity : .6

            }}
            >Mumbai , Maharashtra , India</Typography>
            <Typography variant="body1" fontSize={16} fontWeight="700" >
             Science (HSC)
            </Typography>
       
          
        </Box>
      </Box>
      </Box>

      <Box
      sx={{
       
      }}
      >

<Box
        sx={{
          display: "flex",
          gap: "12px",
          
        }}
        mt={15}
        // px={5}
      >
        <Box>
          <Typography
            sx={{
              background: "#fff",
              opacity: 0.6,
              fontSize: "17.5px",
              fontWeight: "500",
            }}
          >
            February' 24 - March' 24
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            gap: "3px",
            marginTop: "-50px",
          }}
        >
          <span style={{}}>
            {/* <SchoolIcon /> */}
            👩‍💻

          </span>
          <div
            style={{
              width: "4px",
              height: "130px",
              backgroundColor: "#ccc",
            }}
          ></div>
        </Box>

        <Box>
          
            <Typography variant="body1" color="#ff4b2b" fontWeight="600" fontSize={20}>Prodigy Infotech</Typography>
            <Typography variant="caption" fontSize={13} fontWeight="500"
            sx={{
                backgroundColor : "#fff",
                opacity : .6

            }}
            >Mumbai , Maharashtra , India</Typography>
            <Typography variant="body1" fontSize={16} fontWeight="700" >
             Web Developer
            </Typography>
        <Box 
        sx={{
            
        }}
        >
            
            
            
        </Box>
          
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          gap: "12px",
          
        }}
        mt={10}
        ml={0}
        // px={5}
      >
        <Box>
          <Typography
            sx={{
              background: "#fff",
              opacity: 0.6,
              fontSize: "17.5px",
              fontWeight: "500",
            }}
          >
            February' 24 - March' 24
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            gap: "3px",
            marginTop: "-50px",
          }}
        >
          <span style={{}}>
            {/* <SchoolIcon /> */}
            👩‍💻

          </span>
          <div
            style={{
              width: "4px",
              height: "130px",
              backgroundColor: "#ccc",
            }}
          ></div>
        </Box>

        <Box>
          
            <Typography variant="body1" color="#ff4b2b" fontWeight="600" fontSize={20}>CodSoft Tech</Typography>
            <Typography variant="caption" fontSize={13} fontWeight="500"
            sx={{
                backgroundColor : "#fff",
                opacity : .6

            }}
            >Mumbai , Maharashtra , India</Typography>
            <Typography variant="body1" fontSize={16} fontWeight="700" >
             Web Developer
            </Typography>
        <Box 
        sx={{
            
        }}
        >
            
            
            
        </Box>
          
        </Box>
      </Box>




        
      </Box>


      {/* end div */}
      </Box>
    </Box>
  );
};

export default Education;

 
