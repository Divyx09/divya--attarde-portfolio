import React, { useEffect, useState } from "react";
import "../styles/Portfolio.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
} from "chart.js";
import { Pie } from "react-chartjs-2";
import {
  faGraduationCap,
  faBriefcase,
  faCode,
  faLaptopCode,
  faCogs,
  faBrain,
  faProjectDiagram,
  faMedal,
  faChevronRight,
  faEnvelope,
  faMapMarker,
  faPaperPlane,
  faArrowDown,
  faArrowUp,
  faCloud,
  faDatabase,
  faServer,
  faTools,
} from "@fortawesome/free-solid-svg-icons";
import {
  faReact,
  faJava,
  faPython,
  faGithub,
  faBootstrap,
  faHtml5,
  faCss3,
  faJs,
  faSass,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import resume from "../assets/Divya_Attarde_Resume.pdf";
import axios from "axios";
import { projects } from "./projects";

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale);

const Portfolio = () => {
  // Education data for Chart.js pie chart
  const educationChartData = {
    labels: [
      "B.Tech CSE (2023-2026)",
      "Diploma CS (2020-2023)",
      "10th Standard (2019-2020)",
    ],
    datasets: [
      {
        data: [42.9, 42.9, 14.2], // Updated percentages: B.Tech 3 years, Diploma 3 years, 10th 1 year out of 7 total
        backgroundColor: [
          "#64b5f6", // B.Tech - Blue
          "#4caf50", // Diploma - Green
          "#9c27b0", // 10th - Purple
        ],
        borderColor: ["#2196f3", "#2e7d32", "#6a1b9a"],
        borderWidth: 2,
        hoverBackgroundColor: ["#90caf9", "#66bb6a", "#ba68c8"],
        hoverBorderColor: "#ffffff",
        hoverBorderWidth: 3,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          color: "#ffffff",
          font: {
            size: 12,
            family: "'Poppins', sans-serif",
          },
          padding: 15,
          usePointStyle: true,
          pointStyle: "circle",
          boxWidth: 12,
          boxHeight: 12,
        },
      },
      tooltip: {
        backgroundColor: "rgba(12, 18, 32, 0.95)",
        titleColor: "#64b5f6",
        bodyColor: "#ffffff",
        borderColor: "#64b5f6",
        borderWidth: 1,
        cornerRadius: 10,
        displayColors: true,
        titleFont: {
          size: 14,
          weight: "bold",
        },
        bodyFont: {
          size: 12,
        },
        callbacks: {
          label: function (context) {
            const educationDetails = [
              {
                institution: "Sri Aurobindo Institute Of Technology (RGPV)",
                grade: "CGPA: 7.2/10",
                description: "Computer Science & Engineering",
              },
              {
                institution: "Ujjain Polytechnic College (RGPV)",
                grade: "Percentage: 78.8%",
                description: "Computer Science Engineering",
              },
              {
                institution: "Christu Jyoti Convent School",
                grade: "Percentage: 73.8%",
                description: "Science & Mathematics",
              },
            ];

            const detail = educationDetails[context.dataIndex];
            return [
              `Institution: ${detail.institution}`,
              `Grade: ${detail.grade}`,
              `Field: ${detail.description}`,
              `Duration: ${context.parsed.toFixed(1)}% of total education`,
            ];
          },
        },
      },
    },
    elements: {
      arc: {
        borderWidth: 2,
      },
    },
    animation: {
      animateScale: true,
      animateRotate: true,
      duration: 2000,
    },
  };

  const skills = {
    frontend: [
      { name: "React", icon: faReact },
      { name: "Next.js", icon: faReact },
      { name: "React Native", icon: faReact },
      { name: "Redux", icon: faCode },
      { name: "TypeScript", icon: faJs },
      { name: "JavaScript", icon: faJs },
      { name: "HTML", icon: faHtml5 },
      { name: "CSS", icon: faCss3 },
      { name: "SCSS", icon: faSass },
      { name: "Tailwind CSS", icon: faCss3 },
      { name: "Bootstrap", icon: faBootstrap },
    ],
    backend: [
      { name: "Java", icon: faJava },
      { name: "Spring Boot", icon: faCode },
      { name: "Node.js", icon: faCode },
      { name: "Python", icon: faPython },
      { name: "Django", icon: faCode },
      { name: "REST APIs", icon: faCode },
    ],
    database: [
      { name: "MySQL", icon: faCode },
      { name: "MongoDB", icon: faCode },
      { name: "PostgreSQL", icon: faCode },
    ],
    cloud: [
      { name: "Azure", icon: faCloud },
      { name: "Google Cloud Platform", icon: faCloud },
      { name: "AWS", icon: faCloud },
    ],
    tools: [
      { name: "Git", icon: faGithub },
      { name: "GitHub", icon: faGithub },
      { name: "VS Code", icon: faCode },
      { name: "Postman", icon: faCode },
      { name: "Docker", icon: faCode },
    ],
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    description: "",
  });

  const [seeMoreProjects, setSeeMoreProjects] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        "https://divya-portfolio-backend-d0a9hkbfh3dagzf9.centralindia-01.azurewebsites.net/api/details",
        formData
      )
      .then((res) => {
        setFormData({
          name: "",
          email: "",
          subject: "",
          description: "",
        });
      });
  };

  useEffect(() => {
    const sections = document.querySelectorAll(".section");
    sections.forEach((section, index) => {
      section.style.setProperty("--animation-order", index);
    });
  }, []);

  return (
    <section className="portfolio-section" id="portfolio">
      <div className="container">
        <div className="about-me-section" id="about">
          <div className="about-hero">
            <div className="about-hero-content" data-aos="fade-up">
              <div className="hero-badge">
                <FontAwesomeIcon icon={faCode} />
                <span>Software Developer</span>
              </div>

              <h2 className="about-hero-title">About Me</h2>

              <p className="about-hero-description">
                Hi, I’m Divya Attarde, a passionate Full-Stack Developer from
                Ujjain, Madhya Pradesh, currently in my final year of B.Tech in
                Computer Science and Engineering. I specialize in React.js,
                Redux, Java Spring Boot, REST APIs, and cloud platforms, with a
                strong focus on building scalable and user-centric solutions.
                <br />
                Over the years, I have worked on more than 70 projects, several
                of which are deployed live, including CraftAura.in, an
                e-commerce platform. My professional journey began with
                internships where I contributed to live projects such as
                datacode.in and client-driven modules.
                <br /> At present, I am working as a Junior Software Developer
                at test.co, where I design seamless user interfaces, revamp
                websites from scratch, and develop Android applications. I also
                had the opportunity to represent my college at a National Level
                Hackathon, where my team secured second position.
              </p>

              <div className="about-actions-section">
                <a href={resume} className="download-resume-btn" download>
                  <FontAwesomeIcon icon={faArrowDown} />
                  <span>Download Resume</span>
                </a>
              </div>

              <div className="about-hero-tags">
                <span className="tech-tag">React.js</span>
                <span className="tech-tag">Spring Boot</span>
                <span className="tech-tag">Node Js</span>
                <span className="tech-tag">Full-Stack</span>
              </div>
            </div>

            <div
              className="about-hero-visual d-none d-lg-flex"
              data-aos="fade-left"
            >
              <div className="floating-card card-1">
                <FontAwesomeIcon icon={faLaptopCode} />
                <span>Frontend</span>
              </div>
              <div className="floating-card card-2">
                <FontAwesomeIcon icon={faCogs} />
                <span>Backend</span>
              </div>
              <div className="floating-card card-3">
                <FontAwesomeIcon icon={faCloud} />
                <span>Cloud Computing</span>
              </div>
              <div className="floating-card card-4">
                <FontAwesomeIcon icon={faProjectDiagram} />
                <span>Architecture</span>
              </div>

              <div className="central-avatar">
                <div className="avatar-ring"></div>
                <div className="avatar-content">
                  <FontAwesomeIcon icon={faCode} />
                </div>
              </div>
            </div>
          </div>

          {/* <div className="about-details">
            <div className="detail-card experience-card" data-aos="fade-right">
              <div className="card-icon">
                <FontAwesomeIcon icon={faBriefcase} />
              </div>
              <div className="card-content">
                <h3>Experience</h3>
                <p>
                  2+ years building scalable web applications and collaborating
                  in Agile teams
                </p>
                <div className="card-stats">
                  <span>20+ Projects</span>
                  <span>15+ Technologies</span>
                </div>
              </div>
            </div>

            <div className="detail-card passion-card" data-aos="fade-up">
              <div className="card-icon">
                <FontAwesomeIcon icon={faMedal} />
              </div>
              <div className="card-content">
                <h3>Passion</h3>
                <p>
                  Delivering real-world solutions that exceed client
                  expectations
                </p>
                <div className="card-stats">
                  <span>Quality Code</span>
                  <span>User Experience</span>
                </div>
              </div>
            </div>

            <div className="detail-card contact-card" data-aos="fade-left">
              <div className="card-icon">
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
              <div className="card-content">
                <h3>Let's Connect</h3>
                <p>Ready to collaborate on your next project</p>
                <div className="card-actions">
                  <a href={resume} className="action-btn primary" download>
                    <FontAwesomeIcon icon={faArrowDown} />
                    Download CV
                  </a>
                  <div className="social-mini">
                    <a
                      href="https://github.com/divyx09"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon icon={faGithub} />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/divya-attarde-634650253"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    <a href="mailto:divyaattarde94@gmail.com">
                      <FontAwesomeIcon icon={faEnvelope} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>

        <div className="education-section">
          <div className="section" data-aos="fade-up" data-aos-duration="1000">
            <div className="section-header">
              <FontAwesomeIcon
                icon={faGraduationCap}
                className="section-icon"
              />
              <h3>EDUCATION JOURNEY</h3>
              <p className="section-subtitle">
                Academic Timeline & Achievements
              </p>
            </div>

            <div className="education-pie-container">
              <div
                className="pie-chart-wrapper"
                data-aos="zoom-in"
                data-aos-delay="200"
              >
                <div className="chart-container">
                  <Pie data={educationChartData} options={chartOptions} />
                </div>
                <span
                  className="info-note"
                  title="Hover over the chart segments to see detailed information about each education level"
                >
                  <FontAwesomeIcon icon={faArrowUp} className="info-icon" />
                  Hover to view details
                </span>
              </div>

              {/* Education Stats */}
              <div
                className="education-stats"
                data-aos="fade-left"
                data-aos-delay="600"
              >
                <div className="stats-header">
                  <h4>Education Statistics</h4>
                  <p>Academic Performance Overview</p>
                </div>
                <div className="stats-grid">
                  <div className="stat-card">
                    <div className="stat-icon">
                      <FontAwesomeIcon icon={faChevronRight} />
                    </div>
                    <div className="stat-number">7</div>
                    <div className="stat-label">Total Years</div>
                  </div>
                  <div className="stat-card">
                    <div className="stat-icon">
                      <FontAwesomeIcon icon={faMedal} />
                    </div>
                    <div className="stat-number">3</div>
                    <div className="stat-label">Qualifications</div>
                  </div>
                  <div className="stat-card">
                    <div className="stat-icon">
                      <FontAwesomeIcon icon={faArrowUp} />
                    </div>
                    <div className="stat-number">85.2%</div>
                    <div className="stat-label">Highest Score</div>
                  </div>
                  <div className="stat-card">
                    <div className="stat-icon">
                      <FontAwesomeIcon icon={faGraduationCap} />
                    </div>
                    <div className="stat-number">7.2</div>
                    <div className="stat-label">Current CGPA</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="skills-section">
          <div
            className="section"
            id="skills"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className="section-header">
              <FontAwesomeIcon icon={faCogs} className="section-icon" />
              <h3>SKILLS</h3>
            </div>

            {/* Frontend Skills */}
            <div>
              <h4>
                <FontAwesomeIcon
                  icon={faLaptopCode}
                  className="skill-category-icon"
                />
                Frontend Development
              </h4>
              <div className="skills-container">
                {skills.frontend.map((skill, index) => (
                  <span key={index} className="skill-tag" data-aos="zoom-in">
                    <FontAwesomeIcon icon={skill.icon} className="skill-icon" />
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>

            {/* Backend Skills */}
            <div style={{ marginTop: "20px" }}>
              <h4>
                <FontAwesomeIcon
                  icon={faServer}
                  className="skill-category-icon"
                />
                Backend Development
              </h4>
              <div className="skills-container">
                {skills.backend.map((skill, index) => (
                  <span key={index} className="skill-tag" data-aos="zoom-in">
                    <FontAwesomeIcon icon={skill.icon} className="skill-icon" />
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>

            {/* Database Skills */}
            <div style={{ marginTop: "20px" }}>
              <h4>
                <FontAwesomeIcon
                  icon={faDatabase}
                  className="skill-category-icon"
                />
                Database Management
              </h4>
              <div className="skills-container">
                {skills.database.map((skill, index) => (
                  <span key={index} className="skill-tag" data-aos="zoom-in">
                    <FontAwesomeIcon icon={skill.icon} className="skill-icon" />
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>

            {/* Cloud Skills */}
            <div style={{ marginTop: "20px" }}>
              <h4>
                <FontAwesomeIcon
                  icon={faCloud}
                  className="skill-category-icon"
                />
                Cloud Platforms
              </h4>
              <div className="skills-container">
                {skills.cloud.map((skill, index) => (
                  <span key={index} className="skill-tag" data-aos="zoom-in">
                    <FontAwesomeIcon icon={skill.icon} className="skill-icon" />
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>

            {/* Tools Skills */}
            <div style={{ marginTop: "20px" }}>
              <h4>
                <FontAwesomeIcon
                  icon={faTools}
                  className="skill-category-icon"
                />
                Development Tools
              </h4>
              <div className="skills-container">
                {skills.tools.map((skill, index) => (
                  <span key={index} className="skill-tag" data-aos="zoom-in">
                    <FontAwesomeIcon icon={skill.icon} className="skill-icon" />
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div
            className="section"
            id="experience"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className="section-header">
              <FontAwesomeIcon icon={faBriefcase} className="section-icon" />
              <h3>EXPERIENCE</h3>
            </div>
            <div
              className="experience-item"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <div className="exp-header">
                <h4>
                  <FontAwesomeIcon icon={faCode} className="item-icon" />
                  Junior Software Developer
                </h4>
                <span>Feb 2025 - Present</span>
              </div>
              <p className="company">Tea.co - Remote (Hyderabad based)</p>
              <ul>
                <li data-aos="fade-up" data-aos-delay="150">
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="list-icon"
                  />
                  Developed production-ready web tools including pHext.com,
                  redirectchecker.com, and SEO diagnostics utilities.
                </li>
                <li data-aos="fade-up" data-aos-delay="200">
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="list-icon"
                  />
                  Revamped a legacy administration infrastructure, boosting page
                  load speed, improving user experience, and optimizing
                  Lighthouse scores.
                </li>
              </ul>
            </div>

            <div
              className="experience-item"
              data-aos="fade-right"
              data-aos-delay="200"
            >
              <div className="exp-header">
                <h4>
                  <FontAwesomeIcon icon={faCode} className="item-icon" />
                  React.js Developer Intern
                </h4>
                <span>Mar 2024 - Feb 2025</span>
              </div>
              <p className="company">DATACODE.IN, Indore, MP</p>
              <ul>
                <li data-aos="fade-up" data-aos-delay="150">
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="list-icon"
                  />
                  Built and optimized reusable React.js components and
                  streamlined API workflows, reducing code redundancy across
                  projects.
                </li>
                <li data-aos="fade-up" data-aos-delay="200">
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="list-icon"
                  />
                  Delivered a major client project 2 weeks ahead of schedule by
                  coordinating in Agile sprints, improving client satisfaction.
                </li>
                <li data-aos="fade-up" data-aos-delay="300">
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="list-icon"
                  />
                  Created an <strong>Admin Panel</strong> to manage various
                  events, including meetup registrations, event scheduling, and
                  user management.
                </li>
              </ul>
            </div>

            <div
              className="experience-item"
              data-aos="fade-right"
              data-aos-delay="200"
            >
              <div className="exp-header">
                <h4>
                  <FontAwesomeIcon icon={faJava} className="item-icon" />
                  Java Internship
                </h4>
                <span>Mar 2024 - Apr 2024</span>
              </div>
              <p className="company">Ypsilon IT Solutions, Indore, MP</p>
              <ul>
                <li data-aos="fade-up" data-aos-delay="250">
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="list-icon"
                  />
                  Worked on Java projects focusing on core and advanced
                  concepts.
                </li>
                <li data-aos="fade-up" data-aos-delay="300">
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="list-icon"
                  />
                  Assisted in debugging and optimizing Java-based applications.
                </li>
                <li data-aos="fade-up" data-aos-delay="300">
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="list-icon"
                  />
                  Collaborated with the team to implement features and resolve
                  technical challenges.
                </li>
                <li data-aos="fade-up" data-aos-delay="300">
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="list-icon"
                  />
                  Gained hands-on experience in software development practices.
                </li>
              </ul>
            </div>
            <div
              className="experience-item"
              data-aos="fade-right"
              data-aos-delay="200"
            >
              <div className="exp-header">
                <h4>
                  <FontAwesomeIcon icon={faJava} className="item-icon" />
                  Java Training
                </h4>
                <span>Aug 2023 - Oct 2023</span>
              </div>
              <p className="company">Beasent Technologies, Bengaluru, KA</p>
              <ul>
                <li data-aos="fade-up" data-aos-delay="250">
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="list-icon"
                  />
                  Enhanced Java development skills by 90% through practical
                  training and projects
                </li>
                <li data-aos="fade-up" data-aos-delay="300">
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="list-icon"
                  />
                  Led IT initiatives improving company operational efficiency by
                  100%
                </li>
              </ul>
            </div>
          </div>

          <div
            className="section"
            data-aos="fade-up"
            data-aos-duration="1000"
            id="projects"
          >
            <div className="section-header">
              <FontAwesomeIcon
                icon={faProjectDiagram}
                className="section-icon"
              />
              <h3>PROJECTS</h3>
            </div>
            {projects
              .slice(0, seeMoreProjects ? 8 : 3)
              .map((project, index) => (
                <div
                  key={index}
                  className="project-item"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <h4>
                    <FontAwesomeIcon icon={faCode} className="item-icon" />
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {project.title}
                    </a>
                  </h4>
                  <p>{project.description}</p>
                  <div className="project-languages">
                    {project.languages &&
                      project.languages.map((lang, i) => (
                        <span key={i} className="language-tag">
                          {lang}
                        </span>
                      ))}
                  </div>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="view-code-btn d-none d-md-block"
                  >
                    <FontAwesomeIcon icon={faGithub} /> View Code
                  </a>
                </div>
              ))}
            <div className=" d-flex justify-content-end  mt-2">
              <span
                className="nav-link"
                onClick={() => {
                  setSeeMoreProjects(!seeMoreProjects);
                }}
              >
                {seeMoreProjects ? (
                  <span className="d-flex align-items-center">
                    <FontAwesomeIcon icon={faArrowUp} className="mx-2" />
                    See Less Projects
                  </span>
                ) : (
                  <span className="d-flex align-items-center">
                    <FontAwesomeIcon icon={faArrowDown} className="mx-2" /> See
                    More Projects
                  </span>
                )}
              </span>
            </div>
          </div>

          <div className="section" data-aos="fade-up" data-aos-duration="1000">
            <div className="section-header">
              <FontAwesomeIcon icon={faMedal} className="section-icon" />
              <h3>CERTIFICATIONS</h3>
            </div>
            <div className="certifications-grid">
              <div
                className="certification-item"
                data-aos="fade-right"
                data-aos-delay="100"
              >
                <h4>
                  <FontAwesomeIcon icon={faCode} className="item-icon" />
                  Google Cloud Skills Boost - Cloud Fundamentals
                </h4>
                <p className="cert-provider">Google Cloud</p>
                <span>
                  Earned multiple certifications and badges covering cloud
                  computing fundamentals, infrastructure, and services.
                </span>
              </div>

              <div
                className="certification-item"
                data-aos="fade-right"
                data-aos-delay="150"
              >
                <h4>
                  <FontAwesomeIcon icon={faGithub} className="item-icon" />
                  GitHub Foundation
                </h4>
                <p className="cert-provider">GitHub</p>
                <span>
                  Version control, collaboration workflows, and open source
                  development practices.
                </span>
              </div>

              <div
                className="certification-item"
                data-aos="fade-right"
                data-aos-delay="200"
              >
                <h4>
                  <FontAwesomeIcon icon={faCode} className="item-icon" />
                  Linux Operating Systems
                </h4>
                <p className="cert-provider">Red Hat Academy</p>
                <span>
                  System administration, command line operations, and Linux
                  environment management.
                </span>
              </div>

              <div
                className="certification-item"
                data-aos="fade-right"
                data-aos-delay="250"
              >
                <h4>
                  <FontAwesomeIcon icon={faJava} className="item-icon" />
                  Core Java Training
                </h4>
                <p className="cert-provider">Besant Technologies</p>
                <span>
                  Object-oriented programming, data structures, and enterprise
                  Java development.
                </span>
              </div>

              <div
                className="certification-item"
                data-aos="fade-right"
                data-aos-delay="300"
              >
                <h4>
                  <FontAwesomeIcon icon={faJava} className="item-icon" />
                  Core & Advanced Java
                </h4>
                <p className="cert-provider">Ypsilon Technologies</p>
                <span>
                  Advanced Java concepts, frameworks, and enterprise application
                  development.
                </span>
              </div>
            </div>
          </div>

          <div className="section" data-aos="fade-up" data-aos-duration="1000">
            <div className="section-header">
              <FontAwesomeIcon icon={faMedal} className="section-icon" />
              <h3>EXTRA-CURRICULAR ACTIVITIES</h3>
            </div>
            <ul>
              <li data-aos="fade-right" data-aos-delay="100">
                <FontAwesomeIcon icon={faChevronRight} className="list-icon" />
                Completed an Ethical Hacking course on Udemy, mastering
                techniques for system penetration using tools like msfvenom and
                RedHorse
              </li>
              <li data-aos="fade-right" data-aos-delay="200">
                <FontAwesomeIcon icon={faChevronRight} className="list-icon" />
                Active participant in coding competitions and hackathons,
                focusing on full-stack development and innovative solutions
              </li>
            </ul>
          </div>

          <div
            className="section contact-section"
            id="contact"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className="section-header">
              <FontAwesomeIcon icon={faEnvelope} className="section-icon" />
              <h3>GET IN TOUCH</h3>
            </div>
            <div className="row gap-4 gap-lg-0">
              <div className="col-lg-6">
                <div className="contact-info">
                  <h4>Let's Connect</h4>
                  <p>
                    Feel free to reach out for collaborations, opportunities, or
                    just a friendly chat! I'm always open to discussing new
                    projects and ideas.
                  </p>
                  <div className="contact-details">
                    <div className="contact-item">
                      <FontAwesomeIcon
                        icon={faEnvelope}
                        className="contact-icon"
                      />
                      <div>
                        <h5>Email</h5>
                        <p>divyaattarde94@gmail.com</p>
                      </div>
                    </div>
                    <div className="contact-item">
                      <FontAwesomeIcon
                        icon={faMapMarker}
                        className="contact-icon"
                      />
                      <div>
                        <h5>Location</h5>
                        <p>Indore, MP, India</p>
                      </div>
                    </div>
                  </div>
                  <div className="social-links mt-4">
                    <a
                      href="https://github.com/divyx09"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon icon={faGithub} />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/divya-attarde-634650253"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label>Your Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your name"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                    />
                  </div>
                  <div className="form-group">
                    <label>Email Address</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter your email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                    />
                  </div>
                  <div className="form-group">
                    <label>Subject</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter subject"
                      required
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                    />
                  </div>
                  <div className="form-group">
                    <label>Message</label>
                    <textarea
                      className="form-control"
                      rows="4"
                      placeholder="Enter your message"
                      required
                      value={formData.description}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          description: e.target.value,
                        })
                      }
                    ></textarea>
                  </div>
                  <button type="submit" className="submit-btn">
                    <FontAwesomeIcon icon={faPaperPlane} className="me-2" />
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
