import styles from "./Stats.module.css";

const stats = [
    { value: "15+", label: "Anos de Mercado" },
    { value: "5000+", label: "Carros Atendidos" },
    { value: "100%", label: "Transparência" },
    { value: "4.9", label: "Estrelas nas Avaliações" },
];

export default function Stats() {
    return (
        <section className={styles.section}>
            <div className={`container ${styles.grid}`}>
                {stats.map((stat, i) => (
                    <div key={i} className={styles.statBox}>
                        <div className={styles.value}>{stat.value}</div>
                        <div className={styles.label}>{stat.label}</div>
                    </div>
                ))}
            </div>
        </section>
    );
}
