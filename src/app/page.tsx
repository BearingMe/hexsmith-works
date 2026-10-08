import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Braces,
  Check,
  FileCheck2,
  GitBranch,
  ScanSearch,
  ShieldCheck,
  TestTube2,
} from "lucide-react";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { HeroVisual } from "@/components/sections/hero-visual";
import { capabilities, email, workflow } from "@/content/landing";

const capabilityIcons = [
  ScanSearch,
  GitBranch,
  ShieldCheck,
  FileCheck2,
  TestTube2,
  Braces,
];

export default function HomePage() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <SiteHeader />
      <main id="main-content">
        <section aria-labelledby="hero-title" className="hero-section" id="top">
          <div className="page-shell hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">
                <span className="eyebrow-rule" />
                HEXSMITH WORKS <span className="eyebrow-slash">/</span> INTRODUCING FORGE
              </p>
              <h1 id="hero-title">
                AI writes the code.
                <span>Who verifies it?</span>
              </h1>
              <p className="hero-description">
                Meet Forge, an AI-assisted verification platform designed to
                uncover defects, challenge assumptions, and strengthen the
                reliability of AI-generated software.
              </p>
              <div className="hero-actions">
                <Link
                  className="button button-primary button-default"
                  href={`mailto:${email}?subject=${encodeURIComponent("Let's talk about Forge")}`}
                >
                  Get in touch <ArrowUpRight aria-hidden="true" size={16} />
                </Link>
                <Link className="text-link" href="#approach">
                  Explore the approach <ArrowDown aria-hidden="true" size={15} />
                </Link>
              </div>
              <div className="hero-context">
                <span className="context-index">01</span>
                <span>Generated code is a hypothesis.</span>
                <span className="context-emphasis">Verification is the method.</span>
              </div>
            </div>
            <HeroVisual />
          </div>
          <div aria-hidden="true" className="hero-bottom-rule page-shell">
            <span>ENGINEERED TO QUESTION</span>
            <span className="hero-rule-center" />
            <span>DESIGNED TO VERIFY</span>
          </div>
        </section>

        <section aria-labelledby="gap-title" className="gap-section section-pad" id="problem">
          <div className="page-shell">
            <div className="section-heading gap-heading">
              <div>
                <p className="eyebrow section-eyebrow">
                  <span>01</span> THE VERIFICATION GAP
                </p>
                <h2 id="gap-title">
                  Generation has accelerated.
                  <span>Verification hasn’t.</span>
                </h2>
              </div>
              <p className="section-intro">
                AI makes it easier to produce changes. Understanding what those
                changes mean—and whether they hold up—still takes engineering
                judgment.
              </p>
            </div>

            <div className="risk-layout">
              <div className="risk-axis" aria-hidden="true">
                <span className="axis-label mono-label">REVIEW DEPTH</span>
                <span className="axis-line" />
                <span className="axis-marker axis-marker-top" />
                <span className="axis-marker axis-marker-bottom" />
                <span className="axis-tick axis-tick-one" />
                <span className="axis-tick axis-tick-two" />
                <span className="axis-tick axis-tick-three" />
                <span className="axis-note mono-label">SIGNAL / RISK</span>
              </div>
              <div className="risk-list">
                <article className="risk-item">
                  <span className="risk-number">01</span>
                  <div className="risk-signal signal-one" aria-hidden="true">
                    <i /><i /><i /><i /><i />
                  </div>
                  <div className="risk-copy">
                    <h3>Hidden defects</h3>
                    <p>
                      Generated code can look convincing while carrying subtle
                      logic errors, unsafe assumptions, and unexpected edge cases.
                    </p>
                  </div>
                  <span className="risk-tag mono-label">LOGIC / EDGE CASES</span>
                </article>
                <article className="risk-item">
                  <span className="risk-number">02</span>
                  <div className="risk-signal signal-two" aria-hidden="true">
                    <i /><i /><i /><i /><i />
                  </div>
                  <div className="risk-copy">
                    <h3>Architectural drift</h3>
                    <p>
                      Individually plausible changes can quietly weaken
                      boundaries, consistency, and long-term maintainability.
                    </p>
                  </div>
                  <span className="risk-tag mono-label">BOUNDARIES / DEBT</span>
                </article>
                <article className="risk-item">
                  <span className="risk-number">03</span>
                  <div className="risk-signal signal-three" aria-hidden="true">
                    <i /><i /><i /><i /><i />
                  </div>
                  <div className="risk-copy">
                    <h3>Unverified confidence</h3>
                    <p>
                      A successful generation—or a superficial passing test—does
                      not prove a system behaves under real conditions.
                    </p>
                  </div>
                  <span className="risk-tag mono-label">TESTS / EVIDENCE</span>
                </article>
              </div>
            </div>
            <div className="risk-footnote">
              <span className="risk-footnote-mark">↗</span>
              <p>
                The output is faster. The responsibility to understand it hasn’t
                moved.
              </p>
              <span className="mono-label">THE GAP IS IN REVIEW</span>
            </div>
          </div>
        </section>

        <section aria-labelledby="forge-title" className="forge-section section-pad" id="approach">
          <div className="page-shell" id="forge">
            <div className="forge-heading">
              <div className="forge-heading-main">
                <p className="eyebrow section-eyebrow">
                  <span>02</span> INTRODUCING FORGE
                </p>
                <h2 id="forge-title">
                  Not another coding assistant.
                  <span>A verification layer.</span>
                </h2>
              </div>
              <p className="section-intro">
                Forge is designed to inspect AI-assisted software changes,
                investigate potential weaknesses, challenge proposed
                corrections, and validate results through reproducible evidence.
              </p>
            </div>

            <div aria-label="Forge's proposed verification workflow" className="workflow-track">
              {workflow.map((step, index) => (
                <article className="workflow-step" key={step.number}>
                  <div className="workflow-step-top">
                    <span className="workflow-number">{step.number}</span>
                    {index < workflow.length - 1 && (
                      <span aria-hidden="true" className="workflow-connector">
                        <span />
                        <ArrowRight size={14} />
                      </span>
                    )}
                  </div>
                  <h3>{step.name}</h3>
                  <p>{step.description}</p>
                  <span className="workflow-indicator" aria-hidden="true">
                    <span />
                    {index === workflow.length - 1 ? "EVIDENCE" : "PROCESS"}
                  </span>
                </article>
              ))}
            </div>

            <div className="workflow-foot">
              <span className="mono-label">A PROPOSED ENGINEERING WORKFLOW</span>
              <span className="workflow-foot-note">
                Human judgment stays in the loop. Evidence stays attached.
              </span>
            </div>
          </div>
        </section>

        <section aria-labelledby="capabilities-title" className="capabilities-section section-pad" id="capabilities">
          <div className="page-shell capabilities-layout">
            <div className="capabilities-intro">
              <p className="eyebrow section-eyebrow">
                <span>03</span> ENGINEERING CAPABILITIES
              </p>
              <h2 id="capabilities-title">
                More scrutiny.
                <span>Less guesswork.</span>
              </h2>
              <p>
                The capabilities we’re exploring connect technical findings to
                reasoning you can inspect and evidence you can reproduce.
              </p>
              <div className="capabilities-index" aria-hidden="true">
                <span>HX</span>
                <span>04—18</span>
                <span>SYS / VERIFICATION</span>
              </div>
            </div>
            <div className="capability-list">
              {capabilities.map((capability, index) => {
                const Icon = capabilityIcons[index];
                return (
                  <article className="capability-item" key={capability.number}>
                    <span className="capability-number mono-label">{capability.number}</span>
                    <span className="capability-icon" aria-hidden="true">
                      <Icon size={19} strokeWidth={1.65} />
                    </span>
                    <div>
                      <h3>{capability.name}</h3>
                      <p>{capability.description}</p>
                    </div>
                    <span className="capability-arrow" aria-hidden="true">
                      ↗
                    </span>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section aria-labelledby="philosophy-title" className="philosophy-section section-pad" id="philosophy">
          <div className="page-shell philosophy-layout">
            <div className="philosophy-aside">
              <p className="eyebrow section-eyebrow">
                <span>04</span> ENGINEERING OVER ASSUMPTION
              </p>
              <div className="seal-diagram" aria-hidden="true">
                <span className="seal-ring seal-ring-outer" />
                <span className="seal-ring seal-ring-mid" />
                <span className="seal-ring seal-ring-inner" />
                <span className="seal-cross seal-cross-horizontal" />
                <span className="seal-cross seal-cross-vertical" />
                <span className="seal-center"><Check size={18} /></span>
                <span className="seal-label seal-label-top">INSPECTED</span>
                <span className="seal-label seal-label-bottom">BY EVIDENCE</span>
              </div>
              <span className="mono-label philosophy-aside-note">A STANDARD, NOT A SHORTCUT</span>
            </div>
            <div className="philosophy-copy">
              <h2 id="philosophy-title">
                Software isn’t reliable because it was generated.
                <span>It’s reliable because it was verified.</span>
              </h2>
              <div className="philosophy-body">
                <p>
                  A forged component earns trust by withstanding stress beyond
                  the moment it takes shape. Software deserves the same rigor:
                  understand it, question it, test it, and keep the evidence.
                </p>
                <p>
                  AI can accelerate how we build. Engineering discipline is how
                  we make that speed sustainable.
                </p>
              </div>
              <div className="principle-line">
                <span className="principle-mark" aria-hidden="true">✳</span>
                <span>AI-generated code is a hypothesis to verify.</span>
                <span className="mono-label">HX / PRINCIPLE 01</span>
              </div>
            </div>
          </div>
        </section>

        <section aria-labelledby="status-title" className="status-section">
          <div className="page-shell status-inner">
            <div className="status-indicator">
              <span className="status-dot" />
              <span className="mono-label">CURRENT STATUS</span>
            </div>
            <h2 id="status-title">Currently in development.</h2>
            <p>
              We’re exploring how AI-assisted reasoning, adversarial evaluation,
              and deterministic engineering tools can work together to make
              software verification more dependable.
            </p>
            <span className="status-foot mono-label">EARLY-STAGE INITIATIVE / IN DEVELOPMENT</span>
          </div>
          <div aria-hidden="true" className="status-coordinate">HX—01</div>
        </section>

        <section aria-labelledby="contact-title" className="contact-section section-pad" id="contact">
          <div className="page-shell contact-layout">
            <div className="contact-kicker">
              <span className="eyebrow section-eyebrow">
                <span>05</span> OPEN CHANNEL
              </span>
              <span className="contact-signal"><span /> AVAILABLE FOR CONVERSATION</span>
            </div>
            <div className="contact-main">
              <h2 id="contact-title">Let’s build software worth trusting.</h2>
              <div className="contact-bottom">
                <p>
                  Interested in software reliability, AI-assisted engineering,
                  or the future of code verification? We’d like to hear from you.
                </p>
                <Link
                  className="button button-primary contact-button"
                  href={`mailto:${email}?subject=${encodeURIComponent("Let's talk about software reliability")}`}
                >
                  Contact Hexsmith <ArrowUpRight aria-hidden="true" size={17} />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
