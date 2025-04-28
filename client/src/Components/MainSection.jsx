import React from "react";
import { Box, Typography, Button } from "@mui/material";
import heroImage from "../Assets/img1.jpg";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const LandingSection = () => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.25), rgba(255, 255, 255, 0.7)), url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        alignItems: "center",
        justifyContent: { xs: "center", md: "unset" },
        px: { xs: 2, sm: 4, md: 10 },
        textAlign: "center",
      }}
    >
      <Box
        component={motion.div}
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        sx={{
          maxWidth: { xs: "95%", md: "70%" },
          color: "black",
          textAlign: "center",
        }}
      >
        <Typography
          variant="h2"
          fontWeight="bold"
          sx={{
            fontSize: { xs: "2.8rem", md: "3.5rem" },
            whiteSpace: "normal",
            wordWrap: "break-word",
            lineHeight: { xs: 1.3, sm: 1.5 },
          }}
        >
          India’s Leading{" "}
          <span style={{ color: "#e6433e" }}>PR Agency</span>
        </Typography>

        <Typography
          variant="body1"
          sx={{
            mt: 2,
            fontSize: { xs: "1rem", md: "1.2rem" },
            lineHeight: 1.6,
            width: "100%",
            textAlign: "justify",
            color: "black",
            px: { xs: 0, md: 0 },
          }}
        >
          Firmus Vision is a leading PR agency based in Delhi that helps
          ambitious brands succeed through strategic media and marketing
          communications. We leverage our expertise to create brand value,
          enabling you to win clients, engage stakeholders, and, most
          importantly, build trust.
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            gap: 2,
            mt: 4,
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <Button
            variant="contained"
            sx={{
              backgroundColor: "red",
              color: "white",
              fontWeight: "bold",
              px: 3,
              py: 1.2,
              borderRadius: "0 2rem 0 2rem",
              textTransform: "none",
              fontSize: { xs: "0.85rem", sm: "1rem" },
              width: { xs: "100%", sm: "auto" },
              "&:hover": { backgroundColor: "darkred" },
            }}
            onClick={() => {
              navigate("/services");
            }}
          >
            OUR SERVICES &gt;
          </Button>

          <Button
            variant="contained"
            sx={{
              backgroundColor: "#2c3e50",
              color: "white",
              fontWeight: "bold",
              px: 3,
              py: 1.2,
              borderRadius: "0 2rem 0 2rem",
              textTransform: "none",
              fontSize: { xs: "0.85rem", sm: "1rem" },
              width: { xs: "100%", sm: "auto" },
              "&:hover": { backgroundColor: "#1c2833" },
            }}
            onClick={() => {
              navigate("/contact");
            }}
          >
            CONTACT US &gt;
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default LandingSection;
