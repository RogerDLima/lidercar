import styles from "./TrustBar.module.css";

export default function TrustBar() {
    // Array of premium brands to showcase expertise
    const brands = [
        "BMW", "Audi", "Mercedes-Benz", "Porsche",
        "Land Rover", "Volvo", "Jeep", "Toyota", "Honda"
    ];

    // Duplicate the array to create a seamless infinite scroll effect
    const duplicatedBrands = [...brands, ...brands, ...brands];

    return (
        <div className={styles.trustBar}>
            <div className={styles.label}>
                Especialistas em:
            </div>
            <div className={styles.marqueeContainer}>
                <div className={styles.marqueeContent}>
                    {duplicatedBrands.map((brand, index) => (
                        <div key={index} className={styles.brandWrapper}>
                            <span className={styles.brandName}>{brand}</span>
                            {/* Dot separator */}
                            <span className={styles.separator}>•</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
