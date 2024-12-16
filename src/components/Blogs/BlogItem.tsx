import { useTheme } from 'components/ThemeContext/ThemeContext';
import Image from 'next/image';
import React from 'react';
import { BlogItemsProps } from 'types/blog';

const BlogItem: React.FC<BlogItemsProps> = ({ imageUrl,
    title,
    category,
    updateDate,
    desc }) => {
    const { theme } = useTheme();

    return (
        <div className={`p-4 border-2 rounded-lg ${theme === 'dark' ? 'border-[var(--successBorder-dark)] bg-[var(--caseStudy-bg)]' : 'bg-[var(--serviceBg-light)]'}`}>
            <Image className='w-full h-[30vh] object-cover rounded-lg' src={imageUrl} alt={title} width={465} height={340} />
            <div className="flex justify-between font-normal w-full py-3 text-sm">
                <span>{category}</span>
                {updateDate}
            </div>
            <h3 className='pb-4 text-lg'>{title}</h3>
            <p className='font-base '>{desc}</p>
        </div>
    )
}

export default BlogItem