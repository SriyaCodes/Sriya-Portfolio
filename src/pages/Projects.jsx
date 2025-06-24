import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "./Projects.css";

import PortfolioImg from "../assets/portfolio.png";
import MockInterviewImg from "../assets/mockinterview.png";
import YtDlimg from "../assets/ytdl.png";
import WeatherImg from "../assets/Weather.png";
const projects = [
  {
    id: 1,
    title: "IntelliView (Mock AI Interview)",
    description:
      "An AI-powered web app that simulates coding interviews, evaluates answers, and offers instant feedback. Built with React, Node.js, and Clerk for authentication.",
    imageUrl: MockInterviewImg,
    link: "https://github.com/SriyaCodes/Mock-AI-Interview.git",
  },
  {
    id: 2,
    title: "Personal Portfolio",
    description:
      "A responsive portfolio site built using React and Bootstrap, showcasing skills, projects, and a fully functional contact form.",
    imageUrl: PortfolioImg,
    link: "https://github.com/SriyaCodes/Sriya-Portfolio.git",
  },
  {
    id: 3,
    title: "YouTube Video Downloader",
    description:
      "Download YouTube videos in multiple formats with a simple interface. Features fast downloads and clean design.",
    imageUrl: YtDlimg,
    link: "#",
  },
  {
    id: 4,
    title: "Snake Game",
    description:
      "A classic Snake game built with vanilla JS featuring smooth controls, score tracking, and responsive design for all devices.",
    imageUrl: WeatherImg,
    link: "https://github.com/SriyaCodes/Snake_Game-.git",
  },
];

const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      <Container>
        <h2 className="projects-title text-center mb-5">My Projects</h2>
        <Row className="g-4 justify-content-center">
          {projects.map((project) => (
            <Col
              key={project.id}
              xs={12}
              sm={12}
              md={6}
              lg={5}
              className="d-flex align-items-stretch"
            >
              <Card className="project-card">
                <Card.Img variant="top" src={project.imageUrl} />
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text>{project.description}</Card.Text>
                  <Button
                    variant="primary"
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View on GitHub
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
