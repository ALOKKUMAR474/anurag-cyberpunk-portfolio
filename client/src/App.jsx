import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import * as THREE from "three";
import { CursorGlow } from "./components/CursorGlow";
import { LoadingScreen } from "./components/LoadingScreen";
import { SectionHeading } from "./components/SectionHeading";
import { VideoModal } from "./components/VideoModal";
import {
  blogPosts,
  heroStats,
  navigation,
  portfolioItems,
  projects,
  recommendations,
  services,
  socialLinks,
  skills,
  timeline,
  tools
} from "./content/siteContent";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

function useGridBackground() {
  useEffect(() => {
    const canvas = document.getElementById("bg-canvas");
    if (!canvas) return undefined;

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 8;

    const geometry = new THREE.BufferGeometry();
    const vertices = [];
    for (let index = 0; index < 1600; index += 1) {
      vertices.push((Math.random() - 0.5) * 30, (Math.random() - 0.5) * 18, (Math.random() - 0.5) * 10);
    }
    geometry.setAttribute("position", new THREE.Float32BufferAttribute(vertices, 3));

    const material = new THREE.PointsMaterial({
      color: "#00F0FF",
      size: 0.035,
      transparent: true,
      opacity: 0.85
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    const resize = () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
    };

    resize();
    window.addEventListener("resize", resize);

    let frameId;
    const animate = () => {
      particles.rotation.y += 0.0009;
      particles.rotation.x += 0.0004;
      renderer.render(scene, camera);
      frameId = window.requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.cancelAnimationFrame(frameId);
      window.removeEventListener("resize", resize);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);
}

export default function App() {
  const [loading, setLoading] = useState(true);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [activeCategory, setActiveCategory] = useState(portfolioItems[0].category);
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [formStatus, setFormStatus] = useState("Idle");

  useGridBackground();

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 1800);
    return () => window.clearTimeout(timer);
  }, []);

  const activeRecommendations = useMemo(
    () => recommendations[activeCategory] || recommendations.Cinematic,
    [activeCategory]
  );

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setFormStatus("Sending...");

    try {
      const response = await fetch(`${API_URL}/contacts`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState)
      });

      if (!response.ok) {
        throw new Error("Failed to submit contact form");
      }

      setFormState({ name: "", email: "", message: "" });
      setFormStatus("Signal received. I will get back to you soon.");
    } catch (_error) {
      setFormStatus("Connection unstable. Please use email or WhatsApp.");
    }
  };

  return (
    <>
      <LoadingScreen visible={loading} />
      <CursorGlow />
      <canvas id="bg-canvas" className="bg-canvas" />

      <div className="app-shell">
        <header className="topbar glass-panel">
          <a href="#home" className="brand">
            AK//NEON
          </a>
          <nav>
            {navigation.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`}>
                {item}
              </a>
            ))}
          </nav>
        </header>

        <main>
          <section id="home" className="hero grid-shell">
            <div className="hero-copy">
              <p className="eyebrow">Cinematic Tech Creator in a Cyberpunk World</p>
              <motion.h1
                className="glitch"
                data-text="Anurag Kumar"
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
              >
                Anurag Kumar
              </motion.h1>
              <p className="hero-tagline">
                Tech Researcher &amp; Content Creator bridging PC expertise with high-impact visual storytelling.
              </p>
              <div className="cta-row">
                <a href="#portfolio" className="primary-button">
                  View Work
                </a>
                <a href="#contact" className="secondary-button">
                  Hire Me
                </a>
              </div>
              <div className="stat-row">
                {heroStats.map((stat) => (
                  <div key={stat.label} className="glass-panel stat-card">
                    <span>{stat.label}</span>
                    <strong>{stat.value}</strong>
                  </div>
                ))}
              </div>
            </div>

            <motion.div
              className="hero-showreel glass-panel"
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 1.1 }}
            >
              <div className="hud-frame" />
              <p className="eyebrow">Auto Showreel</p>
              <div className="video-frame">
                <iframe
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1&controls=0&loop=1&playlist=dQw4w9WgXcQ"
                  title="Showreel"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="telemetry">
                <span>LATENCY: 12ms</span>
                <span>EDIT MODE: LIVE</span>
              </div>
            </motion.div>
          </section>

          <section id="about" className="section grid-shell section-split">
            <SectionHeading
              eyebrow="Story / Skills"
              title="Built for people who love what happens under the hood."
              copy="I blend technical research with cinematic execution, translating specs, systems, and stories into visuals that feel sharp, informed, and premium."
            />
            <div className="content-grid">
              <div className="glass-panel timeline-panel">
                {timeline.map((item) => (
                  <div key={item.title} className="timeline-item">
                    <span>{item.year}</span>
                    <h3>{item.title}</h3>
                    <strong>{item.org}</strong>
                    <p>{item.detail}</p>
                  </div>
                ))}
              </div>
              <div className="glass-panel skills-panel">
                {skills.map((skill) => (
                  <div key={skill.name} className="skill-meter">
                    <div className="skill-meta">
                      <span>{skill.name}</span>
                      <strong>{skill.level}%</strong>
                    </div>
                    <div className="skill-bar">
                      <span style={{ width: `${skill.level}%` }} />
                    </div>
                  </div>
                ))}
                <div className="tool-cloud">
                  {tools.map((tool) => (
                    <span key={tool}>{tool}</span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section id="portfolio" className="section">
            <SectionHeading
              eyebrow="Portfolio Grid"
              title="An interactive gallery tuned for motion, mood, and conversion."
              copy="Hover to preview. Tap in to enter a fullscreen playback view with links to the source signal."
            />
            <div className="portfolio-grid">
              {portfolioItems.map((item) => (
                <motion.article
                  key={item.title}
                  className={`glass-panel portfolio-card accent-${item.accent}`}
                  whileHover={{ y: -12 }}
                  onMouseEnter={() => setActiveCategory(item.category)}
                  onFocus={() => setActiveCategory(item.category)}
                >
                  <div className="portfolio-preview">
                    <iframe
                      src={item.preview}
                      title={item.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    />
                  </div>
                  <div className="portfolio-body">
                    <p className="eyebrow">
                      {item.category} / {item.type}
                    </p>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <button type="button" className="ghost-button" onClick={() => setSelectedVideo(item)}>
                      [ OPEN FULLSCREEN ]
                    </button>
                  </div>
                </motion.article>
              ))}
            </div>
            <div className="glass-panel recommendation-panel">
              <p className="eyebrow">AI Signal Engine</p>
              <h3>{activeCategory} recommendations</h3>
              <div className="recommendation-list">
                {activeRecommendations.map((recommendation) => (
                  <span key={recommendation}>{recommendation}</span>
                ))}
              </div>
            </div>
          </section>

          <section id="projects" className="section">
            <SectionHeading
              eyebrow="Projects / Code"
              title="MERN experiments with a strong presentation instinct."
              copy="Product thinking matters just as much as visuals, so these builds are framed as usable, responsive systems."
            />
            <div className="project-grid">
              {projects.map((project) => (
                <article key={project.id} className="glass-panel project-card">
                  <p className="eyebrow">{project.id}</p>
                  <h3>{project.title}</h3>
                  <p>{project.summary}</p>
                  <div className="stack-row">
                    {project.stack.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                  <div className="cta-row compact">
                    <a href={project.github} className="secondary-button" target="_blank" rel="noreferrer">
                      GitHub
                    </a>
                    <a href={project.demo} className="ghost-button">
                      Live Demo
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section id="resume" className="section grid-shell section-split">
            <SectionHeading
              eyebrow="Resume / Records"
              title="A live dossier with direct access to the source PDF."
              copy="The resume is embedded for quick review, while the surrounding timeline keeps the narrative visible during scroll."
            />
            <div className="content-grid">
              <div className="glass-panel resume-panel">
                <iframe src="/resume/anurag-resume.pdf" title="Anurag Kumar Resume" />
                <a className="primary-button" href="/resume/anurag-resume.pdf" download>
                  Download Resume
                </a>
              </div>
              <div className="glass-panel scroll-track">
                {timeline.map((item) => (
                  <div key={item.title} className="scroll-track-item">
                    <span>{item.year}</span>
                    <h3>{item.title}</h3>
                    <p>{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="services" className="section">
            <SectionHeading
              eyebrow="Services / Offers"
              title="Editing, research, and growth-focused execution."
              copy="Every service is framed to help creators, brands, and channels turn information into stronger audience signals."
            />
            <div className="service-grid">
              {services.map((service, index) => (
                <motion.div
                  key={service}
                  className="glass-panel service-card"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                >
                  <span className="service-index">{String(index + 1).padStart(2, "0")}</span>
                  <h3>{service}</h3>
                  <p>Precision-led delivery with strong hooks, clean pacing, and clear audience intent.</p>
                </motion.div>
              ))}
            </div>
          </section>

          <section id="blog" className="section">
            <SectionHeading
              eyebrow="Blog / Intel"
              title="Thought pieces for tech, editing craft, and creator systems."
              copy="This section is seeded and ready for future CMS or Mongo-backed publishing."
            />
            <div className="blog-grid">
              {blogPosts.map((post) => (
                <article key={post.title} className="glass-panel blog-card">
                  <p className="eyebrow">{post.tag}</p>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <a href="#contact" className="ghost-button">
                    [ REQUEST THIS ARTICLE ]
                  </a>
                </article>
              ))}
            </div>
          </section>

          <section id="contact" className="section grid-shell section-split">
            <SectionHeading
              eyebrow="Contact / Transmission"
              title="Let’s build something with signal, style, and strategy."
              copy="Use the form for project inquiries, or jump directly to WhatsApp and email if you want the fastest route."
            />
            <div className="content-grid">
              <form className="glass-panel contact-form" onSubmit={handleSubmit}>
                <label>
                  Name
                  <input type="text" name="name" value={formState.name} onChange={handleChange} required />
                </label>
                <label>
                  Email
                  <input type="email" name="email" value={formState.email} onChange={handleChange} required />
                </label>
                <label>
                  Project Signal
                  <textarea name="message" value={formState.message} onChange={handleChange} rows="5" required />
                </label>
                <button type="submit" className="primary-button">
                  Send Transmission
                </button>
                <p className="form-status">{formStatus}</p>
              </form>

              <div className="glass-panel contact-links">
                <p className="eyebrow">Direct Channels</p>
                <div className="link-stack">
                  {socialLinks.map((item) => (
                    <a key={item.label} href={item.href} target="_blank" rel="noreferrer">
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>

      <VideoModal item={selectedVideo} onClose={() => setSelectedVideo(null)} />
    </>
  );
}
