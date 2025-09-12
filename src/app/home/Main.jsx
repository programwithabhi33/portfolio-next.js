"use client"
import Image from "next/image";
import "../../../public/css/home/main.css";
import { FaGithub, FaLinkedin, FaYoutube, FaSun, FaMoon, FaPhone, FaEnvelope } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useEffect, useState } from "react";

const Main = () => {
  // State for dark / light theme
  const [isDark, setIsDark] = useState(false);

  // Initialize theme based on localStorage value (runs once on mount)
  useEffect(() => {
    const storedTheme = typeof window !== "undefined" ? localStorage.getItem("theme") : null;
    if (storedTheme === "dark") {
      setIsDark(true);
    }
  }, []);

  // Apply or remove the `light` class on <body> whenever isDark changes and persist selection
  useEffect(() => {
    if (isDark) {
      document.body.classList.remove("light");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.add("light");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  useEffect(() => {

    // Navigation scroll effect
    window.addEventListener('scroll', function () {
      const navbar = document.getElementById('navbar');
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });

    // Mobile menu toggle
    document.getElementById('mobileToggle').addEventListener('click', function () {
      document.getElementById('navLinks').classList.toggle('active');
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
          // Close mobile menu if open
          document.getElementById('navLinks').classList.remove('active');
        }
      });
    });

    // Typing effect
    const texts = [
      'Full Stack Developer',
      'PHP (Codeigniter & Laravel) Developer',
      'Strong JavaScript Knowledge',
      'Hands On Experience In React, Next.js, Node.js, Express, MongoDB, MySQL, PHP, and Laravel',
      'Cloud Solutions & UI/UX Enthusiast',
      'Strong Problem Solver',
    ];

    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typingSpeed = 100;
    const deletingSpeed = 50;
    const pauseTime = 2000;

    function typeWriter() {
      const currentText = texts[textIndex];
      const typingElement = document.getElementById('typingText');

      if (!isDeleting) {
        typingElement.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;

        if (charIndex === currentText.length) {
          isDeleting = true;
          setTimeout(typeWriter, pauseTime);
          return;
        }
      } else {
        typingElement.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0) {
          isDeleting = false;
          textIndex = (textIndex + 1) % texts.length;
        }
      }

      setTimeout(typeWriter, isDeleting ? deletingSpeed : typingSpeed);
    }

    // Start typing effect
    typeWriter();

    // Scroll reveal animation
    function reveal() {
      const reveals = document.querySelectorAll('.reveal');

      reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
          element.classList.add('active');
        }
      });
    }

    window.addEventListener('scroll', reveal);
    reveal(); // Initial call

    // Add parallax effect to hero section
    window.addEventListener('scroll', () => {
      const scrolled = window.pageYOffset;
      const hero = document.querySelector('.hero-content');
      if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        hero.style.opacity = 1 - scrolled / 800;
      }
    });

    // Add hover effect to project cards
    document.querySelectorAll('.project-card').forEach(card => {
      card.addEventListener('mouseenter', function () {
        this.style.transform = 'translateY(-10px) scale(1.02)';
      });
      card.addEventListener('mouseleave', function () {
        this.style.transform = 'translateY(0) scale(1)';
      });
    });

    // Add cursor follow effect
    const cursor = document.createElement('div');
    cursor.style.cssText = `
            width: 20px;
            height: 20px;
            border: 2px solid #6366f1;
            border-radius: 50%;
            position: fixed;
            pointer-events: none;
            z-index: 9999;
            transition: all 0.1s ease;
            transform: translate(-50%, -50%);
            opacity: 0.5;
        `;
    document.body.appendChild(cursor);

    document.addEventListener('mousemove', (e) => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
    });

    // Add click effect
    document.addEventListener('click', (e) => {
      const ripple = document.createElement('div');
      ripple.style.cssText = `
                position: fixed;
                width: 30px;
                height: 30px;
                border-radius: 50%;
                background: radial-gradient(circle, rgba(99, 102, 241, 0.5) 0%, transparent 70%);
                left: ${e.clientX - 15}px;
                top: ${e.clientY - 15}px;
                pointer-events: none;
                animation: rippleEffect 0.6s ease-out;
                z-index: 9998;
            `;
      document.body.appendChild(ripple);
      setTimeout(() => ripple.remove(), 600);
    });

    // Add ripple animation
    const style = document.createElement('style');
    style.textContent = `
            @keyframes rippleEffect {
                to {
                    transform: scale(4);
                    opacity: 0;
                }
            }
        `;
    document.head.appendChild(style);

    // Performance optimization - Lazy load animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach(el => {
      observer.observe(el);
    });
  }, []);
  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <div className="bg-animation" />
      {/* Navigation */}
      <nav id="navbar">
        <div className="nav-container">
          <div className="logo">PROGRAM WITH ABHI.</div>
          <ul className="nav-links" id="navLinks">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
          <button
            className="theme-toggle-btn ml-4 text-2xl focus:outline-none"
            onClick={() => setIsDark(!isDark)}
            aria-label="Toggle Theme"
          >
            {isDark ? (
              <FaSun className="text-yellow-400" />
            ) : (
              <FaMoon className="text-gray-800" />
            )}
          </button>
          <div className="mobile-menu-toggle" id="mobileToggle">
            <span />
            <span />
            <span />
          </div>
        </div>
      </nav>
      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="hero-image reveal hidden">
          <Image
            src="/me-ai.png"
            alt="Abhishek Biranje"
            width={400}
            height={400}
            className="profile-img"
          />
        </div>
        <div className="hero-content">
          <p className="hero-subtitle">Hello, I'm</p>
          <h1 className="hero-title">Abhishek Biranje</h1>
          <p className="hero-description">
            <span className="typing-text" id="typingText" />
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">
              View My Work
              <span>→</span>
            </a>
            <a href="#contact" className="btn btn-secondary">
              Get In Touch
            </a>
          </div>
        </div>
      </section>
      {/* About Section */}
      <section className="about" id="about">
        <div className="container">
          <h2 className="section-title reveal">About Me</h2>
          <p
            style={{
              textAlign: "center",
              color: "var(--text-secondary)",
              maxWidth: 800,
              margin: "0 auto 3rem",
              fontSize: "1.2rem"
            }}
            className="reveal"
          >
            I'm not just a developer — I'm a creator of digital solutions. With 5+
            years of experience in coding and programming and 3+ years of expertise in full-stack development, cloud integrations, and
            DevOps, I transform ideas into robust and impactful applications.
          </p>
          <div className="about-grid">
            <div className="about-card reveal">
              <div className="about-icon">🎨</div>
              <h3>Frontend Excellence</h3>
              <p>
                I specialize in building responsive, user-friendly interfaces with
                React, Next.js, and Tailwind CSS. From dynamic web applications to
                interactive mobile experiences, I create seamless digital solutions
                that captivate users.
              </p>
            </div>
            <div className="about-card reveal">
              <div className="about-icon">⚙️</div>
              <h3>Backend Architecture</h3>
              <p>
                I build scalable backend systems with Node.js, Express, MongoDB, and
                MySQL. From RESTful APIs to microservices, I architect
                high-performance solutions with PHP frameworks like Laravel and
                CodeIgniter.
              </p>
            </div>
            <div className="about-card reveal">
              <div className="about-icon">☁️</div>
              <h3>Cloud &amp; DevOps</h3>
              <p>
                I leverage cloud services like Google Cloud and AWS to deploy,
                scale, and secure applications. From serverless architectures to
                containerized solutions, I optimize cloud infrastructure for high
                availability.
              </p>
            </div>
            <div className="about-card reveal">
              <div className="about-icon">🔒</div>
              <h3>Network Engineering</h3>
              <p>
                I have hands-on experience with network design, configuration, and
                troubleshooting. From setting up secure VPNs to optimizing network
                performance, I ensure seamless connectivity and reliability. I also
                manage DNS configuration and setup as well as SMTP email
                deliverability for businesses.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Skills Section */}
      <section className="skills" id="skills">
        <div className="container">
          <h2 className="section-title reveal">Technical Skills</h2>
          <div className="skills-grid">
            <div className="skill-category reveal">
              <h3>Frontend Development</h3>
              <div className="skill-tags">
                <span className="skill-tag">React.js</span>
                <span className="skill-tag">Next.js</span>
                <span className="skill-tag">JavaScript ES6+</span>
                <span className="skill-tag">Tailwind CSS</span>
                <span className="skill-tag">HTML5/CSS3</span>
                <span className="skill-tag">Redux</span>
              </div>
            </div>
            <div className="skill-category reveal">
              <h3>Backend Development</h3>
              <div className="skill-tags">
                <span className="skill-tag">Node.js</span>
                <span className="skill-tag">Express.js</span>
                <span className="skill-tag">PHP</span>
                <span className="skill-tag">Laravel</span>
                <span className="skill-tag">CodeIgniter</span>
                <span className="skill-tag">Python</span>
                <span className="skill-tag">Django</span>
                <span className="skill-tag">RESTful APIs</span>
              </div>
            </div>
            <div className="skill-category reveal">
              <h3>Database &amp; Cloud</h3>
              <div className="skill-tags">
                <span className="skill-tag">MongoDB</span>
                <span className="skill-tag">MySQL</span>
                <span className="skill-tag">PostgreSQL</span>
                <span className="skill-tag">Firebase</span>
                <span className="skill-tag">Google Cloud</span>
                <span className="skill-tag">AWS</span>
                <span className="skill-tag">Docker</span>
                <span className="skill-tag">Redis</span>
              </div>
            </div>
            <div className="skill-category reveal">
              <h3>Tools &amp; Others</h3>
              <div className="skill-tags">
                <span className="skill-tag">Git/GitHub</span>
                <span className="skill-tag">Apache/Nginx</span>
                <span className="skill-tag">Linux</span>
                <span className="skill-tag">Postman</span>
               <span className="skill-tag">DNS</span>
               <span className="skill-tag">SMTP</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Projects Section */}
      <section className="projects" id="projects">
        <div className="container">
          <h2 className="section-title reveal">Featured Projects</h2>
          <div className="projects-grid">
            <div className="project-card reveal">
              <div className="project-header">
                <h3 className="project-title">Cloud Management Platform</h3>
                <div className="project-tech">
                  <span className="tech-badge">React</span>
                  <span className="tech-badge">Node.js</span>
                  <span className="tech-badge">GCP</span>
                  <span className="tech-badge">MongoDB</span>
                </div>
              </div>
              <div className="project-body">
                <p className="project-description">
                  A comprehensive cloud management platform with multiple integrated
                  modules for modern business needs.
                </p>
                <ul className="project-features">
                  <li>Scalable storage management system</li>
                  <li>Real-time chat and collaboration tools</li>
                  <li>Social media integration features</li>
                  <li>Event management and scheduling</li>
                  <li>Subscription and billing module</li>
                </ul>
                <div className="project-links">
                  <a href="#" className="project-link">
                    View Details
                  </a>
                </div>
              </div>
            </div>
            <div className="project-card reveal">
              <div className="project-header">
                <h3 className="project-title">Storage Management System</h3>
                <div className="project-tech">
                  <span className="tech-badge">React</span>
                  <span className="tech-badge">Laravel</span>
                  <span className="tech-badge">MySQL</span>
                </div>
              </div>
              <div className="project-body">
                <p className="project-description">
                  Advanced file storage platform with custom file management system
                  and intuitive user interface.
                </p>
                <ul className="project-features">
                  <li>Custom file management architecture</li>
                  <li>Secure upload/download system</li>
                  <li>File sharing with permissions</li>
                  <li>User-friendly React interface</li>
                  <li>Efficient Laravel backend</li>
                </ul>
                <div className="project-links">
                  <a href="#" className="project-link">
                    View Details
                  </a>
                </div>
              </div>
            </div>
            <div className="project-card reveal">
              <div className="project-header">
                <h3 className="project-title">Real-time Chat Application</h3>
                <div className="project-tech">
                  <span className="tech-badge">Next.js</span>
                  <span className="tech-badge">Firebase</span>
                  <span className="tech-badge">WebRTC</span>
                </div>
              </div>
              <div className="project-body">
                <p className="project-description">
                  Modern chat application with real-time messaging, video calling,
                  and file sharing capabilities.
                </p>
                <ul className="project-features">
                  <li>One-to-one and group chat</li>
                  <li>Video calling with WebRTC</li>
                  <li>File sharing and emojis</li>
                  <li>Real-time notifications</li>
                  <li>Responsive Next.js interface</li>
                </ul>
                <div className="project-links">
                  <a href="#" className="project-link">
                    View Details
                  </a>
                </div>
              </div>
            </div>
            <div className="project-card reveal">
              <div className="project-header">
                <h3 className="project-title">Music Distribution Platform</h3>
                <div className="project-tech">
                  <span className="tech-badge">CodeIgniter</span>
                  <span className="tech-badge">MySQL</span>
                  <span className="tech-badge">PHP</span>
                </div>
              </div>
              <div className="project-body">
                <p className="project-description">
                  Comprehensive platform for music distribution with artist
                  management and revenue tracking systems.
                </p>
                <ul className="project-features">
                  <li>Artist portfolio management</li>
                  <li>Talent acquisition system</li>
                  <li>Custom revenue module</li>
                  <li>Analytics and reporting</li>
                  <li>Secure payment integration</li>
                </ul>
                <div className="project-links">
                  <a href="#" className="project-link">
                    View Details
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Section */}
      <section className="contact" id="contact">
        <div className="container">
          <h2 className="section-title reveal">Let's Connect</h2>
          <div className="contact-content">
            <p className="contact-description reveal">
              I'm always interested in new opportunities and collaborations. Whether
              you have a project in mind or just want to say hello, feel free to
              reach out!
            </p>
            <div className="contact-info reveal">
              <div className="contact-item">
                <div className="contact-icon">📧</div>
                <span>programwithabhi@gmail.com</span>
              </div>
              <div className="contact-item">
                <div className="contact-icon">📍</div>
                <span>Available for Remote Work</span>
              </div>
            </div>
            <div className="social-links reveal">
              <a
                href="https://github.com/programwithabhi"
                className="social-link"
                target="_blank"
                title="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href="https://linkedin.com/in/programwithabhi"
                className="social-link"
                target="_blank"
                title="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://twitter.com/programwithabhi"
                className="social-link"
                target="_blank"
                title="Twitter"
              >
                <FaXTwitter />
              </a>
              <a
                href="https://youtube.com/@programwithabhi9206"
                className="social-link"
                target="_blank"
                title="Youtube"
              >
                <FaYoutube />
              </a>
              <a
                href="tel:+919604154095"
                className="social-link"
                target="_blank"
                title="Phone"
              >
                <FaPhone />
              </a>
              <a
                href="mailto:programwithabhi@gmail.com"
                className="social-link"
                title="Email"
              >
                <FaEnvelope />
              </a>
            </div>
            <div className="hero-buttons">
              <a
                href="/files/my-resume.pdf"
                className="btn btn-secondary"
                style={{ marginTop: "2rem" }}
                target="_blank"
              >
                Check Out My Resume
                <span>📄</span>
              </a>
              <a
                href="mailto:programwithabhi@gmail.com"
                className="btn btn-primary"
                style={{ marginTop: "2rem" }}
              >
                Send Me a Message
                <span>📩</span>
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer>
        <p className="footer-text">
          © {new Date().getFullYear()} programwithabhi. Crafted with passion and code.
        </p>
      </footer>
    </>

  );
};

export default Main;

