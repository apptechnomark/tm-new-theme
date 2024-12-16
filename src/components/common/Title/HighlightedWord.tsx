import React from "react";
import styles from "./title.module.css";

interface HighlightedWordProps {
    word: string;
    isAnimating: boolean;
}

const HighlightedWord: React.FC<HighlightedWordProps> = ({ word, isAnimating }) => {
    return (
        <span
            className={`${styles.highlight} ${isAnimating ? styles.animate : ""
                } relative font-extrabold`}
        >
            {word}
        </span>
    );
};

export default HighlightedWord;
