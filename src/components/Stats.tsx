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
            <div className="container grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mx-auto px-4 text-center">
                {stats.map((stat, i) => (
                    <div key={i} className={`${styles.statBox} flex flex-col items-center justify-center p-6 bg-white/[0.02] border border-white/5 rounded-2xl backdrop-blur-md`}>
                        <div className={`${styles.value} text-3xl md:text-5xl lg:text-6xl font-extrabold mb-2`}>{stat.value}</div>
                        <div className={`${styles.label} text-xs md:text-sm text-gray-400 uppercase tracking-widest font-medium`}>{stat.label}</div>
                    </div>
                ))}
            </div>
        </section>
    );
}
