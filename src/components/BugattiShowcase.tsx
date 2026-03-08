"use client";

import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './BugattiShowcase.module.css';

gsap.registerPlugin(ScrollTrigger);

export default function BugattiShowcase() {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        if (!containerRef.current) return;
        const rulers = gsap.utils.toArray('.' + styles.rulerBox);

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 60%", // Start when container hits 60% of viewport
            }
        });

        // Stage 1 - Rulers
        tl.fromTo(rulers,
            { height: 0, rotation: 720, autoAlpha: 0, borderColor: "red", backgroundColor: "#000" },
            { height: 330, rotation: 0, autoAlpha: 0.3, borderColor: "#777", backgroundColor: "transparent", stagger: 0.1, duration: 0.3, ease: "back.out", transformOrigin: "bottom" }
        )
            .add("assemble", "-=0.2")

            // Assembly Stage
            .fromTo("." + styles.rearBreak, { opacity: 0, right: -1000 }, { right: 166, opacity: 1, duration: 1.2, ease: "power1.inOut" }, "assemble")
            .fromTo("." + styles.frontBreak, { opacity: 0, right: -1900 }, { right: 678, opacity: 1, duration: 2.1, ease: "power1.inOut" }, "assemble+=1")
            .fromTo("." + styles.bumper, { opacity: 0, right: -1100, top: -9 }, { right: -97, top: -9, opacity: 0.7, duration: 1, ease: "power1.inOut" }, "assemble")
            .fromTo("." + styles.frame, { opacity: 0, right: -1100, top: -5 }, { right: -76, top: -5, opacity: 0.7, duration: 2.5, ease: "power1.inOut" }, "assemble+=1")
            .fromTo("." + styles.siding, { opacity: 0, right: -1200, top: -135 }, { right: -335, top: -135, opacity: 0.7, duration: 1.2, ease: "power1.inOut" }, "assemble")
            .fromTo("." + styles.fender, { opacity: 0, right: -1200, top: -158 }, { right: 274, top: -158, opacity: 0.7, duration: 1.9, ease: "back.in" }, "assemble")
            .fromTo("." + styles.window, { opacity: 0, right: -100, top: -341 }, { right: 6, top: -341, opacity: 0.7, duration: 2.4, ease: "back.out" }, "assemble")
            .fromTo("." + styles.tire1, { opacity: 0, right: -2991, top: -301 }, { right: -191, top: -301, opacity: 0.7, duration: 2.5, ease: "power1.inOut" }, "assemble")
            .fromTo("." + styles.tire2, { opacity: 0, right: -2558, top: -301 }, { right: -558, top: -301, opacity: 0.7, duration: 3, ease: 'back.out' }, "assemble+=0.9")

            .add("reveal", "+=0.5")
            // Stage 2 Full Car
            .fromTo("." + styles.veyronFull, { opacity: 0 }, { opacity: 0.9, duration: 4 }, "reveal")
            .fromTo("." + styles.veyronFullTire1, { opacity: 0 }, { opacity: 1, duration: 0.1 }, "reveal")
            .fromTo("." + styles.veyronFullTire2, { opacity: 0 }, { opacity: 1, duration: 0.1 }, "reveal")
            .to("." + styles.veyronFull, { opacity: 1, duration: 0.1 }, "reveal+=0.1")

            .add("finale", "+=1")
            // Final Movement
            .to("." + styles.holdBox, { zIndex: 77777, opacity: 1, duration: 5 }, "finale")
            .to("." + styles.holdBox, { opacity: 0, duration: 1 }, "finale+=5")
            .fromTo("." + styles.veyronFullTire1, { rotation: 0 }, { rotation: 70, duration: 5 }, "finale")
            .fromTo("." + styles.veyronFullTire2, { rotation: 0 }, { rotation: 70, duration: 5 }, "finale")
            .to("." + styles.holdBox, { left: 7, duration: 5 }, "finale")
            .to("." + styles.stage2, { left: 102, duration: 5 }, "finale")
            .fromTo(rulers, { autoAlpha: 0.3, rotation: 0 }, { autoAlpha: 0, rotation: 4000, duration: 3, ease: "back.out", stagger: 0.2 }, "finale");
    }, { scope: containerRef });

    return (
        <section className={styles.section}>
            <div className="container">
                <div className={styles.header}>
                    <h2>Engenharia Automotiva</h2>
                    <p>Montagem de precisão em cada detalhe do motor à caixa de roda.</p>
                </div>
            </div>
            <div className={styles.animationHolder} ref={containerRef}>
                <div className={styles.bugattiV}>
                    <div className={styles.carhold1}>
                        <div className={styles.rulerHolderBox}>
                            <div className={styles.rulerWrap}>
                                {[...Array(12)].map((_, i) => (
                                    <div key={i} className={styles.rulerBox}></div>
                                ))}
                            </div>
                        </div>

                        <div className={styles.holdBox}>
                            <img className={styles.bumper} src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/49174/veyron_bumper.png" alt="Bumper" />
                            <img className={styles.frame} src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/49174/veyron_frame.png" alt="Frame" />
                            <img className={styles.siding} src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/49174/veyron_siding.png" alt="Siding" />
                            <img className={styles.fender} src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/49174/veyron_s_fender.png" alt="Fender" />
                            <img className={styles.tire1} src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/49174/veyron_tire.png" alt="Tire 1" />
                            <img className={styles.tire2} src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/49174/veyron_tire.png" alt="Tire 2" />
                            <img className={styles.window} src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/49174/veyron_windows.png" alt="Window" />
                            <img className={styles.frontBreak} src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/49174/veyron_brake.png" alt="Front Break" />
                            <img className={styles.rearBreak} src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/49174/veyron_brake.png" alt="Rear Break" />
                        </div>

                        <div className={styles.stage2}>
                            <img className={styles.veyronFull} src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/49174/bugatti_v.png" alt="Bugatti Full" />
                            <img className={styles.veyronFullTire1} src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/49174/bugatti_v_tire.png" alt="Tire 1" />
                            <img className={styles.veyronFullTire2} src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/49174/bugatti_v_tire.png" alt="Tire 2" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
