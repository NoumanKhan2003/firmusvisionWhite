import React, { useState, useEffect } from "react";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { Box, Typography, Avatar, IconButton } from "@mui/material";
import { useMediaQuery } from "@mui/material";
import testimonials from "../Assets/TestimonialData.js";

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isSmallScreen = useMediaQuery("(max-width: 600px)"); 

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <Box
      sx={{
        textAlign: "center",
        py: 5,
        backgroundColor: "rgb(11, 11, 11)",
      }}
    >
      <Typography
        variant="h4"
        fontWeight="bold"
        mb={5}
        sx={{ color: "white", fontSize: "3rem" }}
      >
        What People Think <span style={{ color: "red" }}>About Us</span>
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: isSmallScreen ? "column" : "row",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        }}
      >
        {/* Left Button */}
        {!isSmallScreen && (
          <IconButton
            onClick={prevSlide}
            sx={{
              position: "absolute",
              left: 30,
              color: "red",
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              "&:hover": { backgroundColor: "rgba(255, 246, 73, 0.2)" },
            }}
          >
            <ArrowBackIos sx={{ fontSize: "2rem" }} />
          </IconButton>
        )}

        {/* Testimonial Content */}
        <Box sx={{ maxWidth: 800, textAlign: "center", px: 3,color:"rgba(249, 249, 249, 0.86)"}}>
          <Avatar
            src={testimonials[currentIndex].image}
            sx={{ width: 100, height: 100, mx: "auto", mb: 2 }}
          />
          <Typography
            variant="body1"
            fontSize="1.2rem"
            fontWeight="400"
            sx={{ px: isSmallScreen ? 2 : 0 }}
          >
            "{testimonials[currentIndex].text}"
          </Typography>
          <Typography variant="body2" color="red" fontWeight="bold" mt={2}>
            - {testimonials[currentIndex].author},{" "}
            {testimonials[currentIndex].designation}
          </Typography>
        </Box>

        {/* Right Button */}
        {!isSmallScreen && (
          <IconButton
            onClick={nextSlide}
            sx={{
              position: "absolute",
              right: 30,
              color: "red",
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              "&:hover": { backgroundColor: "rgba(255, 246, 73, 0.2)" },
            }}
          >
            <ArrowForwardIos sx={{ fontSize: "2rem" }} />
          </IconButton>
        )}
      </Box>

      {/* Buttons for Small Screens (Centered Below the Content) */}
      {isSmallScreen && (
        <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
          <IconButton
            onClick={prevSlide}
            sx={{
              color: "blue",
              backgroundColor: "rgba(0, 0, 255, 0.1)",
              mx: 1,
              "&:hover": { backgroundColor: "rgba(0, 0, 255, 0.2)" },
            }}
          >
            <ArrowBackIos sx={{ fontSize: "1.5rem" }} />
          </IconButton>

          <IconButton
            onClick={nextSlide}
            sx={{
              color: "blue",
              backgroundColor: "rgba(0, 0, 255, 0.1)",
              mx: 1,
              "&:hover": { backgroundColor: "rgba(0, 0, 255, 0.2)" },
            }}
          >
            <ArrowForwardIos sx={{ fontSize: "1.5rem" }} />
          </IconButton>
        </Box>
      )}
    </Box>
  );
};

export default TestimonialSlider;
