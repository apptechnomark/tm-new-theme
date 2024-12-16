import Title from "components/common/Title/Title";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

// interface HeroSectionProps {
//     content?: any;
// }

const HeroSection = () => {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: false, margin: "-100px" });

    return (
        <div className="container">
            <div className="flex flex-col lg:flex-row justify-between items-center">
                <div className="lg:w-1/2">
                    <Title title="Your Reliable Technology Partner" highlightWords={["Reliable", "Partner"]} titleClass="text-6xl font-extrabold"
                    />
                    <motion.p
                        className="mt-6 text-lg md:text-lg"
                        ref={ref}
                        initial={{ opacity: 0, y: 50 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                        transition={{ duration: 0.5 }}
                    >
                        TechnoMark is not only a globally recognized IT company but also a family filled with talented experts that help global brands, enterprises, mid-size businesses, or even startups with innovative solutions.
                    </motion.p>
                    <motion.button
                        className="mt-8 text-white py-3 px-6 rounded bg-[var(--button-bg)]"
                        initial={{ opacity: 0, y: 50, border: "1px solid transparent" }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                        transition={{ duration: 0.5 }}
                        whileHover={{ background: "transparent", color: "var(--button-bg)", border: "1px solid var(--button-bg)" }}
                        whileTap={{ scale: 0.9 }}
                    >
                        Get Your Technical Consultation Now
                    </motion.button>
                </div>

                <div className="lg:w-1/2 flex flex-wrap">
                    <div className="w-full flex justify-end">
                        <div className="relative pb-2">
                            <Image src="/images/life-at-technomark-thumbnail.png" alt="Life @ TechnoMark" className="rounded-lg w-full max-h-[150px]" width="490" height="150" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <Image src="/images/play.png" alt="Play" className="w-10 h-10" width={50} height={50} />
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex justify-end">
                        <div className="relative pb-2 pr-2">
                            <Image src="/images/TM Introduction Video.png" alt="TM Introduction Video" className="rounded-lg w-full max-h-[220px]" width="527" height="220" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <Image src="/images/play.png" alt="Play" className="w-10 h-10" width={50} height={50} />
                            </div>
                        </div>
                        <div className="relative pb-2">
                            <Image src="/images/technology-video-thumbnail.png" alt="Technology Video" className="rounded-lg w-full max-h-[220px]" width="300" height="220" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <Image src="/images/play.png" alt="Play" className="w-10 h-10" width={50} height={50} />
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex justify-end">
                        <div className="relative">
                            <Image src="/images/testimonials-video-thumbnail.png" alt="Testimonials Video" className="rounded-lg w-full max-h-[150px]" width="575" height="150" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <Image src="/images/play.png" alt="Play" className="w-10 h-10" width={50} height={50} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
