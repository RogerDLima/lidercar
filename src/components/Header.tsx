"use client";

import Link from "next/link";
import styles from "./Header.module.css";
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

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

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    return (
        <header className={`${styles.header} ${scrolled || isInternalPage ? styles.scrolled : ''}`}>
            <div className={`container ${styles.nav}`}>
                <Link href="/" className={styles.logo} aria-label="Ir para a Página Inicial da LiderCar">
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
                <button className={styles.mobileMenuBtn} onClick={toggleMenu} aria-label="Menu">
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                <nav className={`${styles.navLinks} ${isMenuOpen ? styles.active : ''}`}>
                    <Link href="/#servicos" className={styles.link} onClick={closeMenu}>
                        Serviços
                    </Link>
                    <Link href="/#sobre" className={styles.link} onClick={closeMenu}>
                        Sobre a Oficina
                    </Link>
                    <Link href="/contato" className="btn btn-primary" onClick={closeMenu}>
                        Agendar Revisão
                    </Link>
                </nav>
            </div>
        </header>
    );
}
