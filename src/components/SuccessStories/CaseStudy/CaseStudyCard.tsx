import Check from "components/common/Icons/Check";
import PlayIcon from "components/common/Icons/PlayIcon";
import { useTheme } from "components/ThemeContext/ThemeContext";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./CaseStudyCard.module.css";
import { CaseStudyProps } from "types/success";

const CaseStudyCard: React.FC<CaseStudyProps> = ({ content }) => {
  const { theme } = useTheme();

  return (
    <div className="container">
      <div
        className={`flex flex-wrap p-6 shadow-xl border-[10px] ${
          theme === "dark"
            ? "bg-[var(--caseStudy-bg)] border-[var(--successBorder-dark)]"
            : "bg-[var(--primary-bg)] border-white"
        } ${styles.caseStudy}`}
      >
        <div
          className={`w-full lg:w-2/3 flex flex-col border-r ${
            theme === "dark"
              ? "border-[var(--successBorder-dark)]"
              : "border-[var(--successBorder-light)]"
          } pr-8`}
        >
          <Image
            src={theme === "dark" ? content.logo : content?.logoDark}
            alt={content.title}
            width={200}
            height={50}
          />
          <p className="mt-4">{content.description}</p>
          <div className="mt-4">
            <p className="flex items-center pb-2">
              <span className="font-bold flex items-center pr-1">
                <Check
                  color={theme === "dark" ? "" : "#000"}
                  className="mr-2"
                />{" "}
                Core Technology:
              </span>
              {content.technologies.join(", ")}
            </p>
            <p className="flex items-center">
              <span className="font-bold flex items-center pr-1">
                <Check
                  color={theme === "dark" ? "" : "#000"}
                  className="mr-2"
                />{" "}
                Industry:
              </span>
              {content.industry}
            </p>
          </div>
          <div className="mt-4">
            <h3 className="font-bold text-lg">Challenges</h3>
            <ul className="list-disc list-inside">
              {content.challenges.map((challenge, index) => (
                <li key={index}>{challenge}</li>
              ))}
            </ul>
          </div>
          <div className="mt-4">
            <h3 className="font-bold text-lg">Solutions</h3>
            <ul className="list-disc list-inside">
              {content.solutions.map((solution, index) => (
                <li key={index}>{solution}</li>
              ))}
            </ul>
          </div>
          <div className="mt-4">
            <Link
              href="#"
              className="font-bold hover:underline text-[var(--button-bg)]"
            >
              READ MORE
            </Link>
          </div>
        </div>
        <div className="w-full lg:w-1/3 flex flex-col mt-6 lg:mt-0 pl-6">
          <div
            className={`flex justify-center items-center relative rounded-2xl border-4 ${
              styles.videoSection
            } ${
              theme === "dark"
                ? "border-[var(--successBorder-dark)]"
                : "border-[var(--successBorder-light)]"
            }`}
          >
            <video className="w-full rounded-xl" width="800" height="300">
              <source src={content.videoLink} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="w-[60px] h-[60px] pl-[5px] bg-white rounded-full flex justify-center items-center absolute top-half left-0 right-0 mx-auto z-10">
              <PlayIcon color="#F13C31" />
            </div>
          </div>
          <h3 className="mt-5 text-xl">Result</h3>
          <div className="flex flex-wrap">
            {content.results.map((result, index) => (
              <div key={index} className={`p-2 w-1/2 odd:pl-0 even:pr-0`}>
                <div
                  className={`p-4 border-[3px] rounded-lg flex flex-col ${
                    theme === "dark"
                      ? "bg-[var(--dark-bg)] border-[var(--successBorder-dark)]"
                      : "bg-[var(--light-bg)] border-[var(--successBorder-light)]"
                  }`}
                >
                  <p className="text-2xl font-bold">{result.value}</p>
                  <p className="text-base">{result.metric}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyCard;
