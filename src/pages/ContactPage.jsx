import { Link } from "react-router-dom";

export default function ContactPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container page-hero-grid">
          <div>
            <p className="eyebrow">CONTACT</p>
            <h1>Tell us what you are building and where you need support.</h1>
            <p className="lead">
              If you have questions about our services or are interested in collaborating, we are
              always open to a conversation.
            </p>
          </div>
          <div className="info-panel">
            <img
              src="/images/image4.jpg"
              alt="Professional creating recorded content at a desk"
              className="panel-image"
            />
            <div className="panel-image-copy">
              <p className="visual-label">Best way to reach us</p>
              <strong>Email is the easiest place to start.</strong>
              <span>
                Share a bit about your business, your goals, and the kind of support you are looking for,
                and we can take it from there.
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container contact-grid">
          <article className="contact-card-large">
            <p className="section-kicker">Get in touch</p>
            <h2>We are happy to talk and see if we can help.</h2>
            <div className="contact-detail-list">
              <p>
                <strong>Email</strong>
              </p>
              <a href="mailto:will.papaz@kanosmarketing.com">will.papaz@kanosmarketing.com</a>
              <p>
                <strong>Call or text</strong>
              </p>
              <a href="tel:+1-000-000-0000">XXX-XXX-XXXX</a>
            </div>
            <div className="cta-row">
              <a href="mailto:will.papaz@kanosmarketing.com" className="btn">
                Email Kanos
              </a>
              <Link to="/services" className="btn btn-ghost">
                Review services
              </Link>
            </div>
          </article>

          <aside className="contact-sidebar">
            <div className="inline-image-card">
              <img
                src="/images/image1.jpg"
                alt="Mobile-first digital marketing visual in a city setting"
                className="section-image"
              />
            </div>
            <article className="mini-card">
              <strong>Helpful things to include</strong>
              <ul className="clean-list">
                <li>What your business does</li>
                <li>What stage you are in right now</li>
                <li>What kind of marketing help you need</li>
                <li>Any timeline or launch date</li>
              </ul>
            </article>
            <article className="mini-card">
              <strong>What happens next</strong>
              <p>
                We will review your note, reach out, and set up a conversation if it looks like there is
                a strong fit.
              </p>
            </article>
          </aside>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container closing-cta">
          <div>
            <p className="section-kicker">Built for thoughtful growth</p>
            <h2>Need a partner who can think strategically and execute cleanly?</h2>
            <p>
              Whether you need full support or a more focused engagement, we can shape a plan around
              your current needs and long-term direction.
            </p>
          </div>
          <div className="cta-actions">
            <a href="mailto:will.papaz@kanosmarketing.com" className="btn">
              Start via email
            </a>
            <Link to="/about" className="text-link">
              Read about our approach
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
