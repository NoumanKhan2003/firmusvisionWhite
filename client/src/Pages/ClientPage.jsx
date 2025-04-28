import React, { useEffect } from "react";
import {
  Box,
  Typography,
  Container,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import ClientsData from "../Assets/ClientsData.js";
import clientpic from "../Assets/img4.jpg";
import MoreIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import LessIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";

const ClientsPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box sx={{ backgroundColor: "white" }}>
      <Box
        sx={{
          height: isMobile ? "180px" : "300px",
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.05)), url(${clientpic})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(255,255,255,0.5)",
          },
          mb: isMobile ? 3 : 6,
        }}
      >
        <Typography
          variant={isMobile ? "h5" : "h2"}
          sx={{
            color: "#333", // Dark text for light theme
            fontWeight: "bold",
            fontSize: isMobile ? "2.4rem" : "4rem",
            position: "relative",
            zIndex: 1,
            textAlign: "center",
            px: 2,
            textShadow: "2px 2px 4px rgba(0,0,0,0.2)", // Lighter shadow
            fontFamily: "'Playfair Display', serif",
          }}
        >
          OUR <span style={{ color: "#E87E1C" }}>CLIENTS</span>
        </Typography>
      </Box>

      <Container maxWidth="lg" sx={{ pb: 6, px: isMobile ? 1 : 4 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            pb: 4,
            mx: 0,
            textAlign: "center",
          }}
        >
          <LessIcon
            sx={{ fontSize: "3rem", display: isMobile ? "none" : "block" }}
          />
          <Typography
            variant={isMobile ? "h5" : "h4"}
            sx={{
              fontWeight: "bold",
              color: "#333", // Dark text for light theme
              fontFamily: "'Playfair Display', serif",
              mx: { md: 2, xs: 0 },
            }}
          >
            Trusted by <span style={{ color: "#E87E1C" }}>Industry Leaders</span>
          </Typography>
          <MoreIcon
            sx={{ fontSize: "3rem", display: isMobile ? "none" : "block" }}
          />
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: isMobile
              ? "repeat(2, 1fr)"
              : isTablet
              ? "repeat(3, 1fr)"
              : "repeat(4, 1fr)",
            gap: isMobile ? 1 : 3,
            alignItems: "center",
            justifyItems: "center",
            px: isMobile ? 0 : 1,
          }}
        >
          {ClientsData.map((client) => (
            <Box
              key={client.name}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                width: isMobile ? "80%" : "100%",
                height: "100%",
                p: isMobile ? 1 : 2,
                textAlign: "center",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                backgroundColor: "#fafafa", // Light background for each client box
                borderRadius: "8px", // Added border radius for smooth corners
                boxShadow: "0 4px 10px rgba(0,0,0,0.1)", // Soft shadow for light theme

                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.2)", // Darker shadow on hover
                },
              }}
            >
              <Typography
                variant={isMobile ? "body2" : isTablet ? "h6" : "h5"}
                sx={{
                  fontWeight: "bold",
                  color: "#333", // Dark text for client names
                  fontFamily: "'Playfair Display', serif",
                  letterSpacing: "0.5px",
                  textTransform: "uppercase",
                  whiteSpace: isMobile ? "normal" : "normal",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  maxWidth: isMobile ? "100%" : "90%",
                  textAlign: "center",
                  fontSize: isMobile ? "1.2rem" : "1.5rem",
                }}
                title={client.name}
              >
                {client.name}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default ClientsPage;
