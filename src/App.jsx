import portrait from "../tatafo.png";

const projects = [
  {
    number: "01",
    name: "Shop Calculator",
    description:
      "A simple calculator for comparing product cost, selling price, and profit.",
    imageLabel: "Add a screenshot of the Shop Calculator here",
  },
  {
    number: "02",
    name: "Student List",
    description: "A webpage that displays student records from a JavaScript array.",
    imageLabel: "Add a screenshot of the Student List here",
  },
];

function ProjectEntry({ project }) {
  return (
    <article className="project-entry">
      <div className="project-art" aria-label={project.imageLabel} role="img">
        <span className="project-art__label">Project image / to be added</span>
        <span className="project-art__number" aria-hidden="true">
          {project.number}
        </span>
        <span className="project-art__cross project-art__cross--one" aria-hidden="true" />
        <span className="project-art__cross project-art__cross--two" aria-hidden="true" />
      </div>
      <div className="project-copy">
        <div className="project-heading">
          <span className="eyebrow">Selected project / {project.number}</span>
          <h3>{project.name}</h3>
          <p className="project-description">{project.description}</p>
        </div>
        <dl className="project-details">
          <div>
            <dt>Contribution</dt>
            <dd className="placeholder">[Add what you built and how you approached it.]</dd>
          </div>
          <div>
            <dt>Outcome</dt>
            <dd className="placeholder">[Add a factual user benefit or project result.]</dd>
          </div>
        </dl>
      </div>
    </article>
  );
}

function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <header className="site-header">
        <a className="brand" href="#top" aria-label="Dayo, back to top">
          <img src={portrait} alt="" className="brand__portrait" />
          <span>Dayo</span>
          <span className="brand__slash">/</span>
          <span className="brand__role">Web developer</span>
        </a>
        <nav className="site-nav" aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Work <span aria-hidden="true">02</span></a>
          <a className="site-nav__contact" href="#contact">Contact <span aria-hidden="true">↗</span></a>
        </nav>
      </header>

      <main id="main">
        <section className="hero page-wrap" id="top" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow hero-eyebrow">
              <span className="status-dot" aria-hidden="true" />
              Independent web developer / Portfolio 2026
            </p>
            <h1 id="hero-title">I’m learning by building for the web.</h1>
            <p className="hero-intro">
              I’m Dayo, an early-career developer exploring how thoughtful websites
              and small tools can make everyday tasks clearer.
            </p>
            <div className="hero-actions">
              <a className="button button--primary" href="#projects">
                Explore selected work <span aria-hidden="true">↓</span>
              </a>
              <a className="text-link" href="mailto:tatafomedia@gmail.com">
                Get in touch <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>

          <figure className="hero-portrait">
            <div className="hero-portrait__frame">
              <span className="hero-portrait__index" aria-hidden="true">D—01</span>
              <img src={portrait} alt="Illustrated portrait of Dayo" />
              <span className="hero-portrait__caption">Learning in public<br />one project at a time</span>
            </div>
            <figcaption className="eyebrow">Curiosity → code → useful things</figcaption>
          </figure>

          <div className="hero-coordinate" aria-hidden="true">HTML / CSS / JS</div>
        </section>

        <section className="work-section section-wrap" id="projects" aria-labelledby="work-title">
          <div className="section-heading">
            <div>
              <p className="eyebrow">A few things in progress</p>
              <h2 id="work-title">Selected work<span className="accent-period">.</span></h2>
            </div>
            <p className="section-aside">Small projects, made to solve<br />specific everyday problems.</p>
          </div>
          <div className="project-list">
            {projects.map((project) => (
              <ProjectEntry key={project.number} project={project} />
            ))}
          </div>
        </section>

        <section className="about-section section-wrap" id="about" aria-labelledby="about-title">
          <div className="section-marker">
            <span className="eyebrow">A little context</span>
            <span className="section-marker__line" aria-hidden="true" />
            <span className="eyebrow">01 — About</span>
          </div>
          <div className="about-grid">
            <h2 id="about-title">Still learning.<br />Already making.</h2>
            <div className="about-copy">
              <p>
                I’m an early-career web developer learning HTML, CSS, and JavaScript
                through hands-on projects. I like taking a small, clear problem and
                working through the details that make a page feel easy to use.
              </p>
              <div className="focus-note">
                <span className="eyebrow">Current focus</span>
                <p className="placeholder">[Add the kind of client work you want to take on.]</p>
              </div>
            </div>
          </div>
        </section>

        <section className="skills-section section-wrap" id="skills" aria-labelledby="skills-title">
          <div className="skills-intro">
            <p className="eyebrow">Tools I’m learning</p>
            <h2 id="skills-title">Built from<br />the basics.</h2>
          </div>
          <ul className="skill-list">
            <li><span>01</span> HTML <small>Structure</small></li>
            <li><span>02</span> CSS <small>Layout &amp; style</small></li>
            <li><span>03</span> JavaScript <small>Beginner</small></li>
          </ul>
        </section>

        <section className="contact-section" id="contact" aria-labelledby="contact-title">
          <div className="contact-inner section-wrap">
            <div>
              <p className="eyebrow">Have a useful problem in mind?</p>
              <h2 id="contact-title">Let’s start<br />with a conversation.</h2>
            </div>
            <a className="contact-link" href="mailto:tatafomedia@gmail.com">
              tatafomedia@gmail.com <span aria-hidden="true">↗</span>
            </a>
            <span className="contact-index eyebrow" aria-hidden="true">D / 2026</span>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <span>© 2026 Dayo</span>
        <a href="#top">Back to top ↑</a>
        <span>Made with curiosity</span>
      </footer>
    </>
  );
}

export default App;