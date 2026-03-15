import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';
import styles from './Breadcrumbs.module.css';

interface BreadcrumbItem {
    label: string;
    href?: string;
}

interface BreadcrumbsProps {
    items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
    return (
        <nav aria-label="Breadcrumb" className={styles.breadcrumbs}>
            <div className="container">
                <ol className={styles.list}>
                    <li className={styles.item}>
                        <Link href="/" className={styles.link}>
                            <Home size={14} />
                            <span className="sr-only">Início</span>
                        </Link>
                    </li>
                    {items.map((item, index) => (
                        <li key={index} className={styles.item}>
                            <ChevronRight size={14} className={styles.separator} />
                            {item.href ? (
                                <Link href={item.href} className={styles.link}>
                                    {item.label}
                                </Link>
                            ) : (
                                <span className={styles.current} aria-current="page">
                                    {item.label}
                                </span>
                            )}
                        </li>
                    ))}
                </ol>
            </div>
        </nav>
    );
}
