import Title from 'components/common/Title/Title';
import { useTheme } from 'components/ThemeContext/ThemeContext';
import Image from 'next/image';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import styles from './OurServices.module.css';

interface ServiceListProps {
    imgUrl: string;
    sectionTitle: string;
    sectionDesc: string;
}

interface ServiceProps {
    content: ServiceListProps[];
}

const OurServices: React.FC<ServiceProps> = ({ content }) => {
    const { theme } = useTheme();
    const ref = useRef<HTMLUListElement | null>(null);
    const isInView = useInView(ref, { once: false, margin: '-100px' });

    return (
        <div className="container">
            <div className="text-center pb-[6vh]">
                <Title
                    title="Our Core Services"
                    titleClass="text-5xl font-bold"
                    highlightWords={["Services"]}
                />
                <motion.p
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    className="text-2xl mt-8 max-w-[800px] mx-auto"
                >
                    We provide digital services customized to elevate your brand, enhance your business processes, and gear up your online presence.
                </motion.p>
            </div>

            <motion.ul
                ref={ref}
                initial={{ opacity: 0, x: 100 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className={`grid gap-8 pb-5 ${styles.serviceList}`}
            >
                {content.map((item, index) => (
                    <li key={index}
                        className={`flex flex-col items-start p-6 rounded-lg shadow-md border ${theme === 'dark'
                            ? 'bg-[var(--serviceBg-dark)] border-[rgba(76,76,76,0.8)]'
                            : 'bg-white border-gray-200'
                            }`}>
                        <div className={`flex justify-center items-center w-16 h-16 rounded-lg p-4 ${theme === 'dark' ? 'bg-black' : 'bg-[var(--light-gray)]'}`}>
                            <Image
                                src={item.imgUrl}
                                alt={`${item.sectionTitle} icon`}
                                width={50}
                                height={50}
                                priority
                            />
                        </div>
                        <h4 className="text-xl font-bold my-4">{item.sectionTitle}</h4>
                        <p className="text-lg">{item.sectionDesc}</p>
                    </li>
                ))}
            </motion.ul>
        </div>
    );
};

export default OurServices;
