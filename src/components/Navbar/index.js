import React, { useEffect, useState } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
// import NavLink from "../NavAccess";
import { useNavigate, NavLink } from "react-router-dom";
// import {
//   accessCategories,
//   accessTalents,
//   accessEvents,
//   accessParticipants,
//   accessPayments,
//   accessOrders,
// } from "../../const/access";

export default function PNavbar() {
  const navigate = useNavigate();
  const [role, setRole] = useState(null);

  // useEffect(() => {
  //   const fetchData = () => {
  //     let { role } = localStorage.getItem("auth")
  //       ? JSON.parse(localStorage.getItem("auth"))
  //       : {};

  //     setRole(role);
  //   };
  //   fetchData();
  // }, []);

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/signin";
  };

  return (
    <Navbar bg="light" variant="light" className="navbar">
      <Container>
        <Navbar.Brand href="#home">Dashboard</Navbar.Brand>
        <div className="col-2">
          <input
            className="form-control"
            type="text"
            placeholder="Search"
            aria-label="Search"
          />
        </div>
        <Nav className="me-auto">
          <NavDropdown title="KATEGORI" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item>
              <NavLink to="/something" className={"text-decoration-none"}>
                Something
              </NavLink>
            </NavDropdown.Item>
          </NavDropdown>

          <NavDropdown title="TEKNOLOGI" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item>
              <NavLink to="/something" className={"text-decoration-none"}>
                Something
              </NavLink>
            </NavDropdown.Item>
          </NavDropdown>

          <NavDropdown title="EXPLORE" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item>
              <NavLink to="/something" className={"text-decoration-none"}>
                Something
              </NavLink>
            </NavDropdown.Item>
          </NavDropdown>

          <NavDropdown title="PATNERSHIP" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item>
              <NavLink to="/something" className={"text-decoration-none"}>
                Something
              </NavLink>
            </NavDropdown.Item>
          </NavDropdown>

          {/* <NavLink
            role={role}
            roles={accessEvents.lihat}
            action={() => navigate("/events")}
          >
            Events
          </NavLink> */}
        </Nav>
        <Nav className="justify-content-end">
          <Nav.Link onClick={() => handleLogout()}>Logout</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
