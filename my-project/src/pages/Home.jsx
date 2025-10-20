import "./Home.css";

const Home = () => {
  const features = [
    {
      icon: "💬",
      title: "Ask & Answer",
      description: "Get help from seniors instantly",
    },
    {
      icon: "📚",
      title: "Browse Projects",
      description: "See what others have built",
    },
    {
      icon: "🧠",
      title: "Learn Together",
      description: "Share knowledge & tutorials",
    },
    {
      icon: "👥",
      title: "Find Mentors",
      description: "Connect with experienced students",
    },
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background">
          <div className="hero-shapes">
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
            <div className="shape shape-3"></div>
          </div>
        </div>

        <div className="hero-content">
          <div className="hero-badge">
            <span>🎓 New Platform</span>
          </div>

          <h1 className="hero-title">
            Connect. Learn. <span className="highlight">Grow.</span>
          </h1>

          <p className="hero-subtitle">
            The ultimate platform for students to share knowledge, ask
            questions, and build meaningful connections.
          </p>

          <div className="hero-buttons">
            <button className="btn btn-primary btn-large">
              Start Learning Now
            </button>
            <button className="btn btn-outline">Watch Demo</button>
          </div>

          <div className="hero-stats">
            <div className="stat">
              <div className="stat-number">500+</div>
              <div className="stat-label">Students</div>
            </div>
            <div className="stat">
              <div className="stat-number">1K+</div>
              <div className="stat-label">Questions</div>
            </div>
            <div className="stat">
              <div className="stat-number">200+</div>
              <div className="stat-label">Projects</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="features-container">
          <div className="features-header">
            <h2>Everything you need to succeed</h2>
            <p>One platform, endless possibilities</p>
          </div>

          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="cta-container">
          <div className="cta-content">
            <h2>Ready to join the community?</h2>
            <p>Start your journey today and connect with amazing students</p>
            <button className="btn btn-primary btn-large">
              Get Started Free
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
