import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function PNavbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/signin";
  };

  return (
    <Navbar bg="light" variant="light" className="navbar">
      <Container>
        <Navbar.Brand href="#home">Dashboard</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link
            className="text-decoration-none"
            onClick={() => navigate("/karyawan")}
          >
            Karyawan
          </Nav.Link>
          <Nav.Link
            className="text-decoration-none"
            onClick={() => navigate("/jabatan")}
          >
            Jabatan
          </Nav.Link>
          <Nav.Link
            className="text-decoration-none"
            onClick={() => navigate("/shift")}
          >
            Shift
          </Nav.Link>
          <Nav.Link
            className="text-decoration-none"
            onClick={() => navigate("/absensi")}
          >
            Absensi
          </Nav.Link>
        </Nav>
        <Nav className="justify-content-end">
          <Nav.Link onClick={() => handleLogout()}>Logout</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
