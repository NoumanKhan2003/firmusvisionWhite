import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import {
  Box,
  IconButton,
  Container,
  Typography,
  Button,
  useTheme,
  useMediaQuery,
  Paper,
} from "@mui/material";
import { LinkedIn } from "@mui/icons-material";
import CounterSection from "../Components/ViewsSection";
import founderImg from "../Assets/img6.jpg";
import aboutImg from "../Assets/bg1.jpeg";

const quotes = [
  {
    title: "We are Credible",
    text: "At the core of Media Mantra Group's credibility is a very strong leadership team with over 100 plus years of experience in communications consulting. With a deep understanding of the media landscape, communication trends, and consumer behavior, the firm exudes professionalism in every facet of its operations, ensuring that clients receive top-notch strategic counsel and execution.",
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  },
  {
    title: "We Value Integrity",
    text: "Our team operates with the highest level of integrity, ensuring that our clients' best interests are always at the forefront. Transparency, trust, and ethics guide every decision we make.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  },
  {
    title: "Our Commitment is Unmatched",
    text: "We are committed to delivering excellence and measurable results. Our strategic approach is built on deep industry knowledge and a passion for success.",
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
  },
];

const AboutPage = () => {
  const [index, setIndex] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % quotes.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () =>
    setIndex((prevIndex) => (prevIndex - 1 + quotes.length) % quotes.length);

  const nextSlide = () =>
    setIndex((prevIndex) => (prevIndex + 1) % quotes.length);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box sx={{ minHeight: "100vh" }}>
      {/* Hero Section */}
      <Box
        sx={{
          height: "100vh",
          minHeight: "600px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundImage: `linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5)), url(${aboutImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "black", // Change to dark text for light theme
          textAlign: "center",
          px: 3,
          py: 0,
        }}
      >
        <Container maxWidth="md">
          <Typography
            variant={isMobile ? "h3" : "h2"}
            component="h1"
            sx={{
              fontWeight: 800,
              mb: 3,
              lineHeight: 1.2,
              textTransform: "uppercase",
            }}
          >
            Your <span style={{ color: "#E87E1C" }}>Idea</span> Partner
          </Typography>

          <Typography
            variant={isMobile ? "h6" : "h5"}
            sx={{
              mb: 4,
              lineHeight: 1.6,
              maxWidth: "800px",
              mx: "auto",
            }}
          >
            Success driven and built to keep pace, we are a proudly independent
            full-service public relations and marketing agency with one towering
            purpose: elevate your business brand above all others.
          </Typography>
        </Container>
      </Box>

      {/* Industries Section */}
      <Box sx={{ backgroundColor: "#f5f5f5", py: 8 }}>
        <Container maxWidth="lg">
          <Typography
            variant="h4"
            component="h3"
            sx={{
              fontWeight: "bold",
              mb: 4,
              textAlign: "center",
              color: "black", // Change to dark text
            }}
          >
            We've Worked With <span style={{ color: "#E87E1C" }}>150+ Brands</span>{" "}
            Across Industries
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 2,
              justifyContent: "center",
            }}
          >
            {[
              "E-commerce",
              "Consumer Technology",
              "Education",
              "Startups",
              "Fintech",
              "Legal-tech",
              "HR",
              "Healthcare",
              "Real Estate",
              "Fashion",
            ].map((industry) => (
              <Paper
                key={industry}
                sx={{
                  p: 2,
                  textAlign: "center",
                  minWidth: "120px",
                  flex: "1 0 auto",
                  bgcolor: "#ffffff", // Set background to white
                  color: "black", // Dark text for light theme
                }}
              >
                <Typography>{industry}</Typography>
              </Paper>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Testimonial Slider Section */}
      <Box
        sx={{
          minHeight: "50vh",
          position: "relative",
          backgroundColor: "#f5f5f5", // Light background
          color: "black", // Dark text for light theme
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: { xs: "2rem 1rem", md: "4rem 0" },
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: "0%",
            left: "-0%",
            width: "60%",
            height: "100%",
            borderTopRightRadius: "50%",
            borderBottomRightRadius: "50%",
            backgroundColor: "#ffffff", // Light background for this section
            zIndex: 0,
          }}
        />

        <Container maxWidth="lg">
          <Box
            sx={{
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              gap: 4,
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                width: isMobile ? "100%" : "40%",
                height: isMobile ? "300px" : "400px",
                position: "relative",
                borderRadius: "8px",
                overflow: "hidden",
                boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
                zIndex: 1,
              }}
            >
              <motion.img
                key={`image-${index}`}
                src={quotes[index].image}
                alt={quotes[index].title}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  position: "absolute",
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
              />
            </Box>

            <Box
              sx={{
                width: isMobile ? "100%" : "55%",
                position: "relative",
                zIndex: 1,
              }}
            >
              <motion.div
                key={`text-${index}`}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              >
                <Typography
                  variant={isMobile ? "h5" : "h4"}
                  fontWeight="bold"
                  mb={2}
                  color="#E87E1C" // Red color for titles
                >
                  {quotes[index].title}
                </Typography>
                <Typography variant={isMobile ? "body1" : "h6"} color="#8e8e8e">
                  {quotes[index].text}
                </Typography>
              </motion.div>

              <Box
                sx={{
                  display: "flex",
                  gap: 2,
                  mt: 4,
                }}
              >
                <IconButton
                  sx={{
                    backgroundColor: "white",
                    color: "#E87E1C",
                    "&:hover": { backgroundColor: "#ffecb3" },
                  }}
                  onClick={prevSlide}
                >
                  <ChevronLeft />
                </IconButton>

                <IconButton
                  sx={{
                    backgroundColor: "white",
                    color: "#E87E1C",
                    "&:hover": { backgroundColor: "#ffecb3" },
                  }}
                  onClick={nextSlide}
                >
                  <ChevronRight />
                </IconButton>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      <Box sx={{ py: 8, backgroundColor: "rgb(255, 255, 255)" }}>
        <Container maxWidth="lg">
          <Box
            sx={{
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              gap: 4,
              alignItems: "center",
            }}
          >
            <Box sx={{ flex: 1 }}>
              <Typography
                variant="h3"
                component="h2"
                sx={{
                  fontWeight: "bold",
                  mb: 3,
                  color: "black",
                  textTransform: "uppercase",
                  
                }}
              >
                <span style={{ color: "red" }}> MEET THE</span> FOUNDER
              </Typography>
              <Typography variant="body1" sx={{ mb: 2 }} color="rgb(84, 84, 84)">
                Nouman Khan has been in the Indian PR industry for a decade. She
                is the Founder and CEO of Column Inches – a PR agency in Delhi
                specializing in Corporate Public Relations. She is a seasoned
                communications professional with expertise in traditional and
                digital media and formulates highly influential PR strategies.
              </Typography>
              <Typography variant="body1" sx={{ mb: 2 }} color="rgb(84, 84, 84)">
                With an in-depth understanding of the industry, the agency under
                Nouman Khan's leadership delivers integrated communications
                programs for clients from across all sectors. Nouman Khan
                started Column Inches with a core proposition of helping
                startups and businesses to establish a distinguished identity in
                the Indian market.
              </Typography>
              <Typography variant="body1" sx={{ mb: 2 }} color="rgb(84, 84, 84)">
                To help clients scale faster, Nouman Khan delivers strategic
                Public Relations, Media Relations, Digital Media Promotion,
                Crisis Communication, Brand Promotion, Startup PR, Event PR,
                Influencer Marketing campaigns.
              </Typography>
              <Typography variant="body1" sx={{ mb: 2 }} color="rgb(84, 84, 84)">
                Nouman Khan has been in the Indian PR industry for a decade. She
                is the Founder and CEO of Column Inches – a PR agency in Delhi
                specializing in Corporate Public Relations. She is a seasoned
                communications professional with expertise in traditional and
                digital media and formulates highly influential PR strategies.
              </Typography>
            </Box>
            <Box
              sx={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 2,
              }}
            >
              <Box
                component="img"
                src={founderImg}
                alt="Nouman Khan"
                sx={{
                  width: "100%",
                  maxWidth: "400px",
                  borderRadius: 2,
                  boxShadow: 3,
                }}
              />
              <Box sx={{ textAlign: "center" }}>
                <Typography variant="h4" sx={{ fontWeight: "bold" ,color:"black"}}>
                  Nouman Khan
                </Typography>
                <Typography
                  variant="subtitle1"
                  sx={{ color: "grey", mb: 1 }}
                >
                  Founder and CEO
                </Typography>
                <Button
                  variant="outlined"
                  size="small"
                  href="https://www.linkedin.com/in/nouman-khan"
                  target="_blank"
                  rel="noopener noreferrer"
                  startIcon={<LinkedIn />}
                  sx={{
                    textTransform: "none",
                    color: "#0077b5",
                    borderColor: "#0077b5",
                    "&:hover": {
                      backgroundColor: "rgba(0, 119, 181, 0.08)",
                      borderColor: "#0077b5",
                    },
                  }}
                >
                  Connect on LinkedIn
                </Button>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
      <CounterSection />
    </Box>
  );
};

export default AboutPage;
