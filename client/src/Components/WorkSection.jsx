import React from "react";
import { Box, Typography, Button, useMediaQuery } from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import emotoradImage from "../Assets/bg4.jpg";
import indiaAcceleratorImage from "../Assets/bg4.jpg";
import listedCompaniesImage from "../Assets/bg4.jpg";

const OurWorksSection = () => {
  const isMobile = useMediaQuery("(max-width:900px)");
  const navigate = useNavigate();

  const caseStudies = [
    { 
      title: "Emotorad", 
      id: "emotorad",
      image: emotoradImage
    },
    { 
      title: "India Accelerator", 
      id: "india-accelerator",
      image: indiaAcceleratorImage
    },
    { 
      title: "Listed Companies", 
      id: "listed-companies",
      image: listedCompaniesImage
    },
  ];

  return (
    <Box
      sx={{
        padding: { md: "4rem 3rem", xs: "2rem 1rem" },
        minHeight: "100vh",
        backgroundColor: "black",
      }}
    >
      {/* Title Section */}
      <Box
        textAlign="center"
        mb={6}
        component={motion.div}
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Typography
          variant="h3"
          sx={{
            fontWeight: "bold",
            color: "white",
            fontSize: { md: "3.5rem", xs: "2.5rem" },
            textTransform: "uppercase",
          }}
        >
         <span style={{color:"red"}}>OUR</span>  WORKS
        </Typography>
        <Box
          sx={{
            width: "80px",
            height: "4px",
            backgroundColor: "red",
            margin: "0rem auto",
          }}
        />
      </Box>

      {/* Case Studies Grid */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { md: "repeat(3, 1fr)", xs: "1fr" },
          gap: "2rem",
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        {caseStudies.map((study, index) => (
          <Box
            key={index}
            component={motion.div}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            sx={{
              position: "relative",
              height: { md: "330px", xs: "300px" },
              overflow: "hidden",
              boxShadow: "0 4px 12px rgba(60, 60, 60, 0.61)",
              transition: "transform 0.3s ease",
              borderBottomRightRadius: "6rem",
              borderTopLeftRadius: "6rem",
              "&:hover": {
                transform: "translateY(-5px)",
                cursor:"pointer",
                "& .image-container": {
                  transform: "scale(1.1)",
                },
                "& .overlay": {
                  opacity: 0.8,
                }
              },
            }}
          >
            {/* Background Image with Zoom Effect */}
            <Box
              className="image-container"
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundImage: `url(${study.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                transition: "transform 0.5s ease",
                borderBottomRightRadius: "6rem",
                borderTopLeftRadius: "6rem",
              }}
            />
            
            {/* red Overlay */}
            <Box
              className="overlay"
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(50, 0, 0, 0.7)",
                transition: "opacity 0.3s ease",
                borderBottomRightRadius: "6rem",
                borderTopLeftRadius: "6rem",
              }}
            />
            
            {/* Case Study Title */}
            <Box
              sx={{
                position: "relative",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                color: "white",
                textAlign: "center",
                p: 3,
                zIndex: 1,
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  fontWeight: "bold",
                  mb: 1,
                  textTransform: "uppercase",
                  fontSize:"2rem",
                }}
              >
                Case Study
              </Typography>
              <Typography
                variant="h4"
                sx={{
                    width:"100%",
                    fontSize:"1.4rem",
                }}
              >
                ({study.title})
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>

      {/* View More Button */}
      {/* <Box textAlign="center" mt={6}>
        <Button
          variant="outlined"
          sx={{
            borderColor: "red",
            color: "red",
            "&:hover": {
              backgroundColor: "red",
              color: "white",
            },
            width: { md: "15rem", xs: "80%" },
            py: 1.5,
            fontSize: "1rem",
            fontWeight: "bold",
            borderWidth: "2px",
            borderRadius: "8px",
          }}
          onClick={() => navigate("/works")}
        >
          View More Works
        </Button>
      </Box> */}
    </Box>
  );
};

export default OurWorksSection;