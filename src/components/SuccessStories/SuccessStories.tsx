import Title from "components/common/Title/Title";
import { useInView, motion } from "framer-motion";
import { useRef } from "react";
import CaseStudyCard from "./CaseStudy/CaseStudyCard";
import { SuccessProps } from "types/success";

const SuccessStories: React.FC<SuccessProps> = ({ content }) => {
  const ref = useRef<HTMLParagraphElement | null>(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  return (
    <div className="">
      <div className="container">
        <div className="text-center py-[10vh]">
          <Title
            title={content.sectionTitle}
            titleClass="text-6xl font-bold"
            highlightWords={content.titleHighlightWords}
          />
          <motion.p
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="text-2xl mt-4 max-w-[900px] mx-auto"
          >
            {content.sectionDesc}
          </motion.p>
        </div>
      </div>
      {content.projectList?.map((project, index) => (
        <CaseStudyCard key={index} content={project} />
      ))}
    </div>
  );
};

export default SuccessStories;
