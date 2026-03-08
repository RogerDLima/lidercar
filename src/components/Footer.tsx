import styles from "./Footer.module.css";
import Link from "next/link";
import Image from "next/image";
import { Instagram, Facebook, MapPin, Phone, Mail, Clock, ChevronRight } from "lucide-react";

export default function Footer() {
    return (
        <footer id="footer" className={styles.footer}>
            <div className={styles.footerTop}>
                <div className={`container ${styles.container}`}>
                    <div className={styles.brandInfo}>
                        <Link href="/" className={styles.logo}>
                            <Image
                                src="/images/client/logo.webp"
                                alt="LiderCar Logo"
                                width={200}
                                height={54}
                                style={{ objectFit: 'contain' }}
                            />
                        </Link>
                        <p className={styles.description}>
                            O mais alto padrão em mecânica premium. Nosso compromisso é entregar excelência, tecnologia e transparência para prolongar a vida útil do seu veículo.
                        </p>
                        <div className={styles.social}>
                            <a href="#" aria-label="Instagram"><Instagram size={18} /></a>
                            <a href="#" aria-label="Facebook"><Facebook size={18} /></a>
                        </div>
                    </div>

                    <div className={styles.linksBlock}>
                        <h3>Institucional</h3>
                        <nav>
                            <Link href="/"><ChevronRight size={14} className={styles.navIcon} /> Início</Link>
                            <Link href="#sobre"><ChevronRight size={14} className={styles.navIcon} /> Nossa História</Link>
                            <Link href="#servicos"><ChevronRight size={14} className={styles.navIcon} /> Serviços Restauração</Link>
                            <Link href="#depoimentos"><ChevronRight size={14} className={styles.navIcon} /> Depoimentos</Link>
                        </nav>
                    </div>

                    <div className={styles.linksBlock}>
                        <h3>Atendimento</h3>
                        <p className={styles.contactItem}><Phone size={16} className={styles.contactIcon} /> <span>(11) 99999-9999</span></p>
                        <p className={styles.contactItem}><Mail size={16} className={styles.contactIcon} /> <span>contato@lidercar.com.br</span></p>
                        <p className={styles.contactItem}><MapPin size={16} className={styles.contactIcon} /> <span>Av. Principal, 1000<br />São Paulo, SP</span></p>
                    </div>

                    <div className={styles.linksBlock}>
                        <h3>Horário de Funcionamento</h3>
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
