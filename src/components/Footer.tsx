import styles from "./Footer.module.css";
import Link from "next/link";
import Image from "next/image";
import { Instagram, Facebook, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
    return (
        <footer id="contato" className={styles.footer}>
            <div className={`container ${styles.container}`}>
                <div className={styles.brand}>
                    <Link href="/" className={styles.logo}>
                        <Image
                            src="/images/client/logo.webp"
                            alt="LiderCar Logo"
                            width={180}
                            height={48}
                            style={{ objectFit: 'contain' }}
                        />
                    </Link>
                    <p className={styles.description}>
                        A sua oficina mecânica de confiança. Tecnologia, transparência e paixão por carros.
                    </p>
                    <div className={styles.social}>
                        <a href="#" aria-label="Instagram"><Instagram size={20} /></a>
                        <a href="#" aria-label="Facebook"><Facebook size={20} /></a>
                    </div>
                </div>

                <div className={styles.linksBlock}>
                    <h3>Navegação</h3>
                    <nav>
                        <Link href="#servicos">Serviços</Link>
                        <Link href="#sobre">Sobre</Link>
                        <Link href="#contato">Contato</Link>
                    </nav>
                </div>

                <div className={styles.linksBlock}>
                    <h3>Contato</h3>
                    <p><Phone size={16} className={styles.contactIcon} /> (11) 99999-9999</p>
                    <p><Mail size={16} className={styles.contactIcon} /> contato@lidercar.com.br</p>
                    <p><MapPin size={16} className={styles.contactIcon} /> Av. Principal, 1000 - São Paulo, SP</p>
                </div>
            </div>
            <div className={styles.bottomBar}>
                <div className="container">
                    <p>&copy; {new Date().getFullYear()} LiderCar. Todos os direitos reservados. Experiência premium em manutenção automotiva.</p>
                </div>
            </div>
        </footer>
    );
}
