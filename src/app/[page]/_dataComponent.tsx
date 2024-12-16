"use client";
import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";


import dynamic from "next/dynamic";
import { useTheme } from "components/ThemeContext/ThemeContext";

const Blog = dynamic(() => import("components/Blogs/Blog"));
const FeatureSection = dynamic(() => import("components/FeatureSection/FeatureSection"));
const Guarantee = dynamic(() => import("components/Guarantee/Guarantee"));
const Footer = dynamic(() => import("components/Footer/Footer"));
const HeroSection = dynamic(() => import("components/HeroSection/HeroSection"));
const MeetDiverse = dynamic(() => import("components/MeetDiverse/MeetDiverse"));
const MethodologySection = dynamic(() => import("components/MethodologySection/MethodologySection"));
const NextCaseStudy = dynamic(() => import("components/NextCaseStudy/NextCaseStudy"));
const OurLocations = dynamic(() => import("components/OurLocations/OurLocations"));
const OurServices = dynamic(() => import("components/OurServices/OurServices"));
const CaseStudyCard = dynamic(() => import("components/SuccessStories/CaseStudy/CaseStudyCard"));
const SuccessStories = dynamic(() => import("components/SuccessStories/SuccessStories"));
const ClientSpeak = dynamic(() => import("components/ClientSpeak/ClientSpeak"));
const Achievements = dynamic(() => import("components/Achievements/Achievements"));
const Awards = dynamic(() => import("components/Awards/Awards"));
const FormSection = dynamic(() => import("components/FormSection/FormSection"));

