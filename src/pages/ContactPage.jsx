import { Link } from "react-router-dom";

export default function ContactPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container page-hero-centered">
          <p className="eyebrow">CONTACT</p>
          <h1>Tell us what you are building and where you need support.</h1>
          <p className="lead">
            If you have questions about our services or are interested in collaborating, we are
            always open to a conversation.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <article className="contact-card-large contact-card-wide">
            <p className="section-kicker">Get in touch</p>
            <h2>We are happy to talk and see if we can help. Reach us here:</h2>
            <div className="contact-detail-list">
              <p>
                <strong>Email</strong>
              </p>
              <a href="mailto:will.papaz@kanosmarketing.com">will.papaz@kanosmarketing.com</a>
              <p>
                <strong>LinkedIn</strong>
              </p>
              <a
                href="https://www.linkedin.com/in/william-papazahariou?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin.com/in/william-papazahariou
              </a>
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
        </div>
      </section>

    </main>
  );
}
