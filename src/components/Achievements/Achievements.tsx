import React, { useMemo, useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";
import Title from "components/common/Title/Title";
import Image from "next/image";
import styles from "./Achievements.module.css";

interface Achievement {
  icon: string;
  number: string;
  label: string;
  height: number;
  width: number;
  backgroundImage?: string;
}

interface AchievementsProps {
  content: {
    titleImage?: string;
    titleImageAlt?: string;
    title: string;
    highlightWords: string[];
    descTitle?: string;
    desc?: string;
    achievements: Achievement[];
  };
}

const Achievements: React.FC<AchievementsProps> = ({ content }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  const yearsOfExperience = useMemo(() => {
    const startYear = 2008;
    const currentYear = new Date().getFullYear();
    return currentYear - startYear;
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.7,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 100,
      scale: 0.9,
    },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: index === 2 ? 0.5 : index === 1 ? 1 : 1.5,
        duration: 0.5,
        type: "spring",
        stiffness: 100,
      },
    }),
  };

  return (
    <div className="container">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
        className="w-3/4 mx-auto flex justify-center text-center"
      >
        <Image
          src="/images/AchievementsImages/clap.svg"
          className="mr-5 self-start"
          alt={"clap"}
          width={82}
          height={80}
        />
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-[44px] flex items-center font-semibold">
            A Legacy of
            <span
              className={`font-semibold relative text-[70px] ${styles.startIcon} before:bg-[url(/images/AchievementsImages/star.svg)] px-2`}
            >
              {yearsOfExperience - 1}
            </span>
            Years Of Trust
          </h1>

          {content.descTitle && (
            <p className="text-lg font-medium py-3 md:text-2xl">
              {content.descTitle}
            </p>
          )}
          {content.desc && (
            <Title
              title={content.desc}
              highlightWords={content.highlightWords}
              titleClass="text-center uppercase font-bold mx-auto pt-3 text-4xl"
            />
          )}
        </div>
        <div className="flex justify-end items-baseline">
          <Image
            src="/images/AchievementsImages/clap.svg"
            className="ml-5 self-end"
            alt={"clap"}
            width={82}
            height={80}
          />
        </div>
      </motion.div>

      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="flex justify-center align-bottom mt-24 items-center"
      >
        {content.achievements.map((achievement, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="relative px-14 py-5 mx-10 flex justify-center items-center border-2 rounded-2xl border-white flex-col"
          >
            <Image
              src={achievement.backgroundImage || "/images/tech-startup.png"}
              alt="background"
              width={485}
              height={243}
              className="rounded-xl w-full absolute -z-10 h-full left-0 top-0 opacity-80"
            />
            <Image
              src={
                achievement.icon || "/images/AchievementsImages/avtarThums.svg"
              }
              alt="achievement icon"
              width={achievement.width}
              height={achievement.height}
              className="absolute top-[-40%] h-[110px] w-auto"
            />
            <p className="font-bold text-4xl mt-8 py-1">{achievement.number}</p>
            <p className="font-semibold text-xl">{achievement.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Achievements;
