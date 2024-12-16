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

interface HomeDataProps {
  featureContent: {
    secTitle: string;
    boxSubTitle: string;
    companyName: string;
    featureTitle: string;
    featuresList: string[];
    buttonText: string;
    buttonUrl: string;
  };

  methodologySteps: Array<{
    stepNumber: string;
    title: string;
    description: string;
    details: string[];
  }>;

  serviceList: Array<{
    imgUrl: string;
    sectionTitle: string;
    sectionDesc: string;
  }>;

  caseStudyData: {
    logo: string;
    logoDark: string;
    title: string;
    description: string;
    technologies: string[];
    industry: string;
    challenges: string[];
    solutions: string[];
    results: Array<{
      metric: string;
      value: string;
    }>;
    videoLink: string;
  };

  SuccessStoriesContent: {
    sectionTitle: string;
    titleHighlightWords: string[];
    sectionDesc: string;
    projectList: Array<{
      logo: string;
      logoDark: string;
      title: string;
      description: string;
      technologies: string[];
      industry: string;
      challenges: string[];
      solutions: string[];
      results: Array<{
        metric: string;
        value: string;
      }>;
      videoLink: string;
    }>;
  };

  clientList: {
    title: string;
    desc: string;
    sections: Array<{
      videoUrl: string;
      clientNameTitle: string;
      ClientNameDesc: string;
    }>;
  };

  guarantee: {
    title: string;
    videoLink: string;
    sections: Array<{
      title: string;
      description: string;
      count: number;
    }>;
    buttonLabel: string;
    buttonLink: string;
  };

  meetDiverse: {
    title: string;
    description: string;
    images: Array<{
      src: string;
      alt: string;
      title: string;
    }>;
  };

  locationsList: Array<{
    imgUrl: string;
    sectionTitle: string;
    sectionDesc: string;
  }>;

  NextCaseStudyContent: {
    titleImage: string;
    titleImageAlt: string;
    title: string;
    highlightWords: string[];
    descTitle: string;
    desc: string;
    buttonText: string;
    buttonUrl: string;
    caseStudyImgURL: Array<{
      imgUrl: string;
      altText: string;
    }>;
  };

  AchievementsContent: {
    title: string;
    descTitle: string;
    desc: string;
    highlightWords: string[];
    achievements: Array<{
      icon: string;
      number: string;
      width: number;
      height: number;
      label: string;
      backgroundImage: string;
    }>;
  };

  formContent: {
    title: string;
    nextSteps: string[];
    formHeading: string;
    submitButtonText: string;
    nextStepsHeading: string;
  };

  footerData: Array<{
    name: string;
    children: Array<{
      name: string;
      link: string;
    }>;
  }>;

  blogData: {
    title: string;
    buttonText: string;
    buttonUrl: string;
    blogItem: Array<{
      imageUrl: string;
      title: string;
      category: string;
      updateDate: string;
      desc: string;
    }>;
  };

  awardsData: {
    title: string;
    highlightedWord: string[];
    awardList: Array<{
      imgUrl: string;
      altText: string;
    }>;
  };
}

const DataComponent = ({ id, data }: { id: number; data: HomeDataProps }) => {
  const { theme } = useTheme();

  const renderComponent = () => {
    switch (id) {
      case 1:
        return data && <HeroSection />;
      case 2:
        return data && <FeatureSection content={data.featureContent} />;
      case 3:
        return data && <MethodologySection content={data.methodologySteps} />;
      case 4:
        return data && <OurServices content={data.serviceList} />;
      case 5:
        return data && <SuccessStories content={data.SuccessStoriesContent} />;
      case 6:
        return data && <CaseStudyCard content={data.caseStudyData} />;
      case 7:
        return data && <NextCaseStudy content={data.NextCaseStudyContent} />;
      case 8:
        return data && <Guarantee content={data.guarantee} />;
      case 9:
        return data && <ClientSpeak content={data.clientList} />;
      case 10:
        return data && <Achievements content={data.AchievementsContent} />;
      case 11:
        return data && <MeetDiverse data={data.meetDiverse} />;
      case 12:
        return data && <OurLocations content={data.locationsList} />;
      case 13:
        return data && <Blog content={data.blogData} />;
      case 14:
        return data && <Awards content={data.awardsData} />;
      case 15:
        return data && <FormSection formContent={data.formContent} />;
      case 16:
        return data && <Footer footerData={data.footerData} />;
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
