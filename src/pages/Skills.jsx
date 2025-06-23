import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaPython,
  FaJava,
  FaGitAlt,
  FaDownload,
  FaCode,
} from "react-icons/fa";

import {
  SiMongodb,
  SiReact,
  SiNodedotjs,
  SiAngular,
  SiJupyter,
} from "react-icons/si";

import { BsDatabaseFillGear } from "react-icons/bs";
import { PiNotebookBold } from "react-icons/pi";
import styles from "./Skills.module.css";

const Skills = () => {
  const skillCategories = [
    {
      category: "Programming Languages",
      skills: [
        { icon: <FaJava style={{ color: "#007396" }} />, title: "Java" },
        { icon: <FaPython style={{ color: "#306998" }} />, title: "Python" },
        { icon: <FaJs style={{ color: "#f7df1e" }} />, title: "JavaScript" },
        { icon: <FaHtml5 style={{ color: "#e34f26" }} />, title: "HTML" },
        { icon: <FaCss3Alt style={{ color: "#1572B6" }} />, title: "CSS" },
        { icon: <PiNotebookBold style={{ color: "#00599C" }} />, title: "C" },
      ],
    },
    {
      category: "Frameworks / Libraries",
      skills: [
        { icon: <SiMongodb style={{ color: "#47A248" }} />, title: "MongoDB" },
        { icon: <SiReact style={{ color: "#61dafb" }} />, title: "ReactJS" },
        { icon: <SiNodedotjs style={{ color: "#339933" }} />, title: "NodeJS" },
        { icon: <SiAngular style={{ color: "#dd0031" }} />, title: "Angular" },
      ],
    },
    {
      category: "Tools & Platforms",
      skills: [
        { icon: <FaDownload style={{ color: "#FF9900" }} />, title: "AWS" },
        { icon: <FaGitAlt style={{ color: "#F1502F" }} />, title: "Git" },
        { icon: <FaCode style={{ color: "#007ACC" }} />, title: "VS Code" },
        { icon: <SiJupyter style={{ color: "#F37726" }} />, title: "Jupyter Notebook" },
      ],
    },
    {
      category: "Academic Coursework",
      skills: [
        { icon: <BsDatabaseFillGear style={{ color: "#003B57" }} />, title: "DBMS" },
        { icon: <PiNotebookBold style={{ color: "#003B57" }} />, title: "OOP" },
        { icon: <PiNotebookBold style={{ color: "#003B57" }} />, title: "OS" },
        { icon: <PiNotebookBold style={{ color: "#003B57" }} />, title: "DSA" },
      ],
    },
  ];

  return (
    <div className={styles.skillsPage}>
      <div className={styles.skillsContainer}>
        {/* Skills Section */}
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>My Skills</h2>
          <div className={styles.titleUnderline}></div>
        </div>

        <div className={styles.categoriesContainer}>
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className={styles.categorySection}>
              <h3 className={styles.categoryTitle}>{category.category}</h3>
              <div className={styles.skillsGrid}>
                {category.skills.map((skill, skillIndex) => (
                  <div className={styles.skillCard} key={skillIndex}>
                    <div className={styles.skillIcon}>{skill.icon}</div>
                    <h4 className={styles.skillTitle}>{skill.title}</h4>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Floating Circles */}
        <div className={styles.floatingElements}>
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className={styles.floatingCircle}></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
