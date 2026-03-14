"use client";

import styles from "./Footer.module.css";
import Link from "next/link";
import Image from "next/image";
import { Instagram, Facebook, MapPin, Phone, Mail, Clock, ChevronRight, Shield, Award, Wrench, ArrowRight } from "lucide-react";

export default function Footer() {
    return (
        <footer id="footer" className={styles.footer}>
            {/* Decorative gradient line */}
            <div className={styles.gradientLine} />

            <div className={styles.footerTop}>
                <div className={`container ${styles.container}`}>
                    {/* Brand Column */}
                    <div className={styles.brandInfo}>
                        <Link href="/" className={styles.logo}>
                            <div className={styles.logoText}>
                                <Image
                                    src="/images/client/logo.webp"
                                    alt="LiderCar Logo"
                                    width={200}
                                    height={54}
                                    style={{ objectFit: 'contain' }}
                                />
                                <span className={styles.logoSubtitle}>Centro Automotivo</span>
                            </div>
                        </Link>
                        <p className={styles.description}>
                            O mais alto padrão em mecânica premium. Nosso compromisso é entregar excelência, tecnologia e transparência para prolongar a vida útil do seu veículo.
                        </p>
                        <div className={styles.social}>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                                <Instagram size={18} />
                            </a>
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                                <Facebook size={18} />
                            </a>
                        </div>

                        {/* Trust Badges */}
                        <div className={styles.trustBadges}>
                            <div className={styles.badge}>
                                <Shield size={20} />
                                <span>Garantia de Serviço</span>
                            </div>
                            <div className={styles.badge}>
                                <Award size={20} />
                                <span>Certificação Premium</span>
                            </div>
                            <div className={styles.badge}>
                                <Wrench size={20} />
                                <span>Peças Originais</span>
                            </div>
                        </div>
                    </div>

                    {/* Links Column */}
                    <div className={styles.linksBlock}>
                        <h3>Institucional</h3>
                        <nav>
                            <Link href="/"><ChevronRight size={14} className={styles.navIcon} /> Início</Link>
                            <Link href="#sobre"><ChevronRight size={14} className={styles.navIcon} /> Nossa História</Link>
                            <Link href="#servicos"><ChevronRight size={14} className={styles.navIcon} /> Serviços Restauração</Link>
                            <Link href="#depoimentos"><ChevronRight size={14} className={styles.navIcon} /> Depoimentos</Link>
                            <Link href="/contato"><ChevronRight size={14} className={styles.navIcon} /> Contato</Link>
                        </nav>
                    </div>

                    {/* Contact Column */}
                    <div className={styles.linksBlock}>
                        <h3>Atendimento</h3>
                        <p className={styles.contactItem}><Phone size={16} className={styles.contactIcon} /> <span>(31) 9858-3809</span></p>
                        <p className={styles.contactItem}><Mail size={16} className={styles.contactIcon} /> <span>contato@lidercar.com.br</span></p>
                        <p className={styles.contactItem}><MapPin size={16} className={styles.contactIcon} /> <span>Av. Principal, 1000<br />São Paulo, SP</span></p>

                        {/* Hours */}
                        <h3 className={styles.hoursTitle}>Horário de Funcionamento</h3>
                        <ul className={styles.hoursList}>
                            <li>
                                <Clock size={16} className={styles.contactIcon} />
                                <div>
                                    <strong>Seg - Sex:</strong>
                                    <span>08:00 - 18:00</span>
                                </div>
                            </li>
                            <li>
                                <Clock size={16} className={styles.contactIcon} />
                                <div>
                                    <strong>Sábado:</strong>
                                    <span>08:00 - 12:00</span>
                                </div>
                            </li>
                            <li>
                                <Clock size={16} className={styles.contactIcon} />
                                <div>
                                    <strong>Domingo / Feriados:</strong>
                                    <span>Fechado</span>
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter & Map Column */}

                </div>
            </div>

            {/* WhatsApp CTA Banner */}


            <div className={styles.bottomBar}>
                <div className={`container ${styles.bottomContainer}`}>
                    <p>&copy; {new Date().getFullYear()} LiderCar. Todos os direitos reservados.</p>
                    <div className={styles.legalLinks}>
                        <Link href="/privacidade">Política de Privacidade</Link>
                        <span className={styles.separator}>|</span>
                        <Link href="/termos">Termos de Serviço</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
