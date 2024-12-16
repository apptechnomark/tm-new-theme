import React, { useState } from "react";
import { motion } from "framer-motion";
import Title from "components/common/Title/Title";
import Image from "next/image";

interface CaseStudyImgProps {
  imgUrl: string;
  altText: string;
}

interface NextCaseStudyProps {
  content: {
    titleImage: string;
    titleImageAlt: string;
    title: string;
    highlightWords: string[];
    descTitle?: string;
    desc?: string;
    buttonText?: string;
    buttonUrl?: string;
    caseStudyImgURL?: CaseStudyImgProps[];
  };
}

const NextCaseStudy: React.FC<NextCaseStudyProps> = ({ content }) => {
  const [direction, setDirection] = useState<"left" | "right">("left");
  const handleAnimationComplete = () => {
    setDirection((prev) => (prev === "left" ? "right" : "left"));
  };

  return (
    <div className="container">
      <div className="w-3/4 mx-auto text-center">
        <div className="flex items-center jus mb-6 text-5xl md:text-7xl">
          <Image
            alt={content.titleImageAlt}
            src={content.titleImage}
            width={122}
            height={125}
            className="object-none pb-10"
          />
          <Title
            title={content.title}
            titleClass="font-black max-w-[750px]"
            highlightWords={content.highlightWords}
          />
        </div>
        {content.descTitle && (
          <p className="text-lg font-medium md:text-5xl mt-5">
            {content.descTitle}
          </p>
        )}
        {content.desc && (
          <p className=" max-w-[450px] text-center mx-auto pt-3 text-lg md:text-lg">
            {content.desc}
          </p>
        )}
        {content.buttonUrl && (
          <div className="mt-5">
            <a
              href={content.buttonUrl}
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-8 rounded-lg inline-block"
            >
              {content.buttonText}
            </a>
          </div>
        )}
      </div>
      {content.caseStudyImgURL && (
        <div className="mt-8 overflow-hidden">
          <motion.div
            className="flex"
            animate={{
              x: ["0%", "-50%", "0%"],
            }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 6,
            }}
            onAnimationComplete={handleAnimationComplete}
          >
            {[...content.caseStudyImgURL, ...content.caseStudyImgURL].map(
              (imgList, index) => (
                <div key={index} className="flex-shrink-0 px-2">
                  <Image
                    width={417}
                    height={232}
                    src={imgList.imgUrl}
                    alt={imgList.altText}
                    className="w-[417px] h-[232px] object-cover max-w-none"
                  />
                </div>
              )
            )}
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default NextCaseStudy;
