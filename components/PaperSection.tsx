import React from 'react';
import { Section } from '../types';

interface PaperSectionProps {
  section: Section;
}

export const PaperSection: React.FC<PaperSectionProps> = ({ section }) => {
  const renderContent = (content: string | string[]) => {
    if (Array.isArray(content)) {
      return content.map((paragraph, idx) => (
        <p key={idx} className="mb-2 text-justify indent-4 leading-snug text-black text-[13px]">
          {paragraph}
        </p>
      ));
    }
    return <p className="mb-2 text-justify indent-4 leading-snug text-black text-[13px]">{content}</p>;
  };

  return (
    <div className="mb-4 break-inside-avoid-column print-break-inside-avoid">
      {/* IEEE Header: Centered, Uppercase, Roman Numerals (handled in data) */}
      <h3 className="font-bold text-[13px] uppercase text-center mb-3 mt-4 tracking-wider text-black">
        {section.title}
      </h3>
      
      {section.content && <div className="mb-2">{renderContent(section.content)}</div>}

      {section.subsections && section.subsections.map((sub, idx) => (
        <div key={idx} className="mt-3 mb-2">
          {/* IEEE Subsection: Italic, Left Aligned */}
          <h4 className="italic text-[13px] text-black mb-1">
            {sub.title}
          </h4>
          <div>{renderContent(sub.content)}</div>
        </div>
      ))}

      {section.table && (
        <div className="mt-4 mb-4">
          {/* IEEE Table Caption would go here normally, e.g. TABLE I */}
           <div className="text-center text-[11px] uppercase font-bold mb-1">
            Table I: Challenges and Solutions
          </div>
          <table className="w-full text-[12px] text-left border-collapse">
            <thead>
              {/* IEEE Table: Double border top, single border bottom of header */}
              <tr className="border-t-2 border-b border-black">
                {section.table.headers.map((h, i) => (
                  <th key={i} className="px-2 py-1 italic font-normal text-center">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="border-b border-black">
              {section.table.rows.map((row, rIdx) => (
                <tr key={rIdx}>
                  {row.map((cell, cIdx) => (
                    <td key={cIdx} className="px-2 py-1 align-top first:font-normal">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};