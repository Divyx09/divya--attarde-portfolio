import React, { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import "../styles/Portfolio.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
// import pimg from "../assets/images/divy.png";
// import pimg from "../assets/images/divy-removebg-preview.png";
// import pimg from "../assets/images/divy-removebg-previes/divy.glb;
// import model3d from "../assets/3d deep.glb";
//sad
import model3d from "../assets/divy.glb";
import resume from "../assets/Divya_Attarde_Resume.pdf";
import axios from "axios";
import { projects } from "./projects";

function Model(props) {
  const { scene } = useGLTF(model3d);
  return <primitive object={scene} {...props} />;
}

const Portfolio = () => {
  const skills = {
    technical: [
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
      { name: "Java", icon: faJava },
      { name: "Spring Boot", icon: faCode },
      { name: "Node.js", icon: faCode },
      { name: "Python", icon: faPython },
      { name: "Django", icon: faCode },
      { name: "MYSQL", icon: faCode },
      { name: "MongoDB", icon: faCode },
      { name: "Azure", icon: faCode },
      { name: "GCP", icon: faCode },
      { name: "Github", icon: faGithub },
      { name: "REST APIs", icon: faCode },
    ],
    soft: ["Problem-Solving", "Time Management", "Adaptability", "Leadership", "Agile Methodology"],
    cognitive: ["Critical Thinking", "Reasoning", "Learning", "SEO Optimization"],
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
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-text" data-aos="fade-right">
                <h2 className="section-title">About Me</h2>
                <p className="about-description">
                  Hi! I'm Divya Attarde, a passionate Junior Software Developer based
                  in India. I specialize in building web and mobile applications, SEO tools, and client
                  platforms using modern technologies like React.js, Spring Boot, and Next.js.
                </p>
                <p className="about-description">
                  With hands-on experience in transforming complex requirements into scalable, 
                  high-performance applications, I'm passionate about delivering real-world solutions 
                  and collaborating in Agile teams to exceed client expectations.
                </p>
                <div className="about-actions">
                  <a href={resume} className="download-cv" download>
                    <i className="bi bi-download me-2"></i>
                    Download CV
                  </a>
                  <div className="social-links">
                    <a
                      href="https://github.com/divyx09"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="bi bi-github"></i>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/divya-attarde-634650253"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="bi bi-linkedin"></i>
                    </a>
                    <a href="mailto:divyaattarde94@gmail.com">
                      <i className="bi bi-envelope-fill"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-image" data-aos="fade-left">
                <div className="model-container">
                  <Canvas
                    camera={{ position: [0, 1, 2], fov: 10 }}
                    style={{ width: 400, height: 300 }}
                  >
                    <ambientLight intensity={0.5} />
                    <directionalLight position={[1, 1, 5]} intensity={1} />
                    <Model scale={[1, 1, 1]} position={[0, -1.7, 0]} />
                    <OrbitControls autoRotate />
                  </Canvas>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="skills-section">
          <div className="section" data-aos="fade-up" data-aos-duration="1000">
            <div className="section-header">
              <FontAwesomeIcon
                icon={faGraduationCap}
                className="section-icon"
              />
              <h3>EDUCATION</h3>
            </div>
            <div
              className="education-item"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <div className="edu-header">
                <h4>
                  <FontAwesomeIcon
                    icon={faGraduationCap}
                    className="item-icon"
                  />
                  Bachelor of Technology
                </h4>
                <span>Expected 2026</span>
              </div>
              <p>Sri Aurobindo Institute Of Technology (RGPV)</p>
              <p>CGPA: 7.2/10</p>
              <span>
                In-depth study of Data Structures, Algorithms, Operating
                Systems, and Database Management Systems. Strong focus on
                full-stack development using React, Spring Boot, and MongoDB.
              </span>
            </div>

            <div
              className="education-item"
              data-aos="fade-right"
              data-aos-delay="200"
            >
              <div className="edu-header">
                <h4>
                  <FontAwesomeIcon
                    icon={faGraduationCap}
                    className="item-icon"
                  />
                  Diploma in Computer Science
                </h4>
                <span>2020 - 2023</span>
              </div>
              <p>Ujjain Polytechnic College (RGPV)</p>
              <p>Percentage: 78.8%</p>
              <span>
                Acquired strong foundational knowledge in computer science
                including programming languages like Java, C, and Python.
                Completed coursework in Data Structures, Database Management
                Systems, and Software Engineering.
              </span>
            </div>
          </div>

          <div className="section" id="skills" data-aos="fade-up" data-aos-duration="1000">
            <div className="section-header">
              <FontAwesomeIcon icon={faCogs} className="section-icon" />
              <h3>SKILLS</h3>
            </div>
            <div>
              <h4>
                <FontAwesomeIcon
                  icon={faLaptopCode}
                  className="skill-category-icon"
                />
                Technical Skills
              </h4>
              <div className="skills-container">
                {skills.technical.map((skill, index) => (
                  <span key={index} className="skill-tag" data-aos="zoom-in">
                    <FontAwesomeIcon icon={skill.icon} className="skill-icon" />
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
            <div style={{ marginTop: "20px" }}>
              <h4>
                <FontAwesomeIcon
                  icon={faBriefcase}
                  className="skill-category-icon"
                />
                Soft Skills
              </h4>
              <div className="skills-container">
                {skills.soft.map((skill, index) => (
                  <span key={index} className="skill-tag" data-aos="zoom-in">
                    <FontAwesomeIcon
                      icon={faChevronRight}
                      className="skill-icon"
                    />
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div style={{ marginTop: "20px" }}>
              <h4>
                <FontAwesomeIcon
                  icon={faBrain}
                  className="skill-category-icon"
                />
                Cognitive Skills
              </h4>
              <div className="skills-container ">
                {skills.cognitive.map((skill, index) => (
                  <span
                    key={index}
                    className="skill-tag d-flex align-items-center justify-content-center "
                    data-aos="zoom-in"
                  >
                    <FontAwesomeIcon
                      icon={faChevronRight}
                      className="skill-icon"
                    />
                    <span>{skill}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="section" id="experience" data-aos="fade-up" data-aos-duration="1000">
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
                  Developed production-ready web tools including pHext.com, redirectchecker.com, and SEO diagnostics utilities.
                </li>
                <li data-aos="fade-up" data-aos-delay="200">
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="list-icon"
                  />
                  Revamped a legacy administration infrastructure, boosting page load speed, improving user experience, and optimizing Lighthouse scores.
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
                  Built and optimized reusable React.js components and streamlined API workflows, reducing code redundancy across projects.
                </li>
                <li data-aos="fade-up" data-aos-delay="200">
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="list-icon"
                  />
                  Delivered a major client project 2 weeks ahead of schedule by coordinating in Agile sprints, improving client satisfaction.
                </li>
                <li data-aos="fade-up" data-aos-delay="300">
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="list-icon"
                  />
                  Created an <strong>Admin Panel</strong> to manage various events, including meetup registrations, event scheduling, and user management.
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
              <div className="certification-item" data-aos="fade-right" data-aos-delay="100">
                <h4>
                  <FontAwesomeIcon icon={faCode} className="item-icon" />
                  Google Cloud Skills Boost - Cloud Fundamentals
                </h4>
                <p className="cert-provider">Google Cloud</p>
                <span>Earned multiple certifications and badges covering cloud computing fundamentals, infrastructure, and services.</span>
              </div>
              
              <div className="certification-item" data-aos="fade-right" data-aos-delay="150">
                <h4>
                  <FontAwesomeIcon icon={faGithub} className="item-icon" />
                  GitHub Foundation
                </h4>
                <p className="cert-provider">GitHub</p>
                <span>Version control, collaboration workflows, and open source development practices.</span>
              </div>
              
              <div className="certification-item" data-aos="fade-right" data-aos-delay="200">
                <h4>
                  <FontAwesomeIcon icon={faCode} className="item-icon" />
                  Linux Operating Systems
                </h4>
                <p className="cert-provider">Red Hat Academy</p>
                <span>System administration, command line operations, and Linux environment management.</span>
              </div>
              
              <div className="certification-item" data-aos="fade-right" data-aos-delay="250">
                <h4>
                  <FontAwesomeIcon icon={faJava} className="item-icon" />
                  Core Java Training
                </h4>
                <p className="cert-provider">Besant Technologies</p>
                <span>Object-oriented programming, data structures, and enterprise Java development.</span>
              </div>
              
              <div className="certification-item" data-aos="fade-right" data-aos-delay="300">
                <h4>
                  <FontAwesomeIcon icon={faJava} className="item-icon" />
                  Core & Advanced Java
                </h4>
                <p className="cert-provider">Ypsilon Technologies</p>
                <span>Advanced Java concepts, frameworks, and enterprise application development.</span>
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
                Active participant in coding competitions and hackathons, focusing on
                full-stack development and innovative solutions
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
            <div className="row">
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
