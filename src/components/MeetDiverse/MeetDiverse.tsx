import Title from "components/common/Title/Title";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";
interface ImageData {
  src: string;
  alt: string;
  title: string;
}

interface MeetDiverseData {
  title: string;
  description: string;
  images: ImageData[];
}

interface MeetDiverseProps {
  data: MeetDiverseData;
}

const MeetDiverse: React.FC<MeetDiverseProps> = ({ data }) => {
  const { title, description, images } = data;
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  const predefinedPositions = [
    { left: 17, top: 17 },
    { left: 29, top: 22 },
    { left: 39, top: 31 },
    { left: 55, top: 20 },
    { left: 68, top: 27 },
    { left: 80, top: 15 },
    { left: 88, top: 25 },
    { left: 20, top: 42 },
    { left: 80, top: 42 },
    { left: 90, top: 50 },
    { left: 16, top: 61 },
    { left: 25, top: 80 },
    { left: 35, top: 67 },
    { left: 44, top: 85 },
    { left: 55, top: 70 },
    { left: 65, top: 80 },
    { left: 75, top: 63 },
    { left: 80, top: 78 },
    { left: 8, top: 75 },
    { left: 10, top: 40 },
    { left: 92, top: 70 },
    { left: 95, top: 95 },
    { left: 15, top: 85 },
    { left: 5, top: 10 },
  ];

  return (
    <div
      ref={ref}
      className="h-full container flex text-center justify-center !overflow-hidden items-center relative"
    >
      <div className="text-center flex flex-col gap-2">
        <Title
          title={title}
          titleClass="text-5xl font-bold"
          highlightWords={[]}
        />

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
          className="text-lg font-medium md:text-2xl mt-5"
        >
          {description}
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{
          duration: 0.8,
        }}
        whileHover={{
          scale: 1.1,
          transition: { duration: 0.5 },
        }}
        className="absolute inset-0"
      >
        {images.map((image, index) => {
          const position =
            predefinedPositions[index % predefinedPositions.length]; // Use modulo to reuse positions if needed
          return (
            <motion.div
              key={index}
              className="absolute opacity-90"
              initial={{
                scale: 0,
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)",
                opacity: 0,
              }}
              animate={
                isInView
                  ? {
                    scale: 1,
                    left: `${position.left}%`,
                    top: `${position.top}%`,
                    transform: "translate(-50%, -50%)",
                    opacity: 1,
                  }
                  : { scale: 0, opacity: 0 }
              }
              transition={{
                duration: 1.6,
                ease: "easeOut",
              }}
            >
              <div className="text-3xl md:text-4xl lg:text-2xl">
                <div className="flex flex-col gap-1 justify-center items-center">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={30}
                    height={30}
                    className="lg:w-[40px] md:w-[30px] w-[20px]"
                  />
                  <p className="lg:text-base md:text-sm text-xs">
                    {image.title}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default MeetDiverse;
