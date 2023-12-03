import React from "react";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import Logo from "../assets/images/logo.png";

const Navbar = () => {
  return (
    <>
      <Stack
        direction="row"
        spacing={8}
        alignItems="center"
        justifyContent="none"
        px="20px"
        sx={{
          gap: { sm: "122px", xs: "40px" },
          mt: { sm: "32px", xs: "20px" },
        }}
      >
        <Link to="/">
          <img
            src={Logo}
            alt="Logo"
            style={{ width: "48px", height: "48px", margin: "" }}
          />
        </Link>
        <Stack direction="row" spacing={4} alignItems="center">
          <Link
            to="/"
            style={{
              textDecoration: "none",
              color: "#3a1212",
              borderBottom: "2px solid #ff2625",
            }}
          >
            Home
          </Link>
          <a
            href="#exercises"
            style={{ textDecoration: "none", color: "#3a1212" }}
          >
            Exercises
          </a>
        </Stack>
      </Stack>
    </>
  );
};

export default Navbar;