const DataComponent = ({ id }: { id: number }) => {
  const { theme } = useTheme();

  const featureContent = {
    secTitle: "Are you facing tech startup challenges?",
    boxSubTitle: "Take your startup to the next level with the best of",
    companyName: "Technomark",
    featureTitle: "Results we Deliver",
    featuresList: [
      "Achieve 2X productivity",
      "Automate 90% workflow",
      "Cost savings by 25%",
      "Expedite time-to-market",
      "Double your audience reach",
      "30% improved engagement",
    ],
    buttonText: "Contact us today",
    buttonUrl: "",
  };

  const methodologySteps = [
    {
      stepNumber: "01",
      title: "ASSESS",
      description:
        "Scrutinize project architecture, infrastructure, performance, & security.",
      details: [
        "Technology Decisions",
        "Architectural Design & Patterns",
        "Infrastructure and Deployment Structures",
        "Security Assessment",
        "Code and Quality Review",
        "Performance Scores",
      ],
    },
    {
      stepNumber: "02",
      title: "CONSULT",
      description:
        "Discuss automation, modernization tech upgrades, and compliance.",
      details: [
        "App Modernization",
        "Product Development Cycle",
        "Automation",
        "UI/UX Design enhancement",
        "DevOps Services",
        "Technology Upgrade",
        "DB Optimization",
      ],
    },
    {
      stepNumber: "03",
      title: "INNOVATE",
      description:
        "Refine project concept through MVP discussions, prototype & brainstorming.",
      details: [
        "Research",
        "Brainstorm & Discovery",
        "Proof of Concept Creation",
        "Develop Minimal Viable product",
        "Design Prototype",
      ],
    },
    {
      stepNumber: "04",
      title: "EXECUTE",
      description:
        "Personalize sprint planning, incorporate latest trends, and create a roadmap.",
      details: [
        "Roadmap Creation",
        "Agile Practices",
        "Implement Trending Technology",
      ],
    },
  ];

  const serviceList = [
    {
      imgUrl: "/images/product_engineer.png",
      sectionTitle: "Product Engineering & Development",
      sectionDesc:
        "Partner with us to convert your innovative ideas into scalable digital products with our full life-cycle product engineering expertise.",
    },
    {
      imgUrl: "/images/product_engineer.png",
      sectionTitle: "Product Engineering & Development",
      sectionDesc:
        "Partner with us to convert your innovative ideas into scalable digital products with our full life-cycle product engineering expertise.",
    },
    {
      imgUrl: "/images/product_engineer.png",
      sectionTitle: "Product Engineering & Development",
      sectionDesc:
        "Partner with us to convert your innovative ideas into scalable digital products with our full life-cycle product engineering expertise.",
    },
    {
      imgUrl: "/images/product_engineer.png",
      sectionTitle: "Product Engineering & Development",
      sectionDesc:
        "Partner with us to convert your innovative ideas into scalable digital products with our full life-cycle product engineering expertise.",
    },
    {
      imgUrl: "/images/product_engineer.png",
      sectionTitle: "Product Engineering & Development",
      sectionDesc:
        "Partner with us to convert your innovative ideas into scalable digital products with our full life-cycle product engineering expertise.",
    },
  ];

  const caseStudyData = {
    logo: "/images/airattix_logo.svg",
    logoDark: "/images/airattix_logo_dark.svg",
    title: "Airattix",
    description:
      "Airattix, an innovative platform in the storage solutions market, connects individuals seeking storage spaces with those who have available space to offer. It is a one-stop solution for all storage and parking needs.",
    technologies: ["Flutter", "Angular", "Golang"],
    industry: "Storage & Warehouse",
    challenges: [
      "Challenges to define product roadmap",
      "Seek experienced technical consulting partner",
      "Need skilled developers for faster development",
    ],
    solutions: [
      "Defining ideal product roadmap",
      "A detailed technical assessment & consultation",
      "Quick Team Augment/Ramp Up",
    ],
    results: [
      { metric: "SEO Score", value: "90%" },
      { metric: "Conversion Rate", value: "38%" },
      { metric: "Reach", value: "2x" },
      { metric: "Team Scaling", value: "2x" },
    ],
    videoLink: "/videos/video.mp4",
  };

  const SuccessStoriesContent = {
    sectionTitle: "Our Customer Success Stories",
    titleHighlightWords: ["Success"],
    sectionDesc:
      "Explore how we've helped organizations overcome technological hurdles and startup challenges with innovative, growth-driven solutions.",
    projectList: [caseStudyData],
  };

  const clientList = {
    title: "Clients Speak",
    desc: "We are a software and mobile application development company that ensures its expertise extends to offer a seamlessly productive and growth-oriented partnership to its clients.",
    sections: [
      {
        videoUrl: "/videos/video.mp4",
        clientNameTitle: "Maria Dorwart",
        ClientNameDesc: "CEO - Littel, Schroeder and McGlynn",
      },
      {
        videoUrl: "/videos/guarantee_video.mp4",
        clientNameTitle: "Alena Botosh ",
        ClientNameDesc: "CEO - Littel, Schroeder and McGlynn",
      },
      {
        videoUrl: "/videos/video.mp4",
        clientNameTitle: "Renee Parker",
        ClientNameDesc: "CEO - Littel, Schroeder and McGlynn",
      },
    ],
  };

  const guarantee = {
    title: "With a 100% Guarantee",
    videoLink: "/videos/guarantee_video.mp4",
    sections: [
      {
        title: "Build Right. Build Smart.",
        description:
          "We float the product canvas to all stakeholders with information like - the project's goal, details of the user persona.",
        count: 1,
      },
      {
        title: "Ship Early. Ship Often.",
        description:
          "We float the product canvas to all stakeholders with information like - the project's goal, details of the user persona.",
        count: 2,
      },
      {
        title: "Analyze, Grow, Change.",
        description:
          "We float the product canvas to all stakeholders with information like - the project's goal, details of the user persona.",
        count: 3,
      },
      {
        title: "We Engineer. We Deliver.",
        description:
          "We float the product canvas to all stakeholders with information like - the project's goal, details of the user persona.",
        count: 4,
      },
    ],
    buttonLabel: "Let's Discuss",
    buttonLink: "/",
  };

  const meetDiverse = {
    title: "Meet Your Diverse",
    description: "Technology Requirements With Our Experts",
    images: [
      {
        src: "/images/TechnologyLogo/Android_Logo.svg",
        alt: "Android",
        title: "Android",
      },
      {
        src: "/images/TechnologyLogo/Angular_Logo.svg",
        alt: "Angular",
        title: "Angular",
      },
      {
        src: "/images/TechnologyLogo/Apple_Logo.svg",
        alt: "Apple",
        title: "IOS",
      },
      {
        src: "/images/TechnologyLogo/ArtificialIntelligence_Logo.svg",
        alt: "AI",
        title: "AI",
      },
      {
        src: "/images/TechnologyLogo/DotNet_Logo.svg",
        alt: "DotNet",
        title: "Dot Net",
      },
      {
        src: "/images/TechnologyLogo/Flutter_Logo.svg",
        alt: "Flutter",
        title: "Flutter",
      },
      {
        src: "/images/TechnologyLogo/Html_Logo.svg",
        alt: "HTML",
        title: "HTML5",
      },
      {
        src: "/images/TechnologyLogo/JavaScript_Logo.svg",
        alt: "JavaScript",
        title: "Java Script",
      },
      {
        src: "/images/TechnologyLogo/Jquery_Logo.svg",
        alt: "Jquery",
        title: "",
      },
      {
        src: "/images/TechnologyLogo/Kotlin_Logo.svg",
        alt: "Kotlin",
        title: "Kotlin",
      },
      {
        src: "/images/TechnologyLogo/Laravel_Logo.svg",
        alt: "Laravel",
        title: "Laravel",
      },
      {
        src: "/images/TechnologyLogo/MongoDB_Logo.svg",
        alt: "MongoDB",
        title: "mongoDB",
      },
      {
        src: "/images/TechnologyLogo/NextJs_Logo.svg",
        alt: "NextJS",
        title: "Next JS",
      },
      {
        src: "/images/TechnologyLogo/Node_Logo.svg",
        alt: "Node",
        title: "Node JS",
      },
      { src: "/images/TechnologyLogo/Php_Logo.svg", alt: "PHP", title: "PHP" },
      {
        src: "/images/TechnologyLogo/Python_Logo.svg",
        alt: "Python",
        title: "Python",
      },
      {
        src: "/images/TechnologyLogo/Rails_Logo.svg",
        alt: "Rails",
        title: "Ruby on Rails",
      },
      {
        src: "/images/TechnologyLogo/React_Logo.svg",
        alt: "React",
        title: "React",
      },
      {
        src: "/images/TechnologyLogo/ReactNative_Logo.svg",
        alt: "React Native",
        title: "React Native",
      },
      {
        src: "/images/TechnologyLogo/Swift_Logo.svg",
        alt: "Swift",
        title: "Swift",
      },
      {
        src: "/images/TechnologyLogo/Wordpress_Logo.svg",
        alt: "Wordpress",
        title: "Wordpress",
      },
    ],
  };

  const locationsList = [
    {
      imgUrl: "/images/world-map.png",
      sectionTitle: "Product Engineering & Development",
      sectionDesc:
        "Partner with us to convert your innovative ideas into scalable digital products with our full life-cycle product engineering expertise.",
    },
    {
      imgUrl: "/images/product_engineer.png",
      sectionTitle: "Product Engineering & Development",
      sectionDesc:
        "Partner with us to convert your innovative ideas into scalable digital products with our full life-cycle product engineering expertise.",
    },
    {
      imgUrl: "/images/product_engineer.png",
      sectionTitle: "Product Engineering & Development",
      sectionDesc:
        "Partner with us to convert your innovative ideas into scalable digital products with our full life-cycle product engineering expertise.",
    },
    {
      imgUrl: "/images/product_engineer.png",
      sectionTitle: "Product Engineering & Development",
      sectionDesc:
        "Partner with us to convert your innovative ideas into scalable digital products with our full life-cycle product engineering expertise.",
    },
    {
      imgUrl: "/images/product_engineer.png",
      sectionTitle: "Product Engineering & Development",
      sectionDesc:
        "Partner with us to convert your innovative ideas into scalable digital products with our full life-cycle product engineering expertise.",
    },
  ];

  const NextCaseStudyContent = {
    titleImage: "/images/likeThumb.svg",
    titleImageAlt: "like thumb",
    title: "The next case study could be yours!",
    highlightWords: ["yours"],
    descTitle: "Want to start a Project?",
    desc: "Let's bring your beautiful ideas to life and simplify the way you visualize your next big thing.",
    buttonText: "Consult Our Experts",
    buttonUrl: "#",
    caseStudyImgURL: [
      {
        imgUrl: `${theme === "dark"
          ? "/images/darknextCaseStudy.png"
          : "/images/lightnextCaseStudy.png"
          }`,
        altText: "Case Study",
      },
      {
        imgUrl: `${theme === "dark"
          ? "/images/darknextCaseStudy.png"
          : "/images/lightnextCaseStudy.png"
          }`,
        altText: "Case Study",
      },
      {
        imgUrl: `${theme === "dark"
          ? "/images/darknextCaseStudy.png"
          : "/images/lightnextCaseStudy.png"
          }`,
        altText: "Case Study",
      },
      {
        imgUrl: `${theme === "dark"
          ? "/images/darknextCaseStudy.png"
          : "/images/lightnextCaseStudy.png"
          }`,
        altText: "Case Study",
      },
      {
        imgUrl: `${theme === "dark"
          ? "/images/darknextCaseStudy.png"
          : "/images/lightnextCaseStudy.png"
          }`,
        altText: "Case Study",
      },
      {
        imgUrl: `${theme === "dark"
          ? "/images/darknextCaseStudy.png"
          : "/images/lightnextCaseStudy.png"
          }`,
        altText: "Case Study",
      },
      {
        imgUrl: `${theme === "dark"
          ? "/images/darknextCaseStudy.png"
          : "/images/lightnextCaseStudy.png"
          }`,
        altText: "Case Study",
      },
      {
        imgUrl: `${theme === "dark"
          ? "/images/darknextCaseStudy.png"
          : "/images/lightnextCaseStudy.png"
          }`,
        altText: "Case Study",
      },
      {
        imgUrl: `${theme === "dark"
          ? "/images/darknextCaseStudy.png"
          : "/images/lightnextCaseStudy.png"
          }`,
        altText: "Case Study",
      },
    ],
  };

  const AchievementsContent = {
    title: "A Legacy of 15 Years Of Trust",
    descTitle: "Within the market, among customers, and with our people.",
    desc: "Pacific Group of Companies",
    highlightWords: ["Pacific Group of Companies"],
    achievements: [
      {
        icon: "/images/AchievementsImages/avtarThums.svg",
        number: "4000+",
        width: 100,
        height: 170,
        label: "Happy Customers",
        backgroundImage: "/images/tech-startup.png",
      },
      {
        icon: "/images/AchievementsImages/avtarLaptop.svg",
        number: "1000+",
        width: 100,
        height: 170,
        label: "Professionals",
        backgroundImage: "/images/tech-startup.png",
      },
      {
        icon: "/images/AchievementsImages/location.svg",
        number: "7",
        width: 90,
        height: 90,
        label: "Locations",
        backgroundImage: "/images/tech-startup.png",
      },
    ],
  };

  const formContent = {
    title: "Accelerate Your Progress",
    nextSteps: [
      "We'll reach out to you within 24 hours.",
      "We'll discuss your project and gather your requirements and business objectives, and develop a proposal accordingly.",
      "You can start a 15-day risk-free trial with us.",
    ],
    formHeading: "Send a message",
    submitButtonText: "Get Started",
    nextStepsHeading: "What will happen next?",
  };

  const footerData = [
    {
      name: "Company",
      children: [
        { name: "About Us", link: "/about-us" },
        { name: "Careers", link: "/careers" },
        { name: "Blog", link: "/blog" },
        { name: "Contact", link: "/contact" },
      ],
    },
    {
      name: "Products",
      children: [
        { name: "Features", link: "/features" },
        { name: "Pricing", link: "/pricing" },
        { name: "Documentation", link: "/docs" },
        { name: "API Reference", link: "/api" },
      ],
    },
    {
      name: "Support",
      children: [
        { name: "Help Center", link: "/help-center" },
        { name: "FAQ", link: "/faq" },
        { name: "Terms of Service", link: "/terms-of-service" },
        { name: "Privacy Policy", link: "/privacy-policy" },
      ],
    },
  ];

  const blogData = {
    title: "News & Blogs",
    buttonText: "View All",
    buttonUrl: "#",
    blogItem: [
      {
        imageUrl: "/images/BlogImages/Robot.jpg",
        title:
          "Investigating the Human Psychology Behind User Experience Design",
        category: "Artificial Intelligence",
        updateDate: "22 Feb 2024",
        desc: "Every journey in life has a beginning, where it all started. Welcome to my blog - Uncovering the human psychology behind user experience design.",
      },
      {
        imageUrl: "/images/BlogImages/Robot.jpg",
        title:
          "Investigating the Human Psychology Behind User Experience Design",
        category: "Artificial Intelligence",
        updateDate: "22 Feb 2024",
        desc: "Every journey in life has a beginning, where it all started. Welcome to my blog - Uncovering the human psychology behind user experience design.",
      },
      {
        imageUrl: "/images/BlogImages/Robot.jpg",
        title:
          "Investigating the Human Psychology Behind User Experience Design",
        category: "Artificial Intelligence",
        updateDate: "22 Feb 2024",
        desc: "Every journey in life has a beginning, where it all started. Welcome to my blog - Uncovering the human psychology behind user experience design.",
      },
    ],
  };

  const awardsData = {
    title: "Awards & Recognition",
    highlightedWord: ["Awards", "Recognition"],
    awardList: [
      {
        imgUrl: "/images/awards/itRate.svg",
        altText: "IT Rate",
      },
      {
        imgUrl: "/images/awards/web-design-company.svg",
        altText: "Web Design Company",
      },
      {
        imgUrl: "/images/awards/clutch.svg",
        altText: "Clutch",
      },
      {
        imgUrl: "/images/awards/goodfirms.svg",
        altText: "Good Firms",
      },
      {
        imgUrl: "/images/awards/iso-certificate-9001-2015.svg",
        altText: "IOS 9001-2015",
      },
      {
        imgUrl: "/images/awards/gesia.svg",
        altText: "Gesia",
      },
      {
        imgUrl: "/images/awards/appfutura.svg",
        altText: "App Futura",
      },
      {
        imgUrl: "/images/awards/msme-logo.svg",
        altText: "MSME",
      },
      {
        imgUrl: "/images/awards/iso-certificate-logo-27001.svg",
        altText: "IOS 27001",
      },
      {
        imgUrl: "/images/awards/startupIndia.svg",
        altText: "Start Up India",
      },
      {
        imgUrl: "/images/awards/Upwork.svg",
        altText: "Upwork",
      },
      {
        imgUrl: "/images/awards/dun-bradstreet.svg",
        altText: "Dun Bradstreet",
      },
    ],
  };

  const useParallax = (value: MotionValue<number>, distance: number) => {
    return useTransform(value, [0, 1], [-distance, distance]);
  };

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 0);
  // const isTallSection = [9].includes(id);
  return (
    <motion.section
      ref={ref}
      className={`tm-section ${theme === "dark" ? "bg-[var(--dark-bg)]" : ""} ${id === 5 ? "!items-start" : ""
        } ${id === 16 ? "!block" : ""}`}
      style={{ y }}
      key={id}
    >
      {id === 1 && <HeroSection />}
      {id === 2 && <FeatureSection content={featureContent} />}
      {id === 3 && <MethodologySection content={methodologySteps} />}
      {id === 4 && <OurServices content={serviceList} />}
      {id === 5 && <SuccessStories content={SuccessStoriesContent} />}
      {id === 6 && <CaseStudyCard content={caseStudyData} />}
      {id === 7 && <NextCaseStudy content={NextCaseStudyContent} />}
      {id === 8 && <Guarantee content={guarantee} />}
      {id === 9 && <ClientSpeak content={clientList} />}
      {id === 10 && <Achievements content={AchievementsContent} />}
      {id === 11 && <MeetDiverse data={meetDiverse} />}
      {id === 12 && <OurLocations content={locationsList} />}
      {id === 13 && <Blog content={blogData} />}
      {id === 14 && <Awards content={awardsData} />}
      {id === 15 && <FormSection formContent={formContent} />}
      {id === 16 && <Footer footerData={footerData} />}
      {id != 1 &&
        id != 2 &&
        id != 3 &&
        id != 4 &&
        id != 5 &&
        id != 6 &&
        id != 7 &&
        id != 8 &&
        id != 9 &&
        id != 10 &&
        id != 11 &&
        id != 12 &&
        id != 13 &&
        id != 14 &&
        id != 15 &&
        id != 16 && <section className="tm-section">#0{id}</section>}
    </motion.section>
  );
};

export default DataComponent;
