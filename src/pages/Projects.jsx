
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "./Projects.css";

import PortfolioImg from "../assets/portfolio.png";
import MockInterviewImg from "../assets/mockinterview.png";
import JobSearchImg from "../assets/jobsearch.png";
import WeatherImg from "../assets/weather.png";
import QuizImg from "../assets/QuizVerse.png";
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
    title: "Jobby – Your Career Companion",
    description:
      "Jobby is a responsive job search platform that allows users to explore job opportunities from top companies.It features filter-based searching, company ratings and job descriptions",
    imageUrl: JobSearchImg,
    link: "https://github.com/SriyaCodes/Job-Portal-Full-Stack.git",
  },
  {
    id: 4,
    title: "QuizVerse",
    description:
      "QuizVerse is a customizable quiz application built with React.It allows users to play quizzes based on categories, difficulty, and question count.",
    imageUrl: QuizImg,
    link: "https://github.com/SriyaCodes/QuizVerse.git",
  },
   {
    id: 5,
    title: "Find Weather App",
    description:
      "Find Weather App is a responsive web application that provides real-time weather updates for any city.It displays temperature, weather description, and icon",
    imageUrl: WeatherImg,
    link: "https://github.com/SriyaCodes/WeatherFInd.git"
  }
  
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
