import { motion, useInView } from "framer-motion";
import Title from "components/common/Title/Title";
import { useRef } from "react";
import styles from "./MethodologySection.module.css";
import Featurebullet from "images/icons/Featurebullet";

interface MethodologyStep {
    stepNumber: string;
    title: string;
    description: string;
    details?: string[];
}

interface MethodologySectionProps {
    content: MethodologyStep[];
}

const MethodologySection: React.FC<MethodologySectionProps> = ({ content }) => {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: false, margin: "-100px" });
    return (
        <div className="container h-full">
            <div className="h-full flex flex-col">
                <div className="flex items-center mt-[2vh]">
                    <Title
                        title="Our Methodology in Action"
                        titleClass="text-6xl font-extrabold"
                        highlightWords={["Methodology"]}
                    />
                    <motion.p
                        className="text-md md:text- lg ml-16 max-w-[680px]"
                        ref={ref}
                        initial={{ opacity: 0, y: 50 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                    >
                        We employ a systematic approach, commencing with project assessment,
                        transitioning to technology consultation, engaging in brainstorming, and
                        ultimately executing the roadmap.
                    </motion.p>
                </div>

                {/* Steps Section */}
                <div className="flex items-center mt-[5vh] h-full">
                    {content.map((step, index) => (
                        <motion.div
                            key={index}
                            className={`w-1/4 relative overflow-hidden ${styles.methodologyBox}`}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            {/* Step Number and Title */}
                            <motion.h3
                                className="text-xl mb-2"
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                            >
                                <span className="font-semibold opacity-70">{step.stepNumber}</span>
                                <span className="font-bold ml-2">{step.title}</span>
                            </motion.h3>

                            {/* Description */}
                            <motion.p
                                className="text-sm md:text-base mb-4"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.3 }}
                            >
                                {step.description}
                            </motion.p>

                            {step.details && (
                                <motion.ul
                                    className="w-full flex flex-col justify-center items-start"
                                    whileHover={{
                                        opacity: 1,
                                        pointerEvents: "auto",
                                    }}
                                >
                                    {step.details.map((detail, i) => (
                                        <li key={i} className="flex items-center mb-2">
                                            <span className="mr-2"> <Featurebullet /></span>
                                            {detail}
                                        </li>
                                    ))}
                                </motion.ul>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MethodologySection;
