import React from "react";
import styles from "./FlickeringText.module.css";

interface FlickeringTextProps {
    text: string;
    flickerIndexes?: number[]; /* array of character indexes that should flicker */
    as?: React.ElementType; /* Fix React typing */
    className?: string;
}

export default function FlickeringText({
    text,
    flickerIndexes = [2],
    as: Component = 'span',
    className = ''
}: FlickeringTextProps) {
    return (
        <Component className={className}>
            {text.split('').map((char, index) => (
                <span
                    key={index}
                    className={flickerIndexes.includes(index) && char !== ' ' ? styles.flicker : ''}
                >
                    {char}
                </span>
            ))}
        </Component>
    );
}
