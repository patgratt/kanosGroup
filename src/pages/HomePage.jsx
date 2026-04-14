import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <main>
      <section className="hero hero-home">
        <div className="container hero-layout">
          <div className="hero-copy">
            <p className="eyebrow">KANOS MARKETING</p>
            <h1>Minimal, intentional marketing built around your customers and your growth stage.</h1>
            <p className="lead">
              We help small businesses scale with strategy-first marketing funnels, strong brand
              messaging, and the execution support needed to turn thoughtful ideas into steady momentum.
            </p>
            <div className="cta-row">
              <Link to="/contact" className="btn">
                Start a conversation
              </Link>
              <Link to="/services" className="btn btn-ghost">
                View services
              </Link>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-image-panel">
              <img
                src="/images/image3.png"
                alt="Team reviewing campaign and analytics documents across a table"
                className="hero-main-image"
              />
            </div>
            <div className="hero-summary-card">
              <p className="visual-label">Capabilities</p>
              <div className="hero-summary-list">
                <div>
                  <strong>Brand Positioning</strong>
                  <p>Deep customer understanding grounded in research, empathy, and business context.</p>
                </div>
                <div>
                  <strong>Execution</strong>
                  <p>Content, campaigns, and management systems built for consistency and momentum.</p>
                </div>
                <div>
                  <strong>Optimization</strong>
                  <p>Analytics that sharpen the funnel and improve each next decision.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container intro-grid">
          <div>
            <p className="section-kicker">Who we are</p>
            <h2>A boutique agency for businesses that want better marketing, not louder marketing.</h2>
          </div>
          <div className="copy-stack">
            <p>
              Kanos Group exists to tell compelling stories about people, businesses, and organizations
              so more meaningful connections can be made in the world. We help organizations discover,
              craft, and communicate their authentic voice through intentional strategy.
            </p>
            <p>
              We offer end-to-end campaign support from strategy to analytics, or focused support for
              businesses that need help in a specific part of the funnel.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="section-kicker">What we do</p>
              <h2>Capabilities built to meet you where you are.</h2>
            </div>
            <Link to="/services" className="text-link">
              Explore all services
            </Link>
          </div>
          <div className="services-grid">
            <article className="service-card">
              <h3>Strategy Development</h3>
              <p>
                Align realistic goals, define your position, and understand your audience so the rest of
                your marketing has a clear point of view.
              </p>
            </article>
            <article className="service-card">
              <h3>Content and Campaign Creation</h3>
              <p>
                Build campaigns with purpose, consistency, and a long-term role in your brand and growth
                strategy.
              </p>
            </article>
            <article className="service-card">
              <h3>Execution and Management</h3>
              <p>
                Launch, manage, schedule, and optimize the moving pieces so your marketing ecosystem
                feels seamless to your audience.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split-panel">
          <div className="panel-copy">
            <p className="section-kicker">Our philosophy</p>
            <h2>Curious thinking. Clear positioning. Confident execution.</h2>
            <p>
              We care about the why behind every decision. That means strong research, honest
              recommendations, and creative work that has a job to do.
            </p>
            <Link to="/about" className="btn btn-ghost">
              Read our story
            </Link>
          </div>
          <div className="media-stack">
            <div className="value-list-card">
              <div>
                <strong>Your voice is your currency.</strong>
                <p>Your brand is one of the most valuable assets your business can build.</p>
              </div>
              <div>
                <strong>Quality over quantity.</strong>
                <p>We create with intention, not for the sake of activity.</p>
              </div>
              <div>
                <strong>Integrity matters.</strong>
                <p>Clear thinking and honest advice are central to how we work.</p>
              </div>
            </div>
            <div className="inline-image-card">
              <img
                src="/images/image6.jpg"
                alt="Business discussion around a table representing collaborative client partnership"
                className="section-image"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container closing-cta">
          <div>
            <p className="section-kicker">Ready when you are</p>
            <h2>Need full-stack support or help with one part of the funnel?</h2>
            <p>
              We work with businesses that want a thoughtful partner, a stronger message, and a more
              intentional path to growth.
            </p>
          </div>
          <div className="cta-actions">
            <Link to="/contact" className="btn">
              Contact us
            </Link>
            <Link to="/about" className="text-link">
              Learn more about Kanos
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
