import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography, TextField, Button, Divider } from "@mui/material";
import { Email, Phone, LocationOn, ImageOutlined } from "@mui/icons-material";
import {
  handleError,
  handleSuccess,
  handleWarning,
} from "../Components/handleUtils.js";
import LoaderComponent from "./Loader.jsx";
import img from "../Assets/bg4.jpg";

const ContactUs = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const [queries, setqueries] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setqueries((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAddQuery = async (e) => {
    e.preventDefault();
    if (
      !queries.firstName ||
      !queries.lastName ||
      !queries.email ||
      !queries.phone ||
      !queries.message
    ) {
      handleWarning(" All fields are required.");
      return;
    }
    setLoading(true);
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/queries/queriesPost`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstName: queries.firstName,
            lastName: queries.lastName,
            email: queries.email,
            phone: queries.phone,
            message: queries.message,
          }),
        }
      );
      if (response.ok) {
        const data = await response.json();
        handleSuccess("Message Sent Successfully");
        setqueries({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
        });
        setTimeout(() => {
          navigate("/");
        }, 1000);
      } else {
        handleError(" Failed to sent message. Please try again.");
      }
    } catch (error) {
      handleError("Network Error. Please try again. ");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (loading) {
      window.scrollTo(0, 0);
    }
  }, [loading]);

  return (
    <>
      {loading ? (
        <LoaderComponent />
      ) : (
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "#000",
            color: "#fff",
            p: 4,
          }}
        >
          {/* Left Section - Contact Info */}
          <Box sx={{ maxWidth: 400 }}>
            <Typography
              variant="h6"
              sx={{
                color: "red",
                mb: 1,
                fontSize: {xs:"2.5rem",md:"3rem"},
                display: "flex",
                alignItems: "center",
                fontFamily: "'Playfair Display', serif",
              }}
            >
              <Divider
                sx={{
                  width: 70,
                  height: 2,
                  borderColor: "red",
                  mr: 1,
                  display: { md: "block", xs: "none" },
                }}
              />
              CONTACT US
            </Typography>
            <Typography
              variant="h3"
              fontWeight="bold"
              sx={{ mb: 4, fontSize: 35 }}
            >
              Let’s Get in Touch
            </Typography>

            {/* Email */}
            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <Email sx={{ color: "red", mr: 2 }} />
              <Box>
                <Typography fontWeight="bold">Email Address</Typography>
                <Typography>info@firmusvision.com</Typography>
              </Box>
            </Box>

            {/* Phone */}
            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <Phone sx={{ color: "red", mr: 2 }} />
              <Box>
                <Typography fontWeight="bold">Call Us</Typography>
                <Typography>+91 9999999999</Typography>
              </Box>
            </Box>

            {/* Address */}
            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <LocationOn sx={{ color: "red", mr: 2 }} />
              <Box>
                <Typography fontWeight="bold">Address</Typography>
                <Typography>
                  Plot No-D 107, Vyapar Marg, Sector-2, Noida, UP-201301
                </Typography>
              </Box>
            </Box>
          </Box>

          {/* Right Section - Contact Form */}
          <Box
            component="form"
            sx={{
              display: "flex",
              flexDirection: "column",
              width: { xs: "100%", md: "50%" },
              backgroundColor: "#111",
              borderRadius: 2,
              backgroundImage: `url(${img})`,
              backgroundSize: "cover",
            }}
          >
            <Box sx={{backgroundColor:"rgba(0, 0, 0, 0.6)",p:3}}>
            <Typography
              variant="h6"
              sx={{
                mb: 2,
                textAlign: "center",
                color: "red",
                fontSize: 30,
                border: "2px solid red",
              }}
            >
              Send Message
            </Typography>

            <Box sx={{ display: "flex", gap: 2 }}>
              <TextField
                name="firstName"
                value={queries.firstName}
                fullWidth
                variant="outlined"
                label="First Name"
                slotProps={{
                  inputLabel: { style: { color: "#fff" } },
                }}
                sx={{
                  input: { color: "#fff" },
                  fieldset: { borderColor: "#444" },
                }}
                onChange={handleChange}
              />
              <TextField
                name="lastName"
                value={queries.lastName}
                fullWidth
                variant="outlined"
                label="Last Name"
                slotProps={{
                  inputLabel: { style: { color: "#fff" } },
                }}
                sx={{
                  input: { color: "#fff" },
                  fieldset: { borderColor: "#444" },
                }}
                onChange={handleChange}
              />
            </Box>

            <TextField
              name="email"
              value={queries.email}
              type="email"
              fullWidth
              variant="outlined"
              label="Email Address"
              slotProps={{
                inputLabel: { style: { color: "#fff" } },
              }}
              sx={{
                mt: 2,
                input: { color: "white" },
                fieldset: { borderColor: "#444" },
              }}
              onChange={handleChange}
            />

            <TextField
              name="phone"
              value={queries.phone}
              type="number"
              fullWidth
              variant="outlined"
              label="Phone No"
              slotProps={{
                inputLabel: { style: { color: "#fff" } },
              }}
              sx={{
                mt: 2,
                input: { color: "#fff" },
                fieldset: { borderColor: "#444" },
              }}
              onChange={handleChange}
            />

            <TextField
              name="message"
              value={queries.message}
              fullWidth
              variant="outlined"
              label="Message"
              multiline
              rows={4}
              slotProps={{
                inputLabel: { style: { color: "#fff" } },
                input: { style: { color: "#fff" } },
              }}
              sx={{
                mt: 2,
                textarea: { color: "#fff" },
                fieldset: { borderColor: "#444" },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#444",
                  },
                  "&:hover fieldset": {
                    borderColor: "#666",
                  },
                },
              }}
              onChange={handleChange}
            />

            <Button
              fullWidth
              variant="contained"
              sx={{
                mt: 2,
                backgroundColor: "rgb(91, 0, 0)",
                "&:hover": { backgroundColor: "rgb(160, 43, 43)"},
              }}
              onClick={handleAddQuery}
            >
              Send Message
            </Button>
          </Box>
        </Box>
        </Box>
      )}
    </>
  );
};

export default ContactUs;
