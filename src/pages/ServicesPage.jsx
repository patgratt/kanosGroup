export default function ServicesPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container page-hero-grid">
          <div>
            <p className="eyebrow">SERVICES</p>
            <h1>Support across the full marketing funnel, or exactly where you need it most.</h1>
            <p className="lead">
              We can act as an end-to-end marketing partner or focus on specific projects when your
              business needs sharper strategy, stronger creative, or cleaner execution.
            </p>
          </div>
          <div className="info-panel">
            <img
              src="/images/image2.jpg"
              alt="Marketing planning session with notes, roadmap, and laptop"
              className="panel-image"
            />
            <div className="panel-image-copy">
              <p className="visual-label">Flexible engagement</p>
              <strong>Full-stack campaigns or focused support.</strong>
              <span>
                The right model depends on your goals, current stage, internal bandwidth, and where your
                biggest opportunities live.
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="services-detail-grid">
            <article className="detail-card">
              <h2>Strategy Development</h2>
              <p>
                We help align relevant and realistic goals with the current state of your company so you
                can move forward with clarity. That includes defining your place in the market,
                identifying your customer, and understanding how they behave.
              </p>
            </article>
            <article className="detail-card">
              <h2>Content and Campaign Creation</h2>
              <p>
                Based on the strategy, we create content that is fresh, relevant, and intentional. Each
                campaign is designed around a larger business goal so every asset plays a role in the
                broader story you are telling.
              </p>
            </article>
            <article className="detail-card">
              <h2>Execution and Management</h2>
              <p>
                We help schedule and publish content, set up the tools you need, engage audiences, and
                manage campaigns so the customer experience feels cohesive across platforms.
              </p>
            </article>
            <article className="detail-card">
              <h2>Analytics and Optimization</h2>
              <p>
                We track what works and what does not, translate performance into useful insight, and
                keep refining the funnel through weekly and monthly reporting, strategy sessions, and
                ongoing testing.
              </p>
            </article>
            <article className="detail-card">
              <h2>Account Management</h2>
              <p>
                Every client is treated with close attention to detail. We prioritize responsiveness,
                collaboration, and long-term partnership because your experience matters as much as the
                output itself.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="section-kicker">How we work</p>
              <h2>A simple process that keeps strategy tied to execution.</h2>
            </div>
          </div>
          <div className="process-grid">
            <article className="process-card">
              <span className="process-number">01</span>
              <h3>Understand the business</h3>
              <p>Clarify goals, current constraints, audience dynamics, and what success actually means.</p>
            </article>
            <article className="process-card">
              <span className="process-number">02</span>
              <h3>Build the plan</h3>
              <p>Translate insight into positioning, messaging, channel choices, and campaign priorities.</p>
            </article>
            <article className="process-card">
              <span className="process-number">03</span>
              <h3>Create and launch</h3>
              <p>Develop content, campaigns, and systems that move the strategy into the market.</p>
            </article>
            <article className="process-card">
              <span className="process-number">04</span>
              <h3>Measure and refine</h3>
              <p>Use performance data to improve the funnel and make each next cycle sharper.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split-panel">
          <div className="panel-copy">
            <p className="section-kicker">Engagement model</p>
            <h2>Not every business needs the full stack right away.</h2>
            <p>
              Some clients need end-to-end support. Others need help with strategy, messaging, campaign
              creation, or analytics. We can shape the engagement around your goals and the stage your
              business is currently in.
            </p>
          </div>
          <div className="media-stack">
            <div className="engagement-card">
              <strong>Best fit for Kanos</strong>
              <ul className="clean-list">
                <li>Small businesses ready to scale intentionally</li>
                <li>Founders who want clearer brand positioning</li>
                <li>Teams that need strategic marketing support without excess complexity</li>
                <li>Businesses looking for a thoughtful long-term partner</li>
              </ul>
            </div>
            <div className="inline-image-card">
              <img
                src="/images/image6.jpg"
                alt="Client strategy conversation over coffee"
                className="section-image"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
