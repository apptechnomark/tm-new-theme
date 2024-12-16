import React, { useRef } from "react";
import { useTheme } from "components/ThemeContext/ThemeContext";
import { motion, useInView } from "framer-motion";
import styles from "./Guarantee.module.css";
import PlayIcon from "components/common/Icons/PlayIcon";
import Link from "next/link";
import { GuaranteeProps } from "types/success";

const Guarantee: React.FC<GuaranteeProps> = ({ content }) => {
  const { theme } = useTheme();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, margin: "-10px" });

  return (
    <div className="container">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 100 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className={`relative flex flex-wrap shadow-xl border-[10px] ${
          theme === "dark"
            ? "bg-[var(--caseStudy-bg)] border-[var(--successBorder-dark)] bg-opacity-70"
            : "bg-[var(--primary-bg)] border-white bg-opacity-70"
        } ${styles.caseStudy}`}
      >
        <video
          className="w-full h-[85vh] object-cover z-[-1] mx-auto rounded-3xl"
          autoPlay
          loop
          muted
          height={400}
          width={1100}
        >
          <source src={content.videoLink} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div
          className={`absolute top-0 left-0 w-full h-full flex p-6 pr-8 z-90 ${
            styles.guaranteeOverlay
          } ${
            theme === "dark"
              ? `border-[var(--successBorder-dark)]`
              : `${styles.guaranteeOverlayLight} border-[var(--successBorder-light)]`
          }`}
        >
          <div className="flex flex-col w-4/6">
            <h2 className="mt-4 font-semibold text-4xl">{content.title}</h2>
            <div className="flex flex-wrap">
              {content.sections.map((section, index) => (
                <div key={index} className="mt-4 w-1/2 pr-4">
                  <div className="flex justify-between w-10/12">
                    <h3 className="font-bold mt-10 text-2xl max-w-[172px]">
                      {section.title}
                    </h3>
                    <strong
                      className={`text-[13vh] leading-tight ${
                        theme === "light"
                          ? "text-[var(--guarantee-count-light)]"
                          : "text-[var(--guarantee-count-dark)]"
                      } `}
                    >
                      {section.count}
                    </strong>
                  </div>
                  <span className="font-medium text-base block max-w-[355px]">
                    {section.description}
                  </span>
                </div>
              ))}

              <div className="pt-[4vh]">
                <motion.button
                  className="text-white py-3 px-6 rounded bg-[var(--button-bg)]"
                  initial={{
                    opacity: 0,
                    y: 50,
                    border: "1px solid transparent",
                  }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
                  }
                  transition={{ duration: 0.5 }}
                  whileHover={{
                    background: "transparent",
                    color: "var(--button-bg)",
                    border: "1px solid var(--button-bg)",
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  {content.buttonLabel || "Let's Discuss"}
                </motion.button>
              </div>
            </div>
          </div>

          <div className="w-2/6">
            <div className="flex h-full w-full  justify-center items-center">
              <Link
                href={"#"}
                className="flex justify-center items-center h-[60px] w-[60px] pl-[5px] rounded-full bg-white"
              >
                <PlayIcon color="#F13C31" />
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Guarantee;
