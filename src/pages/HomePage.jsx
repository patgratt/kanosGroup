import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <main>
      <section className="home-hero">
        <div className="container">
          <div className="hero-stage">
            <img
              src="/feedback-assets/image2.jpg"
              alt="New York skyline over the park"
              className="hero-stage-image"
            />
            <div className="hero-stage-overlay">
              <img
                src="/images/logo-wordmark-sand.png"
                alt="Kanos Marketing"
                className="hero-wordmark"
              />
              <div className="hero-base">
                <p className="hero-tagline">Turning experiences into stories</p>
                <p className="hero-intro">
                  Welcome to Kanos Marketing, your boutique agency committed to bringing your story to life
                  by connecting your identity to your audience.
                </p>
                <div className="cta-row">
                  <Link to="/contact" className="btn">
                    Start a conversation
                  </Link>
                  <Link to="/services" className="btn btn-ghost">
                    Explore services
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="section-kicker">Mission and Vision</p>
              <h2>The principles guiding how Kanos grows brands.</h2>
            </div>
          </div>
          <div className="mission-grid">
            <article className="statement-card">
              <p className="statement-label">Mission Statement</p>
              <p>
                Our mission is to help small businesses and organizations discover, craft, and
                communicate their authentic voice by emphasizing high-level, intentional strategies so
                that they grow into distinguished and purposeful brands.
              </p>
            </article>
            <article className="statement-card statement-card-alt">
              <p className="statement-label">Vision Statement</p>
              <p>
                We want to build a company that has a deep and accurate understanding of people and how
                they operate in the many different contexts of the world. We believe that when clear and
                creative insights meet curious, driven people, positive impacts can be made in the world.
              </p>
              <p>
                Whether that is irreplaceable brands breathing new life into the world, helping
                organizations articulate their messages better, or simply providing a fresh perspective to
                complex problems, we want to be on the forefront of strategic thinking.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="section-kicker">What we do</p>
              <h2>Services built as a progression from strategy to optimization.</h2>
            </div>
            <Link to="/services" className="text-link">
              Explore all services
            </Link>
          </div>
          <div className="service-flow">
            <article className="flow-card flow-card-green">
              <span className="flow-number">01</span>
              <h3>Strategy Development</h3>
              <p>
                We help you set relevant and realistic goals that align with the current state of your
                company. Then, we tailor marketing strategies that set you apart from the competition.
                We not only help you define your place in the market, but we define who your customer
                is and how they behave, so we can ground our strategy in a deep understanding of your
                audience. We believe this foundational step serves as an anchor for your company to
                build confidence and momentum in your marketing.
              </p>
            </article>
            <article className="flow-card flow-card-cream">
              <span className="flow-number">02</span>
              <h3>Content and Campaign Creation</h3>
              <p>
                Based on our strategy development, we create content that is fresh and relevant to your
                target customer, with strong intention behind every step of the creative process. Our
                campaigns are designed to help you achieve a sustainable, long-term brand positioning,
                with a custom multi-platform approach best suited for your business. Every campaign is
                designed with an end goal in mind, so that each piece of campaign serves to create a
                sum greater than its parts.
              </p>
            </article>
            <article className="flow-card flow-card-blue">
              <span className="flow-number">03</span>
              <h3>Execution and Management</h3>
              <p>
                We schedule and post the content for you with an editorial calendar, set up all the
                tools you need, engage with audiences, and manage ads to ensure your marketing
                ecosystem gives users a seamless experience across platforms. We continue to optimize
                throughout the campaign by testing creatives and tweaking budgets when necessary to
                give you insights and maximize your investment.
              </p>
            </article>
            <article className="flow-card flow-card-burgundy">
              <span className="flow-number">04</span>
              <h3>Analytics and Optimization</h3>
              <p>
                We show you where success actually comes from (and where it doesn’t) by tracking and
                reporting key metrics. We turn data into actionable insights with weekly and monthly
                reports and strategy sessions so we can plan for the future together. We continue to
                optimize your content to make sure your marketing funnel is solid and only becomes
                sharper with every campaign.
              </p>
            </article>
            <article className="flow-card flow-card-sand">
              <span className="flow-number">05</span>
              <h3>Account Management</h3>
              <p>
                Perhaps most importantly, every client we have is treated with full attention to detail
                as if you are our only client. We aim to build long-term relationships, prioritizing a
                partnership over just a transaction. Your success is tied to ours and we ultimately are
                client-first in everything we do. Whether that means regular check-in calls, rounds of
                iterations to build confidence, or being on call when you actually need us, we will
                ensure that your experience and our quality of work comes before all else.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container home-values-layout">
          <div className="panel-copy">
            <p className="section-kicker">Our philosophy</p>
            <h2>The values behind how we think, create, and partner.</h2>
            <p>
              These are the core principles that guide our work. The expanded thinking behind each value
              lives on the About Us page.
            </p>
            <Link to="/about" className="btn btn-ghost">
              Learn more
            </Link>
          </div>
          <div className="values-wheel" role="img" aria-label="Core values: Your voice is your currency, Quality over quantity, Curiosity, Integrity">
            <div className="values-wheel-hub">
              <span className="values-wheel-hub-kicker">Our</span>
              <span className="values-wheel-hub-title">Values</span>
            </div>
            <div className="values-wheel-spoke values-wheel-spoke-tl">
              <span>Your voice is your currency</span>
            </div>
            <div className="values-wheel-spoke values-wheel-spoke-tr">
              <span>Quality over quantity</span>
            </div>
            <div className="values-wheel-spoke values-wheel-spoke-bl">
              <span>Curiosity</span>
            </div>
            <div className="values-wheel-spoke values-wheel-spoke-br">
              <span>Integrity</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container founder-preview">
          <div className="founder-preview-copy">
            <p className="section-kicker">The Founder&apos;s Story</p>
            <h2>Built around the why behind every decision.</h2>
            <p>
              My name is Will Papazahariou and I founded Kanos Group so I could build a company that
              emphasizes the “Why” behind every single decision. I believe that when curious and driven
              people meet purposeful and passionate businesses, really good stories are produced as a
              result.
            </p>
            <p>
              This storytelling, feeling of community, and personal messaging is the core essence of any
              good brand we can think of.
            </p>
            <Link to="/about" className="btn">
              Learn More
            </Link>
          </div>
          <div className="founder-preview-media">
            <div className="founder-logo-card">
              <img
                src="/images/logo-mark.png"
                alt="Kanos Marketing monogram"
                className="founder-logo-image"
              />
            </div>
            <div className="inline-image-card founder-preview-image">
              <img
                src="/images/image6.jpg"
                alt="Business discussion representing thoughtful partnership"
                className="section-image"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
