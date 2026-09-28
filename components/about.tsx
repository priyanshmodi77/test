import type { CSSProperties } from "react";
import styles from "./sections.module.css";

const LEAD =
  "My path into technology started with Computer Engineering — and somewhere along the way, my attention shifted from just building things to understanding what's happening inside them.";

const PARAGRAPHS = [
  "That shift is what pulled me toward data analytics. I found myself drawn to the layer beneath the interface — the numbers, the patterns, the questions a dataset can actually answer if you ask it the right way. It's become the clearest direction in my work today.",
  "I've spent time working hands-on across the data lifecycle: cleaning and structuring raw data, writing SQL to pull answers out of it, building reports in Excel and dashboards in Power BI, and reaching for Python when the analysis needs to go further. Alongside that, my development background — databases, web technologies, the systems data actually lives in — means I don't analyze data in isolation. I understand where it comes from.",
  "That combination has played out through real internship experience — as a Data Analyst Intern and a Web Development Intern — and through projects like an end-to-end e-commerce sales pipeline and a churn analysis across thousands of customer records. Each one taught me the same lesson: the value was never in the data itself, it was in the clarity I could pull out of it.",
  "That's the direction I'm heading — building a strong foundation as a Data Analyst, while treating my development background as an advantage rather than a separate skill. I'm interested in the full picture: the pattern in the numbers, the problem behind the request, and the system that made the data possible in the first place.",
];

export default function About() {
  return (
    <section id="about" className={styles.section} aria-labelledby="about-heading">
      <div className={styles.container}>
        <h2 id="about-heading" className={styles.heading} data-reveal>
          About
        </h2>

        <div className={styles.aboutGrid}>
          <p className={styles.aboutLead} data-reveal>
            {LEAD}
          </p>

          <div className={styles.aboutBody}>
            {PARAGRAPHS.map((paragraph, i) => (
              <p
                key={paragraph}
                className={styles.body}
                data-reveal
                style={
                  { "--reveal-delay": `${0.1 + i * 0.08}s` } as CSSProperties
                }
              >
                {paragraph}
              </p>
            ))}

            <a
              className={styles.resumeLink}
              href="/resume/Priyansh-Modi-Resume.pdf"
              download="Priyansh-Modi-Resume.pdf"
              data-reveal
              style={{ "--reveal-delay": "0.42s" } as CSSProperties}
            >
              <span className={styles.resumeLinkArrow} aria-hidden="true">
                ↓
              </span>
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
