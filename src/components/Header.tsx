"use client";

import Link from "next/link";
import styles from "./Header.module.css";
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Header() {
    const [scrolled, setScrolled] = useState(false);

    const [pathname, setPathname] = React.useState("");

    useEffect(() => {
        setPathname(window.location.pathname);
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const isInternalPage = pathname !== "/" && pathname !== "";

    return (
        <header className={`${styles.header} ${scrolled || isInternalPage ? styles.scrolled : ''}`}>
            <div className={`container ${styles.nav}`}>
                <Link href="/" className={styles.logo}>
                    <div className={styles.logoText}>
                        <Image
                            src="/images/client/logo.webp"
                            alt="LiderCar Logo"
                            width={180}
                            height={48}
                            style={{ objectFit: 'contain' }}
                            priority
                        />
                    </div>

                </Link>
                <nav className={styles.navLinks}>
                    <Link href="#servicos" className={styles.link}>
                        Serviços
                    </Link>
                    <Link href="#sobre" className={styles.link}>
                        Sobre a Oficina
                    </Link>
                    <Link href="/contato" className="btn btn-primary">
                        Agendar Revisão
                    </Link>
                </nav>
            </div>
        </header>
    );
}
