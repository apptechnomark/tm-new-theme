import Title from "components/common/Title/Title";
import { useTheme } from "components/ThemeContext/ThemeContext";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import styles from "./ClientSpeak.module.css";
import Link from "next/link";
import PlayIcon from "components/common/Icons/PlayIcon";
import { ClientSpeakProps } from "types/success";

const ClientSpeak: React.FC<ClientSpeakProps> = ({ content }) => {
  const { theme } = useTheme();
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  return (
    <div className="container">
      <div className="text-center pb-[6vh]">
        <Title
          title={content.title}
          titleClass="text-5xl font-bold"
          highlightWords={["Services"]}
        />
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="text-xl mt-8 max-w-[630px] font-semibold mx-auto"
        >
          {content.desc}
        </motion.p>
      </div>

      <motion.div
        ref={ref}
        initial={{ opacity: 0, x: 100 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className={`grid gap-8 pb-5 ${styles.clientList}`}
      >
        {content.sections.map((item, index) => (
          <div
            key={index}
            className={`relative rounded-lg shadow-md border ${
              theme === "dark"
                ? "bg-[var(--serviceBg-dark)] border-[rgba(76,76,76,0.8)]"
                : "bg-white border-gray-200"
            }`}
          >
            <video className="rounded-2xl" autoPlay loop muted>
              <source src={item.videoUrl} type="video/mp4" />
            </video>
            <span className="absolute left-0 right-0 mx-auto top-1/2 -translate-y-1/2 max-w-fit">
              <Link
                href={"#"}
                className="flex justify-center items-center h-[60px] w-[60px] pl-[5px] rounded-full bg-white"
              >
                <PlayIcon color="#F13C31" />
              </Link>
            </span>
            <span className="absolute left-0 rounded-b-xl right-0 mx-auto bottom-0 bg-[var(--client-name-bg)] w-full  bg-opacity-35">
              <div className="p-5 text-white ">
                <h3 className="pb-2 font-bold text-lg">
                  {item.clientNameTitle}
                </h3>
                <p className="text-base">{item.ClientNameDesc}</p>
              </div>
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default ClientSpeak;
