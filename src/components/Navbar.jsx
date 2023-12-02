import React from "react";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import Logo from "../assets/images/logo.png";

const Navbar = () => {
  return (
    <>
      <Stack>
        <Link to="/">
          <img
            src={Logo}
            alt="Logo"
            style={{ width: "48px", height: "48px", margin: "" }}
          />
        </Link>
      </Stack>
      <Stack direction="row" spacing={2} alignItems="center">
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
    </>
  );
};

export default Navbar;
