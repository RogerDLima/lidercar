"use client";

import React, { useEffect, useRef, useState } from "react";

interface RevealWrapperProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
}

export default function RevealWrapper({ children, className = "", delay = 0 }: RevealWrapperProps) {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            {
                threshold: 0,
                rootMargin: "0px 0px 200px 0px", // Trigger earlier so user doesn't wait
            }
        );

        const currentRef = ref.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, []);

    return (
        <div
            ref={ref}
            className={`reveal-element ${isVisible ? "is-visible" : ""} ${className}`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </div>
    );
}
