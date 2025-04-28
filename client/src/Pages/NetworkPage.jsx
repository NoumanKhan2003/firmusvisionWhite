import React, { useState, useRef, useEffect } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Box,
  TextField,
  Typography,
  Button,
  InputAdornment,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import NetworkData from "../Assets/NetworkData.js";
import northimg from "../Assets/bg5.jpg";
import southimg from "../Assets/bg6.jpg";
import eastimg from "../Assets/bg7.jpg";
import westimg from "../Assets/bg8.jpg";
import indiaMap from "../Assets/img7.png";

// Background images for each region
const regionBackgrounds = {
  North: northimg,
  South: southimg,
  East: eastimg,
  West: westimg,
};

const NetworkCoverage = () => {
  const [expanded, setExpanded] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [notFound, setNotFound] = useState(false);
  const [foundMessage, setFoundMessage] = useState("");
  const [highlightedCity, setHighlightedCity] = useState("");
  const [highlightedState, setHighlightedState] = useState("");

  const sectionRefs = useRef({});

  const handleToggle = (state) => {
    setExpanded(expanded === state ? null : state);
  };

  const handleSearch = () => {
    let found = false;
    const query = searchQuery.toLowerCase().trim();

    Object.entries(NetworkData).forEach(([region, states]) => {
      Object.entries(states).forEach(([state, cities]) => {
        if (state.toLowerCase() === query) {
          // If state matches
          setExpanded(state);
          setFoundMessage(`The state (${state}) is serviceable ✅`);
          setHighlightedState(state);
          found = true;

          setTimeout(() => {
            sectionRefs.current[state]?.scrollIntoView({
              behavior: "smooth",
              block: "center",
            });
          }, 300);
        } else {
          // If city matches
          const matchedCity = cities.find(
            (city) => city.toLowerCase() === query
          );
          if (matchedCity) {
            setExpanded(state);
            setFoundMessage(`The city (${matchedCity}) is serviceable ✅`);
            setHighlightedCity(matchedCity);
            found = true;

            setTimeout(() => {
              sectionRefs.current[state]?.scrollIntoView({
                behavior: "smooth",
                block: "center",
              });
            }, 300);
          }
        }
      });
    });

    if (!found) {
      setFoundMessage("");
      setHighlightedCity("");
    }
    setNotFound(!found);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  useEffect(() => {
    if (highlightedCity) {
      const timer = setTimeout(() => {
        setHighlightedCity("");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [highlightedCity]);

  useEffect(() => {
    if (highlightedState) {
      const timer = setTimeout(() => {
        setHighlightedState("");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [highlightedState]);

  return (
    <Box
      sx={{
        padding: "30px",
        backgroundColor: "#0d0d0d",
        color: "#f0f0f0",
        minHeight: "100vh",
      }}
    >
      {/* Title */}
      <Typography
        variant="h3"
        align="center"
        gutterBottom
        sx={{
          marginTop: "8px",
          fontWeight: "bold",
          fontSize: "3rem",
          fontFamily: "'Playfair Display', serif",
          color: "#fff",
        }}
      >
        Our Nationwide <span style={{ color: "red" }}>Network</span>
      </Typography>

      {/* Search Bar */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "8px",
          marginBottom: "20px",
        }}
      >
        <TextField
          variant="outlined"
          placeholder="Search for a city..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          sx={{
            input: {
              color: "#fff",
              backgroundColor: "#121212",
            },
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "#555",
              },
              "&:hover fieldset": {
                borderColor: "#888",
              },
              "&.Mui-focused fieldset": {
                borderColor: "#aaa",
              },
            },
            "& input::placeholder": {
              color: "#bbb",
              opacity: 1,
            },
            width: "90%",
            borderRadius: "5px",
            "@media (min-width:600px)": {
              width: "60%",
            },
            "@media (min-width:900px)": {
              width: "40%",
            },
          }}
        />
        <Button
          variant="contained"
          onClick={handleSearch}
          sx={{
            minWidth: "40px",
            height: "56px",
            backgroundColor: "#222",
            "&:hover": {
              backgroundColor: "#444",
            },
          }}
        >
          <SearchIcon sx={{ color: "#fff" }} />
        </Button>
      </Box>

      {/* Feedback Messages */}
      {foundMessage && (
        <Typography align="center" color="lightgreen" sx={{ mb: 2 }}>
          {foundMessage}
        </Typography>
      )}
      {notFound && (
        <Typography align="center" color="red" sx={{ mb: 2 }}>
          This City/State is Not Serviceable ❌
        </Typography>
      )}

      {/* map section  */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          py: "2rem",
          maxWidth: { md: "70%", xs: "100%" },
          margin: "auto",
        }}
      >
        <img
          src={indiaMap}
          alt="India Map"
          style={{ height: "100%", width: "100%" }}
        />
      </Box>

      {/* Region Sections */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
          gap: "20px",
        }}
      >
        {Object.entries(NetworkData).map(([region, states]) => (
          <Box
            key={region}
            sx={{
              position: "relative",
              borderRadius: "10px",
              overflow: "hidden",
              minHeight: "250px",
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${regionBackgrounds[region]})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              padding: "30px",
              color: "#fff",
            }}
          >
            <Typography
              variant="h5"
              align="center"
              gutterBottom
              sx={{ color: "white", fontWeight: "bold" }}
            >
              {region} Region
            </Typography>

            {Object.entries(states).map(([state, cities]) => (
              <Box
                key={state}
                sx={{ marginBottom: "10px" }}
                ref={(el) => (sectionRefs.current[state] = el)}
              >
                <Box
                  onClick={() => handleToggle(state)}
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    cursor: "pointer",
                    padding: "12px",
                    backgroundColor: "rgba(79, 79, 79, 0.45)",
                    borderRadius: "8px",
                    fontWeight: "bold",
                  }}
                >
                  <Typography
                    sx={{
                      fontWeight:
                        state === highlightedState ? "bold" : "normal",
                      color: state === highlightedState ? "yellow" : "inherit",
                    }}
                  >
                    {state}
                  </Typography>

                  <ExpandMoreIcon
                    sx={{
                      transform:
                        expanded === state ? "rotate(180deg)" : "rotate(0deg)",
                      transition: "transform 0.3s ease",
                    }}
                  />
                </Box>

                {expanded === state && (
                  <Box
                    component="ul"
                    sx={{
                      listStyle: "none",
                      padding: "10px",
                      backgroundColor: "rgba(63, 63, 63, 0.28)",
                      borderRadius: "4px",
                      marginTop: "5px",
                    }}
                  >
                    {cities.map((city) => (
                      <Typography
                        component="li"
                        key={city}
                        sx={{
                          padding: "5px 0",
                          fontWeight:
                            city === highlightedCity ? "bold" : "normal",
                          color:
                            city === highlightedCity ? "yellow" : "inherit",
                          backgroundColor: "transparent",
                          borderRadius: "4px",
                          transition: "all 0.3s ease",
                        }}
                      >
                        {city}
                      </Typography>
                    ))}
                  </Box>
                )}
              </Box>
            ))}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default NetworkCoverage;
