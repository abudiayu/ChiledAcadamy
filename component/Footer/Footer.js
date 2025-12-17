import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => (
  <footer className="bg-dark text-secondary py-5">
    <Container>
      <div className="mb-3">
        <FacebookOutlinedIcon />
        <YouTubeIcon />
        <InstagramIcon />
      </div>

      <Row>
        <Col>Audio Description</Col>
        <Col>Help Center</Col>
        <Col>Gift Cards</Col>
        <Col>Media Center</Col>
      </Row>

      <p className="mt-4">© 1997–2024 Netflix, Inc.</p>
    </Container>
  </footer>
);

export default Footer;
