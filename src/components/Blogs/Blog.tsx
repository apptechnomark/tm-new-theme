import Title from 'components/common/Title/Title';
import React, { useRef } from 'react';
import BlogItem from './BlogItem';
import { BlogsProps } from 'types/blog';
import { motion, useInView } from 'framer-motion';

const Blog: React.FC<BlogsProps> = ({ content }) => {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: false, margin: '-100px' });

    return (
        <div className="container">
            <Title title={content.title} highlightWords={[]} titleClass="text-4xl text-center mb-6" />
            <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.5 }}
                className="flex flex-wrap"
            >
                {content.blogItem.map((item, index) => (
                    <motion.div
                        key={index}
                        className="w-full md:w-1/3 px-2"
                        initial={{ opacity: 0, y: 100 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
                        transition={{
                            duration: 0.5,
                            delay: index * 0.5,
                        }}
                    >
                        <BlogItem
                            imageUrl={item.imageUrl}
                            title={item.title}
                            category={item.category}
                            updateDate={item.updateDate}
                            desc={item.desc}
                        />
                    </motion.div>
                ))}
            </motion.div>

            <div className="text-center mt-6">
                <motion.button
                    className="text-white py-3 px-6 rounded bg-[var(--button-bg)]"
                    initial={{ opacity: 0, y: 50, border: '1px solid transparent' }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.5, delay: content.blogItem.length * 0.5 }}
                    whileHover={{
                        background: 'transparent',
                        color: 'var(--button-bg)',
                        border: '1px solid var(--button-bg)',
                    }}
                    whileTap={{ scale: 0.9 }}
                >
                    {content.buttonText}
                </motion.button>
            </div>
        </div>
    );
};

export default Blog;
