import React from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();
  const handleJoinUs = () => navigate('/signup');

  return (
    <div className="landing-page">
      {/* Header Bar */}
      <nav className="header-bar">
        <div className="header-logo" onClick={() => navigate('/')}>VITAL <span className="header-accent">SYNC</span></div>
        <button className="header-join-btn" onClick={handleJoinUs}>Join as Doctor</button>
      </nav>
      {/* Hero Section as Card */}
      <section className="hero-card">
        <div className="hero-content">
          <h1 className="hero-title">Empower Your Practice with <span className="text-accent">VITALSYNC</span></h1>
          <p className="hero-subtitle">Seamlessly monitor patient vitals, receive real-time alerts, and make data-driven decisions—all in one secure platform designed for doctors.</p>
          <div className="hero-buttons">
            <button className="btn btn-primary" onClick={handleJoinUs}>
              Get Started
            </button>
          </div>
        </div>
        <div className="hero-image">
          <div className="pulse-animation"></div>
        </div>
      </section>
      {/* Features Section as Cards */}
      <section className="features-section">
        <h2 className="section-title">Why Doctors Choose VitalSync</h2>
        <div className="features-grid">
          <div className="feature-card glass-card">
            <div className="icon-container">
              <i className="fas fa-user-md"></i>
            </div>
            <h3>Patient Panel Overview</h3>
            <p>Access a real-time dashboard of all your patients’ vitals and trends at a glance.</p>
          </div>
          <div className="feature-card glass-card">
            <div className="icon-container">
              <i className="fas fa-bell"></i>
            </div>
            <h3>Instant Critical Alerts</h3>
            <p>Receive immediate notifications for abnormal readings, enabling timely interventions.</p>
          </div>
          <div className="feature-card glass-card">
            <div className="icon-container">
              <i className="fas fa-notes-medical"></i>
            </div>
            <h3>Automated Documentation</h3>
            <p>Save time with auto-generated reports and seamless EHR integration.</p>
          </div>
          <div className="feature-card glass-card">
            <div className="icon-container">
              <i className="fas fa-shield-alt"></i>
            </div>
            <h3>HIPAA Compliant</h3>
            <p>Ensure patient data privacy with robust security and compliance protocols.</p>
          </div>
        </div>
      </section>
      {/* How It Works Section as Cards */}
      <section className="how-it-works">
        <h2 className="section-title">How VitalSync Works for Doctors</h2>
        <div className="steps-container">
          <div className="step-card glass-card">
            <div className="step-number">1</div>
            <h3>Onboard Your Patients</h3>
            <p>Invite patients to connect their devices and start sharing vitals securely.</p>
          </div>
          <div className="step-card glass-card">
            <div className="step-number">2</div>
            <h3>Monitor Remotely</h3>
            <p>Track patient health data in real-time from anywhere, anytime.</p>
          </div>
          <div className="step-card glass-card">
            <div className="step-number">3</div>
            <h3>Act on Alerts</h3>
            <p>Respond quickly to critical changes with instant notifications and recommendations.</p>
          </div>
          <div className="step-card glass-card">
            <div className="step-number">4</div>
            <h3>Document & Advise</h3>
            <p>Generate reports and provide guidance directly through the platform.</p>
          </div>
        </div>
      </section>
      {/* Testimonials Section as Cards */}
      <section className="testimonials">
        <h2 className="section-title">What Doctors Say</h2>
        <div className="testimonial-cards">
          <div className="testimonial-card glass-card">
            <div className="quote">"VitalSync has streamlined my workflow and improved patient outcomes. The real-time alerts are a game changer for proactive care."</div>
            <div className="author">Dr. Sarah Johnson, Cardiologist</div>
          </div>
          <div className="testimonial-card glass-card">
            <div className="quote">"I can monitor my entire patient panel from one dashboard and intervene before issues escalate. Highly recommended for any practice."</div>
            <div className="author">Dr. Amit Patel, General Physician</div>
          </div>
          <div className="testimonial-card glass-card">
            <div className="quote">"The automated documentation saves me hours every week and keeps my records organized."</div>
            <div className="author">Dr. Elena Chen, Family Medicine</div>
          </div>
        </div>
      </section>
      {/* Call To Action as Card */}
      <section className="cta-section">
        <div className="cta-content glass-card">
          <h2>Ready to elevate your medical practice?</h2>
          <p>Join thousands of doctors who trust VitalSync for efficient, data-driven patient care.</p>
          <div className="cta-buttons">
            <button className="btn btn-primary" onClick={handleJoinUs}>Join as Doctor</button>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">VITAL<span className="text-accent">SYNC</span></h3>
            <p>Empowering doctors with real-time patient monitoring and actionable insights.</p>
            <div className="social-icons">
              <a href="https://facebook.com" className="social-icon"><i className="fab fa-facebook-f"></i></a>
              <a href="https://twitter.com" className="social-icon"><i className="fab fa-twitter"></i></a>
              <a href="https://instagram.com" className="social-icon"><i className="fab fa-instagram"></i></a>
              <a href="https://linkedin.com" className="social-icon"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><a href="/">Home</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/features">Features</a></li>
              <li><a href="/pricing">Pricing</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Resources</h4>
            <ul className="footer-links">
              <li><a href="/blog">Blog</a></li>
              <li><a href="/faq">FAQs</a></li>
              <li><a href="/support">Support</a></li>
              <li><a href="/privacy">Privacy Policy</a></li>
              <li><a href="/terms">Terms of Service</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Contact Us</h4>
            <address>
              <p><i className="fas fa-map-marker-alt"></i> 123 Health Ave, Medical District</p>
              <p><i className="fas fa-phone"></i> (555) 123-4567</p>
              <p><i className="fas fa-envelope"></i> info@vitalsync.com</p>
            </address>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} VitalSync. All rights reserved.</p>
        </div>
      </footer>
      {/* CSS Styles */}
      <style>{`
        :root {
          --primary: #3b82f6;
          --primary-light: #93c5fd;
          --accent: #2563eb;
          --white: #fff;
          --text-dark: #1e293b;
          --text-light: #64748b;
          --shadow: 0 8px 32px rgba(59, 130, 246, 0.08);
          --radius: 18px;
        }
        .landing-page {
          font-family: 'Poppins', 'Inter', sans-serif;
          background: linear-gradient(135deg, var(--primary-light) 0%, var(--white) 100%);
          min-height: 100vh;
        }
        .header-bar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 70px;
          background: linear-gradient(90deg, var(--primary) 60%, var(--primary-light) 100%);
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 48px;
          z-index: 100;
          box-shadow: var(--shadow);
        }
        .header-logo {
          font-size: 2rem;
          font-weight: 700;
          color: var(--white);
          letter-spacing: 2px;
          cursor: pointer;
        }
        .header-accent {
          color: var(--accent);
        }
        .header-join-btn {
          background: var(--white);
          color: var(--primary);
          border: none;
          border-radius: 30px;
          padding: 10px 32px;
          font-size: 1.1rem;
          font-weight: 600;
          box-shadow: 0 2px 8px rgba(37,99,235,0.10);
          transition: background 0.2s, color 0.2s, transform 0.2s;
          cursor: pointer;
        }
        .header-join-btn:hover {
          background: var(--primary);
          color: var(--white);
          transform: translateY(-2px) scale(1.04);
        }
        .hero-card {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin: 100px auto 40px auto;
          padding: 3rem 4rem;
          max-width: 1100px;
          border-radius: var(--radius);
          box-shadow: 0 8px 32px 0 rgba(37, 99, 235, 0.10);
          background: linear-gradient(120deg, rgba(255,255,255,0.85) 60%, rgba(96,165,250,0.15) 100%);
          position: relative;
        }
        .hero-content {
          max-width: 600px;
        }
        .hero-title {
          font-size: 3.5rem;
          font-weight: 800;
          margin-bottom: 1rem;
          color: var(--primary);
          letter-spacing: 1px;
        }
        .text-accent {
          color: var(--accent);
        }
        .hero-subtitle {
          font-size: 1.25rem;
          color: var(--text-dark);
          margin-bottom: 2rem;
          line-height: 1.6;
        }
        .btn {
          padding: 0.75rem 2rem;
          border-radius: 30px;
          font-weight: 600;
          font-size: 1.1rem;
          transition: all 0.3s ease;
          cursor: pointer;
          border: none;
          background: var(--primary);
          color: var(--white);
          box-shadow: 0 2px 8px rgba(37,99,235,0.10);
        }
        .btn-primary:hover {
          background: var(--primary-light);
          color: var(--white);
          transform: translateY(-2px) scale(1.04);
        }
        .hero-image {
          position: relative;
          width: 400px;
          height: 400px;
        }
        .pulse-animation {
          width: 100%;
          height: 100%;
          background: url('/logo192.png') center/cover, var(--primary-light);
          border-radius: 50%;
          position: relative;
          box-shadow: 0 8px 32px rgba(37, 99, 235, 0.15);
        }
        .pulse-animation::after {
          content: '';
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          border: 3px solid var(--primary);
          animation: pulse 2s infinite;
        }
        @keyframes pulse {
          0% { transform: scale(1); opacity: 1; }
          100% { transform: scale(1.5); opacity: 0; }
        }
        .section-title {
          text-align: center;
          font-size: 2.5rem;
          color: var(--primary);
          margin-bottom: 3rem;
          font-weight: 700;
        }
        .features-section {
          padding: 5rem 10%;
          background: var(--white);
        }
        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
        }
        .feature-card {
          padding: 2rem;
          text-align: center;
          border-radius: var(--radius);
          background: var(--white);
          box-shadow: var(--shadow);
          transition: transform 0.3s ease;
        }
        .feature-card:hover {
          transform: translateY(-5px) scale(1.03);
        }
        .icon-container {
          width: 60px;
          height: 60px;
          margin: 0 auto 1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--primary-light);
          border-radius: 50%;
          color: var(--primary);
          font-size: 1.5rem;
        }
        .how-it-works {
          padding: 5rem 10%;
          background: #f0f6ff;
        }
        .steps-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
        }
        .step-card {
          text-align: center;
          padding: 2rem;
          background: var(--white);
          border-radius: var(--radius);
          box-shadow: var(--shadow);
        }
        .step-number {
          width: 40px;
          height: 40px;
          margin: 0 auto 1rem;
          background: var(--primary);
          color: var(--white);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
        }
        .testimonials {
          padding: 5rem 10%;
          background: var(--white);
        }
        .testimonial-cards {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }
        .testimonial-card {
          padding: 2rem;
          background: var(--white);
          border-radius: var(--radius);
          box-shadow: var(--shadow);
        }
        .quote {
          font-style: italic;
          margin-bottom: 1rem;
          color: var(--text-dark);
        }
        .author {
          font-weight: 600;
          color: var(--primary);
        }
        .cta-section {
          padding: 5rem 10%;
          background: linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%);
          color: var(--white);
          text-align: center;
        }
        .cta-content {
          padding: 2rem;
          border-radius: var(--radius);
          box-shadow: var(--shadow);
          background: rgba(255,255,255,0.7);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          border: 1px solid rgba(255,255,255,0.25);
        }
        .cta-content h2 {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }
        .footer {
          background: var(--primary);
          color: var(--white);
          padding: 4rem 10% 2rem;
        }
        .footer-content {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          margin-bottom: 2rem;
        }
        .footer-title {
          font-size: 1.5rem;
          margin-bottom: 1rem;
        }
        .social-icons {
          display: flex;
          gap: 1rem;
          margin-top: 1rem;
        }
        .social-icon {
          color: var(--white);
          font-size: 1.2rem;
          transition: color 0.3s ease;
        }
        .social-icon:hover {
          color: var(--primary-light);
        }
        .footer-links {
          list-style: none;
          padding: 0;
        }
        .footer-links li {
          margin-bottom: 0.5rem;
        }
        .footer-links a {
          color: var(--white);
          text-decoration: none;
          transition: color 0.3s ease;
        }
        .footer-links a:hover {
          color: var(--primary-light);
        }
        address p {
          margin-bottom: 0.5rem;
        }
        .footer-bottom {
          text-align: center;
          padding-top: 2rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }
        .glass-card {
          background: rgba(255,255,255,0.7);
          box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.10);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          border-radius: var(--radius);
          border: 1px solid rgba(255,255,255,0.25);
        }
        @media (max-width: 900px) {
          .hero-card {
            flex-direction: column;
            padding: 2rem 1rem;
            text-align: center;
          }
          .hero {
            flex-direction: column;
            text-align: center;
            padding: 2rem 5%;
          }
          .hero-image {
            margin-top: 2rem;
            width: 300px;
            height: 300px;
          }
          .section-title {
            font-size: 2rem;
          }
          .features-grid,
          .steps-container,
          .testimonial-cards {
            grid-template-columns: 1fr;
          }
          .header-bar {
            padding: 0 18px;
          }
        }
      `}</style>
    </div>
  );
};

export default LandingPage;
