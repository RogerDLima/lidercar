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
                            <Image
                                src="/images/client/logo.webp"
                                alt="LiderCar Logo"
                                width={200}
                                height={54}
                                style={{ objectFit: 'contain' }}
                            />
                            <span className={styles.logoSubtitle}>Centro Automotivo</span>
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
                        <p className={styles.contactItem}><Phone size={16} className={styles.contactIcon} /> <span>(11) 99999-9999</span></p>
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
                    <div className={styles.linksBlock}>
                        <h3>Newsletter</h3>
                        <p className={styles.newsletterDesc}>Receba novidades, promoções e dicas de manutenção premium.</p>
                        <form className={styles.newsletterForm} onSubmit={(e) => e.preventDefault()}>
                            <input
                                type="email"
                                placeholder="Seu melhor e-mail"
                                className={styles.newsletterInput}
                                aria-label="Email para newsletter"
                            />
                            <button type="submit" className={styles.newsletterBtn} aria-label="Inscrever na newsletter">
                                <ArrowRight size={18} />
                            </button>
                        </form>

                        <h3 className={styles.mapTitle}>Localização</h3>
                        <div className={styles.mapContainer}>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1975874036887!2d-46.65587832390651!3d-23.564893163001026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa805%3A0xd5f4fd8c69758d85!2sAv.%20Paulista%20-%20Bela%20Vista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1694000000000!5m2!1spt-BR!2sbr"
                                width="100%"
                                height="160"
                                style={{ border: 0, borderRadius: '8px', filter: 'grayscale(1) contrast(1.1) brightness(0.6)' }}
                                allowFullScreen={false}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Localização LiderCar"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* WhatsApp CTA Banner */}
            <div className={styles.ctaBanner}>
                <div className={`container ${styles.ctaContainer}`}>
                    <p>Precisa de atendimento urgente?</p>
                    <a
                        href="https://wa.me/5511999999999?text=Ol%C3%A1,%20gostaria%20de%20fazer%20um%20or%C3%A7amento%20na%20LiderCar!"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.ctaBtn}
                    >
                        💬 Fale pelo WhatsApp
                    </a>
                </div>
            </div>

            <div className={styles.bottomBar}>
                <div className={`container ${styles.bottomContainer}`}>
                    <p>&copy; {new Date().getFullYear()} LiderCar. Todos os direitos reservados.</p>
                    <div className={styles.legalLinks}>
                        <Link href="#">Política de Privacidade</Link>
                        <span className={styles.separator}>|</span>
                        <Link href="#">Termos de Serviço</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
