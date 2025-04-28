import React from "react";
import {
  Box,
  Stack,
  Typography,
  Link,
  IconButton,
  Divider,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import {
  Facebook,
  Twitter,
  LinkedIn,
  Phone,
  Email,
  LocationOn,
} from "@mui/icons-material";
import bgImg from "../Assets/bg4.jpg";
import logo from "../Assets/logoFirmus.png";

const Footer = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const currentYear = new Date().getFullYear();

  return (
    <Box
      sx={{
        backgroundImage: `url(${bgImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Box
        sx={{
          backgroundColor: "rgba(0, 0, 0, 0.93)",
          opacity: 0.9,
          color: "white",
          py: 4,
          px: { xs: 2, md: 4 },
        }}
      >
        {/* upper section */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: { xs: "center", md: "flex-start" },
            color: "white",
            gap: { xs: 3, md: 0 },
          }}
        >
          {/* Logo Section */}
          <Box
            sx={{
              height: { md: "100px", xs: "100%" },
              width: { md: "100px", xs: "100%" },
              display: { xs: "flex", md: "unset" },
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                height: { md: "4.4rem", xs: "5rem" },
                width: { md: "16rem", xs: "19rem" },
              }}
            >
              <img
                src={logo}
                alt="FirmusVision"
                style={{ height: "100%", width: "100%" }}
              />
            </Box>
          </Box>

          {/* upper right section */}
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              justifyContent: "space-evenly",
              gap: { xs: 2, sm: 4 },
              width: { xs: "100%", md: "auto" },
            }}
          >
            {/* Email Section */}
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <IconButton
                sx={{
                  color: "red",
                  bgcolor: "white",
                  borderRadius: "50%",
                  width: 40,
                  height: 40,
                  mr: 1,
                  transition: "transform 0.3s ease-in-out",
                  "&:hover": {
                    transform: "scale(1.2)",
                    bgcolor: "white",
                  },
                }}
              >
                <Email />
              </IconButton>
              <Box>
                <Typography variant="h6">Send Email</Typography>
                <Typography variant="body2">nouman@khan.in</Typography>
              </Box>
            </Box>

            {/* Call Section */}
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <IconButton
                sx={{
                  color: "red",
                  bgcolor: "white",
                  borderRadius: "50%",
                  width: 40,
                  height: 40,
                  mr: 1,
                  transition: "transform 0.3s ease-in-out",
                  "&:hover": {
                    transform: "scale(1.2)",
                    bgcolor: "white",
                  },
                }}
              >
                <Phone />
              </IconButton>
              <Box>
                <Typography variant="h6">Call Us</Typography>
                <Typography variant="body2">+91 97177 25231</Typography>
              </Box>
            </Box>

            {/* Location Section */}
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <IconButton
                sx={{
                  color: "red",
                  bgcolor: "white",
                  borderRadius: "50%",
                  width: 40,
                  height: 40,
                  mr: 1,
                  transition: "transform 0.3s ease-in-out",
                  "&:hover": {
                    transform: "scale(1.2)",
                    bgcolor: "white",
                  },
                }}
              >
                <LocationOn />
              </IconButton>
              <Box>
                <Typography variant="h6">Find Us</Typography>
                <Typography variant="body2">
                  {isSmallScreen ? (
                    "Gurugram, Haryana 122002"
                  ) : (
                    <>
                      Ground Floor, MGF Metropolis Mall,
                      <br />
                      Mehrauli-Gurgaon Rd, Gurugram,
                      <br />
                      Haryana 122002
                    </>
                  )}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>

        <Divider
          sx={{
            width: "100%",
            height: 2,
            borderColor: "white",
            my: 3,
          }}
        />

        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={{ xs: 3, md: 0 }}
          justifyContent="space-around"
          alignItems={{ xs: "center", md: "flex-start" }}
          flexWrap="wrap"
        >
          {/* About Us */}
          <Box
            sx={{
              maxWidth: 300,
              px: { xs: 2, md: 0 },
              textAlign: { xs: "center", md: "left" },
            }}
          >
            <Typography
              variant="h6"
              gutterBottom
              sx={{ fontWeight: "bold", color: "red" }}
            >
              About Us
            </Typography>
            <Typography variant="body2" sx={{ fontSize: "1rem" }}>
              Firmus Vision is a full-service PR agency in Delhi, driven by
              women. With deep expertise in media and marketing, we create brand
              value across sectors.
            </Typography>
          </Box>

          {/* Our Services */}
          <Box
            sx={{
              textAlign: { xs: "center", md: "left" },
              px: { xs: 2, md: 0 },
            }}
          >
            <Typography
              variant="h6"
              gutterBottom
              sx={{ fontWeight: "bold", color: "red" }}
            >
              Our Services
            </Typography>
            <Stack spacing={1}>
              <Link
                href="/services"
                sx={{
                  transition: "transform 0.2s ease",
                  display: "inline-block",
                  textDecoration: "none",
                  color: "white",
                  "&:hover": {
                    transform: "translateX(5px)",
                    color: "red",
                    textDecoration: "underline",
                  },
                }}
              >
                <Typography variant="body2">Media Relations</Typography>
              </Link>
              <Link
                href="/services"
                sx={{
                  transition: "transform 0.2s ease",
                  display: "inline-block",
                  textDecoration: "none",
                  color: "white",
                  "&:hover": {
                    transform: "translateX(5px)",
                    color: "red",
                    textDecoration: "underline",
                  },
                }}
              >
                <Typography variant="body2">Content Creation</Typography>
              </Link>
              <Link
                href="/services"
                sx={{
                  transition: "transform 0.2s ease",
                  display: "inline-block",
                  textDecoration: "none",
                  color: "white",
                  "&:hover": {
                    transform: "translateX(5px)",
                    color: "red",
                    textDecoration: "underline",
                  },
                }}
              >
                <Typography variant="body2">Crisis Management</Typography>
              </Link>
              <Link
                href="/services"
                sx={{
                  transition: "transform 0.2s ease",
                  display: "inline-block",
                  textDecoration: "none",
                  color: "white",
                  "&:hover": {
                    transform: "translateX(5px)",
                    color: "red",
                    textDecoration: "underline",
                  },
                }}
              >
                <Typography variant="body2">Event PR</Typography>
              </Link>
              <Link
                href="/services"
                sx={{
                  transition: "transform 0.2s ease",
                  display: "inline-block",
                  textDecoration: "none",
                  color: "white",
                  "&:hover": {
                    transform: "translateX(5px)",
                    color: "red",
                    textDecoration: "underline",
                  },
                }}
              >
                <Typography variant="body2">Digital PR</Typography>
              </Link>
            </Stack>
          </Box>

          {/* Site Links */}
          <Box
            sx={{
              textAlign: { xs: "center", md: "left" },
              px: { xs: 2, md: 0 },
            }}
          >
            <Typography
              variant="h6"
              gutterBottom
              sx={{ fontWeight: "bold", color: "red" }}
            >
              Site Links
            </Typography>
            <Stack spacing={1}>
              <Link
                href="/"
                color="inherit"
                underline="hover"
                sx={{
                  transition: "transform 0.2s ease",
                  display: "inline-block",
                  "&:hover": {
                    transform: "translateX(5px)",
                    color: "red",
                  },
                }}
              >
                Home
              </Link>
              <Link
                href="/about"
                color="inherit"
                underline="hover"
                sx={{
                  transition: "transform 0.2s ease",
                  display: "inline-block",
                  "&:hover": {
                    transform: "translateX(5px)",
                    color: "red",
                  },
                }}
              >
                About Us
              </Link>
              <Link
                href="/clients"
                color="inherit"
                underline="hover"
                sx={{
                  transition: "transform 0.2s ease",
                  display: "inline-block",
                  "&:hover": {
                    transform: "translateX(5px)",
                    color: "red",
                  },
                }}
              >
                Clients
              </Link>
              <Link
                href="/services"
                color="inherit"
                underline="hover"
                sx={{
                  transition: "transform 0.2s ease",
                  display: "inline-block",
                  "&:hover": {
                    transform: "translateX(5px)",
                    color: "red",
                  },
                }}
              >
                Services
              </Link>

              <Link
                href="/contact"
                color="inherit"
                underline="hover"
                sx={{
                  transition: "transform 0.2s ease",
                  display: "inline-block",
                  "&:hover": {
                    transform: "translateX(5px)",
                    color: "red",
                  },
                }}
              >
                Contact Us
              </Link>
            </Stack>
          </Box>

          {/* Follow Us */}
          <Box
            sx={{
              textAlign: { xs: "center", md: "left" },
              px: { xs: 2, md: 0 },
            }}
          >
            <Typography
              variant="h6"
              gutterBottom
              sx={{ fontWeight: "bold", color: "red" }}
            >
              Follow Us
            </Typography>
            <Stack spacing={1}>
              <Typography
                variant="body2"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: { xs: "center", md: "flex-start" },
                }}
              >
                <Phone fontSize="small" sx={{ mr: 1 }} /> +91 97177 25231
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: { xs: "center", md: "flex-start" },
                }}
              >
                <Email fontSize="small" sx={{ mr: 1 }} /> sanya@columninches.in
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: { xs: "center", md: "flex-start" },
                }}
              >
                <LocationOn fontSize="small" sx={{ mr: 1 }} />
                {isSmallScreen
                  ? "Gurugram, Haryana"
                  : "Gurugram, Haryana 122002"}
              </Typography>
            </Stack>

            {/* Social Media Icons */}
            <Stack
              direction="row"
              spacing={1}
              mt={2}
              justifyContent={{ xs: "center", md: "flex-start" }}
            >
              <IconButton
                color="inherit"
                aria-label="Facebook"
                sx={{
                  bgcolor: "rgba(255,255,255,0.1)",
                  width: 40,
                  height: 40,
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.2)",
                    bgcolor: "#3b5998",
                  },
                }}
              >
                <Facebook />
              </IconButton>
              <IconButton
                color="inherit"
                aria-label="Twitter"
                sx={{
                  bgcolor: "rgba(255,255,255,0.1)",
                  width: 40,
                  height: 40,
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.2)",
                    bgcolor: "#1DA1F2",
                  },
                }}
              >
                <Twitter />
              </IconButton>
              <IconButton
                color="inherit"
                aria-label="LinkedIn"
                sx={{
                  bgcolor: "rgba(255,255,255,0.1)",
                  width: 40,
                  height: 40,
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.2)",
                    bgcolor: "#0077B5",
                  },
                }}
              >
                <LinkedIn />
              </IconButton>
            </Stack>
          </Box>
        </Stack>

        <Divider
          sx={{
            width: "100%",
            height: 2,
            borderColor: "white",
            my: 3,
          }}
        />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            mt: 2,
            flexDirection: { md: "row", xs: "column" },
          }}
        >
          <Typography
            variant="body2"
            sx={{
              fontSize: { xs: "0.75rem", sm: "0.875rem" },
            }}
          >
            © Firmus Vision {currentYear}. All Rights Reserved.
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontSize: { xs: "0.75rem", sm: "0.875rem" },
              pt: { xs: 1 },
            }}
          >
            Made with ❤️ by{" "}
            <Link href="http://www.linkedin.com/in/nouman-khan-95923a256" target="_blank" rel="noopener" sx={{textDecoration:"none" , color:"white"}}>
              Nouman Khan
            </Link>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
