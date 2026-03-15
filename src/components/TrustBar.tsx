import styles from "./TrustBar.module.css";

export default function TrustBar() {
    // Array of premium brands to showcase expertise with generic standard img tags
    const brands = [
        { name: "BMW", logo: "https://cdn.simpleicons.org/bmw/white" },
        { name: "Audi", logo: "https://cdn.simpleicons.org/audi/white" },
        { name: "Mercedes-Benz", logo: "https://upload.wikimedia.org/wikipedia/commons/9/90/Mercedes-Logo.svg" },
        { name: "Porsche", logo: "https://cdn.simpleicons.org/porsche/white" },
        { name: "Volvo", logo: "https://cdn.simpleicons.org/volvo/white" },
        { name: "Toyota", logo: "https://cdn.simpleicons.org/toyota/white" },
        { name: "Honda", logo: "https://cdn.simpleicons.org/honda/white" },
        { name: "Ford", logo: "https://cdn.simpleicons.org/ford/white" }
    ];

    return (
        <div className={styles.trustBar}>
            <div className={styles.label}>
                Especialistas em:
            </div>
            <div className={styles.marqueeContainer}>
                {/* Two identical tracks for seamless infinite loop */}
                <div className={styles.marqueeTrack}>
                    {brands.map((brand, index) => (
                        <div key={index} className={styles.brandWrapper}>
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src={brand.logo} alt={`Logo ${brand.name}`} className={styles.brandImage} />
                            {/* Dot separator */}
                            <span className={styles.separator}>•</span>
                        </div>
                    ))}
                    {brands.map((brand, index) => (
                        <div key={`dup-${index}`} className={styles.brandWrapper}>
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src={brand.logo} alt={`Logo ${brand.name}`} className={styles.brandImage} />
                            <span className={styles.separator}>•</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
