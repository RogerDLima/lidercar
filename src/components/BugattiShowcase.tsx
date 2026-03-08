"use client";

import React, { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './BugattiShowcase.module.css';

gsap.registerPlugin(ScrollTrigger);

export default function BugattiShowcase() {
    const containerRef = useRef<HTMLDivElement>(null);
    const wrapperRef = useRef<HTMLDivElement>(null);
    const [scale, setScale] = useState(1);

    useEffect(() => {
        const updateScale = () => {
            if (wrapperRef.current) {
                // Add some safe margin for mobile screens to avoid edge touching
                const parentWidth = wrapperRef.current.clientWidth;
                const paddedWidth = parentWidth < 1024 ? parentWidth - 32 : parentWidth;
                const newScale = Math.min(1, paddedWidth / 980);
                setScale(newScale);
                ScrollTrigger.refresh();
            }
        };

        // Initial setup
        updateScale();

        // Listen for window resize
        window.addEventListener('resize', updateScale);
        return () => window.removeEventListener('resize', updateScale);
    }, []);

    useGSAP(() => {
        if (!containerRef.current) return;
        const rulers = gsap.utils.toArray('.' + styles.rulerBox);
        const tl = gsap.timeline({
            repeat: -1,
            repeatDelay: 4,
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 70%", // Start when container enters viewport
            }
        });

        // 1. Rulers Fall In
        tl.fromTo(rulers,
            { height: 0, top: 0, backgroundColor: "#000", borderColor: "red", rotation: 720, autoAlpha: 0 },
            { height: 330, backgroundColor: "transparent", transformOrigin: "bottom", borderColor: "#777", rotation: 0, autoAlpha: 0.3, ease: "back.out", stagger: 0.1, duration: 0.3 }
        );

        // 2. Car Parts Assemble
        tl.add("assemble", "-=0.2");
        tl.fromTo("." + styles.rearBreak,
            { opacity: 0, right: -1000 },
            { right: 166, opacity: 1, duration: 1.2, ease: "power1.inOut" }, "assemble");

        tl.fromTo("." + styles.frontBreak,
            { opacity: 0, right: -1900 },
            { right: 678, opacity: 1, duration: 2.1, ease: "power1.inOut", delay: 1 }, "assemble");

        tl.fromTo("." + styles.bumper,
            { opacity: 0, right: -1100, top: -9 },
            { right: -97, top: -9, opacity: 0.7, duration: 1, ease: "power1.inOut" }, "assemble");

        tl.fromTo("." + styles.frame,
            { opacity: 0, right: -1100, top: -5 },
            { right: -76, top: -5, opacity: 0.7, duration: 2.5, ease: "power1.inOut", delay: 1 }, "assemble");

        tl.fromTo("." + styles.siding,
            { opacity: 0, right: -1200, top: -135 },
            { right: -335, top: -135, opacity: 0.7, duration: 1.2, ease: "power1.inOut" }, "assemble");

        tl.fromTo("." + styles.fender,
            { opacity: 0, right: -1200, top: -158 },
            { right: 274, top: -158, opacity: 0.7, duration: 1.9, ease: "back.in" }, "assemble");

        tl.fromTo("." + styles.window,
            { opacity: 0, right: -100, top: -341 },
            { right: 6, top: -341, opacity: 0.7, duration: 2.4, ease: "back.out" }, "assemble");

        tl.fromTo("." + styles.rulerHorizontal2,
            { height: 0, left: 900, backgroundColor: "#fff", rotation: 400, autoAlpha: 0 },
            { height: 1, width: 891, bottom: 85, left: 5, transformOrigin: "top", backgroundColor: "#777", rotation: 1080, opacity: 0.2, autoAlpha: 0.4, ease: "back.out", duration: 2 }, "assemble");

        tl.fromTo("." + styles.tire1,
            { opacity: 0, right: -2991, top: -301 },
            { right: -191, top: -301, opacity: 0.7, duration: 2.5, ease: "power1.inOut" }, "assemble");

        tl.fromTo("." + styles.tire2,
            { opacity: 0, right: -2558, top: -301 },
            { right: -558, top: -301, opacity: 0.7, duration: 3, ease: "back.out", delay: 0.9 }, "assemble");

        // 3. Stage 2 Full Car fades in over the skeleton
        tl.add("reveal", "+=0.5");
        tl.fromTo("." + styles.veyronFull,
            { opacity: 0 }, { opacity: 0.9, duration: 4 }, "reveal");

        tl.fromTo("." + styles.veyronFullTire1,
            { opacity: 0 }, { opacity: 1, duration: 0.1 }, "reveal");

        tl.fromTo("." + styles.veyronFullTire2,
            { opacity: 0 }, { opacity: 1, duration: 0.1 }, "reveal");

        tl.to("." + styles.veyronFull, { opacity: 0.4, duration: 0.1 }, "reveal+=4.1");

        // 4. Final adjustments and animations
        tl.add("finale", "-=0.3");
        tl.to("." + styles.veyronHoldBox, { zIndex: 77777, opacity: 1, duration: 5 }, "finale");
        tl.to("." + styles.veyronHoldBox, { opacity: 0, duration: 1 }, "finale+=5");

        tl.fromTo("." + styles.veyronFullTire1, { rotation: 0 }, { rotation: 70, duration: 5 }, "finale");
        tl.fromTo("." + styles.veyronFullTire2, { rotation: 0 }, { rotation: 70, duration: 5 }, "finale");

        tl.to("." + styles.veyronHoldBox, { left: 7, duration: 5 }, "finale");
        tl.to("." + styles.stage2, { left: 102, duration: 5 }, "finale");

        tl.fromTo(rulers,
            { autoAlpha: 0.3, rotation: 0 },
            { autoAlpha: 0, rotation: 4000, duration: 3, ease: "back.out", stagger: 0.2 }, "finale");

    }, { scope: containerRef });

    return (
        <section className={styles.section} id="engenharia">
            <div className={styles.header}>
                <h2>Processo de Montagem</h2>
                <p>Engenharia automotiva levada ao expoente máximo.</p>
            </div>

            <div className={styles.scaleWrapper} ref={wrapperRef} style={{ height: `${scale * 400}px` }}>
                <div
                    className={styles.animationHolder}
                    ref={containerRef}
                    style={{ transform: `scale(${scale})`, transformOrigin: 'top center' }}
                >
                    <div className={styles.bugattiV}>
                        <div className={styles.carhold1}>
                            <div className={styles.rulerHolderBox}>
                                <div className={styles.rulerWrap}>
                                    {[...Array(12)].map((_, i) => (
                                        <div key={i} className={styles.rulerBox}></div>
                                    ))}
                                </div>
                                <div className={styles.rulerHorizontal2}></div>
                            </div>

                            <div className={styles.veyronHoldBox}>
                                <img className={styles.bumper} src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/49174/veyron_bumper.png" alt="Bumper" /><img className={styles.frame} src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/49174/veyron_frame.png" alt="Frame" /><img className={styles.siding} src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/49174/veyron_siding.png" alt="Siding" /><img className={styles.fender} src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/49174/veyron_s_fender.png" alt="Fender" /><img className={styles.tire1} src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/49174/veyron_tire.png" alt="Tire 1" /><img className={styles.tire2} src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/49174/veyron_tire.png" alt="Tire 2" /><img className={styles.window} src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/49174/veyron_windows.png" alt="Window" /><img className={styles.frontBreak} src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/49174/veyron_brake.png" alt="Front Break" /><img className={styles.rearBreak} src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/49174/veyron_brake.png" alt="Rear Break" />
                            </div>

                            <div className={styles.stage2}>
                                <img className={styles.veyronFull} src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/49174/bugatti_v.png" alt="Bugatti Full" />
                                <img className={styles.veyronFullTire1} src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/49174/bugatti_v_tire.png" alt="Tire 1" />
                                <img className={styles.veyronFullTire2} src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/49174/bugatti_v_tire.png" alt="Tire 2" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
