import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import NetflixLogo from "../../assets/image/Netflix_Logo_PMS.png";

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
      <Container fluid>
        <Navbar.Brand href="#">
          <img src={NetflixLogo} width="100" alt="Netflix" />
        </Navbar.Brand>

        <Navbar.Toggle />

        <Navbar.Collapse>
          <Nav className="me-auto">
            <Nav.Link>Home</Nav.Link>
            <Nav.Link>TV Shows</Nav.Link>
            <Nav.Link>Movies</Nav.Link>
            <Nav.Link>Latest</Nav.Link>
            <Nav.Link>My List</Nav.Link>
          </Nav>

          <Nav>
            <Nav.Link><SearchIcon /></Nav.Link>
            <Nav.Link><NotificationsIcon /></Nav.Link>
            <Nav.Link><AccountBoxIcon /></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
