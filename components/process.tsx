import type { CSSProperties } from "react";
import styles from "./sections.module.css";

type Step = {
  index: string;
  title: string;
  description: string;
};

const STEPS: Step[] = [
  {
    index: "01",
    title: "Understand",
    description:
      "Understand the business problem, requirements, and questions the data needs to answer.",
  },
  {
    index: "02",
    title: "Prepare",
    description:
      "Clean, validate, structure, and transform raw data into reliable datasets.",
  },
  {
    index: "03",
    title: "Analyze",
    description:
      "Use SQL, Excel, Python and analytical techniques to identify trends, patterns, relationships and anomalies.",
  },
  {
    index: "04",
    title: "Visualize",
    description: "Turn findings into clear dashboards and reports.",
  },
  {
    index: "05",
    title: "Deliver",
    description: "Convert analysis into clear, actionable insights.",
  },
];

export default function Process() {
  return (
    <section
      id="process"
      className={styles.section}
      aria-labelledby="process-heading"
    >
      <div className={styles.container}>
        <h2 id="process-heading" className={styles.heading} data-reveal>
          How I Work
        </h2>

        <ol className={styles.processList}>
          {STEPS.map((step, i) => (
            <li
              key={step.index}
              className={styles.processRow}
              data-reveal
              style={{ "--reveal-delay": `${i * 0.07}s` } as CSSProperties}
            >
              <span className={styles.processIndex} aria-hidden="true">
                {step.index}
              </span>
              <div>
                <h3 className={styles.processTitle}>{step.title}</h3>
                <p className={styles.processDescription}>
                  {step.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
