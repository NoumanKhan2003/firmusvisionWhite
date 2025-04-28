import React, { useRef } from "react";
import clients from "../Assets/ClientsData";
import { Box, Button, Divider, Typography, useMediaQuery } from "@mui/material";
import { motion, useInView } from "framer-motion";
import MoreIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import { useNavigate } from "react-router-dom";

const ClientsSection = () => {
  const isSmallScreen = useMediaQuery("(max-width:600px)");
  const ref = useRef(null);
  const marginValue = isSmallScreen ? "-50px" : "-10px";
  const isInView = useInView(ref, { margin: marginValue, once: false });
  const navigate = useNavigate();

  const firstEightClients = clients.slice(0, 8);
  const groupedClients = [
    firstEightClients.slice(0, 4),
    firstEightClients.slice(4, 8),
  ];

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        padding: { md: "4rem 3rem", xs: "2rem 1rem" },
        backgroundColor: "black",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      {/* Title Section with bottom-to-top animation */}
      <Box
        ref={ref}
        sx={{
          width: "100%",
          textAlign: "center",
          mb: { md: "4rem", xs: "2rem" },
        }}
        component={motion.div}
        initial={{ opacity: 0, y: 100 }}
        animate={isInView ? { opacity: 1, y: 0 } : undefined}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Typography
          variant="h3"
          sx={{
            fontSize: { md: "3.5rem", xs: "2.5rem" },
            color: "white",
            fontWeight: "bold",
            fontFamily: "'Playfair Display', serif",
            mb: 0,
          }}
        >
          <span style={{ color: "red" }}>Some of Our</span> Amazing Clients
        </Typography>
        <Divider
          sx={{
            borderBottomWidth: "5px",
            borderColor: "red",
            width: "100px",
            margin: "auto",
            textAlign: "center",
          }}
        />
      </Box>

      {/* Clients Grid - 4 per row (Company Names in Black) */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: { md: "2rem", xs: "2rem" },
          width: "100%",
        }}
      >
        {groupedClients.map((row, rowIndex) => (
          <Box
            key={rowIndex}
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
              gap: { md: "3rem", xs: "1.5rem" },
            }}
          >
            {row.map((client, index) => (
              <Box
                key={index}
                sx={{
                  height: { md: "120px", xs: "100px" },
                  width: { md: "200px", xs: "160px" },
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "1rem",
                  backgroundColor: "#0b0b0b",
                  borderRadius: "8px",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "bold",
                    fontSize: { md: "2rem", xs: "1.2rem" },
                    color: "#fed2d2",
                    textTransform: "uppercase",
                    textAlign: "center",
                    letterSpacing: "1.5px",
                    fontFamily: "'Playfair Display', serif",
                  }}
                >
                  {client.name}
                </Typography>
              </Box>
            ))}
          </Box>
        ))}
      </Box>

      {/* View All Button */}
      <Button
        variant="outlined"
        color="error"
        size="large"
        sx={{
          mt: { md: "4rem", xs: "2rem" },
          px: 4,
          py: 1.5,
          fontSize: "1rem",
          fontWeight: "bold",
          borderWidth: "2px",
          borderRadius: "8px",
          fontFamily: "'Poppins', sans-serif",
          "&:hover": {
            borderWidth: "2px",
            backgroundColor: "rgba(255, 0, 0, 0.1)",
          },
        }}
        onClick={() => navigate("/clients")}
      >
        View All Clients <MoreIcon sx={{ ml: 1 }} />
      </Button>
    </Box>
  );
};

export default ClientsSection;
