import type { CSSProperties } from "react";
import styles from "./sections.module.css";
import TiltCard from "./tilt-card";

type Area = {
  index: string;
  title: string;
  items?: string[];
  pairs?: [string, string][];
};

const AREAS: Area[] = [
  {
    index: "01",
    title: "Data Analytics",
    items: [
      "SQL",
      "Advanced Excel",
      "Power BI",
      "Power Query",
      "DAX",
      "Python",
      "Data Cleaning",
      "Data Visualization",
      "Reporting & Insights",
    ],
  },
  {
    index: "02",
    title: "Development",
    items: [
      "HTML / CSS / JavaScript",
      "PHP",
      "React / Next.js",
      "Node.js",
      "MySQL",
      "REST APIs",
    ],
  },
  {
    index: "03",
    title: "Problem Solving",
    pairs: [
      ["Data", "Insights"],
      ["Business Problem", "Solution"],
      ["Analysis", "Decision"],
      ["Idea", "Working Product"],
    ],
  },
];

export default function Capabilities() {
  return (
    <section
      id="capabilities"
      className={styles.section}
      aria-labelledby="capabilities-heading"
    >
      <div className={styles.container}>
        <h2 id="capabilities-heading" className={styles.heading} data-reveal>
          Capabilities
        </h2>

        <div className={styles.capabilitiesGrid}>
          {AREAS.map((area, i) => (
            <div
              key={area.index}
              className={styles.capabilityCol}
              data-reveal
              style={{ "--reveal-delay": `${i * 0.1}s` } as CSSProperties}
            >
              <TiltCard className={styles.capabilityCard}>
                <span className={styles.capabilityIndex} aria-hidden="true">
                  {area.index}
                </span>
                <h3 className={styles.capabilityTitle}>{area.title}</h3>

                {area.items ? (
                  <p className={styles.capabilityList}>
                    {area.items.join(" · ")}
                  </p>
                ) : null}

                {area.pairs ? (
                  <ul className={styles.capabilityPairs}>
                    {area.pairs.map(([from, to]) => (
                      <li key={from}>
                        <span>{from}</span>
                        <span
                          className={styles.capabilityArrow}
                          aria-hidden="true"
                        >
                          →
                        </span>
                        <span>{to}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </TiltCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
