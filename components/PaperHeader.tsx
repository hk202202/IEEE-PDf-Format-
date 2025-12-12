import React from 'react';
import { Author } from '../types';

interface PaperHeaderProps {
  title: string;
  subtitle?: string;
  authors: Author[];
}

export const PaperHeader: React.FC<PaperHeaderProps> = ({ title, subtitle, authors }) => {
  return (
    <div className="text-center print-break-inside-avoid">
      <h1 className="text-[24pt] font-medium leading-tight mb-2 text-black">
        {title}
      </h1>
      {subtitle && (
        <h2 className="text-[14pt] text-black mb-6 italic font-normal">
          {subtitle}
        </h2>
      )}
      
      <div className="mt-6 flex flex-wrap justify-center gap-x-8 gap-y-4 max-w-4xl mx-auto">
        {authors.map((author, index) => (
          <div key={index} className="text-center flex flex-col items-center min-w-[180px]">
            <div className="font-normal text-[13px] text-black">
              {author.name}
            </div>
            <div className="text-[12px] italic text-black">
               {author.role ? <span>{author.role}, </span> : ''}{author.affiliation}
            </div>
            <div className="text-[12px] italic text-black">{author.location}</div>
          </div>
        ))}
      </div>
    </div>
  );
};