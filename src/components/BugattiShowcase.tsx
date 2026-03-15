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
                const parentWidth = wrapperRef.current.clientWidth;
                // Padding adjustment to prevent side-scrolling or touching edges
                const paddedWidth = parentWidth < 1024 ? parentWidth - 32 : parentWidth;
                const newScale = Math.min(1, paddedWidth / 980);
                setScale(newScale);
                ScrollTrigger.refresh();
            }
        };

        updateScale();
        window.addEventListener('resize', updateScale);
        return () => window.removeEventListener('resize', updateScale);
    }, []);

    useGSAP(() => {
        if (!containerRef.current) return;

        const rulers = gsap.utils.toArray('.' + styles.ruler_box_1);

        const mainTl = gsap.timeline({
            repeat: -1,
            repeatDelay: 2,
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 80%",
            }
        });

        // 1. Rulers Fall In
        // Total duration: 0.3 + (11 * 0.1) = 1.4s
        mainTl.fromTo(rulers,
            { height: 0, top: 0, backgroundColor: "#000", borderColor: "red", rotation: 720, autoAlpha: 0 },
            { height: 330, backgroundColor: "transparent", transformOrigin: "bottom", borderColor: "#777", rotation: 0, autoAlpha: 0.3, ease: "back.out", stagger: 0.1, duration: 0.3 }
        );

        // 2. Car Parts Assemble
        // Inserted roughly after the first box finishes dropping (0.5s instead of original implicit start due to TimelineLite sequence behavior logic mapping)
        mainTl.add("stage2", 0.5);

        mainTl.fromTo("." + styles.veyron_rear_break,
            { opacity: 0, right: -1000 },
            { right: 166, opacity: 1, duration: 1.2, ease: "power1.inOut" }, "stage2");

        mainTl.fromTo("." + styles.veyron_front_break,
            { opacity: 0, right: -1900 },
            { right: 678, opacity: 1, duration: 2.1, delay: 1, ease: "power1.inOut" }, "stage2");

        mainTl.fromTo("." + styles.veyron_bumper,
            { opacity: 0, right: -1100, top: -9 },
            { right: -97, top: -9, opacity: 0.7, duration: 1, ease: "power1.inOut" }, "stage2");

        mainTl.fromTo("." + styles.veyron_frame,
            { opacity: 0, right: -1100, top: -5 },
            { right: -76, top: -5, opacity: 0.7, duration: 2.5, delay: 1, ease: "power1.inOut" }, "stage2");

        mainTl.fromTo("." + styles.veyron_siding,
            { opacity: 0, right: -1200, top: -135 },
            { right: -335, top: -135, opacity: 0.7, duration: 1.2, ease: "power1.inOut" }, "stage2");

        mainTl.fromTo("." + styles.veyron_fender,
            { opacity: 0, right: -1200, top: -158 },
            { right: 274, top: -158, opacity: 0.7, duration: 1.9, ease: "back.in" }, "stage2");

        mainTl.fromTo("." + styles.veyron_window,
            { opacity: 0, right: -100, top: -341 },
            { right: 6, top: -341, opacity: 0.7, duration: 2.4, ease: "back.out" }, "stage2");

        mainTl.fromTo("." + styles.ruler_horizontal_2,
            { height: 0, left: 900, backgroundColor: "#fff", rotation: 400, autoAlpha: 0 },
            { height: 1, width: 891, bottom: 85, left: 5, transformOrigin: "top", backgroundColor: "#777", rotation: 1080, opacity: 0.2, autoAlpha: 0.4, duration: 2, ease: "back.out" }, "stage2+=0.1");

        mainTl.fromTo("." + styles.veyron_tire,
            { opacity: 0, right: -2991, top: -301 },
            { right: -191, top: -301, opacity: 0.7, duration: 2.5, ease: "power1.inOut" }, "stage2");

        mainTl.fromTo("." + styles.veyron_tire_2,
            { opacity: 0, right: -2558, top: -301 },
            { right: -558, top: -301, opacity: 0.7, duration: 3, delay: 0.9, ease: "back.out" }, "stage2");

        // 3. Reveal final car
        // Max time for stage 2 is tire_2 ending at 3.9s.
        const stage3 = "stage2+=3.9";

        mainTl.fromTo("." + styles.bugatti_veyron,
            { opacity: 0 },
            { opacity: 0.9, duration: 4 }, stage3);

        mainTl.fromTo("." + styles.bugatti_v_tire,
            { opacity: 0 },
            { opacity: 1, duration: 0.1 }, stage3);

        mainTl.fromTo("." + styles.bugatti_v_tire_2,
            { opacity: 0 },
            { opacity: 1, duration: 0.1 }, stage3);

        mainTl.to("." + styles.bugatti_veyron,
            { opacity: 0.4, duration: 0.1 }, stage3 + "+=4");

        // 4. Finale
        const stage4 = stage3 + "+=4.1";

        mainTl.to("." + styles.veyron_hold_box, { zIndex: 77777, opacity: 1, duration: 5 }, stage4);
        mainTl.to("." + styles.veyron_hold_box, { opacity: 0, duration: 1 }, stage4 + "+=5");

        mainTl.fromTo("." + styles.bugatti_v_tire,
            { rotation: 0 },
            { rotation: 70, duration: 5 }, stage4);

        mainTl.fromTo("." + styles.bugatti_v_tire_2,
            { rotation: 0 },
            { rotation: 70, duration: 5 }, stage4);

        mainTl.to("." + styles.veyron_hold_box, { left: 7, duration: 5 }, stage4);
        mainTl.to("." + styles.stage_2, { left: 102, duration: 5 }, stage4);

        mainTl.fromTo(rulers,
            { autoAlpha: 0.3, rotation: 0 },
            { autoAlpha: 0, rotation: 4000, duration: 3, ease: "back.out", stagger: 0.2 }, stage4);

    }, { scope: containerRef });

    return (
        <section className={styles.section} id="engenharia">
            <div className={styles.header}>
                <h2 className={styles.title}>Engenharia de Precisão</h2>
                <p className={styles.desc}>Cada detalhe importa na busca pela perfeição mecânica.</p>
            </div>
            <div className={styles.scaleWrapper} ref={wrapperRef} style={{ height: `${scale * 402}px` }}>
                <div
                    className={styles.animation_holder}
                    ref={containerRef}
                    style={{ transform: `scale(${scale})` }}
                >
                    <section className={styles.bugatti_v}>
                        <section className={styles.carhold_1}>

                            <section className={styles.veyron_ruler_holer_box}>
                                <div className={styles.ruler_1_wrap}>
                                    {[...Array(12)].map((_, i) => (
                                        <div key={i} className={styles.ruler_box_1}></div>
                                    ))}
                                </div>
                                <section className={styles.ruler_horizontal_2}></section>
                            </section>

                            <section className={styles.veyron_hold_box}>
                                <img loading="lazy" decoding="async" className={styles.veyron_bumper} src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/49174/veyron_bumper.png" alt="Para-choque Bugatti Veyron - Engenharia LiderCar" width="1000" height="500" />
                                {' '}
                                <img loading="lazy" decoding="async" className={styles.veyron_frame} src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/49174/veyron_frame.png" alt="Chassi e Estrutura Automotiva de Alta Performance" width="1000" height="500" />
                                {' '}
                                <img loading="lazy" decoding="async" className={styles.veyron_siding} src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/49174/veyron_siding.png" alt="Lateral de Veículo Superesportivo" width="1000" height="500" />
                                {' '}
                                <img loading="lazy" decoding="async" className={styles.veyron_fender} src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/49174/veyron_s_fender.png" alt="Para-lama com Acabamento Premium" width="1000" height="500" />
                                {' '}
                                <img loading="lazy" decoding="async" className={styles.veyron_tire} src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/49174/veyron_tire.png" alt="Pneu e Roda de Alta Performance 1" width="1000" height="500" />
                                {' '}
                                <img loading="lazy" decoding="async" className={styles.veyron_tire_2} src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/49174/veyron_tire.png" alt="Pneu e Roda de Alta Performance 2" width="1000" height="500" />
                                {' '}
                                <img loading="lazy" decoding="async" className={styles.veyron_window} src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/49174/veyron_windows.png" alt="Vidros e Blindagem de Precisão" width="1000" height="500" />
                                {' '}
                                <img loading="lazy" decoding="async" className={styles.veyron_front_break} src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/49174/veyron_brake.png" alt="Sistema de Freios a Disco de Alta Performance" width="1000" height="500" />
                                {' '}
                                <img loading="lazy" decoding="async" className={styles.veyron_rear_break} src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/49174/veyron_brake.png" alt="Pinças de Freio de Precisão" width="1000" height="500" />
                            </section>

                            <section className={styles.stage_2}>
                                <img loading="lazy" decoding="async" className={styles.bugatti_veyron} src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/49174/bugatti_v.png" alt="Bugatti Full" width="1000" height="500" />
                                <img loading="lazy" decoding="async" className={styles.bugatti_v_tire} src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/49174/bugatti_v_tire.png" alt="Tire 1" width="1000" height="500" />
                                <img loading="lazy" decoding="async" className={styles.bugatti_v_tire_2} src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/49174/bugatti_v_tire.png" alt="Tire 2" width="1000" height="500" />
                            </section>

                        </section>
                    </section>
                </div>
            </div>
        </section>
    );
}
