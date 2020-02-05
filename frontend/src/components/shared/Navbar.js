import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

let Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
`;

let RightNavList = styled.div`
  display: flex;
  align-items: center;
  a:not(:last-of-type) {
    margin-right: 1rem;
  }
`;

let linkStyles = {
  fontSize: "12px",
  textTransform: "uppercase",
  fontWeight: "bold",
  color: "#232323",
  textDecoration: "none"
};

function Navbar() {
  return (
    <Nav>
      <Link to="/" style={linkStyles}>
        SimpleTicket
      </Link>
      <RightNavList>
        <Link to="/settings" style={linkStyles}>
          Settings
        </Link>
        <Link to="/events" style={linkStyles}>
          Events
        </Link>
        <Link to="/logout" style={linkStyles}>
          Logout
        </Link>
      </RightNavList>
    </Nav>
  );
}

export default Navbar;
