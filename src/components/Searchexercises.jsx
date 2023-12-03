import React, { useState } from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";

const Searchexercises = () => {
  const [search, setSearch] = useState(""); // Corrected useState syntax

  // Define your handleSearch function here if needed
  const handleSearch = async () => {
    // Your search logic goes here
    console.log("Searching for:", search);
  };

  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", xs: "30px" } }}
        mb="50px"
        textAlign="center"
      >
        Awesome Exercises You <br /> Should Know
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          sx={{
            input: { fontWeight: "700", border: "none", borderRadius: "4px" },
            width: { lg: "1170px", xs: "350px" },
          }}
          height="45px"
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Search for exercises"
        />
        <Button
          className="search-btn"
          sx={{
            bgcolor: "#FF2625",
            color: "#fff",
            textTransform: "none",
            width: { lg: "173px", xs: "80px" },
            height: "56px",
            position: "absolute",
            right: "0px",
            fontSize: { lg: "20px", xs: "14px" },
          }}
          onClick={handleSearch} // Call your handleSearch function on button click
        >
          Search
        </Button>
      </Box>
    </Stack>
  );
};

export default Searchexercises;
