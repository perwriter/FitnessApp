import { Box } from "@mui/material";
import React from "react";
import HeroBanner from "../components/HeroBanner";
import Searchexercises from "../components/Searchexercises";
import Exercises from "../components/Exercises";

const Home = () => {
  return (
    <Box>
      <HeroBanner />
      <Searchexercises />
      <Exercises />
    </Box>
  );
};

export default Home;
