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
          <div className="about-hero-card">
            <p className="statement-label">How to read this page</p>
            <p>
              Think of each practice area as part of a larger funnel, moving from strategy to creation,
              then execution, optimization, and ongoing account management.
            </p>
            <p>
              We can support the full stack or focus on the specific stage where your business needs the
              most help right now.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container practice-stack">
          <article className="practice-row">
            <div className="practice-copy">
              <p className="section-kicker">01</p>
              <h2>Strategy Development</h2>
              <p>
                We help you set relevant and realistic goals that align with the current state of your
                company. Then, we tailor marketing strategies that set you apart from the competition. We
                not only help you define your place in the market, but we define who your customer is and
                how they behave, so we can ground our strategy in a deep understanding of your audience.
                We believe this foundational step serves as an anchor for your company to build confidence
                and momentum in your marketing.
              </p>
              <ul className="clean-list">
                <li>Goal setting</li>
                <li>Market Research &amp; Consumer Behavior</li>
                <li>Competitor Audits</li>
                <li>Value Proposition</li>
                <li>Brand Positioning</li>
                <li>Creative + Content Strategy</li>
                <li>Establishing KPIs</li>
              </ul>
            </div>
            <div className="practice-media">
              <img
                src="/images/image2.jpg"
                alt="Strategy planning session with notes and roadmap"
                className="practice-image"
              />
            </div>
          </article>

          <article className="practice-row practice-row-reverse">
            <div className="practice-copy">
              <p className="section-kicker">02</p>
              <h2>Content and Campaign Creation</h2>
              <p>
                Based on our strategy development, we create content that is fresh and relevant to your
                target customer, with strong intention behind every step of the creative process. Our
                campaigns are designed to help you achieve a sustainable, long-term brand positioning,
                with a custom multi-platform approach best suited for your business. Every campaign is
                designed with an end goal in mind, so that each piece of campaign serves to create a sum
                greater than its parts.
              </p>
              <ul className="clean-list">
                <li>Web development</li>
                <li>Custom Landing Pages</li>
                <li>Social Media Content</li>
                <li>Blog Posts</li>
                <li>White Papers</li>
                <li>Ads + Copy</li>
                <li>Articles</li>
                <li>Email campaigns</li>
                <li>Case studies</li>
                <li>Interviews</li>
                <li>User guides</li>
                <li>Newsletters</li>
              </ul>
            </div>
            <div className="practice-media">
              <img
                src="/images/image4.jpg"
                alt="Content creator working in front of a camera"
                className="practice-image"
              />
            </div>
          </article>

          <article className="practice-row">
            <div className="practice-copy">
              <p className="section-kicker">03</p>
              <h2>Execution and Management</h2>
              <p>
                We schedule and post the content for you with an editorial calendar, set up all the
                tools you need, engage with audiences, and manage ads to ensure your marketing ecosystem
                gives users a seamless experience across platforms. We continue to optimize throughout the
                campaign by testing creatives and tweaking budgets when necessary to give you insights and
                maximize your investment.
              </p>
              <ul className="clean-list">
                <li>Launching campaigns</li>
                <li>Technical implementation</li>
                <li>Social media management</li>
                <li>Paid ad management</li>
                <li>Web maintenance</li>
              </ul>
            </div>
            <div className="practice-media">
              <img
                src="/images/image1.jpg"
                alt="Phone held up in a city environment representing digital execution"
                className="practice-image"
              />
            </div>
          </article>

          <article className="practice-row practice-row-reverse">
            <div className="practice-copy">
              <p className="section-kicker">04</p>
              <h2>Analytics and Optimization</h2>
              <p>
                We show you where success actually comes from (and where it doesn’t) by tracking and
                reporting key metrics. We turn data into actionable insights with weekly and monthly
                reports and strategy sessions so we can plan for the future together. We continue to
                optimize your content to make sure your marketing funnel is solid and only becomes
                sharper with every campaign.
              </p>
              <ul className="clean-list">
                <li>Performance optimization</li>
                <li>Website and Account analytics</li>
                <li>Weekly/monthly reports</li>
                <li>Strategy sessions</li>
                <li>Remarketing</li>
              </ul>
            </div>
            <div className="practice-media">
              <img
                src="/images/image3.png"
                alt="Team reviewing analytics and performance documents"
                className="practice-image"
              />
            </div>
          </article>

          <article className="practice-row">
            <div className="practice-copy">
              <p className="section-kicker">05</p>
              <h2>Account Management</h2>
              <p>
                Perhaps most importantly, every client we have is treated with full attention to detail as
                if you are our only client. We aim to build long-term relationships, prioritizing a
                partnership over just a transaction. Your success is tied to ours and we ultimately are
                client-first in everything we do. Whether that means regular check-in calls, rounds of
                iterations to build confidence, or being on call when you actually need us, we will
                ensure that your experience and our quality of work comes before all else.
              </p>
              <ul className="clean-list">
                <li>Resource and timeline management</li>
                <li>Regular feedback and check-in calls</li>
                <li>Strategic guidance</li>
                <li>Email and phone support</li>
                <li>Live support</li>
              </ul>
            </div>
            <div className="practice-media">
              <img
                src="/images/image6.jpg"
                alt="Client meeting representing account management and partnership"
                className="practice-image"
              />
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
