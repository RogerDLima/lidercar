import styles from "./WhatsAppButton.module.css";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
    const phoneNumber = "5511999999999"; // Example number
    const message = encodeURIComponent("Olá! Gostaria de saber mais sobre os serviços da LiderCar.");
    const wpUrl = `https://wa.me/${phoneNumber}?text=${message}`;

    return (
        <div className={styles.whatsappWrapper}>
            <div className={styles.tooltip}>Online: Fale com um Especialista</div>
            <a
                href={wpUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`glass ${styles.floatingButton}`}
                aria-label="Fale conosco no WhatsApp"
            >
                <div className={styles.iconContainer}>
                    <FaWhatsapp size={32} />
                </div>
                {/* Notification Badge */}
                <span className={styles.badge}>1</span>

                <div className={styles.pulseRing}></div>
            </a>
        </div>
    );
}
