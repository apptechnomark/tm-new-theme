import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import HighlightedWord from "./HighlightedWord";
import styles from "./title.module.css";
import { TitleProps } from "types/common";

const Title: React.FC<TitleProps> = ({ titleClass = "", title, highlightWords }) => {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: false, margin: "-100px" });

    const getHighlightedText = (text: string, wordsToHighlight: string[]) => {
        const regex = new RegExp(`\\b(${wordsToHighlight.join("|")})\\b`, "gi");
        const parts = text.split(regex);
        return parts.map((part, index) =>
            wordsToHighlight.some((word) => word.toLowerCase() === part.toLowerCase()) ? (
                <HighlightedWord key={index} word={part} isAnimating={isInView} />
            ) : (
                part
            )
        );
    };

    return (
        <motion.h3
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.5 }}
            className={`${styles.title} ${titleClass}`}
        >
            {getHighlightedText(title, highlightWords)}
        </motion.h3>
    );
};

export default Title;
