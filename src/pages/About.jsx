import React from "react";
import { FaDownload, FaEye, FaEnvelope, FaGraduationCap, FaMapMarkerAlt } from "react-icons/fa";
import { BsFileEarmarkPdf } from "react-icons/bs";
import "./About.css";

const About = () => {
  const handleViewResume = () => {
    window.open("/resume.pdf", "_blank");
  };

  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "Sriya_Resume.pdf";
    link.click();
  };

  return (
    <div className="about-section" id="about">
      {/* Summary + Info + Resume Section */}
      <div className="about-top-grid">
        {/* Summary on the Left */}
        <div className="summary-card">
          <h3 className="card-title">Professional Summary</h3>
          <p className="summary-text">
            I’m <strong>Baby Sriya</strong> — an aspiring web developer with a passion for crafting clean, responsive websites. I love learning new tech, taking on challenges, and creating interactive web apps. I'm always curious and driven by creativity!
          </p>
          <p className="summary-text">
            I'm currently pursuing my B.Tech in Computer Science at GMR Institute of Technology. I’ve completed internships, built multiple projects, and actively improve my skills on platforms like LeetCode and GitHub.
          </p>
        </div>

        <div className="right-column">

          <div className="info-box-glass">
            <p className="info-name">M. Baby Sriya</p>
            <p>
              <FaEnvelope className="icon" /> babysriya1193@gmail.com
            </p>
            <p>
              <FaGraduationCap className="icon" /> B.Tech – Computer Science
            </p>
            <p>
              <FaMapMarkerAlt className="icon" /> Rajam, Andhra Pradesh
            </p>
          </div>

          {/* Resume Card */}
          <div className="resume-card-modern">
            <div className="resume-header">
              <BsFileEarmarkPdf className="resume-icon" />
              <h4>My Resume</h4>
            </div>
            <p className="resume-description-modern">
              Download or view my resume containing all my qualifications,
              skills, experience, and projects.
            </p>
            <div className="resume-buttons">
              <button className="resume-btn view" onClick={handleViewResume}>
                <FaEye /> View Resume
              </button>
              <button className="resume-btn download" onClick={handleDownloadResume}>
                <FaDownload /> Download PDF
              </button>
            </div>
          </div>
        </div>
      </div>


      <div className="timeline-section">
        <h3 className="section-subtitle shimmer-text">My Journey</h3>
        <div className="timeline">
          {/* Internship */}
          <div className="timeline-item">
            <div className="timeline-icon">💼</div>
            <div className="timeline-content">
              <h4 className="timeline-title">Cloud Computing Intern</h4>
              <p className="timeline-institution">Hashtek Solutions</p>
              <p className="timeline-duration">May 2024 – July 2024</p>
              <p className="timeline-description">
                Worked on launching and managing cloud servers using AWS. Hands-on experience with EC2, S3, IAM, and CI/CD deployment workflows.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-icon">🎓</div>
            <div className="timeline-content">
              <h4 className="timeline-title">Bachelor of Technology</h4>
              <p className="timeline-institution">GMR Institute of Technology</p>
              <p className="timeline-duration">2022 – 2026</p>
              <p className="timeline-description">Computer Science and Engineering – CGPA: 9.18</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-icon">🏫</div>
            <div className="timeline-content">
              <h4 className="timeline-title">Intermediate Education</h4>
              <p className="timeline-institution">Sri Chaitanya Junior College</p>
              <p className="timeline-duration">2020 – 2022</p>
              <p className="timeline-description">MPC Stream – Scored 94.6%</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-icon">📘</div>
            <div className="timeline-content">
              <h4 className="timeline-title">Secondary Education</h4>
              <p className="timeline-institution">Sri Chaitanya School</p>
              <p className="timeline-duration">Completed 2020</p>
              <p className="timeline-description">Scored 98%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
