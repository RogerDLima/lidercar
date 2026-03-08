import styles from "./TrustBar.module.css";

export default function TrustBar() {
    // Array of premium brands to showcase expertise with generic standard img tags
    const brands = [
        { name: "BMW", logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/BMW.svg" },
        { name: "Audi", logo: "https://upload.wikimedia.org/wikipedia/commons/9/92/Audi-Logo_2016.svg" },
        { name: "Mercedes-Benz", logo: "https://upload.wikimedia.org/wikipedia/commons/9/90/Mercedes-Logo.svg" },
        { name: "Porsche", logo: "https://upload.wikimedia.org/wikipedia/commons/8/81/Porsche_Wappen.svg" },
        { name: "Volvo", logo: "https://upload.wikimedia.org/wikipedia/commons/0/07/Volvo_logo.svg" },
        { name: "Toyota", logo: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Toyota_carlogo.svg" },
        { name: "Honda", logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Honda_Logo.svg" },
        { name: "Jeep", logo: "https://upload.wikimedia.org/wikipedia/commons/2/29/Jeep_logo.svg" }
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
