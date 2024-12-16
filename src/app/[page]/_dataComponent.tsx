"use client";
import { useTheme } from "components/ThemeContext/ThemeContext";
import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import dynamic from "next/dynamic";
import { useRef } from "react";

const Blog = dynamic(() => import("components/Blogs/Blog"));
const FeatureSection = dynamic(
  () => import("components/FeatureSection/FeatureSection")
);
const Guarantee = dynamic(() => import("components/Guarantee/Guarantee"));
const Footer = dynamic(() => import("components/Footer/Footer"));
const HeroSection = dynamic(() => import("components/HeroSection/HeroSection"));
const MeetDiverse = dynamic(() => import("components/MeetDiverse/MeetDiverse"));
const MethodologySection = dynamic(
  () => import("components/MethodologySection/MethodologySection")
);
const NextCaseStudy = dynamic(
  () => import("components/NextCaseStudy/NextCaseStudy")
);
const OurLocations = dynamic(
  () => import("components/OurLocations/OurLocations")
);
const OurServices = dynamic(() => import("components/OurServices/OurServices"));
const CaseStudyCard = dynamic(
  () => import("components/SuccessStories/CaseStudy/CaseStudyCard")
);
const SuccessStories = dynamic(
  () => import("components/SuccessStories/SuccessStories")
);
const ClientSpeak = dynamic(() => import("components/ClientSpeak/ClientSpeak"));
const Achievements = dynamic(
  () => import("components/Achievements/Achievements")
);
const Awards = dynamic(() => import("components/Awards/Awards"));
const FormSection = dynamic(() => import("components/FormSection/FormSection"));

const DataComponent = ({ id, data }: { id: number; data: any }) => {
  const { theme } = useTheme();

  const renderComponent = () => {
    switch (id) {
      case 1:
        return <HeroSection />;
      case 2:
        return <FeatureSection content={data.featureContent} />;
      case 3:
        return <MethodologySection content={data.methodologySteps} />;
      case 4:
        return <OurServices content={data.serviceList} />;
      case 5:
        return <SuccessStories content={data.SuccessStoriesContent} />;
      case 6:
        return <CaseStudyCard content={data.caseStudyData} />;
      case 7:
        return <NextCaseStudy content={data.NextCaseStudyContent} />;
      case 8:
        return <Guarantee content={data.guarantee} />;
      case 9:
        return <ClientSpeak content={data.clientList} />;
      case 10:
        return <Achievements content={data.AchievementsContent} />;
      case 11:
        return <MeetDiverse data={data.meetDiverse} />;
      case 12:
        return <OurLocations content={data.locationsList} />;
      case 13:
        return <Blog content={data.blogData} />;
      case 14:
        return <Awards content={data.awardsData} />;
      case 15:
        return <FormSection formContent={data.formContent} />;
      case 16:
        return <Footer footerData={data.footerData} />
      default:
        return null;
    }
  };

  const useParallax = (value: MotionValue<number>, distance: number) => {
    return useTransform(value, [0, 1], [-distance, distance]);
  };

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 0);
  return (
    <motion.section
      ref={ref}
      className={`tm-section ${theme === "dark" ? "bg-[var(--dark-bg)]" : ""} ${
        id === 5 ? "!items-start" : ""
      } ${id === 16 ? "!block" : ""}`}
      style={{ y }}
      key={id}
    >
      {renderComponent()}
    </motion.section>
  );
};

export default DataComponent;
