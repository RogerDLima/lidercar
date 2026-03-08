import styles from "./Testimonials.module.css";
import Image from "next/image";

export default function Testimonials() {
    const reviews = Array.from({ length: 8 }, (_, i) => `/images/client/Feedbacks reais/depoimento_${i + 1}.webp`);

    return (
        <section id="depoimentos" className={styles.section}>
            <div className={`container ${styles.container}`}>
                <div className={styles.header}>
                    <h2>O que nossos clientes dizem</h2>
                    <p>Resultados reais de quem já confia na LiderCar.</p>
                </div>

                <div className={styles.gallery}>
                    {reviews.map((src, index) => (
                        <div key={index} className={styles.imageCard}>
                            <Image
                                src={src}
                                alt={`Depoimento ${index + 1}`}
                                fill
                                style={{ objectFit: 'cover' }}
                                sizes="(max-width: 768px) 80vw, (max-width: 1200px) 33vw, 25vw"
                                className={styles.reviewImage}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
