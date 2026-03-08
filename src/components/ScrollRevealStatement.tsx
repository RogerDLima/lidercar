"use client";

import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import styles from './ScrollRevealStatement.module.css';

gsap.registerPlugin(ScrollTrigger);

interface ScrollRevealStatementProps {
    primaryText: string;
    hoverText: string;
    href?: string;
}

export default function ScrollRevealStatement({ primaryText, hoverText, href }: ScrollRevealStatementProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLHeadingElement>(null);

    useGSAP(() => {
        if (!textRef.current) return;

        gsap.to(textRef.current, {
            backgroundSize: '100%',
            ease: 'none',
            scrollTrigger: {
                trigger: textRef.current,
                start: 'center 80%',
                end: 'center 20%',
                scrub: true,
            },
        });
    }, { scope: containerRef });

    const content = (
        <h2 ref={textRef} className={styles.text}>
            {primaryText}
            <span>{hoverText}</span>
        </h2>
    );

    return (
        <section className={styles.container} ref={containerRef}>
            {href ? (
                <a href={href} className={styles.link} target={href.startsWith('http') ? "_blank" : undefined} rel="noopener noreferrer">
                    {content}
                </a>
            ) : content}
        </section>
    );
}
