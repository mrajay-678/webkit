"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./Resume.module.scss";

import Image from "next/image";
import Container from "@/components/UI/Layout/Layout";
import FancyButton from "@/components/UI/Elements/Button/Button";
import commonConfig from "@/database/config/metadata.json";
import Link from "next/link";

export default function Resume() {
  const container = useRef();
  const cardGroup = useRef();

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      // CV Card
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: cardGroup.current,
          start: "top 75%",
          end: "top top",
          scrub: true,
          toggleActions: "play none none reverse",
        },
      });
      tl.to(
        `.${styles.cardV1}`,
        {
          rotate: "-6deg",
          scale: 1.05,
        },
        0
      );
      tl.to(
        `.${styles.cardV2}`,
        {
          rotate: "6deg",
          scale: 1.05,
          x: "5%",
        },
        0
      );
    },
    { scope: container }
  );

  return (
    <section
      className={styles.section}
      ref={container}
      id={"resume"}
    >
      <Container>
        <div className={styles.content}>
          <div
            className={styles.cardGroup}
            ref={cardGroup}
          >
            <div className={`${styles.card} ${styles.cardV1}`}>
              <div className={styles.cardInner}>
                <div className={styles.cardTitle}>Ajay Tiwari</div>
                <div className={styles.cardDesc}>Frontend Developer</div>
                <hr />
                <p>
                  I am a seasoned frontend web developer with over three years of industry experience and a Bachelor's degree in Information Technology from SN College. Proficient in HTML, CSS,
                  JavaScript, React.js, Next.js, Tailwind CSS, and Sass, I specialize in crafting visually appealing and functionally robust websites tailored to diverse client needs. My expertise
                  extends to WordPress development, and I have a proven track record of delivering innovative, user-centric solutions that drive business success.
                </p>
                <div>
                  <Link
                    href={`mailto:${commonConfig.personal.email}`}
                    target={"_blank"}
                  >
                    {commonConfig.personal.email}
                  </Link>
                  <span>
                    {commonConfig.personal.city}, {commonConfig.personal.state}
                  </span>
                </div>
                <hr />
                <div className={styles.cardSectionTitle}>WORK EXPERIENCE</div>
                <p>
                  Web Developer | iThink Logistics <br />
                  Web Developer | NYCUT Design Lab <br />
                </p>
              </div>
              <figure className={styles.figure}>
                <Image
                  src="/yasin-genc-photo.jpeg"
                  alt="Yasin Genc"
                  width={150}
                  height={150}
                />
              </figure>
            </div>
            <div className={`${styles.card} ${styles.cardV2}`}>
              <div className={styles.cardInner}>
                <Image
                  src="/code-snippet.svg"
                  alt="Code Snippet"
                  width={330}
                  height={480}
                />
              </div>
            </div>
          </div>

          <div className={styles.cta}>
            <FancyButton
              theme="button-1"
              target={"_blank"}
              link={commonConfig.personal.resumeURL}
            >
              View Resume
            </FancyButton>
          </div>
          <div className={styles.links}>
            <Link
              href={`${commonConfig.social.linkedin}`}
              target={"_blank"}
            >
              LinkedIn
            </Link>
            <Link
              href={`${commonConfig.social.github}`}
              target={"_blank"}
            >
              GitHub
            </Link>
            <Link
              href={`${commonConfig.social.codepen}`}
              target={"_blank"}
            >
              CodePen
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
