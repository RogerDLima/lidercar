import styles from "./About.module.css";
import Image from "next/image";

export default function About() {
    return (
        <section id="sobre" className={styles.section}>
            <div className={`container ${styles.container}`}>
                <div className={styles.imageContent}>
                    {/* using the AI generated engine picture as the "About Us" tech presentation */}
                    <div className={styles.imageWrapper}>
                        <Image
                            src="/images/service_engine.png"
                            alt="Mecânico analisando o motor na LiderCar"
                            fill
                            style={{ objectFit: 'cover' }}
                            className={styles.image}
                        />
                        <div className={styles.glassBadge}>
                            <strong>15 Anos</strong>
                            <span>de Excelência</span>
                        </div>
                    </div>
                </div>

                <div className={styles.textContent}>
                    <h2>A LiderCar</h2>
                    <h3>Muito mais que uma oficina, a casa do seu carro.</h3>
                    <p>
                        Nascemos com um propósito claro: revolucionar o padrão de manutenção automotiva. Entendemos que seu veículo não é apenas um meio de transporte, mas uma parte fundamental do seu dia a dia.
                    </p>
                    <p>
                        É por isso que na <strong>LiderCar</strong>, investimos pesado em tecnologia de diagnóstico de ponta e capacitação contínua da nossa equipe de engenheiros mecatrônicos e técnicos especializados. Nosso compromisso é entregar a você transparência absoluta em cada orçamento e agilidade na entrega.
                    </p>
                    <div className={styles.features}>
                        <div className={styles.featureItem}>
                            <span className={styles.check}>✓</span> Transparência 100%
                        </div>
                        <div className={styles.featureItem}>
                            <span className={styles.check}>✓</span> Peças Originais
                        </div>
                        <div className={styles.featureItem}>
                            <span className={styles.check}>✓</span> Garantia Estendida
                        </div>
                        <div className={styles.featureItem}>
                            <span className={styles.check}>✓</span> Equipe Especializada
                        </div>
                    </div>
                    <a href="#contato" className="btn btn-primary" style={{ marginTop: '2rem' }}>
                        Falar com um Mecânico
                    </a>
                </div>
            </div>
        </section>
    );
}
