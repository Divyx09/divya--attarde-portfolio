import React, { useEffect } from "react";
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
} from "@fortawesome/free-brands-svg-icons";
// import pimg from "../assets/images/divy.png";
// import pimg from "../assets/images/divy-removebg-preview.png";
// import pimg from "../assets/images/divy-removebg-previes/divy.glb;
// import model3d from "../assets/3d deep.glb";
import model3d from "../assets/divy.glb";

function Model(props) {
  const { scene } = useGLTF(model3d);
  return <primitive object={scene} {...props} />;
}

const Portfolio = () => {
  const skills = {
    technical: [
      { name: "React", icon: faReact },
      { name: "Redux", icon: faCode },
      { name: "Github", icon: faGithub },
      { name: "Bootstrap", icon: faBootstrap },
      { name: "Java", icon: faJava },
      { name: "Spring Boot", icon: faCode },
      { name: "HTML", icon: faHtml5 },
      { name: "CSS", icon: faCss3 },
      { name: "JavaScript", icon: faJs },
      { name: "SCSS", icon: faSass },
      { name: "Python", icon: faPython },
      { name: "Django", icon: faCode },
      { name: "MYSQL", icon: faCode },
      { name: "MongoDB", icon: faCode },
    ],
    soft: ["Problem-Solving", "Time Management", "Adaptability", "Leadership"],
    cognitive: ["Critical Thinking", "Reasoning", "Learning"],
  };

  useEffect(() => {
    const sections = document.querySelectorAll(".section");
    sections.forEach((section, index) => {
      section.style.setProperty("--animation-order", index);
    });
  }, []);

  return (
    <section className='portfolio-section' id='portfolio'>
      <div className='container'>
        <div className='about-me-section'>
          <div className='row align-items-center'>
            <div className='col-lg-6'>
              <div className='about-text' data-aos='fade-right'>
                <h2 className='section-title'>About Me</h2>
                <p className='about-description'>
                  Hi! I'm Divya Attarde, a passionate Full-Stack Developer based
                  in India. I specialize in creating beautiful and functional
                  web applications using modern technologies.
                </p>
                <p className='about-description'>
                  With a strong foundation in both front-end and back-end
                  development, I enjoy turning complex problems into simple,
                  beautiful, and intuitive solutions.
                </p>
                <div className='about-actions'>
                  <a
                    href='/path-to-your-cv.pdf'
                    className='download-cv'
                    download
                  >
                    <i className='bi bi-download me-2'></i>
                    Download CV
                  </a>
                  <div className='social-links'>
                    <a
                      href='https://github.com/divyx09'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <i className='bi bi-github'></i>
                    </a>
                    <a
                      href='https://linkedin.com/in/divya-attarde'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <i className='bi bi-linkedin'></i>
                    </a>
                    <a href='mailto:divyaattarde94@gmail.com'>
                      <i className='bi bi-envelope-fill'></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-6'>
              <div className='about-image' data-aos='fade-left'>
                <div className='model-container'>
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

        <div className='skills-section'>
          {/* <div className='section' data-aos="fade-up" data-aos-duration="1000">
            <div className="section-header">
              <FontAwesomeIcon icon={faBriefcase} className="section-icon" />
              <h3>PROFESSIONAL SUMMARY</h3>
            </div>
            <p>
              Full-Stack Developer (React Developer Intern) with 1 year
              experience. Expertise in integrating APIs using Java Spring Boot
              using React as front-end framework along with SQL and MongoDB as
              Database. Skilled in application design, development and deployment,
              seeking opportunities to build innovative solutions and improve user
              experiences.
            </p>
          </div> */}

          <div className='section' data-aos='fade-up' data-aos-duration='1000'>
            <div className='section-header'>
              <FontAwesomeIcon
                icon={faGraduationCap}
                className='section-icon'
              />
              <h3>EDUCATION</h3>
            </div>
            <div
              className='education-item'
              data-aos='fade-right'
              data-aos-delay='100'
            >
              <div className='edu-header'>
                <h4>
                  <FontAwesomeIcon
                    icon={faGraduationCap}
                    className='item-icon'
                  />
                  Bachelor of Technology
                </h4>
                <span>Expected 2026</span>
              </div>
              <p>Sri Aurobindo Institute Of Technology (RGPV)</p>
              <p>
                Relevant Coursework: Web Development, Operating Systems, and
                Java.
              </p>
            </div>

            <div
              className='education-item'
              data-aos='fade-right'
              data-aos-delay='200'
            >
              <div className='edu-header'>
                <h4>
                  <FontAwesomeIcon
                    icon={faGraduationCap}
                    className='item-icon'
                  />
                  Diploma in Computer Science
                </h4>
                <span>2020 - 2023</span>
              </div>
              <p>Ujjain Polytechnic College (RGPV)</p>
            </div>
          </div>

          <div className='section' data-aos='fade-up' data-aos-duration='1000'>
            <div className='section-header'>
              <FontAwesomeIcon icon={faCogs} className='section-icon' />
              <h3>SKILLS</h3>
            </div>
            <div>
              <h4>
                <FontAwesomeIcon
                  icon={faLaptopCode}
                  className='skill-category-icon'
                />
                Technical Skills
              </h4>
              <div className='skills-container'>
                {skills.technical.map((skill, index) => (
                  <span
                    key={index}
                    className='skill-tag'
                    data-aos='zoom-in'
                    data-aos-delay={index * 50}
                    style={{
                      animationDelay: `${index * 0.1}s`,
                      transform: `translateY(${Math.sin(index) * 5}px)`,
                    }}
                  >
                    <FontAwesomeIcon icon={skill.icon} className='skill-icon' />
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
            <div style={{ marginTop: "20px" }}>
              <h4>
                <FontAwesomeIcon
                  icon={faBriefcase}
                  className='skill-category-icon'
                />
                Soft Skills
              </h4>
              <div className='skills-container'>
                {skills.soft.map((skill, index) => (
                  <span
                    key={index}
                    className='skill-tag'
                    data-aos='zoom-in'
                    data-aos-delay={index * 50}
                    style={{
                      animationDelay: `${index * 0.1}s`,
                      transform: `translateY(${Math.sin(index) * 5}px)`,
                    }}
                  >
                    <FontAwesomeIcon
                      icon={faChevronRight}
                      className='skill-icon'
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
                  className='skill-category-icon'
                />
                Cognitive Skills
              </h4>
              <div className='skills-container'>
                {skills.cognitive.map((skill, index) => (
                  <span
                    key={index}
                    className='skill-tag'
                    data-aos='zoom-in'
                    data-aos-delay={index * 50}
                    style={{
                      animationDelay: `${index * 0.1}s`,
                      transform: `translateY(${Math.sin(index) * 5}px)`,
                    }}
                  >
                    <FontAwesomeIcon
                      icon={faChevronRight}
                      className='skill-icon'
                    />
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className='section' data-aos='fade-up' data-aos-duration='1000'>
            <div className='section-header'>
              <FontAwesomeIcon icon={faBriefcase} className='section-icon' />
              <h3>EXPERIENCE</h3>
            </div>
            <div
              className='experience-item'
              data-aos='fade-right'
              data-aos-delay='100'
            >
              <div className='exp-header'>
                <h4>
                  <FontAwesomeIcon icon={faCode} className='item-icon' />
                  React JS Developer
                </h4>
                <span>Mar 2024 - Present</span>
              </div>
              <p className='company'>DATACODE.IN, Indore, MP</p>
              <ul>
                <li data-aos='fade-up' data-aos-delay='150'>
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className='list-icon'
                  />
                  Developed web application modules handling user interfaces and
                  events using React, Redux, Bootstrap, and SCSS
                </li>
                <li data-aos='fade-up' data-aos-delay='200'>
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className='list-icon'
                  />
                  Led team project improving communication skills and achieving
                  80% growth in frontend development
                </li>
              </ul>
            </div>

            <div
              className='experience-item'
              data-aos='fade-right'
              data-aos-delay='200'
            >
              <div className='exp-header'>
                <h4>
                  <FontAwesomeIcon icon={faJava} className='item-icon' />
                  Java Training
                </h4>
                <span>Aug 2023 - Oct 2023</span>
              </div>
              <p className='company'>Beasent Technologies, Bengaluru, KA</p>
              <ul>
                <li data-aos='fade-up' data-aos-delay='250'>
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className='list-icon'
                  />
                  Enhanced Java development skills by 90% through practical
                  training and projects
                </li>
                <li data-aos='fade-up' data-aos-delay='300'>
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className='list-icon'
                  />
                  Led IT initiatives improving company operational efficiency by
                  100%
                </li>
              </ul>
            </div>
          </div>

          <div className='section' data-aos='fade-up' data-aos-duration='1000'>
            <div className='section-header'>
              <FontAwesomeIcon
                icon={faProjectDiagram}
                className='section-icon'
              />
              <h3>PROJECTS</h3>
            </div>
            <div
              className='project-item'
              data-aos='fade-up'
              data-aos-delay='100'
            >
              <h4>
                <FontAwesomeIcon icon={faCode} className='item-icon' />
                BHARAT News Website
              </h4>
              <p>
                Developed the BHARAT news website, a global news platform, using
                React.js and integrated APIs for real-time news updates with
                JavaScript, CSS, and HTML.
              </p>
            </div>

            <div
              className='project-item'
              data-aos='fade-up'
              data-aos-delay='200'
            >
              <h4>
                <FontAwesomeIcon icon={faCode} className='item-icon' />
                Netflix Clone
              </h4>
              <p>
                Led a team in developing a Netflix clone using React, Redux,
                Bootstrap, SCSS, and JavaScript, integrating APIs for real-time
                data and streaming functionalities. Managed source code with Git
                and GitHub.
              </p>
            </div>

            <div
              className='project-item'
              data-aos='fade-up'
              data-aos-delay='300'
            >
              <h4>
                <FontAwesomeIcon icon={faCode} className='item-icon' />
                INDIMART E-Commerce Website
              </h4>
              <p>
                Developed the INDIMART E-Commerce website using Python and
                Django, with Bootstrap for responsive styling.
              </p>
            </div>
          </div>

          <div className='section' data-aos='fade-up' data-aos-duration='1000'>
            <div className='section-header'>
              <FontAwesomeIcon icon={faMedal} className='section-icon' />
              <h3>EXTRA-CURRICULAR ACTIVITIES</h3>
            </div>
            <ul>
              <li data-aos='fade-right' data-aos-delay='100'>
                <FontAwesomeIcon icon={faChevronRight} className='list-icon' />
                Participated in the Google Cloud Skill Boost Program, earning
                multiple certifications and badges
              </li>
              <li data-aos='fade-right' data-aos-delay='200'>
                <FontAwesomeIcon icon={faChevronRight} className='list-icon' />
                Completed an Ethical Hacking course on Udemy, mastering
                techniques for system penetration using tools like msfvenom and
                RedHorse
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
