import styles from "./Testimonials.module.css";
import Image from "next/image";
import RevealWrapper from "./RevealWrapper";

export default function Testimonials() {
    const reviews = Array.from({ length: 8 }, (_, i) => `/images/client/Feedbacks_reais/depoimento_${i + 1}.webp`);

    return (
        <section id="depoimentos" className={styles.section}>
            <div className={`container ${styles.container}`}>
                <RevealWrapper className={styles.header}>
                    <h2>O que nossos clientes dizem</h2>
                    <p>Resultados reais de quem já confia na LiderCar.</p>
                </RevealWrapper>

                <div className={styles.gallery}>
                    {reviews.map((src, index) => (
                        <RevealWrapper key={index} delay={index * 50}>
                            <div className={styles.imageCard}>
                                <Image
                                    src={src}
                                    alt={`Depoimento ${index + 1}`}
                                    fill
                                    style={{ objectFit: 'cover' }}
                                    sizes="(max-width: 768px) 80vw, (max-width: 1200px) 33vw, 25vw"
                                    className={styles.reviewImage}
                                />
                            </div>
                        </RevealWrapper>
                    ))}
                </div>
            </div>
        </section>
    );
}
