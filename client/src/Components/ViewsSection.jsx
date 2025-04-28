import React, { useEffect, useState, useRef } from "react";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

const stats = [
  { number: 12, label: "Award & Recognition" },
  { number: 10, label: "Years of Experience" },
  { number: 115, label: "Happy Clients" },
  { number: 20, label: "Expert Team" },
];

const animationDuration = 2000;

const CounterSection = () => {
  const [counters, setCounters] = useState(stats.map(() => 1));
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          startAnimation();
          setHasAnimated(true);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated]);

  const startAnimation = () => {
    let startTime;

    const animateCounters = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsedTime = timestamp - startTime;
      const progress = Math.min(elapsedTime / animationDuration, 1); 

      setCounters(
        stats.map((stat) => Math.round(1 + (stat.number - 1) * progress))
      );

      if (progress < 1) {
        requestAnimationFrame(animateCounters);
      }
    };

    requestAnimationFrame(animateCounters);
  };

  return (
    <Box
      ref={sectionRef}
      sx={{
        background: "#0b0b0b",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        padding: "3rem 2rem",
        textAlign: "center",
      }}
    >
      {stats.map((stat, index) => (
        <Box
          key={index}
          component={motion.div}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          sx={{
            flex: "1 1 200px",
            margin: "1rem",
          }}
        >
          <Typography variant="h3" color="red" sx={{ fontWeight: "bold" }}>
            {counters[index]}+
          </Typography>
          <Typography variant="body1" color="white" fontWeight={"bold"}>{stat.label}</Typography>
        </Box>
      ))}
    </Box>
  );
};

export default CounterSection;
