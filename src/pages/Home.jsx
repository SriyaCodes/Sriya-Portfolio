import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { FaLaptopCode } from "react-icons/fa";
import "./Home.css";
import Sriya from "../assets/sriya123.png";

function Home() {
  return (
    <section className="home-section" id="home">
      <Container>

        <Row className="align-items-center flex-column-reverse flex-lg-row">
          <Col lg={6} className="home-image-col d-flex justify-content-center">
            <div className="hero-image-container">
              <img src={Sriya} alt="Sriya" className="profile-photo" />
            </div>
          </Col>

          <Col lg={6} className="home-content">
            <div className="intro-text">
              <span className="greeting">Hello there, I'm</span>
              <h1 className="name-heading">
                <span className="name">Baby Sriya</span>
                
              </h1>
              <h2 className="profession">
  <FaLaptopCode className="react-icon" style={{ fontSize: "1.5rem", marginRight: "8px" }} />
  Web Developer • Programmer • Salesforce Admin
</h2>

  <p className="description">
  I build clean, functional websites with great design. Passionate about frontend, problem-solving, and DSA. Currently expanding my skill set with Salesforce Administration.
</p>
              <div className="cta-buttons">
                <Button as={Link} to="/projects" className="primary-btn">
                  Explore My Work
                </Button>
              </div>
              <div className="social-links">
                <a href="https://github.com/SriyaCodes" target="_blank" rel="noreferrer" aria-label="GitHub"><FiGithub /></a>
                <a href="https://www.linkedin.com/in/sriya-muppidi" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FiLinkedin /></a>
              </div>
            </div>
          </Col>
        </Row>

      </Container>
    </section>
  );
}

export default Home;
