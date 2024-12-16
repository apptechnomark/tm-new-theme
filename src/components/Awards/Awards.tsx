import Title from 'components/common/Title/Title'
import { useInView, motion } from 'framer-motion'
import Image from 'next/image'
import React, { useRef } from 'react'
import { AwardsProps } from 'types/awards'

const Awards: React.FC<AwardsProps> = ({ content }) => {
  const ref = useRef<HTMLLIElement>(null);
  const isInView = useInView(ref, { once: false, margin: '-100px' });
  return (
    <div className='container'>
      <div className="flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 50, rotate: 15 }}
          animate={isInView ? { opacity: 1, y: 0, rotate: 0 } : { opacity: 0, y: 50, rotate: 15 }}
          transition={{ duration: 0.5 }}
        >
          <Image className='mr-5' src={"/images/AchievementsImages/clap.svg"} alt='clap' width={40} height={40} />
        </motion.div>
        <Title title={content.title} titleClass='text-5xl' highlightWords={["Awards", "Recognition"]} />
      </div>
      <ul className="flex flex-wrap justify-center mt-4">
        {content.awardList.map((items, index) => (
          <motion.li
            ref={ref}
            initial={{ opacity: 0, y: 100 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
            transition={{ duration: 0.2, delay: index * 0.05 }}
            className='p-2 m-4 bg-white flex items-center justify-center h-[100px] rounded'
            key={index}
          >
            <Image className='object-contain w-full h-full max-w-64' src={items.imgUrl} alt={items.altText} width={150} height={100} />
          </motion.li>
        ))}
      </ul>
      <motion.div
        className="flex justify-end max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 50, rotate: 15 }}
        animate={isInView ? { opacity: 1, y: 0, rotate: 0 } : { opacity: 0, y: 50, rotate: 15 }}
        transition={{ duration: 0.2, delay: content.awardList.length * 0.05 }}
      >
        <Image src={"/images/AchievementsImages/clap.svg"} alt='Clap' width={40} height={40} />
      </motion.div>
    </div>
  )
}

export default Awards