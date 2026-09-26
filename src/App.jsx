// Main portfolio page containing all major sections and mobile navigation.

import { useState } from "react";
import "./App.css";

function App() {
  // Controls whether the mobile navigation menu is open or closed.
  const [menuOpen, setMenuOpen] = useState(false);

  // Stores portfolio project information used to generate project cards.
  const projects = [
    {
      title: "Lawig: HR Recruitment App",
      category: "System Analysis",
      description:
        "A web-based recruitment platform built for Lumawig Inc. to automate the applicant workflow from initial submission through onboarding. I contributed as the System Analyst.",
      tech: ["System Analysis", "Web Development", "Documentation"],
    },
    {
      title: "Cannabis Use Risk Classification",
      category: "Machine Learning Research",
      description:
        "A research project applying a stacking ensemble using Logistic Regression, Random Forest, and SVM with a Gradient Boosting meta-learner for cannabis-use risk classification.",
      tech: ["Python", "Machine Learning", "Research"],
    },
    {
      title: "ShopZada 2.0",
      category: "Data Modeling",
      description:
        "An end-to-end data warehouse solution integrating fragmented business, customer, marketing, and operations datasets, including a star schema for analytical reporting.",
      tech: ["Data Modeling", "SQL", "Data Warehousing"],
    },
    {
      title: "TermGuessr",
      category: "Mobile Development",
      description:
        "A Wordle-inspired mobile word-guessing game built in Flutter with tile-based feedback, animations, Firebase Authentication, Cloud Firestore, and an XP/leveling system.",
      tech: ["Flutter", "Dart", "Firebase"],
    },
    {
      title: "Bank Marketing Subscription Predictor",
      category: "Machine Learning",
      description:
        "A Decision Tree classifier that predicts whether a bank customer is likely to subscribe to a term deposit, including preprocessing, hyperparameter tuning, model evaluation, and feature analysis.",
      tech: ["Python", "Scikit-learn", "Streamlit"],
      live: "https://bank-marketing-decision-tree.onrender.com",
      github:
        "https://github.com/jeysiii02/DS_4_DecisionTreeClassifier_byte",
    },
    {
      title: "IPL Cricket Statistics Dashboard",
      category: "Data Analytics",
      description:
        "An interactive dashboard for exploring IPL cricket statistics, including player performance, team win percentages, runs, wickets, and season-based filtering.",
      tech: ["Python", "Pandas", "Streamlit"],
      live: "https://ipl-cricket-statistics-dashboard.onrender.com",
      github:
        "https://github.com/jeysiii02/DS_1_IPLCricketStatisticsDashboard_byte",
    },
    {
      title: "Stock Price Data Visualization",
      category: "Data Visualization",
      description:
        "An interactive time-series dashboard for analyzing stock price trends, moving averages, daily returns, and volatility using historical market data.",
      tech: ["Python", "Pandas", "yfinance", "Streamlit"],
      live: "https://ds3-stock-price-visualization.onrender.com",
      github:
        "https://github.com/jeysiii02/DS_3_StockPriceDataVisualization_byte",
    },
  ];

  return (
    <>
      {/* Navigation bar */}
      <header className="navbar">
        <div className="container nav-content">
          <a
            className="logo"
            href="#home"
            onClick={() => setMenuOpen(false)}
          >
            JC<span>.</span>
          </a>

          {/* Desktop navigation */}
          <nav className="desktop-nav">
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#education">Education</a>
            <a href="#leadership">Leadership</a>
            <a href="#contact">Contact</a>
          </nav>

          {/* Mobile hamburger button */}
          <button
            className={`menu-button ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        {/* Mobile navigation */}
        <div className={`mobile-nav ${menuOpen ? "show" : ""}`}>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#experience" onClick={() => setMenuOpen(false)}>Experience</a>
          <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
          <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
          <a href="#education" onClick={() => setMenuOpen(false)}>Education</a>
          <a href="#leadership" onClick={() => setMenuOpen(false)}>Leadership</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </div>
      </header>

      <main>
        {/* Hero section */}
        <section className="hero section" id="home">
          <div className="container hero-layout">
            <div className="hero-content">
              <p className="eyebrow">COMPUTER SCIENCE · DATA SCIENCE</p>

              <h1>
                Hi, I'm <span>Jesus Carlos Lazaro.</span>
              </h1>

              <h2>I build with data and software.</h2>

              <p className="hero-description">
                Computer Science student at the University of Santo Tomas
                specializing in Data Science, with interests in machine learning,
                data analytics, software development, and practical problem-solving.
              </p>

              {/* Main portfolio links */}
              <div className="hero-actions">
                <a className="button primary" href="#projects">
                  View my work
                </a>

                <a
                  className="button secondary"
                  href="https://www.linkedin.com/in/jesus-carlos-lazaro-04b17332a"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn ↗
                </a>

                <a
                  className="button secondary"
                  href="https://github.com/jeysiii02"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub ↗
                </a>
              </div>
            </div>

            {/* Code-style introduction card */}
            <div className="hero-card">
              <div className="code-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>

              <div className="code-content">
                <p>
                  <span className="code-purple">const</span> developer = {"{"}
                </p>

                <p className="indent">
                  name: <span className="code-green">"JC Lazaro"</span>,
                </p>

                <p className="indent">
                  focus: <span className="code-green">"Data Science"</span>,
                </p>

                <p className="indent">
                  enjoys: [
                  <span className="code-green">"building"</span>,{" "}
                  <span className="code-green">"learning"</span>],
                </p>

                <p className="indent">
                  status:{" "}
                  <span className="code-green">
                    "open to opportunities"
                  </span>
                </p>

                <p>{"};"}</p>
              </div>
            </div>
          </div>
        </section>

        {/* About section */}
        <section className="section section-soft" id="about">
          <div className="container">
            <p className="section-number">01 / ABOUT</p>

            <div className="about-layout">
              <h2 className="section-title">
                Turning ideas and data into practical solutions.
              </h2>

              <div className="about-text">
                <p>
                  I'm a Computer Science student at the University of Santo Tomas
                  specializing in Data Science. My interests span machine learning,
                  data analytics, system development, and data modeling.
                </p>

                <p>
                  I enjoy working on projects where I can combine technical skills,
                  analytical thinking, and practical problem-solving to build useful
                  solutions.
                </p>
              </div>
            </div>

            <div className="about-stats">
              <div>
                <strong>BS CS</strong>
                <span>Data Science</span>
              </div>

              <div>
                <strong>2027</strong>
                <span>Expected Graduation</span>
              </div>

              <div>
                <strong>UST</strong>
                <span>University of Santo Tomas</span>
              </div>

              <div>
                <strong>3×</strong>
                <span>Dean's List</span>
              </div>
            </div>
          </div>
        </section>

        {/* Experience section */}
        <section className="section" id="experience">
          <div className="container">
            <p className="section-number">02 / EXPERIENCE</p>

            <h2 className="section-title">
              Where I'm learning and contributing.
            </h2>

            <div className="timeline">
              <article className="timeline-item">
                <div className="timeline-date">AUG 2026 — PRESENT</div>

                <div className="timeline-content">
                  <p className="item-type">INNOVATION FELLOWSHIP</p>
                  <h3>Eskwelabs</h3>
                  <h4>Data Innovation Track</h4>

                  <p>
                    Analyzed SaaS product data to identify customer engagement,
                    subscription, and churn patterns using Python and Pandas.
                    Created data visualizations and summary metrics to track
                    monthly activity, active users, plan distribution, and
                    customer retention.
                  </p>
                </div>
              </article>

              <article className="timeline-item">
                <div className="timeline-date">SEP 2026 — PRESENT</div>

                <div className="timeline-content">
                  <p className="item-type">DATA SCIENCE INTERNSHIP</p>
                  <h3>B.Y.T.E by ArithMatrix</h3>
                  <h4>Data Science Intern</h4>

                  <p>
                    Developed data science projects involving data preprocessing,
                    visualization, machine learning, and time-series analysis
                    using Python, Pandas, Scikit-learn, Matplotlib, and Seaborn.
                    Built and deployed interactive Streamlit dashboards and a
                    tuned Decision Tree classification model.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* Projects section */}
        <section className="section section-soft" id="projects">
          <div className="container">
            <div className="section-heading-row">
              <div>
                <p className="section-number">03 / PROJECTS</p>
                <h2 className="section-title">Selected work.</h2>
              </div>

              <a
                className="text-link"
                href="https://github.com/jeysiii02"
                target="_blank"
                rel="noreferrer"
              >
                View GitHub ↗
              </a>
            </div>

            <div className="projects-grid">
              {projects.map((project, index) => (
                <article className="project-card" key={project.title}>
                  <div className="project-top">
                    <span className="project-index">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="project-category">
                      {project.category}
                    </span>
                  </div>

                  <h3>{project.title}</h3>
                  <p>{project.description}</p>

                  <div className="tech-list">
                    {project.tech.map((technology) => (
                      <span key={technology}>{technology}</span>
                    ))}
                  </div>

                  {(project.live || project.github) && (
                    <div className="project-links">
                      {project.live && (
                        <a href={project.live} target="_blank" rel="noreferrer">
                          Live Demo ↗
                        </a>
                      )}

                      {project.github && (
                        <a href={project.github} target="_blank" rel="noreferrer">
                          GitHub ↗
                        </a>
                      )}
                    </div>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Skills section */}
        <section className="section" id="skills">
          <div className="container">
            <p className="section-number">04 / SKILLS</p>
            <h2 className="section-title">Tools I work with.</h2>

            <div className="skills-grid">
              <div className="skill-group">
                <p>LANGUAGES</p>
                <div>
                  <span>Java</span>
                  <span>Python</span>
                  <span>R</span>
                  <span>Ruby</span>
                  <span>Dart</span>
                  <span>JavaScript</span>
                  <span>SQL</span>
                </div>
              </div>

              <div className="skill-group">
                <p>WEB DEVELOPMENT</p>
                <div>
                  <span>HTML</span>
                  <span>CSS</span>
                  <span>JavaScript</span>
                  <span>React</span>
                  <span>Bootstrap</span>
                  <span>Tailwind CSS</span>
                  <span>Next.js</span>
                </div>
              </div>

              <div className="skill-group">
                <p>DATA SCIENCE & ANALYTICS</p>
                <div>
                  <span>Pandas</span>
                  <span>NumPy</span>
                  <span>Matplotlib</span>
                  <span>Seaborn</span>
                  <span>Scikit-learn</span>
                  <span>Streamlit</span>
                  <span>SAS Viya</span>
                  <span>Power BI</span>
                  <span>Tableau</span>
                  <span>Tableau Prep Builder</span>
                </div>
              </div>

              <div className="skill-group">
                <p>DATABASES</p>
                <div>
                  <span>MySQL</span>
                  <span>PostgreSQL</span>
                  <span>SQLite</span>
                </div>
              </div>

              <div className="skill-group">
                <p>TOOLS</p>
                <div>
                  <span>Git/GitHub</span>
                  <span>Vite</span>
                  <span>Docker</span>
                  <span>Flutter</span>
                  <span>Jupyter Notebook</span>
                  <span>VS Code</span>
                  <span>IntelliJ IDEA</span>
                  <span>Postman</span>
                  <span>Figma</span>
                </div>
              </div>

              <div className="skill-group">
                <p>WORKFLOW & PROJECT TOOLS</p>
                <div>
                  <span>Kestra</span>
                  <span>Apache Airflow</span>
                  <span>Trello</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Education section */}
        <section className="section section-soft" id="education">
          <div className="container">
            <p className="section-number">05 / EDUCATION</p>

            <div className="education-card">
              <div>
                <p className="item-type">2023 — 2027</p>
                <h2>University of Santo Tomas</h2>
                <h3>Bachelor of Science in Computer Science</h3>
                <p>Specialization in Data Science</p>
              </div>

              <div className="thesis">
                <p className="item-type">THESIS</p>
                <p>
                  Filipino Speech Deepfake Audio Detection Using a Real-Time
                  Capable CNN–GRU Architecture with Acoustic Feature Fusion
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership section */}
        <section className="section" id="leadership">
          <div className="container">
            <p className="section-number">06 / LEADERSHIP</p>
            <h2 className="section-title">Organizations and involvement.</h2>

            <div className="timeline">
              <article className="timeline-item">
                <div className="timeline-date">2025 — 2026</div>
                <div className="timeline-content">
                  <p className="item-type">COMMUNITY DEVELOPMENT STAFF</p>
                  <h3>Computer Science Society — UST</h3>
                  <h4>Community Development Staff</h4>
                </div>
              </article>

              <article className="timeline-item">
                <div className="timeline-date">2024 — 2025</div>
                <div className="timeline-content">
                  <p className="item-type">MEMBER</p>
                  <h3>Computer Science Society — UST</h3>
                  <h4>Member</h4>
                </div>
              </article>

              <article className="timeline-item">
                <div className="timeline-date">2023 — 2024</div>
                <div className="timeline-content">
                  <p className="item-type">AUDITING STAFF</p>
                  <h3>Thomasian Gaming Society — UST</h3>
                  <h4>Auditing Staff</h4>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* Contact section */}
        <section className="section contact-section" id="contact">
          <div className="container contact-content">
            <p className="section-number">07 / CONTACT</p>

            <h2>Let's build something meaningful.</h2>

            <p>
              I'm always interested in opportunities to learn, collaborate,
              and work on projects involving data and software.
            </p>

            <div className="contact-actions">
              <a
                className="button primary"
                href="mailto:jclazaro0321@gmail.com?subject=Portfolio Inquiry&body=Hi JC, I came across your portfolio and wanted to reach out."
              >
                Send an email
              </a>

              <a
                className="button secondary"
                href="https://www.linkedin.com/in/jesus-carlos-lazaro-04b17332a"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn ↗
              </a>

              <a
                className="button secondary"
                href="https://github.com/jeysiii02"
                target="_blank"
                rel="noreferrer"
              >
                GitHub ↗
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer>
        <div className="container footer-content">
          <p>Jesus Carlos G. Lazaro</p>
          <p>Built with React + Vite · 2026</p>
        </div>
      </footer>
    </>
  );
}

export default App;
