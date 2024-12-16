import Title from "components/common/Title/Title";
import styles from "./FeatureSection.module.css";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

interface FeatureSectionProps {
    content: {
        secTitle: string;
        boxSubTitle: string;
        companyName: string;
        featureTitle: string;
        featuresList: string[];
        buttonText?: string;
        buttonUrl?: string;
    };
}

const FeatureSection = ({ content }: FeatureSectionProps) => {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: false, margin: "-100px" });
    return (
        <div className="container">
            <Title title={content.secTitle} highlightWords={[]} titleClass="text-4xl font-semibold text-center capitalize"></Title>
            <motion.div
                initial={{ opacity: 0, y: 500 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
                transition={{ duration: 0.5 }}
                className={`mt-[4vh] border-4 border-white p-6 max-w-[1150px] rounded-3xl text-center mx-auto relative ${styles.techStartupBox}`}>
                <Image src="/images/tech-startup.png" alt="startupbg" width={1366} height={631} className="rounded-3xl w-full absolute -z-10 h-full left-0 top-0 opacity-80" />
                <motion.p
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-white py-4 text-3xl max-w-[480px] mx-auto">
                    {content.boxSubTitle}
                </motion.p>
                <motion.h2
                    ref={ref}
                    initial={{ opacity: 0, scale: 99 }}
                    animate={isInView ? { opacity: 0.8, scale: 1 } : { opacity: 0, scale: 99 }}
                    transition={{ duration: 0.5 }}
                    className="inline-block uppercase text-5xl font-black text-black py-4 z-0 relative before:absolute before:-z-10 before:bg-[var(--highlited-color)] before:w-full before:h-[25px] before:bottom-4">
                    {content.companyName}
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.5 }}
                    className="text-white pt-4 text-2xl">
                    {content.featureTitle}
                </motion.p>
                <ul className={`flex flex-wrap text-left justify-center text-white ${styles.featureList}`}>
                    {content.featuresList.map((list, index) => <li key={index} className="w-full md:w-1/3 max-w-[325px] flex items-center before:bg-white before:w-2 before:h-2 before:rounded-full before:mr-4 bg-[rgba(0,0,0,0.3)] m-3 px-4 py-2 rounded-md text-lg">{list}</li>)}
                </ul>
            </motion.div>
        </div>
    );
};

export default FeatureSection;
