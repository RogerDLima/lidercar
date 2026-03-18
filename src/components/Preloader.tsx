"use client";

import { useEffect, useState } from "react";
import styles from "./Preloader.module.css";

export default function Preloader() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Bloqueia o scroll do body enquanto o preloader está ativo
        document.body.style.overflow = "hidden";

        const timer = setTimeout(() => {
            // Libera o scroll assim que o preloader termina
            document.body.style.overflow = "";
            setLoading(false);
        }, 2500);

        return () => {
            clearTimeout(timer);
            // Garante que o scroll seja sempre liberado ao desmontar
            document.body.style.overflow = "";
        };
    }, []);

    if (!loading) return null;

    return (
        <div className={`${styles.loadingWindow} ${styles.fadeIn}`}>
            <div className={styles.car}>
                <div className={styles.strike}></div>
                <div className={`${styles.strike} ${styles.strike2}`}></div>
                <div className={`${styles.strike} ${styles.strike3}`}></div>
                <div className={`${styles.strike} ${styles.strike4}`}></div>
                <div className={`${styles.strike} ${styles.strike5}`}></div>
                <div className={`${styles.carDetail} ${styles.spoiler}`}></div>
                <div className={`${styles.carDetail} ${styles.back}`}></div>
                <div className={`${styles.carDetail} ${styles.center}`}></div>
                <div className={`${styles.carDetail} ${styles.center1}`}></div>
                <div className={`${styles.carDetail} ${styles.front}`}></div>
                <div className={`${styles.carDetail} ${styles.wheel}`}></div>
                <div className={`${styles.carDetail} ${styles.wheel} ${styles.wheel2}`}></div>
            </div>

            <div className={styles.text}>
                <span>Ligando os motores</span><span className={styles.dots}>...</span>
            </div>
        </div>
    );
}
