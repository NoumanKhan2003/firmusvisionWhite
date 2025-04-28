import React from "react";
import { Box, Button, Typography, Divider, useMediaQuery } from "@mui/material";
import { motion } from "framer-motion";
import servicesData from "../Assets/ServicesData.js";
import { useNavigate } from "react-router-dom";
import MoreIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

const ServicesSection = () => {
  const isMobile = useMediaQuery("(max-width:900px)");
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        padding: { md: "2rem 3rem", xs: "2rem 1rem" },
        minHeight: "100vh",
        pb: { md: 4, xs: 3 },
        backgroundColor: "#070707",
      }}
    >
      {/* Title */}
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
          }}
        >
          <span style={{ color: "red" }}>Our</span> Services
        </Typography>
        <Divider
          sx={{
            width: "80px",
            borderBottomWidth: "5px",
            borderColor: "red",
            margin: "auto",
            mt: 0,
          }}
        />
      </Box>

      {/* Services Grid */}
      <Box sx={{ maxWidth: "1200px", margin: "0 auto" }}>
        {servicesData.slice(0, 3).map((service, index) => (
          <Box
            key={index}
            component={motion.div}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            sx={{
              display: "flex",
              flexDirection: isMobile
                ? "column"
                : index % 2 === 0
                ? "row"
                : "row-reverse",
              alignItems: "center",
              gap: { md: 6, xs: 0 },
              mb: 10,
              "&:last-child": { mb: 0 },
              px: { md: 4, xs: 0 },
              pb: 1,
            }}
          >
            {/* Image Box */}
            <Box
              sx={{
                flex: 1,
                width: isMobile ? "100%" : "45%",
                height: isMobile ? "300px" : "400px",
                borderRadius: 2,
                overflow: "hidden",
              }}
            >
              <Box
                component="img"
                src={service.image}
                alt={service.title}
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transition: "transform 0.5s ease",
                  borderBottomRightRadius: { md: "6rem", xs: "0" },
                  borderTopLeftRadius: { md: "6rem", xs: "0" },
                  "&:hover": {
                    transform: "scale(1.03)",
                  },
                }}
              />
            </Box>

            {/* Content Box */}
            <Box
              sx={{
                flex: 1,
                width: isMobile ? "90%" : "45%",
                textAlign: isMobile ? "center" : "left",
                backgroundColor: "#0c0c0c",
                px: { md: 5, xs: 2 },
                py: { md: 4, xs: 4 },
                borderBottomRightRadius: { md: "4rem", xs: "0" },
                borderTopLeftRadius: { md: "4rem", xs: "0" },
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 700,
                  color: "red",
                  mb: 2,
                  fontSize: { md: "2rem", xs: "1.75rem" },
                }}
              >
                {service.title}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  lineHeight: 1.8,
                  fontSize: { md: "1.1rem", xs: "1rem" },
                  color: "white",
                }}
              >
                {service.longDescription}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>

      {/* View All Button */}
      <Box textAlign="center" mt={2}>
        <Button
          variant="outlined"
          sx={{
            borderColor: "red",
            color: "red",
            "&:hover": {
              borderWidth: "2px",
              backgroundColor: "rgba(255, 0, 0, 0.1)",
            },
            width: { md: "15rem", xs: "80%" },
            py: 1.5,
            fontSize: "1rem",
            fontWeight: "bold",
            borderWidth: "2px",
            borderRadius: "8px",
          }}
          onClick={() => navigate("/services")}
        >
          View All Services
          <MoreIcon sx={{ ml: 1 }} />
        </Button>
      </Box>
    </Box>
  );
};

export default ServicesSection;
