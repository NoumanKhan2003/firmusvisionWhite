import { Box, Typography, Button } from "@mui/material";
import img1 from "../Assets/img2.jpg";
import { useNavigate } from "react-router-dom";

const PRMarketingSection = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        backgroundColor: "#090909",
        minHeight: { xs: "auto", md: "100vh" },
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: { xs: "2rem 1rem", md: "0rem 6rem" },
        py: { xs: "3rem", md: "2rem" },
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: "1900px",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: { xs: "center", md: "stretch" },
          justifyContent: "center",
          gap: { xs: "2rem", md: "4rem" },
        }}
      >
        {/* Image Section - Responsive */}
        <Box
          sx={{
            width: { xs: "100%", md: "50%" },
            height: { xs: "300px", md: "auto" },
            minHeight: { xs: "300px", md: "400px" },
            display: "flex",
            order: { xs: 1, md: 1 },
            overflow: "hidden",
            borderRadius: { xs: "8px", md: "0" },
          }}
        >
          <img
            src={img1}
            alt="Meeting"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              boxShadow: "3px 3px 15px rgba(255, 255, 255, 0.1)",
            }}
          />
        </Box>

        {/* Text Content Section - Responsive */}
        <Box
          sx={{
            backgroundColor: "#000",
            color: "white",
            padding: { xs: "1.5rem", md: "2.5rem" },
            borderRadius: "8px",
            boxShadow: "5px 5px 15px rgba(255, 255, 255, 0.1)",
            width: { xs: "80%", md: "40%" },
            maxWidth: { xs: "100%", md: "500px" },
            textAlign: { xs: "center", md: "left" },
            order: { xs: 2, md: 2 },
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            height: { xs: "auto", md: "auto" },
            minHeight: { xs: "auto", md: "400px" },
          }}
        >
          <Typography variant="h4" fontWeight="bold" sx={{ fontSize: { xs: "1.5rem", md: "3rem"} }}>
            WHO <span style={{color:"red"}}>WE </span> ARE
          </Typography>
          <Box
            sx={{
              width: "70px",
              height: "3px",
              backgroundColor: "red",
              margin: { xs: "8px auto", md: "2px 0 16px 0" },
            }}
          />
          <Typography
            variant="body1"
            sx={{ 
              fontSize: { xs: "0.9rem", md: "1rem" }, 
              lineHeight: "1.6",
              textAlign: { xs: "center", md: "left" }
            }}
          >
            Welcome to Firmus Vision, your partner in strategic communication
            excellence. We specialize in crafting compelling narratives,
            building media relationships, and delivering measurable results.
          </Typography>
          <Typography
            variant="body1"
            sx={{ 
              marginTop: "1rem", 
              fontSize: { xs: "0.9rem", md: "1rem" }, 
              lineHeight: "1.6",
              textAlign: { xs: "center", md: "left" }
            }}
          >
            Our team of industry experts customizes PR solutions that align
            seamlessly with your unique goals. With global reach and local
            expertise, we work round-the-clock for your success.
          </Typography>
          <Button
            variant="text"
            sx={{
              color: "red",
              marginTop: "1.5rem",
              textTransform: "none",
              fontWeight: "bold",
              fontSize: { xs: "0.9rem", md: "1rem" },
              alignSelf: { xs: "center", md: "flex-start" },
              px: 0,
            }}
            onClick={() => navigate("/about")}
          >
            Read More ➝
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default PRMarketingSection;