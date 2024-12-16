import Title from "components/common/Title/Title";
import { useTheme } from "components/ThemeContext/ThemeContext";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import DarkMapAnimation from "./DarkMapAnimation";
import styles from "./OurLocations.module.css";
import LightMapAnimation from "./LightMapAnimation";

interface LocationsListProps {
  imgUrl: string;
  sectionTitle: string;
  sectionDesc: string;
}

interface LocationsProps {
  content: LocationsListProps[];
}

const OurLocations: React.FC<LocationsProps> = () => {
  const { theme } = useTheme();

  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  const locations = [
    { id: 1, name: "IRVINE, CALIFORNIA", country: "USA" },
    { id: 2, name: "DALLAS, TEXAS", country: "USA" },
    { id: 3, name: "HONULULU, HAWAII", country: "USA" },
    { id: 4, name: "AHMEDABAD", country: "INDIA" },
    { id: 5, name: "HYDERABAD", country: "INDIA" },
    { id: 6, name: "MUMBAI", country: "INDIA" },
    { id: 7, name: "SYDNEY", country: "AUSTRALIA" },
  ];

  return (
    <div className="w-full flex flex-col justify-between h-full">
      <Title
        title="Our Prime Locations"
        titleClass="text-center pb-[6vh] text-5xl font-bold"
        highlightWords={["Locations"]}
      />
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 100 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className={`grid gap-8 pb- ${styles.Locations}`}
      >
        {theme === "dark" ? (
          <DarkMapAnimation locations={locations} />
        ) : (
          <LightMapAnimation locations={locations} />
        )}
      </motion.div>
    </div>
  );
};

export default OurLocations;
