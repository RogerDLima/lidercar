"use client";

import Link from "next/link";
import styles from "./Header.module.css";
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Header() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
            <div className={`container ${styles.nav}`}>
                <Link href="/" className={styles.logo}>
                    <Image
                        src="/images/client/logo.webp"
                        alt="LiderCar Logo"
                        width={180}
                        height={48}
                        style={{ objectFit: 'contain', filter: 'drop-shadow(0px 0px 4px rgba(255, 255, 255, 0.15)) drop-shadow(0px 0px 1px rgba(255, 255, 255, 0.3))' }}
                        priority
                    />
                </Link>
                <nav className={styles.navLinks}>
                    <Link href="#servicos" className={styles.link}>
                        Serviços
                    </Link>
                    <Link href="#sobre" className={styles.link}>
                        Sobre a Oficina
                    </Link>
                    <Link href="#contato" className="btn btn-primary">
                        Agendar Revisão
                    </Link>
                </nav>
            </div>
        </header>
    );
}
