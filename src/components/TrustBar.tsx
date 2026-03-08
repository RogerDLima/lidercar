import styles from "./TrustBar.module.css";

export default function TrustBar() {
    // Array of premium brands using reliable Simple Icons CDN
    const brands = [
        { name: "BMW", logo: "https://cdn.simpleicons.org/bmw/white" },
        { name: "Audi", logo: "https://cdn.simpleicons.org/audi/white" },
        { name: "Mercedes-Benz", logo: "https://cdn.simpleicons.org/mercedes/white" },
        { name: "Porsche", logo: "https://cdn.simpleicons.org/porsche/white" },
        { name: "Volvo", logo: "https://cdn.simpleicons.org/volvo/white" },
        { name: "Toyota", logo: "https://cdn.simpleicons.org/toyota/white" },
        { name: "Honda", logo: "https://cdn.simpleicons.org/honda/white" },
        { name: "Jeep", logo: "https://cdn.simpleicons.org/jeep/white" }
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
                            <img src={brand.logo} alt={`Logo ${brand.name}`} className={styles.brandImage} />
                            {/* Dot separator */}
                            <span className={styles.separator}>•</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
