import "./App.css";
import logo from "./assets/logo.png";
import appHero from "./assets/apphero.jpg";
import demoVideo from "./assets/Napoles & Co..mp4";

const YOUTUBE_EMBED_URL = "";
const VIDEO_SRC = demoVideo;

const plans = [
  {
    label: "Student Plan",
    price: "₱149",
    blurb: "For architecture, engineering, and real estate students.",
    items: [
      "Up to 5 blueprint scans monthly",
      "Basic AR walkthrough",
      "Watermarked exports",
      "Limited cloud storage",
    ],
  },
  {
    label: "Professional Plan",
    price: "₱799",
    blurb: "For contractors, architects, engineers, and realtors.",
    featured: true,
    items: [
      "Unlimited blueprint scans",
      "Full AR walkthrough",
      "Manual scaling tools",
      "Client presentation mode",
      "Priority processing",
    ],
  },
  {
    label: "Enterprise Plan",
    price: "₱2,999",
    blurb: "For firms, developers, and construction companies.",
    items: [
      "Multi-user team access",
      "Shared project library",
      "Collaboration tools",
      "Admin dashboard",
      "Dedicated support",
    ],
  },
];

const problems = [
  {
    title: "2D plans are hard to read",
    text: "Most homeowners can't turn flat lines into a 3D space in their heads, so they hesitate or approve blindly.",
  },
  {
    title: "3D walkthroughs take days",
    text: "Building a walkthrough in Revit or SketchUp takes days or even weeks just to show a client one layout.",
  },
  {
    title: "Revisions get expensive",
    text: "Clients only realize what they wanted after construction starts, so change orders pile up.",
  },
  {
    title: "Alternatives fall short",
    text: "Model houses are staged with decorator budgets, and physical scale models cost ₱5,000–₱30,000 and can't be edited.",
  },
];

const steps = [
  { n: "01", title: "Scan Blueprint", text: "Scan or upload a traditional 2D floor plan with your phone." },
  { n: "02", title: "Process with AI", text: "The AI reads the layout, calculates dimensions, and builds the model." },
  { n: "03", title: "Generate AR", text: "A life-sized, to-scale AR model is placed in the real world." },
  { n: "04", title: "Walk Through", text: "Walk the space, adjust dimensions, and decide before a wall goes up." },
];

const market = [
  { value: "₱900B+", label: "TAM", text: "Philippine construction and real estate industry (2024 est.)" },
  { value: "~150,000", label: "SAM", text: "Licensed architects, contractors, realtors, and architecture students" },
  { value: "3,200–7,500", label: "SOM", text: "Realistic early adopters in Metro Manila and CALABARZON" },
];

const competitors = [
  ["Blueprint scan-to-AR (AI)", "✗", "✗", "✗", "✗", "✓"],
  ["Real-world AR walkthrough", "✗", "✗", "✗", "✗", "✓"],
  ["Time to walkthrough", "Medium", "Days–weeks", "Medium–high", "Medium", "Seconds–minutes"],
  ["Hardware needed", "Medium", "Workstation", "Medium–high", "Low–medium", "Smartphone"],
];

const team = [
  { name: "Aliyah Kylie Napoles", role: "Project Lead" },
  { name: "Cyrene Isabelle Wenceslao", role: "Operations & Strategy Lead" },
  { name: "Cassandra Leiralyn Magistrado", role: "Technical Manager" },
  { name: "Jhon Meloy Morallo", role: "Lead System Developer" },
  { name: "Bj Morta", role: "Marketing" },
];

