import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import React from "react";
import "./App.css";

function Header() {
  return (
    <Navbar bg="success" className="nav_bar" data-bs-theme="dark">
      <Container style={{ justifyContent: "space-evenly" }}>
        <div style={{ marginLeft: "5px" }}>
          <div>
            <Navbar.Brand
              href="/"
              style={{
                fontSize: "xxx-large",
                fontFamily: "fantasy",
                marginLeft: "450px",
              }}
            >
              Potato disease
            </Navbar.Brand>
          </div>
        </div>
        <div
          style={{
            flex: "1",
          }}
        ></div>
      </Container>
      <div style={{ flex: "1" }}></div>
    </Navbar>
  );
}

export default Header;