export default function App() {
  return (
    <main>
      <nav className="topbar">
        <div className="logo">
          <img src={logo} alt="Augmented Realties logo" />
        </div>

        <div className="navPill">
          <a href="#problem">Problem</a>
          <a href="#how">How it Works</a>
          <a href="#demo">Demo</a>
          <a href="#research">Research</a>
          <a href="#features">Plans</a>
          <a href="#market">Market</a>
          <a href="#team">Team</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero">
        <p className="tag">Napoles & Co. · AI + AR Blueprint Visualization</p>

        <h1>
          Experience your future
          <br />
          space before it exists.
        </h1>

        <p className="sub">
          Augmented Realties transforms traditional 2D blueprints into immersive
          AR walkthroughs, helping clients and professionals understand spaces
          clearly before construction begins.
        </p>

        <div className="actions">
          <a className="primary" href="#demo">Watch the Demo</a>
          <a className="secondary" href="#features">View Plans</a>
        </div>

        <p className="heroMotto">See it. Walk it. Build it.</p>
      </section>

      <section id="problem" className="section">
        <p className="smallTag">The Problem</p>
        <h2>
          Flat blueprints cause
          <br />
          costly misunderstandings.
        </h2>

        <div className="problemGrid">
          {problems.map((p) => (
            <div className="step" key={p.title}>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </div>
          ))}
        </div>

        <div className="statStrip">
          <div><strong>98%</strong><span>of construction projects face cost overruns or delays</span></div>
          <div><strong>5–20%</strong><span>of contract value lost to rework</span></div>
          <div><strong>50%+</strong><span>rework reduction reported with AR on real projects</span></div>
        </div>
        <p className="source">
          Sources: Noghabaei et al. (MDPI, 2020); GAMMA AR (2025). See the Phase 1 paper for full references.
        </p>
      </section>

      <section id="how" className="section">
        <p className="smallTag">How It Works</p>
        <h2>
          A simple flow from
          <br />
          blueprint to walkthrough.
        </h2>

        <div className="steps">
          {steps.map((s) => (
            <div className="step" key={s.n}>
              <span>STEP {s.n}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="demo" className="section">
        <p className="smallTag">Product Demo</p>
        <h2>
          See Augmented Realties
          <br />
          in action.
        </h2>

        <div className="videoFrame">
          {YOUTUBE_EMBED_URL ? (
            <iframe
              src={YOUTUBE_EMBED_URL}
              title="Augmented Realties demo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <video controls preload="metadata" poster={appHero} playsInline>
              <source src={VIDEO_SRC} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
        </div>
      </section>

      <section id="features" className="section">
        <p className="smallTag">Subscription Plans</p>

        <h2>
          Flexible access for
          <br />
          students, professionals, and teams.
        </h2>

        <div className="pricingCards">
          {plans.map((plan) => (
            <div
              key={plan.label}
              className={`priceCard${plan.featured ? " featuredPlan" : ""}`}
            >
              <p className="planLabel">{plan.label}</p>
              <h3>
                {plan.price}
                <span>/month</span>
              </h3>
              <p>{plan.blurb}</p>
              <ul>
                {plan.items.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
              <a
                className="planCta"
                href={`mailto:cyreneisabellewenceslao@gmail.com?subject=${encodeURIComponent(`Augmented Realties ${plan.label} enquiry`)}&body=${encodeURIComponent(`Hi, I would like to know more about the ${plan.label} at ${plan.price}/month.`)}`}
              >
                Ask about this plan <span aria-hidden="true">→</span>
              </a>
            </div>
          ))}
        </div>
      </section>

      <section id="research" className="section">
        <p className="smallTag">Customer Research</p>
        <h2>
          Grounded in real
          <br />
          project conversations.
        </h2>

        <p className="researchIntro">
          Early interviews explored where blueprint visualization creates friction
          for clients and professionals. These conversations are qualitative
          feedback, not a market-wide survey.
        </p>

        <div className="researchGrid">
          <article className="researchQuote">
            <p className="researchSource">Licensed realtor · 10+ years · Dasmariñas</p>
            <blockquote>
              “Seeing a renovation layout attached to your existing home, up to
              scale that would make it a hundred times easier for a client to say yes.”
            </blockquote>
            <p>Renovations and additions were the most compelling use case in this interview.</p>
          </article>
          <article className="researchQuote">
            <p className="researchSource">Engineering student · architecture and construction background</p>
            <blockquote>
              “Basically cutting a job that takes days down to a few minutes.”
            </blockquote>
            <p>The student highlighted faster walkthrough creation and fewer revision cycles.</p>
          </article>
          <article className="researchQuote">
            <p className="researchSource">A practical consideration</p>
            <blockquote>
              AR can make a plan easier to understand, but it may not replace the
              emotional confidence of visiting a real home.
            </blockquote>
            <p>We see the app as a way to prepare and communicate, not a substitute for every site visit.</p>
          </article>
        </div>

        <div className="researchStats">
          <div>
            <strong>38%</strong>
            <span>of construction rework linked to poor communication</span>
          </div>
          <div>
            <strong>29%</strong>
            <span>linked to inadequate visualization</span>
          </div>
        </div>
        <p className="source">
          Noghabaei et al., “Trend Analysis on Adoption of Virtual and Augmented Reality in the AEC Industry,” MDPI Data, 2020. Interview findings: Napoles & Co. Phase 1 research.
        </p>
      </section>

      <section id="market" className="section">
        <p className="smallTag">Market & Competition</p>
        <h2>
          Built for the growing
          <br />
          Philippine market.
        </h2>

        <div className="marketGrid">
          {market.map((m) => (
            <div className="step" key={m.label}>
              <span>{m.label}</span>
              <h3>{m.value}</h3>
              <p>{m.text}</p>
            </div>
          ))}
        </div>

        <div className="tableWrap">
          <table>
            <thead>
              <tr>
                <th></th>
                <th>SketchUp</th>
                <th>Revit</th>
                <th>AutoCAD</th>
                <th>Planner 5D</th>
                <th className="us">Augmented Realties</th>
              </tr>
            </thead>
            <tbody>
              {competitors.map((row) => (
                <tr key={row[0]}>
                  {row.map((cell, i) => (
                    <td key={i} className={i === 5 ? "us" : ""}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section id="prototype" className="section prototype">
        <p className="smallTag">Prototype Stack</p>

        <h2>
          Built with React Native,
          <br />
          Supabase, AI, and AR.
        </h2>

        <p>
          The app prototype focuses on a clean mobile interface, cloud-based
          project storage, blueprint scanning, and immersive visualization.
        </p>

        <img className="protoImg" src={appHero} alt="Augmented Realties blueprint branding" />
      </section>

      <section id="team" className="section">
        <p className="smallTag">The Team</p>
        <h2>Napoles & Co.</h2>

        <div className="teamGrid">
          {team.map((t) => (
            <div className="step teamCard" key={t.name}>
              <h3>{t.name}</h3>
              <p>{t.role}</p>
            </div>
          ))}
        </div>
        <p className="source">College of Information Technology · National University – Dasmariñas</p>
      </section>

      <footer id="contact">
        <div>
          <h3>Napoles & Co.</h3>
          <p>AR architectural visualization</p>
          <p>
            <a href="mailto:cyreneisabellewenceslao@gmail.com">cyreneisabellewenceslao@gmail.com</a> · Governor's Drive, Sampaloc 1, Dasmariñas City, Cavite
          </p>
        </div>

        <p>© 2026 Augmented Realties</p>
      </footer>
    </main>
  );
}
